Egret框架GUI教程 - 了解Egret的GUI库
===============

简介
-------------------------

本教程系列是Egret GUI的入门教程，假定您已经掌握了Egret的一些基本使用经验，比如显示对象，事件等等，如果您还不具备这些基础知识，建议先从[文档中心的基础教程](http://docs.egret-labs.org/home.html)学起。

很有意思的一点是，Egret无论是核心库，还是GUI库，都和Flash体系有着很相似的地方。如果您曾经做过Flash相关的开发，那么会对Egret提供的API感到非常的亲切。同样，如果您用过Flex框架，也会对Egret GUI体系不会感到陌生(其实Egret GUI的开发者，原先也是Flex开发者，对原Flex UI体系的优缺点非常熟悉，在精简和优化上也很有心得)。如果您没用过Flex框架，也没有关系，本教程系列将尽可能细致的讲解各个UI组件的用法，以及布局，数据整合等各个方面。

![github](https://raw.githubusercontent.com/NeoGuo/html5-documents/master/egret-gui/images/egret_gui_demo.jpg "Egret")

所谓的GUI的概念，可以理解为图形组件库。如果没有GUI库，您也可以实现一个完整的游戏，比如《围住神经猫》这样的，不过在实现某一个界面的时候，可能会麻烦一点，比如需要显示一个排行榜，而且是可以交互拖动的，您不得不花费大量时间，从显示对象开始来一步一步实现这样的功能。而GUI库的意义就在于此，可以为您节省大量的时间，让您更多的关注于自己的游戏本身，不被一些额外的细节所拖累。比如刚才所说的排行榜，您只需要使用GUI库中的List组件，指定数据源，定义一下数据项的展示方式即可。是不是非常简单？GUI中包含的组件，足以满足您大部分的组件需求，即使是需要定制，GUI中包含的优秀的设计理念，也会让您的定制工作非常的顺畅。

> 目前要使用GUI库的组件，暂且只能用代码的方式创建，未来Egret团队会推出一个可视化UI编辑器，叫做Egret Wing，这个可以堪称利器，有了它，妈妈就再也不担心UI不好做了。

安装
-------------------------

目前Egret核心库中已经包含了GUI的代码，是作为一个扩展放在src/extension/gui目录下，如图所示：

![github](https://raw.githubusercontent.com/NeoGuo/html5-documents/master/egret-gui/images/gui-core.png "Egret")

但这并不意味着您就可以直接使用，因为不同于核心库中普通的显示对象，GUI库中的组件大部分是需要配置皮肤的，而皮肤并没有包含在src/extension/gui目录下(这和GUI的设计理念有关，核心代码和皮肤是分离的)。没有皮肤的组件是显示不出来的，如果您不做配置，直接new一个RadioButton，放在stage上，是什么也看不到的。那么如何把皮肤引入进来呢？

在目前的Egret 1.0.4的版本中，尚未在模板中包含默认皮肤，所以您需要进入[egret-examples](https://github.com/egret-labs/egret-examples)这个项目，下载下来，然后把下列所需的文件，拷贝到您自己的项目里：

1. 进入[GUIExample的资源目录](https://github.com/egret-labs/egret-examples/tree/master/GUIExample/resource)，把newAsset目录和resource.json，都拷贝您自己项目的resource目录下。如果您已经定义了自己的resource.json，那可以把GUIExample的那个resource.json改名，比如叫做resourcegui.json，然后在您的项目中，用RES再加载一遍。

2. 然后进入[GUIExample/src](https://github.com/egret-labs/egret-examples/tree/master/GUIExample/src)，把skins目录，和AssetAdapter.ts，SkinAdapter.ts两个文件一起，都拷贝到您自己项目的src目录下面。

3. 在您的入口类，比如默认的GameApp.ts中，注入解析器，可以把注入代码放置在onAddToStage方法中，比如(注意其中的mapClass语句)：

```
private onAddToStage(event:egret.Event){
    //设置加载进度界面
    this.loadingView  = new LoadingUI();
    this.stage.addChild(this.loadingView);
    //注入自定义的素材解析器
    egret.Injector.mapClass("egret.gui.IAssetAdapter",AssetAdapter);
    //注入自定义的皮肤解析器
    egret.Injector.mapClass("egret.gui.ISkinAdapter",SkinAdapter);
    //初始化Resource资源加载库
    RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE,this.onConfigComplete,this);
    RES.loadConfig("resource/resource.json","resource/");
}
```

通过上面的操作，您就可以在项目中使用GUI的组件了。欢迎您开始Egret GUI之旅！

> 注意：从Egret 1.0.4版本开始，采用了模块化编译，如果您要使用GUI，请确保项目的egretProperties.json中的modules节点，包含了"name":"gui"。如果发现旧项目有问题，请执行以下步骤：
> 1. 更新Egret核心库，重新执行npm install -g进行安装
> 2. 对当前项目，执行egret upgrade进行升级
> 3. 执行egret build -e重新编译引擎代码

参考资料
-------------------------

最后建议您阅读下面的参考资料，由Egret GUI作者撰写，深入剖析了Egret GUI的底层机制，刚开始看不太懂也没关系，可以先有个粗略的印象，后面使用Egret GUI的时候，碰到一些具体的问题，再回想这些文章，应该会让您有"顿悟"的感觉。

* [深入浅出EGRET GUI (一):皮肤分离机制](http://bbs.egret-labs.org/forum.php?mod=viewthread&tid=43)
* [深入浅出EGRET GUI (二):失效验证机制](http://bbs.egret-labs.org/forum.php?mod=viewthread&tid=73)
* [深入浅出EGRET GUI (三):AFL自适应流式布局](http://bbs.egret-labs.org/forum.php?mod=viewthread&tid=102&highlight=gui)