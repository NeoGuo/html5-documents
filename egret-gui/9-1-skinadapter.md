Egret框架GUI教程 - 主题和皮肤适配
===============

默认主题
------------------------

除了分离皮肤，Egret GUI还提供了"主题"的概念。所谓主题，是一组皮肤的集合。在[Egret GUI的官方演示项目](https://github.com/egret-labs/egret-examples/tree/master/GUIExample)中，提供了两套主题：

* simple主题 色调偏灰
* ocean主题 色调偏蓝

> 您通过--type gui参数创建的项目，实际上用的是simple主题

两套主题的皮肤(以及素材)被分别放置在不同的目录下，方便区分和调用。每套主题都需要包含一个名称类似*.thm的文件，这实际上是一个JSON格式的配置文件，用于定义组件和皮肤之间的映射关系，这样当设置主题之后，您的组件就可以根据这个配置文件，获取默认的皮肤。

比如我们打开theme_simple.thm文件，看到如下的代码(截取的片段)：

```
{
"skins":
	{
	"egret.gui.TitleWindow":"skins.simple.TitleWindowSkin",
	"egret.gui.Panel":"skins.simple.PanelSkin",
	"egret.gui.Button":"skins.simple.ButtonSkin"
	}
}
```
> 如果您自定义了组件，需要映射自定义皮肤，或者是内置组件需要更换自定义皮肤，都可以修改这个配置文件，实现映射

映射所需的key，可以是两种格式：1是组件的类名称，2是自定义的hostComponentKey(实际上在引擎内部，Egret GUI的组件也是将hostComponentKey设置为自己的类名称字符串)。假如您有一个List组件，需要使用一个特殊皮肤，来代替默认皮肤，那您可以这样设置：

```
var list:egret.gui.List = new egret.gui.List();
list.hostComponentKey = "CustomList";
```

主题配置文件中：

```
{
"skins":
	{
	"egret.gui.List":"skins.simple.ListSkin",
	"CustomList":"skins.simple.CustomListSkin"
	}
}
```

假如您要使用"simple"主题，就需要使用egret.gui.Theme类，加载该主题的配置文件：

```
egret.gui.Theme.load("resource/theme/theme_simple.thm");//主题配置文件
RES.loadConfig("resource/config/resource_simple.json");//主题对应的素材配置文件
```

在Theme类中，是通过getDefaultSkin方法实现皮肤映射的，但对开发者而言基本不用接触这个方法。如果您有特殊的需求需要自己实现皮肤解析规则，可以通过注入一个SkinAdapter来实现。Theme的这个方法只是在SkinAdapter没有返回结果的时候才会被调用。

```
egret.Injector.mapClass("egret.gui.ISkinAdapter",MySkinAdapter);
```

当加载完成，您可以创建组件，并应用配置的皮肤了。

自定义主题
------------------------

在很多情况下，即便默认主题做的很漂亮，我们也还是需要根据自己游戏的设计风格，做一套自己的主题。那么自定义主题的制作过程，应该是类似下面这样的：

1. 首先先把设计师的图切出来，可以做成分散的图，也可以做成SpriteSheet，视自己情况而定，放到单独的目录里，尽量不要和默认主题的素材混在一起
2. 制作素材的配置文件，即resource.json，这个可以借助Egret提供的[资源配置工具](http://www.egret-labs.org/download/restool-download.html)来完成
3. 定义皮肤文件，如果只是改素材，那就把默认的皮肤(大多是exml文件)拷贝过去，改改里面的资源引用就行了；如果要在皮肤中增加功能，可以在拷贝过去的默认的皮肤上改，也可以自己编写。
4. 定义主题配置文件，参考默认主题配置文件，新建一个自己的主题配置，写好映射关系
5. 运行项目，实际测试

> 皮肤的制作，将在Egret未来的GUI工具中提供可视化支持，目前尚未推出，敬请期待