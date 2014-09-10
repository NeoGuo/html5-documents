Egret框架GUI教程 - 自定义皮肤举例
===============

在项目开发中，有时需要把组件的皮肤部件，做成可配置的，这样我们就可以通过"同一个组件类+同一个皮肤类"，配合不同的参数值，实现不同的显示效果。这样就避免了我们为每一个"显示效果不一样"的组件都作出单独的皮肤类，这显然是没有必要的。

举个例子，在一个界面上我们要放10个按钮，每个按钮的显示图片都是不一样的，但逻辑上没有区别。我们需要做10套按钮皮肤吗？当然是不需要的，有一些技巧让我们解决这个问题。

巧用EXML和AssetAdapter
------------------------

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

下面来看一个适应性更好的解决方案：

StateButton的实现
------------------------

创建一个StateButton类，仍然扩展egret.gui.Button类：

```
module uicomp
{
    export class StateButton extends egret.gui.Button
    {
        private _upSkinName:any;
        private _downSkinName:any;
        private _disabledSkinName:any;

        public upSkin:egret.gui.UIAsset;
        public downSkin:egret.gui.UIAsset;
        public disabledSkin:egret.gui.UIAsset;

        public constructor(upSkinName?:any,downSkinName?:any,disabledSkinName?:any) {
            super();
            this.skinName = "uiskins.StateButtonSkin";
            this._upSkinName = upSkinName;
            this._downSkinName = downSkinName;
            this._disabledSkinName = disabledSkinName;
        }

        public get upSkinName():any{
            return this._upSkinName;
        }
        public set upSkinName(value:any){
            if(value==this._upSkinName)
                return;
            this._upSkinName = value;
            if(this.upSkin){
                this.upSkin.source = value;
            }
        }

        public get downSkinName():any{
            return this._downSkinName;
        }
        public set downSkinName(value:any){
            if(value==this._downSkinName)
                return;
            this._downSkinName = value;
            if(this.downSkin){
                this.downSkin.source = value;
            }
        }

        public get disabledSkinName():any{
            return this._disabledSkinName;
        }
        public set disabledSkinName(value:any){
            if(value==this._disabledSkinName)
                return;
            this._disabledSkinName = value;
            if(this.disabledSkin){
                this.disabledSkin.source = value;
            }
        }

        public partAdded(partName:string, instance:any):void{
            super.partAdded(partName, instance);
            if (instance == this.upSkin){
                this.upSkin.source = this._upSkinName;
            }
            else if(instance==this.downSkin){
                this.downSkin.source = this._downSkinName;
            }
            else if(instance==this.disabledSkin){
                this.disabledSkin.source = this._disabledSkinName;
            }
        }
    }
}
```

上面的这个类中，主要做了以下几方面的工作：

* 设置upSkinName,downSkinName,disabledSkinName3个参数，既可以在构造函数中传入，也可以单独通过属性设置
* 与3个参数相对应，有3个UIAsset的实例(upSkin,downSkin,disabledSkin)，这3个实例的source将分别取对应的3个name的值
* 因为设置了setter，所以您也可以运行时替换某个状态的素材
* 在重写的partAdded方法中，对3个UIAsset的实例的source进行初始化

然后我们还是用EXML来为StateButton定制一个皮肤(uiskins/StateButtonSkin.exml)：

```
<e:Skin xmlns:e="http://ns.egret-labs.org/egret" xmlns:w="http://ns.egret-labs.org/wing"
        height="60" minWidth="140">
    <w:HostComponent name="uicomp.StateButton" />
    <e:states>
        <e:State name="up" />
        <e:State name="down" />
        <e:State name="disabled" />
    </e:states>
    <e:UIAsset id="upSkin" width="100%" height="100%" includeIn="up"/>
    <e:UIAsset id="downSkin" width="100%" height="100%" includeIn="down"/>
    <e:UIAsset id="disabledSkin" width="100%" height="100%" includeIn="disabled"/>
    <e:Label id="labelDisplay" size="20" verticalAlign="middle"
             textAlign="center" textColor.up="0xffffff"
             textColor.down="0xf0f0f0" textColor.disabled="0xdfe6e9" left="10"
             right="10" top="8" bottom="12" />
</e:Skin>
```

可以看到，我们在皮肤中放置了3个UIAsset标签，和StateButton中的定义相对应。然后通过```includeIn```属性，控制3个UIAsset实例在不同状态下的可见性。

测试：

```
//自定义按钮
this.stateBtn = new uicomp.StateButton("app_egret_labs_jpg","button_down_png","app_egret_labs_jpg");
this.stateBtn.width = 200;
this.stateBtn.height = 80;
this.stateBtn.y = 200;
this.addElement(this.stateBtn);
//check
var cbx:egret.gui.CheckBox = new egret.gui.CheckBox();
cbx.y = 300;
cbx.addEventListener(egret.Event.CHANGE,this.changeSkinHandler,this);
this.addElement(cbx);

private changeSkinHandler(evt:egret.Event):void {
    this.stateBtn.upSkinName = evt.target.selected?"button_normal_png":"app_egret_labs_jpg";
}
```

效果：

![github](https://raw.githubusercontent.com/NeoGuo/html5-documents/master/egret-gui/images/statebtn2.png "Egret") -> ![github](https://raw.githubusercontent.com/NeoGuo/html5-documents/master/egret-gui/images/statebtn3.png "Egret")