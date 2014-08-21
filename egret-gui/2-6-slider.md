Egret框架GUI教程 - 滑动选择
===============

您还记得手机上的亮度调节工具吗？在Egret GUI中也有类似的组件，就是滑动选择器。这个实际上是两个组件，根据方向，分为egret.gui.HSlider和egret.gui.VSlider。比如要创建一个水平方向的Slider，代码如下：

```
var hSlider:egret.gui.HSlider = new egret.gui.HSlider();
hSlider.width = 200;
hSlider.x = 20;
hSlider.y = 20;
hSlider.minimum = 0;//定义最小值
hSlider.maximum = 100;//定义最大值
hSlider.value = 10;//定义默认值
hSlider.addEventListener(egret.Event.CHANGE,this.changeHandler,this);
this.addElement(hSlider);

private changeHandler(evt:egret.TouchEvent):void {
    console.log(evt.target.value);
}
```
> 在上面的代码中可以看出，您可以通过minimum和maximum来确定数值的可选择区间，并通过value设置默认值。跟我们之前的几个例子类似，如果要监听值的变化，可以监听egret.Event.CHANGE事件类型，在事件侦听器中处理值的变化。

显示效果：

![github](https://raw.githubusercontent.com/NeoGuo/html5-documents/master/egret-gui/images/slider1.png "Egret")

VSlider的使用方式也是类似的：

```
var vSlider:egret.gui.VSlider = new egret.gui.VSlider();
vSlider.height = 200;
vSlider.x = 100;
vSlider.y = 60;
vSlider.minimum = 100;//定义最小值
vSlider.maximum = 200;//定义最大值
vSlider.value = 120;//定义默认值
vSlider.addEventListener(egret.Event.CHANGE,this.changeHandler,this);
this.addElement(vSlider);
```

显示效果：

![github](https://raw.githubusercontent.com/NeoGuo/html5-documents/master/egret-gui/images/slider2.png "Egret")

几个使用技巧：

1. 如果不希望拖动的时候，值是实时变化的，可以将liveDragging设置为false，这样只有在"释放"的时候，值才会变化
2. 除了拖动滑块可以改变值，点击底栏的空白处，也可以快速跳转到相应的值
