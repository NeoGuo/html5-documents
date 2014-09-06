Egret框架GUI教程 - ViewStack
===============

ViewStack也是一个容器，您可以在这个容器中添加多个子项，但只能显示其中的一个。您可以通过设置selectedIndex或者selectedChild属性，来控制当前应该显示的子项。

实例：

```
module uidemo
{
    export class ViewStackDemo extends egret.gui.Group
    {
        private viewStack:egret.gui.ViewStack;

        public constructor() {
            super();
        }
        public createChildren(): void {
            super.createChildren();
            this.viewStack = new egret.gui.ViewStack();
            var btn1:egret.gui.Button = new egret.gui.Button();
            btn1.label = "Button One";
            this.viewStack.addElement(btn1);
            var btn2:egret.gui.Button = new egret.gui.Button();
            btn2.label = "Button Two";
            this.viewStack.addElement(btn2);
  			//设置默认选项
            this.viewStack.selectedIndex = 1;
            //timer控制选项切换
            var timer:egret.Timer = new egret.Timer(500);
            timer.addEventListener(egret.TimerEvent.TIMER,this.changeIndexByTimer,this);
            timer.start();
            //show
            this.addElement(this.viewStack);
        }
        private changeIndexByTimer(evt:egret.TimerEvent):void {
            this.viewStack.selectedIndex = this.viewStack.selectedIndex==0?1:0
        }
    }
}
```

您可以看到Button的显示不断处于切换之中。

![github](https://raw.githubusercontent.com/NeoGuo/html5-documents/master/egret-gui/images/viewstack1.gif "Egret")

关于初始化：

* 您可以通过createAllChildren干预ViewStack初始化内部对象的策略，设置为true则立即初始化所有子项，设置为false则是当子项第一次被显示时再初始化。
* 当内部子项数量比较大的时候，延迟初始化的策略会加快ViewStack的初始化速度。但您要注意的是，在延迟初始化的情况下，应避免访问未初始化的对象，防止因为空对象引发错误。