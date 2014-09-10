Egret框架GUI教程 - 自定义皮肤
===============

自定义皮肤，您可以选择两种方式，一种是通过TypeScript编写，一种是通过EXML编写。使用EXML的方式，结构清晰，易于理解，代码量小，是推荐您优先选择的方式。

EXML皮肤
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

比如默认的按钮皮肤，```skins.simple.ButtonSkin.exml```，当项目被编译后，您进入bin-debug目录，就能找到src/skins/simple/ButtonSkin.js，这个js就是从ButtonSkin.exml转换过来的哦。神奇的编译器，把EXML的标签转换成了等效的JavaScript代码。

至于转换的细节，您可以对比两个文件，应该就明白了。


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
    export class BackgroundSkin extends egret.gui.Skin
    {
        private bg:egret.gui.UIAsset;
        /**和组件中的定义相对应，确定皮肤应该具备哪些皮肤部件*/
        public skinParts:Array<string> = ["contentGroup"];
        /**对于SkinnableContainer来说，contentGroup是必须有的*/
        public contentGroup:egret.gui.Group;
        /**构造函数*/
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

其中的细节，在之前的章节中我们已经做了说明，这里就不再细述了。

工具
---------------------

逐行敲代码来编写皮肤，虽然看起来很酷，写起来却是很累的。如果有一个可视化工具来帮助我们制作皮肤，那实在是求之不得的好事。不过不必担心，或许很快您就可以“美梦成真”了。[Egret团队正在开发一款名为"Egret Wing"的工具](http://bbs.egret-labs.org/forum.php?mod=viewthread&tid=188&highlight=wing)，这可是制作GUI的神器哦。等这款工具推出后，后续的教程里，将会讲解如何结合Egret Wing来制作皮肤，敬请期待。

![github](https://raw.githubusercontent.com/NeoGuo/html5-documents/master/egret-gui/images/wing_logo.jpg "Egret")