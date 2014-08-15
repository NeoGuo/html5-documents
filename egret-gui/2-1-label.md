Egret框架GUI教程 - 文本组件
===============

文本组件很常用，在Egret GUI中对应的类是egret.gui.Label，使用方式也非常简单，比如下面的例子：

```
//假设this是一个egret.Sprite
var label:egret.gui.Label = new egret.gui.Label();
label.text = "我是地球人";
this.addChild(label);
```

得到的效果：
![github](https://raw.githubusercontent.com/NeoGuo/html5-documents/master/egret-gui/images/label1.png "Egret")

