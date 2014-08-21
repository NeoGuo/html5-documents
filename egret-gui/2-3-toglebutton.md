Egret框架GUI教程 - 状态按钮
===============

ToggleButton，顾名思义就是一个具备状态的按钮，这个状态就是selected属性，类型是布尔量，默认为false，当您点击一下按钮，selected将变为true，再点击一下，重新变成false。在显示上也是有区别的，选中和非选中的外观是不一样的。示例代码：

```
var btn:egret.gui.ToggleButton = new egret.gui.ToggleButton();
btn.x = btn.y = 20;
btn.label = "我是ToggleButton";
btn.addEventListener(egret.Event.CHANGE,this.changeHandler,this);
this.addElement(btn);
private changeHandler(evt:egret.Event):void {
    console.log(evt.target.selected);
}
```

![github](https://raw.githubusercontent.com/NeoGuo/html5-documents/master/egret-gui/images/togglebutton.png "Egret")

在下面的例子中，我们结合若干个ToggleButton，就可以实现类似TabBar这样的效果，如图所示：

![github](https://raw.githubusercontent.com/NeoGuo/html5-documents/master/egret-gui/images/toggle_bar.png "Egret")

源码：

```
module uidemo
{
    export class ToggleButtonDemo extends egret.gui.Group
    {
        public constructor() {
            super();
        }
        public createChildren(): void {
            super.createChildren();
            this.initToggleBar();
        }

        private toggleBtns:egret.gui.ToggleButton[];
        private initToggleBar():void {
            this.toggleBtns = [];
            for(var i:number=0;i<4;i++) {
                var btn:egret.gui.ToggleButton = new egret.gui.ToggleButton();
                btn.label = i+1+"";
                btn.y = 100;
                btn.width = 80;
                btn.x = 20+i*80;
                btn.addEventListener(egret.Event.CHANGE,this.toggleChangeHandler,this);
                this.toggleBtns.push(btn);
                this.addElement(btn);
            }
        }
        private toggleChangeHandler(evt:egret.Event):void {
            for(var i:number=0;i<this.toggleBtns.length;i++) {
                var btn:egret.gui.ToggleButton = this.toggleBtns[i];
                btn.selected = (btn == evt.target);
            }
        }
    }
}
```