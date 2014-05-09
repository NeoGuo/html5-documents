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

文本输入
----------------------------

- - -

[上一篇:电影剪辑](https://github.com/NeoGuo/html5-documents/blob/master/egret/03-movieclip.md)
| [下一篇:按钮](https://github.com/NeoGuo/html5-documents/blob/master/egret/05-button.md)
