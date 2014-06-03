Egret框架入门第一步 - 纹理和位图
===============

在上一篇教程我们创建和运行了Hello World，下面我们以这个项目为基础做“深加工”，逐步了解Egret框架的各个组成部分。

创建自己的类:
----------------------------

我们来改写一下HelloEgret项目，融入我们自己的代码。请使用您自己钟爱的开发工具，这里使用WebStorm。打开WebStorm，创建一个项目，目录指向{egret_workspace} ，创建完成后，可以看到类似下面的结构：

![github](https://raw.githubusercontent.com/NeoGuo/html5-documents/master/egret/images/workspace.png "WorkSpace")

项目遵循一个特定的结构，结构简单说明如下：

```
workspace    // 您的工作目录
  |-- your_project  // 您的项目
        |-- src // 源码放在这里
             |--egret.d.ts // egret库的描述文件
             |--game_file_list.js // 包含您为项目编写的TypeScript文件编译所得的js文件，对项目的类文件进行增删改时，记得更新这个文件。
             |--GameApp.ts // 作为游戏的入口类，实现游戏逻辑
             |--LoadingUI.ts // 实现Loading效果
        |-- resources // 这里放资源，比如图片声音之类的
        |-- launcher // 入口
              |-- index.html 启动文件
        |-- bin-debug // 编译后的代码目录

```

然后我们创建一个TypeScript类文件，命名为Demo2.ts，然后把下面的代码粘贴进去：

```
class Demo2 extends egret.DisplayObjectContainer {
    /**构造函数*/
    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.startGame,this);
    }
    /**游戏启动后，会自动执行此方法*/
    public startGame():void {
        alert("hello!");
    }
}
```

然后打开game_file_list.js，将"GameApp"修改为"Demo2"，并修改"GameApp.js"为"Demo2.js";这样就可以将我们自己的类作为入口类。

```
var game_file_list = [
    "Demo2.js",
    "LoadingUI.js"
]
var document_class = "Demo2";
```

使用命令行编译项目：
```
egret build HelloEgret
```

当然您也可以进入到项目中，再使用命令行编译项目：
```
cd HelloEgret
egret build
```

浏览器观察最终结果，当然页面上什么都没有，只是咣当弹出一个"hello!"而已，这就证明我们的修改起作用了。

使用纹理和位图:
----------------------------

继续改写代码，显示一个简单的位图。和在Flash中开发类似，首先您需要做的是变量定义，这里我们定义类的成员变量（不了解TypeScript语法？可以先学习N神的这篇[教程总结](http://www.nshen.net/article/2013-05-18/as3-to-typescript/)）：

```
/**测试用位图*/
private logo:egret.Bitmap;
```

要使用外部资源，就要引入加载机制。想想我们在Flash里是怎么做的？没错，用Loader或URLLoader。Egret中也提供了Loader的类似实现，即：RES.ResourceLoader。(注意ResourceLoader的命名空间是RES，而不是egret)。但Egret的封装更“上层”一些，您甚至都无需直接接触ResourceLoader这个类，而是直接使用Egret提供的，结合外部配置文件的资源管理和加载方式。

首先打开项目目录下的resources/resource.json文件，这个您可以认为就是资源的配置文件，里面定义了resources目录下资源的名称和对应的url，甚至可以把资源划分成若干个group，这样来实现分批加载。

```
{
"resources":
    [
        {"name":"bgImage","type":"image","url":"assets/bg.jpg"},
        {"name":"egretIcon","type":"image","url":"assets/egret_icon.png"},
    ],

"groups":
    [
        {"name":"preload","keys":"bgImage,egretIcon"},
    ]
}
```

我们来创建一个"demo2"的group，把egretIcon配置进来：

```
{"name":"demo2","keys":"egretIcon"},
```

然后回到Demo2中，我们使用RES模块，加载配置文件和对应的一组资源：

```
//使用资源管理器加载资源
RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE,this.onResourceLoadComplete,this);
RES.loadConfig("resources/resource.json","resources/");
RES.loadGroup("demo2");
```
> loadConfig的第二个参数用于指定资源根目录。
> 另外务必注意this关键词不可以省略，这是和Flash不一样的地方，在Flash中我们允许省略this关键词。
> 真实项目中可能有很多资源，我们可以在游戏启动之前先做加载，加载完毕后再进行游戏的初始化。

在onResourceLoadComplete方法里，我们完成位图的创建和显示。代码如下：

```
var stage = egret.MainContext.instance.stage;//获取Stage引用
this.logo = new egret.Bitmap();//创建位图
this.logo.texture = RES.getRes("egretIcon");//设置纹理
stage.addChild(this.logo);//添加到显示列表
```

完整代码：

```
class Demo2 extends egret.DisplayObjectContainer {

    /**测试用的位图*/
    private logo:egret.Bitmap;

    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.startGame,this);
    }

    /**游戏启动后，会自动执行此方法*/
    public startGame():void {
        this.loadResource();
    }
    /**加载所需资源*/
    private loadResource():void {
        //使用资源管理器加载资源
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE,this.onResourceLoadComplete,this);
        RES.loadConfig("resources/resource.json","resources/");
        RES.loadGroup("demo2");
    }
    /**加载完毕后即可使用*/
    private onResourceLoadComplete(event:RES.ResourceEvent):void {
        this.logo = new egret.Bitmap();//创建位图
        this.logo.texture = RES.getRes("egretIcon");//设置纹理
        this.addChild(this.logo);//添加到显示列表
    }
}
```

编译项目，顺利的话，您就能看到一个Egret的LOGO显示在屏幕上。

简单动画:
----------------------------

然后我们使用Tween来让sky这个位图做一些运动，并将运动实现封装在一个方法内部，代码如下：

```
private startAnimation():void {
    var tw = egret.Tween.get(this.logo);
    tw.to({x:280,y:0},500).to({x:280,y:300},500).to({x:0,y:300},500).to({x:0,y:0},500);
    tw.call(this.startAnimation, this);
}
```

上面的代码可能初看有些费解，但您只要了解Tween的特性，就容易理解这些代码。Tween的执行是串行的，方法执行后，返回自身，这样4个to相连，其实就是依次执行4次to方法。留意坐标您会发现，这个动画过程就是让位图先运动到右上角，然后到右下角，左下角，最终回到原点。最后又调用了一次call，含义是动画完成后，调用startAnimation方法。是不是明白了，其实就是产生循环调用的结果，动画会一直执行下去。

改写onResourceLoadComplete方法，最后一行增加```this.startAnimation()```调用，这样当资源加载完毕，对象创建成功后，就开始执行动画。

最后使用命令行编译项目，再复习一下：
```
egret build HelloEgret
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
this.logo.anchorX = 0.5;//设置中心点的位置，实现围绕中心旋转
this.logo.anchorY = 0.5;//同上
```

精灵表单:
----------------------------

说到位图，还有一种很常用的情况就是利用“精灵表单”，即spritesheet，这种方式可以让我们把若干张小图集合到一张大图上，这样对资源加载，控制，减少请求数等方面都很有益处。制作spritesheet的工具也有很多，比如知名度很高的TexturePacker，Flash CS6也增加了对spritesheet的支持，工具上萝卜青菜，各有所爱，您可以选择适合自己的工具。在Egret框架中当然也可以使用spritesheet，让我们来看一下使用方式：

首先拷贝[官网实例资源目录](https://github.com/egret-team/egret-examples/tree/master/CoreExample/resources/assets/480)下的两个文件：icons.json和icons.png，将这两个文件复制到HelloEgret项目的resources/assets目录下面。

打开icons.json，可以看到对内部图片分割的描述：
```
{"file":"icons.png","frames":{"activity_1":{"x":158,"y":313,"w":75,"h":75} ...
```

这样我们就可以根据这个描述文件，获取整张图的一个小块作为某个位图的纹理。首先要做的还是配置资源文件：

```
{
"resources":
    [
        {"name":"egretIcon","type":"image","url":"assets/egret_icon.png"},
        {"name":"icons","type":"sheet","url":"assets/icons.json"}
    ],

"groups":
    [
        {"name":"demo2","keys":"egretIcon,icons"}
    ]
}
```

然后使用"点"语法，根据名称获取SpriteSheet的一个元素：

```
var bitmap = new egret.Bitmap();
bitmap.texture = RES.getRes("icons.activity_10");//从精灵表中获取某一项
bitmap.x = 100;
bitmap.y = 100;
this.addChild(bitmap);
```

重新编译项目，检查效果吧。

另外，如果觉得先加载，后使用的代码显得繁琐，可以使用：RES.getResAsync()。这个方法允许您异步加载一个资源，然后在回调函数中处理。示意：

```
RES.getResAsync("icons",this.iconsLoadedComplete,this)
```

如果位图需要使用9宫格方式，可以使用Scale9Bitmap类，使用方式可以参考API文档，这里不再详述。

- - -

[上一篇:Hello World](https://github.com/NeoGuo/html5-documents/blob/master/egret/01-hello-world.md)
| [下一篇:影片剪辑](https://github.com/NeoGuo/html5-documents/blob/master/egret/03-movieclip.md)
