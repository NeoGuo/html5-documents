Egret框架GUI教程 - 自定义组件举例
===============

在项目开发中，通常我们应该为每种不同外观的组件都制作独立的皮肤，然后在多个组件实例上复用它。但是某些特殊情况下，我们做的皮肤可能并没有复用性，例如几百个图标按钮，每个按钮都有自己的弹起和按下状态，且每个按钮都只被使用一次。这中情况下如果为每种按钮都制作一个单独的皮肤肯定是不合适的。这种需求实际上是通过扩展逻辑组件功能来实现的。接下来我们来看一个自定义组件的例子，通过一个自定义组件+一个通用皮肤，来实现几百个不同外观的按钮。

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

假如您要在其他组件的EXML皮肤中，使用自定义的StateButton，那也是很简单的，只要注意下命名空间的处理就可以了：

```
<e:Skin xmlns:e="http://ns.egret-labs.org/egret"
        xmlns:w="http://ns.egret-labs.org/wing"
        xmlns:comps="uicomp.*">
    <w:HostComponent name="egret.gui.Panel" />
    <e:states>
        <e:State name="normal" />
        <e:State name="disabled" />
    </e:states>
    <comps:StateButton upSkinName="button_up" downSkinName="button_down" disabledSkinName="button_disabled"/>
</e:Skin>
```

在EXML中，您的自定义组件需要使用自定义的命名空间，规则是URI要使用"模块名称+点+星号"，比如我们上面编写的StateButton的类定义是uicomp.StateButton，则命名空间定义为：

```
xmlns:comps="uicomp.*"
```
> 注意comps是命名空间前缀，您可以自己决定用什么字符串，比如叫MySpace什么的都行，但要和下文的使用相对应。另外要注意，TypeScript中的模块名称和文件夹路径是无关的，所以这里一定要写模块名称，而不是写文件夹路径哦。

如果没有模块名称，则可以直接写*

```
xmlns:comps="*"
```

```
<comps:StateButton ...
```