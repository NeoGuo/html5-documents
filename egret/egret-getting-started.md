Egret框架入门第一步
===============

Egret框架很重要的一个特性就是，允许开发者使用[TypeScript](http://www.typescriptlang.org/)来开发应用或游戏（框架本身就是基于TypeScript编写），熟悉Flash/AS3开发的朋友，会很容易掌握TypeScript这个语言，再加上Egret框架的显示对象封装采用了和Flash的显示列表机制很相似的设计，Flash开发者用起来会非常舒心。

![github](https://raw.githubusercontent.com/NeoGuo/html5-documents/master/egret/images/egret-logo.png "Egret")

这篇教程将向您展示Egret框架的基本用法：

环境和软件要求:
----------------------------

####环境和工具
* Node.js和npm ([下载安装](http://www.nodejs.org/))
* TypeScript ([中文介绍](http://baike.baidu.com/view/9400999.htm))
* 一个HTTP服务器(比如Apache)

####IDE
* [WebStorm](http://www.jetbrains.com/webstorm/) (推荐) - 跨平台
* SublimeText(可选) - 跨平台
* VS2012 - 只支持Windows

安装和配置:
----------------------------

关于Node.js，npm，TypeScript的安装参见[WIKI](https://github.com/egret-team/egret/wiki)，这一步非常关键，请遵循步骤正确完成安装。

目前基于Egret框架的应用调试，必须基于一个HTTP服务器来进行，简言之，就是您需要在浏览器中用http://localhost/demo这样的形式来运行。如果您之前没有接触过本地Server调试，也不必太顾虑，配置过程相对还是简单的。不同的操作系统有不同的选择，如果您是Windows系统，可以用系统自带的IIS([配置教程](http://jingyan.baidu.com/article/b907e627e6abe646e7891c01.html))，或者在网上找一个Apache的集成安装包。如果您是Mac OS X系统，就更简单了，Mac OS X自带了Apache，可以参考[这篇教程](http://www.cnblogs.com/snandy/archive/2012/11/13/2765381.html)设置一下虚拟站点。

至于IDE，您可以根据自己的系统和个人喜好自由选择，本文将使用WebStorm 8.0来完成演示，这个工具在前端开发界有很高的声誉。

运行HelloWorld:
----------------------------

程序员的习惯是，学习一个框架从HelloWorld开始。这里也不免俗，先带您运行Egret框架的HelloWorld。

####下载和配置Egret

Egret是一个开源框架，托管在GitHub上，地址是：[github.com/egret-team/egret](https://github.com/egret-team/egret)，您可以通过Git客户端Clone到本地，或者直接下载ZIP包到本地解压。

然后请把WebServer指向您的工作目录，确保此目录可以被您的WebServer访问到，以下将使用{egret_workspace}代指您的工作目录。将刚才下载到的Egret源码放到{egret_workspace}下面，并确保文件夹名为egret(注意大小写)。

然后需要使用Egret框架内置的命令行工具来完成项目的创建和编译，这个工具叫做Egret Command Line Tools，简称Egret CLT。

首先需要使用npm来安装Egret CLT，命令如下：
```
$ cd {egret_workspace}
$ npm install egret/tools -g
```
> Mac OS用户请加上sudo来确保执行权限。

然后执行下面的命令来创建您的第一个Egret项目：
```
$ cd {egret_workspace} 
$ egret c HelloEgret
```
> 工作目录下的所有项目将公用同一个egret库。

然后执行成功后，您可以看到工作目录下多了HelloEgret这个项目。然后敲入下面的命令来编译：
```
$ egret b
```
> 如果发现运行时缺少文件，请检查config.local，是否包含了所有的路径。

执行完毕后，就可以运行HelloEgret项目，打开浏览器，输入站点目录下的/output/HelloEgret/launcher/index.html路径即可，比如：http://localhost/output/HelloEgret/launcher/index.html。顺利的话，您将会看到如下的画面：

![github](https://raw.githubusercontent.com/NeoGuo/html5-documents/master/egret/images/hello_egret.png "HelloEgret")

使用位图增加简单动画:
----------------------------

下面我们来改写一下HelloEgret项目，实现一个简单的位图动画。改写代码，我们需要一个IDE，这里使用WebStorm。打开WebStorm，创建一个项目，目录指向{egret_workspace} ，创建完成后，可以看到类似下面的结构：

![github](https://raw.githubusercontent.com/NeoGuo/html5-documents/master/egret/images/workspace.png "WorkSpace")

展开HelloEgret项目的src目录，您可以看见3个文件：game_file_list.js,GameApp.ts,GameUI.ts，3个文件的作用依次是：

* game_file_list.js - 包含您为项目编写的TypeScript文件编译所得的js文件，对项目的类文件进行增删改时，记得更新这个文件。
* GameApp.ts - 作为游戏的入口类，实现游戏逻辑
* GameUI.ts - 实现Loading效果

然后我们创建一个TypeScript类文件，命名为MyGame.ts，然后把下面的代码粘贴进去：

```
class MyGame {
    /**
     * 游戏启动后，会自动执行此方法
     */
    public startGame():void {
        //设置屏幕适配策略
        var container = new ns_egret.EqualToFrame();
        ns_egret.NetContext.context = new ns_egret.HTML5NetContext();
        ns_egret.ResourceLoader.prefix = "assets/480/";
        var content = ns_egret.Browser.getInstance().isMobile ? new ns_egret.FixedWidth() : new ns_egret.FixedSize(480, 800);
        var policy = new ns_egret.ResolutionPolicy(container, content);
        ns_egret.StageDelegate.getInstance().setDesignSize(480, 800, policy);
        //loading
        var loadingController = new ns_egret.LoadingController();
        loadingController.addResource("egret_icon.png", ns_egret.ResourceLoader.DATA_TYPE_IMAGE);
        loadingController.setLoadingView(new LoadingUI());
        loadingController.addEventListener(ns_egret.ResourceLoader.LOAD_COMPLETE, this.onResourceLoadComplete, this);
        loadingController.load();
    }
    /**
     * 资源加载完毕
     */
    private onResourceLoadComplete():void {
        
    }
}
//实例化入口类
var app = new MyGame();
```

在上面的代码中，startGame方法包含的基本都是每个项目都差不多的代码片段，定义屏幕适配策略，预加载所需的素材，其中的细节会在后续的教程中深入分析，这里不再叙述。在这里我们重点看资源加载完毕后，后续如何处理。在这个例子里，我们要完成的是，创建一个位图(纹理)，显示到屏幕上，并让它做一些动画。和在Flash中开发类似，首先您需要做的是变量定义，这里我们定义类的成员变量：

```
/**测试用位图*/
private sky:ns_egret.Bitmap;
```

然后我们在onResourceLoadComplete方法里，完成位图的创建和显示。代码如下：

```
private onResourceLoadComplete():void {
    var stage = ns_egret.MainContext.instance.stage;
    this.sky = new ns_egret.Bitmap();
    var texture:ns_egret.Texture = ns_egret.TextureCache.getInstance().getTexture("egret_icon.png");
    this.sky.texture = texture;
    stage.addChild(this.sky);
}
```
> 注意egret_icon.png我们已经在startGame方法中预加载了，所以这里可以从TextureCache获取。
> 另外务必注意this关键词不可以省略，这是和Flash不一样的地方，在Flash中我们允许省略this关键词。

然后我们使用Tween来让sky这个位图做一些运动，并将运动实现封装在一个方法内部，代码如下：

```
private startAnimation():void {
    var tw = ns_egret.Tween.get(this.sky);
    tw.to({x:280,y:0},500).to({x:280,y:300},500).to({x:0,y:300},500).to({x:0,y:0},500);
    tw.call(this.startAnimation, this);
}
```

上面的代码可能初看有些费解，但您只要了解Tween的特性，就容易理解这些代码。Tween的执行是串行的，方法执行后，返回自身，这样4个to相连，其实就是依次执行4次to方法。留意坐标您会发现，这个动画过程就是让位图先运动到右上角，然后到右下角，左下角，最终回到原点。最后又调用了一次call，含义是动画完成后，调用startAnimation方法。是不是明白了，其实就是产生循环调用的结果，动画会一直执行下去。

改写onResourceLoadComplete方法，增加```this.startAnimation()```调用，这样当资源加载完毕，对象创建成功后，就开始执行动画。

MyGame.ts的完整代码如下：

```
class MyGame {

    /**测试用位图*/
    private sky:ns_egret.Bitmap;
    /**
     * 游戏启动后，会自动执行此方法
     */
    public startGame():void {
        //设置屏幕适配策略
        var container = new ns_egret.EqualToFrame();
        ns_egret.NetContext.context = new ns_egret.HTML5NetContext();
        ns_egret.ResourceLoader.prefix = "assets/480/";
        var content = ns_egret.Browser.getInstance().isMobile ? new ns_egret.FixedWidth() : new ns_egret.FixedSize(480, 800);
        var policy = new ns_egret.ResolutionPolicy(container, content);
        ns_egret.StageDelegate.getInstance().setDesignSize(480, 800, policy);
        //loading
        var loadingController = new ns_egret.LoadingController();
        loadingController.addResource("egret_icon.png", ns_egret.ResourceLoader.DATA_TYPE_IMAGE);
        loadingController.setLoadingView(new LoadingUI());
        loadingController.addEventListener(ns_egret.ResourceLoader.LOAD_COMPLETE, this.onResourceLoadComplete, this);
        loadingController.load();
    }
    /**
     * 资源加载完毕后，创建测试位图，开始运动
     */
    private onResourceLoadComplete():void {
        var stage = ns_egret.MainContext.instance.stage;
        this.sky = new ns_egret.Bitmap();
        var texture:ns_egret.Texture = ns_egret.TextureCache.getInstance().getTexture("egret_icon.png");
        this.sky.texture = texture;
        stage.addChild(this.sky);
        this.startAnimation();
    }
    /**
     * 使用Tween完成往返运动
     */
    private startAnimation():void {
        var tw = ns_egret.Tween.get(this.sky);
        tw.to({x:280,y:0},500).to({x:280,y:300},500).to({x:0,y:300},500).to({x:0,y:0},500);
        tw.call(this.startAnimation, this);
    }
}
//实例化入口类
var app = new MyGame();
```

这里我们就是把MyGame作为了游戏的入口类，所以需要修改game_file_list.js
```
var game_file_list = [
    "MyGame.js",
    "GameUI.js"
]
```

最后使用命令行编译项目：
```
$ egret b -g HelloEgret
```

打开浏览器观看最终结果，可以看到一个简单的位图动画：

![github](https://raw.githubusercontent.com/NeoGuo/html5-documents/master/egret/images/egret_animation.gif "EgretAnimation")

(未完待续...)