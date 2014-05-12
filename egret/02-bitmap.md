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

继续改写代码，显示一个简单的位图。和在Flash中开发类似，首先您需要做的是变量定义，这里我们定义类的成员变量（不了解TypeScript语法？可以先学习N神的这篇[教程总结](http://www.nshen.net/article/2013-05-18/as3-to-typescript/)）：

```
/**测试用位图*/
private logo:ns_egret.Bitmap;
```

使用LoadingController来加载外部资源（对于单个资源可以使用ResourceLoader类，而LoadingController则可以处理批量的素材加载，使用更方便）：

```
var loader:ns_egret.LoadingController = new ns_egret.LoadingController();//使用LoadingController来加载和管理资源
loader.addResource("egret_icon.png", ns_egret.ResourceLoader.DATA_TYPE_IMAGE);//传入资源地址和类型
loader.addEventListener(ns_egret.ResourceLoader.LOAD_COMPLETE, this.onResourceLoadComplete, this);//事件侦听加载完成
loader.load();//执行加载
```
> 注意默认资源根目录是assets/480。您可以修改egret_loader.js来制定默认资源目录：
> ns_egret.ResourceLoader.prefix = "assets/480/"
> 另外务必注意this关键词不可以省略，这是和Flash不一样的地方，在Flash中我们允许省略this关键词。
> 真实项目中可能有很多资源，我们可以在游戏启动之前先做加载，加载完毕后再进行游戏的初始化

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
        var loader:ns_egret.LoadingController = new ns_egret.LoadingController();//使用LoadingController来加载和管理资源
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

您还可以尝试修改位图的几个属性，来了解主要特性和用法：

```
this.logo.touchEnabled = true;//可点击
this.logo.width = this.logo.height = 10;//设置尺寸
this.logo.scaleX = this.logo.scaleY = 0.5;//设置缩放
this.logo.rotation = 45;//旋转
this.logo.skewX = 45;//斜切
this.logo.anchorPointX = this.logo.width/2;//设置中心点的位置，实现围绕中心旋转
this.logo.anchorPointY = this.logo.height/2;//同上
```

精灵表单:
----------------------------

说到位图，还有一种很常用的情况就是利用“精灵表单”，即spritesheet，这种方式可以让我们把若干张小图集合到一张大图上，这样对资源加载，控制，减少请求数等方面都很有益处。制作spritesheet的工具也有很多，比如知名度很高的TexturePacker，Flash CS6也增加了对spritesheet的支持，工具上萝卜青菜，各有所爱，您可以选择适合自己的工具。在Egret框架中当然也可以使用spritesheet，让我们来看一下使用方式：

首先拷贝/egret/examples/assets/480目录下的两个文件：icons.json和icons.png，将这两个文件复制到HelloEgret项目的assets/480目录下面。

打开icons.json，可以看到对内部图片分割的描述：
```
{"frames":{"activity_1.png":{"x":158,"y":313,"w":75,"h":75,"offX":0,"offY":0} ...
```

这样我们就可以根据这个描述文件，获取整张图的一个小块作为某个位图的纹理。首先要做的还是加载：

```
/**加载精灵表*/
private loadSpriteSheet():void {
    var loader:ns_egret.LoadingController = new ns_egret.LoadingController();
    loader.addResource("icons.json", ns_egret.ResourceLoader.DATA_TYPE_BINARY);//加载描述文件
    loader.addResource("icons.png", ns_egret.ResourceLoader.DATA_TYPE_IMAGE);//加载图片
    loader.addEventListener(ns_egret.ResourceLoader.LOAD_COMPLETE, this.onSpriteSheetLoadComplete, this);//事件侦听加载完成
    loader.load();//执行加载
}
```

然后使用SpriteSheet类来实现显示图上的某个区域：

```
 /**精灵表加载完毕后即可使用*/
private onSpriteSheetLoadComplete():void {
    var data = ns_egret.ResourceLoader.create("icons.json").data;//获取描述
    data = JSON.parse(data);//将JSON字符串转换为Object
    var texture = ns_egret.TextureCache.getInstance().getTexture("icons.png");//获取大图
    var spriteSheet = new ns_egret.SpriteSheet(data);//创建精灵表
    var bitmap = new ns_egret.Bitmap();
    bitmap.texture = texture;
    bitmap.spriteFrame = spriteSheet.getFrame("activity_10.png");//从精灵表中获取某一项
    var stage = ns_egret.MainContext.instance.stage;//获取Stage引用
    stage.addChild(bitmap);
}
```

重新编译项目，检查效果吧。

另外，如果觉得先加载，后使用的代码显得繁琐，可以使用一个简化类：DynamicBitmap。这个类允许您在创建位图的时候，直接传入图片的地址，然后加载完毕后自动显示。示意：

```
var bitmap:ns_egret.DynamicBitmap = ns_egret.DynamicBitmap.create("egret_icon.png");
stage.addChild(bitmap);
```

如果位图需要使用9宫格方式，可以使用Scale9Bitmap类，使用方式可以参考API文档，这里不再详述。

- - -

[上一篇:Hello World](https://github.com/NeoGuo/html5-documents/blob/master/egret/01-hello-world.md)
| [下一篇:电影剪辑](https://github.com/NeoGuo/html5-documents/blob/master/egret/03-movieclip.md)
