Egret框架入门第一步 - 纹理和位图
===============

在上一篇教程我们创建和运行了Hello World，下面我们以这个项目为基础做“深加工”，逐步了解Egret框架的各个组成部分。

使用位图:
----------------------------

我们来改写一下HelloEgret项目，显示一个简单的位图。改写代码，我们需要一个IDE，这里使用WebStorm。打开WebStorm，创建一个项目，目录指向{egret_workspace} ，创建完成后，可以看到类似下面的结构：

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

简单动画:
----------------------------

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

[上一篇:Hello World](https://github.com/NeoGuo/html5-documents/blob/master/egret/01-hello-world.md)
| [下一篇:xxx](https://github.com/NeoGuo/html5-documents/blob/master/egret/03-xxx.md)
