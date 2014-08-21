Egret框架GUI教程 - 进度条
===============

进度条，我们一般用在加载某个或某组资源的时候，显示加载进程，帮助用户消磨加载过程这段无聊的时间。在创建进度条之前，我们先修改一下SkinAdapter.ts，在其中加入ProgressBar的默认皮肤：

```
case "egret.gui.ProgressBar":
    skin =  "skins.HProgressBarSkin";
    break;
```

然后我们再来看一段代码，了解进度条的创建和使用方式：

```
module uidemo
{
    export class ProgressBarDemo extends egret.gui.Group
    {
        private pBar:egret.gui.ProgressBar;

        public constructor() {
            super();
        }
        public createChildren(): void {
            super.createChildren();
            this.pBar = new egret.gui.ProgressBar();
            this.pBar.width = 200;
            this.pBar.value = 0;//取值范围是0-100
            this.addElement(this.pBar);
            //用timer来模拟一下加载进度吧
            var timer:egret.Timer = new egret.Timer(100,100);
            timer.addEventListener(egret.TimerEvent.TIMER,this.timerHandler,this);
            timer.start();
        }

        private timerHandler(evt:egret.TimerEvent):void {
            this.pBar.value += 1;
        }
    }
}
```
> 通过设置value属性，来改变显示的进度值

实现效果：

![github](https://raw.githubusercontent.com/NeoGuo/html5-documents/master/egret-gui/images/pbar1.png "Egret")

除了做水平的进度条，我们也可以制作垂直方向的进度条，只需要设置一下skinName和动画的方向即可，示例：

```
//垂直进度条
this.vBar = new egret.gui.ProgressBar();
this.vBar.direction = "bottomToTop";
this.vBar.skinName="skins.VProgressBarSkin";
this.vBar.y = 60;
this.vBar.height = 200;
this.vBar.value = 0;//取值范围是0-100
this.addElement(this.vBar);
```
> 通过skinName属性，来设置组件的默认皮肤，您可以自定义一个皮肤，来代替默认提供的皮肤，实现您自己想要的效果，关于皮肤的部分，我们会在后面的章节中详述

实现效果：

![github](https://raw.githubusercontent.com/NeoGuo/html5-documents/master/egret-gui/images/pbar2.png "Egret")

您还可以通过labelFunction属性，设置进度条上显示的文字内容。参考下面的例子：

```
this.pBar.labelFunction = this.barLabelFunction;
private barLabelFunction(value:number,maximum:number):string {
    return "加载中... "+Math.ceil(value/maximum*100)+"%";
}
```

效果如下：

![github](https://raw.githubusercontent.com/NeoGuo/html5-documents/master/egret-gui/images/pbar3.png "Egret")
