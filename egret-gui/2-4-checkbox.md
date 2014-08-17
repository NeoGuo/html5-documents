Egret框架GUI教程 - 复选框
===============

复选框其实跟ToggleButton非常相似，只是样子换了而已。当它被选中，selected属性将变为true，反之则是false。示例：

```
var cbx:egret.gui.CheckBox = new egret.gui.CheckBox();
cbx.addEventListener(egret.Event.CHANGE,this.btnTouchHandler,this);
cbx.label = "选择我1";
this.addElement(cbx);
private btnTouchHandler(evt:egret.Event):void {
    console.log(evt.target.selected);
}
```

![github](https://raw.githubusercontent.com/NeoGuo/html5-documents/master/egret-gui/images/checkbox.png "Egret")