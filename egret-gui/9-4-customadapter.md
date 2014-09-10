Egret框架GUI教程 - 巧用EXML和AssetAdapter
===============

我们创建一个AssetButton类，继承egret.gui.Button，里面可接受3个参数，分别对应按钮3个状态所需的素材名称：

```
module uicomp
{
    export class AssetButton extends egret.gui.Button
    {
        public upAssetName:any;
        public downAssetName:any;
        public disabledAssetName:any;
		/**3个参数，分别对应按钮3个状态所需的素材名称*/
        public constructor(upAssetName?:any,downAssetName?:any,disabledAssetName?:any) {
            super();
            this.upAssetName = upAssetName;
            this.downAssetName = downAssetName;
            this.disabledAssetName = disabledAssetName;
            this.skinName = "uiskins.AssetButtonSkin";
        }
    }
}
```

然后我们在这个按钮的皮肤，即```uiskins/AssetButtonSkin.exml```里面，为素材的引用加上特殊标记：

```
<e:Skin xmlns:e="http://ns.egret-labs.org/egret" xmlns:w="http://ns.egret-labs.org/wing"
        height="60" minWidth="140">
    <w:HostComponent name="egret.Button" />
    <e:states>
        <e:State name="up" />
        <e:State name="down" />
        <e:State name="disabled" />
    </e:states>
    <e:UIAsset width="100%" height="100%" source="$upAssetName"
               source.down="$downAssetName" source.disabled="$disabledAssetName" />
    <e:Label id="labelDisplay" size="20" verticalAlign="middle"
             textAlign="center" fontFamily="Tahoma" textColor.up="0xffffff"
             textColor.down="0x222222" textColor.disabled="0xcccccc" left="10"
             right="10" top="8" bottom="12" />
</e:Skin>
```

注意我们在UIAsset的source属性上，配置的是```$upAssetName```，这个相当于我们自己做的特殊标记，Egret GUI自然是无法识别的，这样直接去运行的话，它还是和之前一样按普通字符串处理，您只能得到404错误。如何能让资源解析识别到这是一个特殊配置呢？我们只需要稍微修改一下AssetUdapter就行了。打开您项目下面的AssetAdaper.ts，修改getAsset方法：

```
public getAsset(source:any,compFunc:Function,thisObject:any,oldContent:any):void{
    function onGetRes(data:any):void{
        compFunc.call(thisObject,data,source);
    }
    function getHostComponent(obj:any):any{
        if(obj instanceof egret.gui.Skin) {
            return obj["hostComponent"];
        } else {
            return obj.parent;
        }
    }
    var content:any = source;
    if(source.prototype){
        content = new source();
    }
    if(content instanceof egret.DisplayObject||content instanceof egret.Texture){
        compFunc.call(thisObject,content,source);
    }
    else if(typeof(source)=="string"){
    	/*修改的部分在这里*/
        var sourceStr:string = source;
        if(sourceStr.charAt(0)=="$") {
            var keyName:string = sourceStr.replace("$","");
            var hostComp:any = getHostComponent(thisObject);
            var keyValue:any = hostComp[keyName];
            sourceStr = keyValue+"";
        }
        if(RES.hasRes(sourceStr)){
            RES.getResAsync(sourceStr,onGetRes,this);
        }else{
            RES.getResByUrl(sourceStr,onGetRes,this);
        }
    }
    else{
        compFunc.call(thisObject,content,source);
    }
}
```

可以看到，在上面的修改中，我们判断了字符串里面含有"$"的情况，如果识别到这种情况，就去取皮肤对应的组件上相应的值，然后再获取素材。

测试代码：

```
//普通按钮
var btn1:egret.gui.Button = new egret.gui.Button();
btn1.label = "Default Button";
btn1.width = 200;
btn1.height = 80;
this.addElement(btn1);
//自定义按钮
var btn2:uicomp.AssetButton = new uicomp.AssetButton("app_egret_labs_jpg","button_down_png","button_disabled_png");
btn2.label = "Asset Button";
btn2.width = 200;
btn2.height = 80;
btn2.y = 100;
this.addElement(btn2);
```

效果：

![github](https://raw.githubusercontent.com/NeoGuo/html5-documents/master/egret-gui/images/statebtn1.png "Egret")

这种方式可以部分皮肤重用的问题，但也有两个缺点：

1. 配置的素材只是在按钮创建时获取，您无法在运行时修改某个状态对应的素材
2. 需要修改AssetAdaper，一旦这个类官方有升级，您需要自己处理合并，避免引发错误