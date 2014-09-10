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

编写皮肤，您有两个选择：

* 使用EXML来编写皮肤
* 使用TypeScript来编写皮肤

使用EXML的方式，结构清晰，易于理解，代码量小，是推荐您优先选择的方式。

EXML皮肤简介
---------------------

您是否有写过HTML的经历？HTML是典型的文本标记语言，这种语言用在描述用户界面的领域，有得天独厚的优势。从组成结构的角度来说，这种语言的一个重要组成部分就是Tag，可以译为"标签"。想想HTML中都有什么标签？

```
<body>
<p>
<a>
<img>
```

很熟悉的标签吧。跟HTML类似，EXML也是一种遵循XML语法的标记语言(严格来说，HTML并不遵循严谨的XML语法，它允许一些不闭合的标签，而EXML则必须严格遵循XML语法)。EXML要描述一个界面，也是由若干个标签组成，只是这些标签是Egret框架特有的：

```
<e:Skin xmlns:e="http://ns.egret-labs.org/egret">
    <e:UIAsset />
    <e:Label />
    <e:Button />
    <e:List />
</e:Skin>
```
> 这里面用到了命名空间，Egret GUI为自己单独定义了命名空间，它的前缀是e，URI是```http://ns.egret-labs.org/egret```。在使用Egret GUI内置组件对应的标签时，都需要加上e这个前缀。

使用EXML添加一个标签，并且设置标签的属性，在编译的时候，就会把这些属性设置到生成的组件上，比如：

```
<e:UIAsset width="100%" height="100%" source="button_normal_png" />
```
> 这些属性必须跟组件的可定义属性相一致哦

上面的设置，等同于：

```
var loc1:egret.gui.UIAsset = new egret.gui.UIAsset();
loc1.percentWidth = 100;
loc1.percentHeight = 100;
loc1.source = "button_normal_png";
this.addElement(loc1);
```
> 在EXML中，width和height可以用定值，也可以用百分比，这个会在编译的时候做区分。如果您设置的是```width="100"```，那么对应的设置的属性就是部件的width，如果设置的是```width="100%"```，那么对应的设置的属性就是percentWidth。

那么都有哪些标签可以使用呢？您可以通过下面的方式，逐步了解常见标签的用法：

* 查看默认皮肤的源码，从这些默认皮肤的EXML代码中，您可以学习到很多用法和技巧。
* 使用EXML，可以借助.xsd文件来实现WebStorm的语法提示，这样写起来真是事半功倍。配置过程[参见这里](http://bbs.egret-labs.org/thread-155-1-1.html)，配置好以后，您在编写的时候就可以得到IDE的实时提示，有哪些标签和属性可用，自然也就一目了然了。

您或许还是感到一丝神秘，EXML最终是如何被使用的呢？是像JSON配置一样，运行时加载然后解析吗？答案是，EXML并不是在运行时使用的，它和TypeScript一样，只是作为开发语言，最终是需要编译为JS文件使用的。JS文件？是的，您没看错。EXML会被Egret内置的编译工具，转换为JS文件哦，就像把TypeScript文件转换为JS一样。

比如默认的按钮皮肤，```skins.simple.ButtonSkin.exml```，当项目被编译后，您进入bin-debug目录，就能找到src/skins/simple/ButtonSkin.js，这个js就是从ButtonSkin.exml转换过来的哦。神奇的编译器，把EXML的标签转换成了等效的JavaScript代码。您可以对比两个文件，就可以了解编译的细节。

编写一个EXML皮肤
-----------------------

回到这个例子中，我们来写一个自定义的皮肤类uiskins/BackgroundSkin.exml，这个皮肤类的作用是显示一个背景图片，它的代码如下：

```
<e:Skin xmlns:e="http://ns.egret-labs.org/egret" xmlns:w="http://ns.egret-labs.org/wing">
    <e:UIAsset id="bg" width="100%" height="100%"
               source="app_egret_labs_jpg" />
    <e:Group id="contentGroup" width="100%" height="100%" />
</e:Skin>
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
            this.myContainer.skinName = "uiskins.BackgroundSkin";
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

TypeScript皮肤
------------------------

为了便于理解，这里展示一下，刚才创建的BackgroundSkin.exml，如果换成对等的TypeScript来实现，应该是这样的：

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
        //
        public constructor() {
            super();
        }
        public createChildren(): void {
            super.createChildren();
            this.bg = new egret.gui.UIAsset("app_egret_labs_jpg");
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

可以看出实现同样的效果，EXML更简便。在之后的章节中，我们也统一使用EXML来创建皮肤，为了方便对比，源码会保留一份TypeScript的实现版本，供您参考。在自定义皮肤那一章，我们会拓展一下如何使用TypeScript创建皮肤。