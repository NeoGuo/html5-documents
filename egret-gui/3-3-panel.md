Egret框架GUI教程 - 面板
===============

面板也是个常用的容器，这种类型的组件在很多不同领域的UI库中都存在，也是开发者比较熟知的一种容器，它和Group的区别在于，您可以给它附加一个皮肤，并设置一个标题栏，实现类似下面的结构：

![github](https://raw.githubusercontent.com/NeoGuo/html5-documents/master/egret-gui/images/panel1.png "Egret")

在皮肤中，标题栏的位置由您自己决定，通过发挥您的想象力，可以得到各种奇异的"面板"效果，比如下图所示的：

![github](https://raw.githubusercontent.com/NeoGuo/html5-documents/master/egret-gui/images/panel2.png "Egret")

下面来看一下，如何为Panel制作一个皮肤。和上节的SkinnableContainer类似，Panel的皮肤也必须包含两个部件：titleDisplay和contentGroup，其中titleDisplay的类型是egret.gui.Label，作用是显示标题，contentGroup的作用则是承载添加到Panel的对象。

```
module uiskins
{
    export class PanelSkin extends egret.gui.Skin
    {
        /**背景图片*/
        private bg:egret.gui.UIAsset;
        /**和组件中的定义相对应，确定皮肤应该具备哪些部件*/
        public skinParts:Array<string> = ["titleDisplay","contentGroup"];
        /**用于显示标题*/
        public titleDisplay:egret.gui.Label;
        /**对于SkinnableContainer来说，contentGroup是必须有的*/
        public contentGroup:egret.gui.Group;

        public constructor() {
            super();
        }
        public createChildren(): void {
            super.createChildren();
            //这里借用一下Alert的背景先
            var bmp:egret.Bitmap = new egret.Bitmap(RES.getRes("alert-background"));
            this.bg = new egret.gui.UIAsset(bmp);
            this.bg.percentWidth = 100;//这个相当于HTML中的百分比，设置100就是100%的意思
            this.bg.percentHeight = 100;//宽和高都是100%，也就是充满整个空间咯(根据皮肤的尺寸)
            this.addElement(this.bg);
            //标题栏
            this.titleDisplay = new egret.gui.Label();
            this.titleDisplay.x = 20;
            this.titleDisplay.y = 16;
            this.titleDisplay.textColor = 0x000000;
            this.addElement(this.titleDisplay);
            //contentGroup必须有，否则你添加到Panel的对象是显示不出来的
            this.contentGroup = new egret.gui.Group();
            this.contentGroup.top = 64;
            this.contentGroup.bottom = 0;
            this.contentGroup.left = 0;
            this.contentGroup.right = 0;
            this.addElement(this.contentGroup);
        }
    }
}
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
            this.myPanel.skinName = uiskins.PanelSkin;
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