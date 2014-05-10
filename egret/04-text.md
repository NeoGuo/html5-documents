Egret框架入门第一步 - 文本
===============

做游戏没有文本是万万不能的，Egret框架当然也有文本的支持。在设计思想上，Egret希望可以做到跨越所有主流平台，即开发者只写一份代码，然后可以选择多种方式来渲染（Canvas,WebGL,Native等等）。对应到代码层面，就是分离出各种不同的RendererContext，在目前的例子里，我们都是采用的HTML5CanvasRenderer，即最终是通过HTML5的Canvas容器来完成渲染的。

如果您了解一些Canvas的知识，应该知道Canvas有fillText和strokeText两个方法来绘制文本，而Egret正是通过这个机制绘制普通文本的。下面来了解一下详细使用方式：

普通文本
----------------------------

在Egret负责文本渲染的类是TextField，示意代码：

```
var label1 = new ns_egret.TextField();//创建TextField实例
//label1.fontFamily = "Impact";//设置字体，中文慎用，受系统和浏览器限制，表现可能不一致
label1.textColor = 0xffffff;//设置颜色，和Flash一样，设置16进制的数值
label1.textAlign = "left";//设置文本对齐，可选:left,center,right
label1.text = "English我是光头强\n你是熊大";//用\n来换行
label1.size = 30;//设置字号
label1.width = 120;//如果设置宽度，则文本自动换行
label1.strokeColor = 0xFF0000;//设置描边颜色，描边在游戏中的文字上很常见
label1.stroke = 2;//设置描边大小
//设置坐标
label1.x = 120;
label1.y = 100;
//支持旋转和斜切
label1.rotation = 30;
label1.skewX = 30;
var stage = ns_egret.MainContext.instance.stage;//获取Stage引用
stage.addChild(label1);//添加到显示列表
```
> 和所有基于WEB的应用一样，中文字体是个大问题，目前请尽量使用默认字体

我们可以创建Demo4.ts，然后调用上面的代码，编译后查看效果：

![github](https://raw.githubusercontent.com/NeoGuo/html5-documents/master/egret/images/egret_textfield.png "textfield")

位图字体
----------------------------

如果希望文字在所有平台保持显示一致，可以使用位图字体。这种方式在很多平台或框架中都得到了应用，比如cocos2d-x等。所谓位图字体，就是将所需的字符全都集中到一张或多张位图上，然后根据描述文件来知道某个字符在位图上的对应区域。当设置文本的时候，就可以逐个字符判断，将获取到的字符图片数据整合显示，来达到显示文本的效果。

Egret中也有对位图字体的支持，我们还是用官方实例中的素材来展示如何使用位图字体。拷贝/egret/examples/assets/480目录下的两个文件：font.egf和font.png，将这两个文件复制到HelloEgret项目的assets/480目录下面。打开font.egf看一下，里面其实就是对每个字符在位图对应关系的描述：

```
var data ={"@":{"x":2,"y":2,"w":63,"h":65,"offX":3,"offY":9} ...
```

然后还是使用LoadingController来加载资源：

```
var loader:ns_egret.LoadingController = new ns_egret.LoadingController();
loader.addResource("font.egf", ns_egret.ResourceLoader.DATA_TYPE_TEXT);//加载描述文件
loader.addResource("font.png", ns_egret.ResourceLoader.DATA_TYPE_IMAGE);//加载图片
loader.addEventListener(ns_egret.ResourceLoader.LOAD_COMPLETE, this.initBitmapText, this);//事件侦听加载完成
loader.load();//执行加载
```

创建使用位图字体的文本对象：

```
/**显示位图文本*/
private initBitmapText():void {
    var data = ns_egret.ResourceLoader.create("font.egf").data;//获取描述
    eval(data);//将描述转换为变量
    var bitmap1 = new ns_egret.BitmapText();//创建位图字体
    bitmap1.texture = ns_egret.TextureCache.getInstance().getTexture("font.png");//设置纹理
    bitmap1.bitmapFontData = data;//设置描述信息
    bitmap1.text = "HelloWorld";//设置文本
    var stage = ns_egret.MainContext.instance.stage;//获取Stage引用
    stage.addChild(bitmap1);
}
```

改写Demo4的代码，加入上述的语句，编译查看效果：

![github](https://raw.githubusercontent.com/NeoGuo/html5-documents/master/egret/images/egret_bitmapfont.png "textfield")

> 注意：位图字体只适合英文，数字，符号这些内容，用于中文不太现实

文本输入
----------------------------

- - -

[上一篇:电影剪辑](https://github.com/NeoGuo/html5-documents/blob/master/egret/03-movieclip.md)
| [下一篇:按钮](https://github.com/NeoGuo/html5-documents/blob/master/egret/05-button.md)
