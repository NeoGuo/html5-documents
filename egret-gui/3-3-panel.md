Egret框架GUI教程 - 面板
===============

面板也是个常用的容器，这种类型的组件在很多不同领域的UI库中都存在，也是开发者比较熟知的一种容器，它和Group的区别在于，您可以给它附加一个皮肤，并设置一个标题栏，实现类似下面的结构：

![github](https://raw.githubusercontent.com/NeoGuo/html5-documents/master/egret-gui/images/panel1.png "Egret")

在皮肤中，标题栏的位置由您自己决定，通过发挥您的想象力，可以得到各种奇异的"面板"效果，比如下图所示的：

![github](https://raw.githubusercontent.com/NeoGuo/html5-documents/master/egret-gui/images/panel2.png "Egret")

下面来看一下，如何为Panel制作一个皮肤。和上节的SkinnableContainer类似，Panel的皮肤也必须包含两个部件：titleDisplay和contentGroup，其中titleDisplay的类型是egret.gui.Label，作用是显示标题，contentGroup的作用则是承载添加到Panel的对象。

```
<e:Skin xmlns:e="http://ns.egret-labs.org/egret" xmlns:w="http://ns.egret-labs.org/wing"
        minHeight="230" minWidth="470" maxWidth="710">
    <e:UIAsset width="100%" height="100%" source="panel_back_png" />
    <e:Label id="titleDisplay" fontFamily="Tahoma" size="26"
             textColor="0x727070" maxDisplayedLines="1" 
             left="20" right="20" top="16"
             minHeight="28" textAlign="center" />
    <e:Group width="100%" bottom="0"  top="64" id="contentGroup" />
</e:Skin>
```

有了皮肤，我们就可以创建一个Panel并把它显示出来了：

```
module uidemo
{
    export class PanelDemo extends egret.gui.Group
    {
        private myPanel:egret.gui.Panel;
        public constructor() {
            super();
        }
        public createChildren(): void {
            super.createChildren();
            //创建Group
            this.myPanel = new egret.gui.Panel();
            this.myPanel.skinName = "uiskins.PanelSkin";
            this.myPanel.title = "My Panel";
            this.myPanel.x = 40;
            this.myPanel.y = 40;
            this.myPanel.width = 400;
            this.myPanel.height = 300;
            this.addElement(this.myPanel);
            this.myPanel.validateNow();
            //内部对象
            var btn:egret.gui.Button = new egret.gui.Button();
            btn.label = "Button";
            btn.horizontalCenter = 0;
            btn.verticalCenter = 0;
            this.myPanel.addElement(btn);
        }

    }
}
```

显示效果：

![github](https://raw.githubusercontent.com/NeoGuo/html5-documents/master/egret-gui/images/panel3.png "Egret")