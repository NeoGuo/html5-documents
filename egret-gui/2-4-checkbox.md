Egret框架GUI教程 - 复选框
===============

复选框(egret.gui.CheckBox)其实跟ToggleButton非常相似，只是样子换了而已。当它被选中，selected属性将变为true，反之则是false。示例：

```
var cbx:egret.gui.CheckBox = new egret.gui.CheckBox();
cbx.addEventListener(egret.Event.CHANGE,this.btnTouchHandler,this);
cbx.label = "选择我1";
this.addElement(cbx);
private btnTouchHandler(evt:egret.Event):void {
    console.log(evt.target.selected);
}
```
> 要定义复选框显示的文本，控制label属性即可，但如果要做更深一层的定制，比如颜色什么的，就需要涉及到自定义皮肤的概念了，这一点在后面的章节中会涉及。

![github](https://raw.githubusercontent.com/NeoGuo/html5-documents/master/egret-gui/images/checkbox.png "Egret")

复选框一般用在提交表单这样的场合(这里的表单是指一个广泛的概念，并非HTML中的那个Form标签)，比如显示一个用户协议，在协议的底部，一般要显示一个复选框，写上"我已阅读并同意该协议"，只有当用户选上之后，才能进行下一步操作。一般情况下，根据您的功能设计，应在界面上放置对应类型的组件，并合理布局，确保美观和易用性的兼顾，并符合用户的操作习惯，关于这些知识，可以参考苹果或Google的UI设计指南。