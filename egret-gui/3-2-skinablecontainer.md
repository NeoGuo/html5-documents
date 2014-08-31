Egret框架GUI教程 - 可定义皮肤的容器
===============

在上节我们介绍了不可定义皮肤的容器Group，那么相对应的，GUI中还有一个可定义皮肤的容器，就是SkinnableContainer。它的基本用法和Group是一致的，我们来看看如何为它添加一个皮肤：

```
this.myContainer = new egret.gui.SkinnableContainer();
this.myContainer.skinName = uiskins.BackgroundSkin;//设置皮肤
this.myContainer.width = 300;
this.myContainer.height = 300;
this.addElement(this.myContainer);
```

注意其中的第二行，这是和Group不同的地方，我们把一个自定义皮肤类，赋值给skinName。这样SkinnableContainer就会根据传入的类定义，创建一个皮肤实例，并判断这个实例是否是显示对象，如果是，则把皮肤实例添加到容器的显示列表上，如果不是，则把皮肤所包含的显示对象添加到容器的显示列表上(egret.Skin是继承自EventDispatcher的，也就是说，Skin不一定是显示对象)。

我们来写一个自定义的皮肤类uiskins.BackgroundSkin，这个皮肤类的作用是显示一个背景图片，它的代码如下：

```
module uiskins
{
    export class BackgroundSkin extends egret.gui.Skin
    {
        private bg:egret.gui.UIAsset;
        /**和组件中的定义相对应，确定皮肤应该具备哪些部件*/
        public skinParts:Array<string> = ["contentGroup"];
        /**对于SkinnableContainer来说，contentGroup是必须有的*/
        public contentGroup:egret.gui.Group;
		/**constructor*/
        public constructor() {
            super();
        }
        public createChildren(): void {
            super.createChildren();
            var bmp:egret.Bitmap = new egret.Bitmap(RES.getRes("app_egret_labs_jpg"));
            this.bg = new egret.gui.UIAsset(bmp);
            this.bg.percentWidth = 100;//这个相当于HTML中的百分比，设置100就是100%的意思
            this.bg.percentHeight = 100;//宽和高都是100%，也就是充满整个空间咯(根据皮肤的尺寸)
            this.addElement(this.bg);
            //contentGroup必须有，否则你添加到SkinnableContainer的对象是显示不出来的
            this.contentGroup = new egret.gui.Group();
            this.addElement(this.contentGroup);
        }
    }
}
```

在上面的皮肤实现中，有几个需要注意的地方：

1.对于可定义皮肤的容器，它的皮肤中[必须包含contentGroup属性](http://bbs.egret-labs.org/thread-43-1-1.html)，并且应该为这个属性指定一个egret.gui.Group的实例。这是因为，对于SkinnableContainer来说，您调用addElement添加的对象，都会被添加到名字是contentGroup的那个容器中。同理，关键词包含"Element"的那组方法，也全部被覆盖，关联到这个contentGroup上，防止混淆和错误。

比如，您在创建SkinnableContainer之后，为它添加一个按钮：

```
var btn:egret.gui.Button = new egret.gui.Button();
btn.label = "Button";
this.myContainer.addElement(btn);
```

那么，实际上这个按钮就被添加到了SkinnableContainer的皮肤实例的contentGroup里面。示意图：

![github](https://raw.githubusercontent.com/NeoGuo/html5-documents/master/egret-gui/images/skinnable1.png "Egret")

2.contentGroup必须包含在一个名为skinParts的数组中，这样才能让容器(这里是SkinnableContainer)知道皮肤有哪些部件。如果使用EXML文件来编写皮肤，是不用手动写这个属性的。EXML格式将会在后续教程中介绍。

3.容器中的对象，可以用percentWidth,percentHeight来实现类似于HTML中百分比的尺寸设置方式。这样无论组件尺寸是多大，对象都可以根据组件的尺寸来改变自身的尺寸。

关于SkinnableContainer创建方式的完整代码如下：

```
module uidemo
{
    export class SkinnableContainerDemo extends egret.gui.Group
    {
        private myContainer:egret.gui.SkinnableContainer;
        public constructor() {
            super();
        }
        public createChildren(): void {
            super.createChildren();
            //创建Group
            this.myContainer = new egret.gui.SkinnableContainer();
            this.myContainer.skinName = uiskins.BackgroundSkin;
            this.myContainer.width = 300;
            this.myContainer.height = 300;
            this.addElement(this.myContainer);
            this.myContainer.validateNow();
            //内部对象
            var btn:egret.gui.Button = new egret.gui.Button();
            btn.label = "Button";
            this.myContainer.addElement(btn);
        }

    }
}
```

实现效果：

![github](https://raw.githubusercontent.com/NeoGuo/html5-documents/master/egret-gui/images/skinnable2.png "Egret")

这个例子里面，只是放了个背景图片，实际上您可以根据自己的需要，实现任意的效果，这也体现了GUI的皮肤设计理念的强大之处。