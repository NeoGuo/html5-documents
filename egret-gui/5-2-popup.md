Egret框架GUI教程 - 弹出
===============

在上节我们提到了，TitleWindow是用egret.gui.PopUpManager来弹出的。而egret.gui.PopUpManager并不限定弹出的类型，您可以将一个普通GUI组件或容器传递给addPopUp方法来实现弹出。

把上节的例子，改成一个Panel版本的，就是类似这样的：

```
module uidemo
{
    export class PopUpDemo extends egret.gui.Group
    {
        private panel:egret.gui.Panel;

        public constructor() {
            super();
        }
        public createChildren(): void {
            super.createChildren();
            this.panel = new egret.gui.Panel();
            this.panel.title = "Hello Panel";
            this.panel.width = 400;
            var btn:egret.gui.Button = new egret.gui.Button();
            btn.label = "touch me";
            btn.horizontalCenter = 0;
            btn.verticalCenter = 0;
            btn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.btnTouchHandler,this);
            this.panel.addElement(btn);
            egret.gui.PopUpManager.addPopUp(this.panel,true,true);
        }
        private btnTouchHandler(evt:egret.TouchEvent):void {
            egret.gui.PopUpManager.removePopUp(this.panel);
        }
    }
}
```

效果：

![github](https://raw.githubusercontent.com/NeoGuo/html5-documents/master/egret-gui/images/popup1.png "Egret")