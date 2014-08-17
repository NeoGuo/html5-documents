Egret框架GUI教程 - 按钮
===============

按钮是做交互的时候必不可少的组件，来看看按钮的用法：

```
var btn:egret.gui.Button = new egret.gui.Button();
btn.label = "我是按钮";
this.addElement(btn);
```

显示效果：

![github](https://raw.githubusercontent.com/NeoGuo/html5-documents/master/egret-gui/images/button1.png "Egret")
> 如果按钮没显示出来，请确认：1，您是否正确配置了皮肤适配器，2，组件默认皮肤和相关素材是否在项目中

按钮可以设置禁用，禁用的按钮会以另外一种样式显示，且不再响应交互，设置enabled属性可以控制是否禁用：

```
btn.enabled = false;
```
![github](https://raw.githubusercontent.com/NeoGuo/html5-documents/master/egret-gui/images/button2.png "Egret")

在按钮上，您可以添加事件侦听，判断当用户按下按钮后，下一步要执行的方法：

```
btn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.btnTouchHandler,this);
private btnTouchHandler(evt:egret.TouchEvent):void {
    console.log("button touched");
}
```

您可以在按钮上设置宽度和高度，按钮上的文本会自动居中，以适应不同的按钮尺寸：

```
var btn2:egret.gui.Button = new egret.gui.Button();
btn2.width = 200;
btn2.height = 200;
btn2.label = "我是按钮2";
this.addElement(btn2);
```

![github](https://raw.githubusercontent.com/NeoGuo/html5-documents/master/egret-gui/images/button3.png "Egret")