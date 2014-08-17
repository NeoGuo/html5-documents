Egret框架GUI教程 - 状态按钮
===============

ToggleButton，顾名思义就是一个具备状态的按钮，这个状态就是selected属性，类型是布尔量，默认为false，当您点击一下按钮，selected将变为true，再点击一下，重新变成false。在显示上也是有区别的，选中和非选中的外观是不一样的。示例代码：

```
var btn:egret.gui.ToggleButton = new egret.gui.ToggleButton();
btn.x = btn.y = 20;
btn.label = "我是ToggleButton";
btn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.btnTouchHandler,this);
this.addElement(btn);
private btnTouchHandler(evt:egret.TouchEvent):void {
    console.log(evt.target.selected);
}
```

![github](https://raw.githubusercontent.com/NeoGuo/html5-documents/master/egret-gui/images/togglebutton.png "Egret")