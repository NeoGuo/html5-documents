Egret框架GUI教程 - 空间填充
===============

Spacer用于辅助布局，填充空间，作用类似于“占位符”。假如在一个横向布局的Group里面，两个按钮，一个在左侧，一个在右侧，该如何做呢？可以这样：

```
module uidemo
{
    export class SpacerDemo extends egret.gui.Group
    {
        public constructor() {
            super();
        }
        public createChildren(): void {
            super.createChildren();
            var group:egret.gui.Group = new egret.gui.Group();
            group.layout = new egret.gui.HorizontalLayout();
            var btn1:egret.gui.Button = new egret.gui.Button();
            btn1.label = "Left";
            var btn2:egret.gui.Button = new egret.gui.Button();
            btn2.label = "Right";
            var spacer:egret.gui.Spacer = new egret.gui.Spacer();
            spacer.percentWidth = 100;
            group.addElement(btn1);
            group.addElement(spacer);
            group.addElement(btn2);
            this.addElement(group);
        }
    }
}
```
> Spacer放中间，自动即开空间

![github](https://raw.githubusercontent.com/NeoGuo/html5-documents/master/egret-gui/images/spacer1.png "Egret")