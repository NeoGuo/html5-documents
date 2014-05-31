Egret框架入门第一步 - 文本
===============

做游戏没有文本是万万不能的，Egret框架当然也有文本的支持。在设计思想上，Egret希望可以做到跨越所有主流平台，即开发者只写一份代码，然后可以选择多种方式来渲染（Canvas,WebGL,Native等等）。对应到代码层面，就是分离出各种不同的RendererContext，在目前的例子里，我们都是采用的HTML5CanvasRenderer，即最终是通过HTML5的Canvas容器来完成渲染的。

如果您了解一些Canvas的知识，应该知道Canvas有fillText和strokeText两个方法来绘制文本，而Egret正是通过这个机制绘制普通文本的。下面来了解一下详细使用方式：

普通文本
----------------------------

在Egret负责文本渲染的类是TextField，示意代码：

```
var label1 = new egret.TextField();//创建TextField实例
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
this.addChild(label1);//添加到显示列表
```
> 和所有基于WEB的应用一样，中文字体是个大问题，目前请尽量使用默认字体

我们可以创建Demo4.ts，然后调用上面的代码，编译后查看效果：

![github](https://raw.githubusercontent.com/NeoGuo/html5-documents/master/egret/images/egret_textfield.png "textfield")

位图字体
----------------------------

如果希望文字在所有平台保持显示一致，可以使用位图字体。这种方式在很多平台或框架中都得到了应用，比如cocos2d-x等。所谓位图字体，就是将所需的字符全都集中到一张或多张位图上，然后根据描述文件来知道某个字符在位图上的对应区域。当设置文本的时候，就可以逐个字符判断，将获取到的字符图片数据整合显示，来达到显示文本的效果。

Egret中也有对位图字体的支持，我们还是用官方实例中的素材来展示如何使用位图字体。拷贝官网实例资源目录下的两个文件：font.fnt和font.png，将这两个文件复制到HelloEgret项目的resources/assets目录下面。打开font.fnt看一下，里面其实就是对每个字符在位图对应关系的描述：

```
info face="ArialMT" size=64 bold=0 italic=0 charset="" unicode=0 stretchH=100 smooth=1 aa=1 padding=0,0,0,0 spacing=2,2
common lineHeight=73 base=58 scaleW=512 scaleH=512 pages=1 packed=0
page id=0 file="font.png"
chars count=95
char id=64 x=2 y=2 width=63 height=65 xoffset=3 yoffset=9 xadvance=65 page=0 chnl=0 letter="@"
```

然后还是修改资源配置文件：

```
{
"resources":
	[
        {"name":"bitmapFont","type":"font","url":"assets/font.fnt"}
	],

"groups":
	[
        {"name":"demo4","keys":"bitmapFont"}
	]
}
```

创建使用位图字体的文本对象：

```
/**显示位图文本*/
var bitmap1 = new egret.BitmapText();
bitmap1.spriteSheet = RES.getRes("bitmapFont");
bitmap1.text = "HelloWorld";
this.addChild(bitmap1);
```

改写Demo4的代码，加入上述的语句，编译查看效果：

![github](https://raw.githubusercontent.com/NeoGuo/html5-documents/master/egret/images/egret_bitmapfont.png "bitmapfont")

> 注意：位图字体只适合英文，数字，符号这些内容，用于中文不太现实

文本输入
----------------------------

目前Egret的文本输入，需要借助平台原生的元素支持，对应到HTML5平台，就是input标签了。您需要使用的类是TextInput，这个类的工作模式是：当自身被添加到显示列表，则通知所在的上下文容器（这里是浏览器），创建一个HTML的input标签，放到对应的位置上显示出来(在Canvas容器之外)；当自身从显示列表删除的时候，则同时去除刚才创建的input标签。这个可以算得上是障眼法，不过基于平台限制，这也是不得已而为之。

用法：

```
var input:egret.TextInput = new egret.TextInput();
input.x = 120;
input.y = 210;
input.width = 400;
input.height = 200;
this.addChild(input);
input.setText("输入点文字吧");
```

效果：

![github](https://raw.githubusercontent.com/NeoGuo/html5-documents/master/egret/images/egret_textinput.png "input")

- - -

[上一篇:电影剪辑](https://github.com/NeoGuo/html5-documents/blob/master/egret/03-movieclip.md)
| [下一篇:按钮](https://github.com/NeoGuo/html5-documents/blob/master/egret/05-button.md)
