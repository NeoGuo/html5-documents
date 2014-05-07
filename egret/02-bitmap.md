Egret框架入门第一步 - 纹理和位图
===============

在上一篇教程我们创建和运行了Hello World，下面我们以这个项目为基础做“深加工”，逐步了解Egret框架的各个组成部分。

创建自己的类:
----------------------------

我们来改写一下HelloEgret项目，融入我们自己的代码。请使用您自己钟爱的开发工具，这里使用WebStorm。打开WebStorm，创建一个项目，目录指向{egret_workspace} ，创建完成后，可以看到类似下面的结构：

![github](https://raw.githubusercontent.com/NeoGuo/html5-documents/master/egret/images/workspace.png "WorkSpace")

展开HelloEgret项目的src目录，您可以看见3个文件：game_file_list.js,GameApp.ts,GameUI.ts，3个文件的作用依次是：

* game_file_list.js - 包含您为项目编写的TypeScript文件编译所得的js文件，对项目的类文件进行增删改时，记得更新这个文件。
* GameApp.ts - 作为游戏的入口类，实现游戏逻辑
* GameUI.ts - 实现Loading效果

然后我们创建一个TypeScript类文件，命名为Demo2.ts，然后把下面的代码粘贴进去：

```
class Demo2 {
    /**游戏启动后，会自动执行此方法*/
    public startGame():void {
        alert("hello!");
    }
}
//create app
var app = new Demo2();
```

然后打开game_file_list.js，将"GameApp.js"修改为"Demo2.js"，这样就可以将我们自己的类作为入口类。

使用命令行编译项目：
```
$ egret b HelloEgret
```

浏览器观察最终结果，当然页面上什么都没有，只是咣当弹出一个"hello!"而已，这就证明我们的修改起作用了。

使用纹理和位图:
----------------------------

继续改写代码，显示一个简单的位图。和在Flash中开发类似，首先您需要做的是变量定义，这里我们定义类的成员变量：

```
/**测试用位图*/
private logo:ns_egret.Bitmap;
```

使用LoadingController来加载外部资源：

```
var loader = new ns_egret.LoadingController();//使用LoadingController来加载和管理资源
loader.addResource("egret_icon.png", ns_egret.ResourceLoader.DATA_TYPE_IMAGE);//传入资源地址和类型
loader.addEventListener(ns_egret.ResourceLoader.LOAD_COMPLETE, this.onResourceLoadComplete, this);//事件侦听加载完成
loader.load();//执行加载
```
> 注意默认资源根目录是assets/480。
> 另外务必注意this关键词不可以省略，这是和Flash不一样的地方，在Flash中我们允许省略this关键词。

然后我们在onResourceLoadComplete方法里，完成位图的创建和显示。代码如下：

```
var stage = ns_egret.MainContext.instance.stage;//获取Stage引用
this.logo = new ns_egret.Bitmap();//创建位图
this.logo.texture = ns_egret.TextureCache.getInstance().getTexture("egret_icon.png");//设置纹理
stage.addChild(this.logo);//添加到显示列表
```

完整代码：

```
class Demo2 {

    /**测试用的位图*/
    private logo:ns_egret.Bitmap;

    /**游戏启动后，会自动执行此方法*/
    public startGame():void {
        this.loadResource();
    }
    /**加载所需资源*/
    public loadResource():void {
        //跟在Flash中类似，您要用位图，就要先加载进来
        var loader = new ns_egret.LoadingController();//使用LoadingController来加载和管理资源
        loader.addResource("egret_icon.png", ns_egret.ResourceLoader.DATA_TYPE_IMAGE);//传入资源地址和类型，注意默认资源根目录是assets/480
        loader.addEventListener(ns_egret.ResourceLoader.LOAD_COMPLETE, this.onResourceLoadComplete, this);//事件侦听加载完成
        loader.load();//执行加载
    }
    /**加载完毕后即可使用*/
    private onResourceLoadComplete():void {
        var stage = ns_egret.MainContext.instance.stage;//获取Stage引用
        this.logo = new ns_egret.Bitmap();//创建位图
        this.logo.texture = ns_egret.TextureCache.getInstance().getTexture("egret_icon.png");//设置纹理
        stage.addChild(this.logo);//添加到显示列表
    }
}
//create app
var app = new Demo2();
```

编译项目，顺利的话，您就能看到一个Egret的LOGO显示在屏幕上。

简单动画:
----------------------------

然后我们使用Tween来让sky这个位图做一些运动，并将运动实现封装在一个方法内部，代码如下：

```
private startAnimation():void {
    var tw = ns_egret.Tween.get(this.logo);
    tw.to({x:280,y:0},500).to({x:280,y:300},500).to({x:0,y:300},500).to({x:0,y:0},500);
    tw.call(this.startAnimation, this);
}
```

上面的代码可能初看有些费解，但您只要了解Tween的特性，就容易理解这些代码。Tween的执行是串行的，方法执行后，返回自身，这样4个to相连，其实就是依次执行4次to方法。留意坐标您会发现，这个动画过程就是让位图先运动到右上角，然后到右下角，左下角，最终回到原点。最后又调用了一次call，含义是动画完成后，调用startAnimation方法。是不是明白了，其实就是产生循环调用的结果，动画会一直执行下去。

改写onResourceLoadComplete方法，最后一行增加```this.startAnimation()```调用，这样当资源加载完毕，对象创建成功后，就开始执行动画。

最后使用命令行编译项目，再复习一下：
```
$ egret b HelloEgret
```

打开浏览器观看最终结果，可以看到一个简单的位图动画：

![github](https://raw.githubusercontent.com/NeoGuo/html5-documents/master/egret/images/egret_animation.gif "EgretAnimation")
> 本图效果仅供参考，实际效果是很流畅的，这里为了方便展示，转成了GIF并作了降帧处理

- - -

[上一篇:Hello World](https://github.com/NeoGuo/html5-documents/blob/master/egret/01-hello-world.md)
| [下一篇:电影剪辑](https://github.com/NeoGuo/html5-documents/blob/master/egret/03-movieclip.md)
