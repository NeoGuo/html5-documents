Egret框架GUI教程 - 自定义皮肤
===============

自定义皮肤，您可以选择两种方式，一种是通过EXML编写，一种是通过TypeScript编写。使用EXML的方式，结构清晰，易于理解，代码量小，是推荐您优先选择的方式。由于在前面的章节中一直采取EXML的皮肤定义方式，这里我们重点讲解一下，如果需要使用TypeScript定制皮肤，应该怎么做。

TypeScript皮肤
---------------------

虽然EXML非常好用，但是不排除在一些特殊情况下，您还是会选择使用TypeScript来编写皮肤。比如皮肤中还需要处理一些跟显示相关的逻辑(举例：需要graphics绘制一些复杂图形)，是标签这样的语言无法解决的，只能求助于TypeScript了。

使用TypeScript编写皮肤，需要注意以下几个方面：

* 您的皮肤需要继承egret.gui.Skin
* 必须有名称为skinParts的数组定义，public的，包含皮肤应具备的皮肤部件
* 至于皮肤需要实现哪些皮肤部件，则跟皮肤对应的组件有关，比如按钮必须有labelDisplay，容器必须有contentGroup等等
* 皮肤部件的创建代码，建议放在覆盖的createChildren方法中执行
* 如果皮肤有状态，并且需要根据状态做调整，可以覆盖commitCurrentState方法
* 如果在显示上还有特殊逻辑，可以覆盖updateDisplayList方法

比如我们在SkinnableContainer的章节中，编写过一个显示背景的皮肤：

```
module uiskins
{
    export class BackgroundSkinT extends egret.gui.Skin
    {
        private bg:egret.gui.UIAsset;
        /**和组件中的定义相对应，确定皮肤应该具备哪些部件*/
        public skinParts:Array<string> = ["contentGroup"];
        /**对于SkinnableContainer来说，contentGroup是必须有的*/
        public contentGroup:egret.gui.Group;
        //
        public constructor() {
            super();
        }
        public createChildren(): void {
            super.createChildren();
            this.states = ["normal","highlight"];
            this.bg = new egret.gui.UIAsset("app_egret_labs_jpg");
            this.bg.percentWidth = 100;//这个相当于HTML中的百分比，设置100就是100%的意思
            this.bg.percentHeight = 100;//宽和高都是100%，也就是充满整个空间咯(根据皮肤的尺寸)
            this.addElement(this.bg);
            //contentGroup必须有，否则你添加到SkinnableContainer的对象是显示不出来的
            this.contentGroup = new egret.gui.Group();
            this.addElement(this.contentGroup);
        }
        /**当状态改变时，背景和文本颜色也做相应的变化*/
        public commitCurrentState(): void {
            super.commitCurrentState();
            switch(this.currentState) {
                case "normal":
                    this.bg.source = "app_egret_labs_jpg";
                    break;
                case "highlight":
                    this.bg.source = "panel_back_png";
                    break;
            }
        }
    }
}
```

上面只是一个例子，不同组件的皮肤所需的皮肤部件各不相同，但基本步骤是差不多的，您可以举一反三，实现自己的TypeScript编写的皮肤。

工具
---------------------

逐行敲代码来编写皮肤，虽然看起来很酷，写起来却是很累的。如果有一个可视化工具来帮助我们制作皮肤，那实在是求之不得的好事。不过不必担心，或许很快您就可以“美梦成真”了。[Egret团队正在开发一款名为"Egret Wing"的工具](http://bbs.egret-labs.org/forum.php?mod=viewthread&tid=188&highlight=wing)，这可是制作GUI的神器哦。等这款工具推出后，后续的教程里，将会讲解如何结合Egret Wing来制作皮肤，敬请期待。

![github](https://raw.githubusercontent.com/NeoGuo/html5-documents/master/egret-gui/images/wing_logo.jpg "Egret")