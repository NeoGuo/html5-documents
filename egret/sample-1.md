Egret框架入门教程 - 使用Egret创建一个打飞机的游戏
===============

这里我们用Egret框架来实现一个打飞机的游戏（请忽略作者简陋的美术设计，游戏的诸多细节也存在缺失，不过基本可以体现出Egret的一些特性了）。

游戏界面截图：

![github](https://raw.githubusercontent.com/NeoGuo/html5-documents/master/egret/images/fighter_01.jpg "打飞机")

* [点击这里查看演示](http://www.tech-mx.com/egret/fighter/launcher/)
* [本教程的源码下载](https://github.com/NeoGuo/html5-documents/tree/master/egret/demo/Fighter/)

下面是制作过程：

创建项目:
----------------------------

使用Egret命令行，创建一个新项目"Fighter":
```
cd {workspace}
egret create Fighter
```

Egret会根据内置模板创建项目的基本目录结构，我们要编写的代码将放置在src下面，而素材将放置在resources下面。要运行和测试项目，需要打开launcher目录下的index.html，不过绝对不能双击打开，[需要用一个HTTP服务器（您自配的或者Egret自带的）来运行](https://github.com/NeoGuo/html5-documents/blob/master/egret/01-hello-world.md)。目前我们还未对项目进行修改，运行项目会看到默认的Egret界面。

准备素材:
----------------------------

千里之行，始于足下，写这个游戏我们先从整理素材做起。或许正规的流程应该是先策划，然后是UI设计，然后是反复论证...不过我们这里就省略了，我们的重点是学习Egret，做到这一点就足够了。本教程所用的素材是从网上搜集，如有侵权，请告知，将及时删除。

![github](https://raw.githubusercontent.com/NeoGuo/html5-documents/master/egret/images/fighter_02.jpg "打飞机")

您可以从本教程配套的源码目录中，resources目录下找到这些素材。

将这些素材放到resources/assets目录下面，然后修改resource.json文件，将素材配置好，方便在代码中引用：

```
{
"resources":
	[
		{"name":"bgImage","type":"image","url":"assets/bg.jpg"},
		{"name":"btnStart","type":"image","url":"assets/btn_start.png"},
		{"name":"f1","type":"image","url":"assets/f1.png"},
		{"name":"f2","type":"image","url":"assets/f2.png"},
		{"name":"b1","type":"image","url":"assets/b1.png"},
		{"name":"b2","type":"image","url":"assets/b2.png"}
	],

"groups":
	[
        {"name":"preload","keys":"bgImage,btnStart,f1,f2,b1,b2"}
	]
}
```

开始按钮:
----------------------------

在GameApp.ts中，已经包含了模板预置的一些方法，主要是资源加载和loading显示，您可以选择在这个类中继续实现游戏逻辑，但为了便于展示，我们来创建一个新的类：GameContainer.ts，这样就可以将游戏的逻辑集中到自己的类中。

```
module fighter
{
	 /**
     * 主游戏容器
     */
    export class GameContainer extends egret.DisplayObjectContainer
    {
    	public constructor() {
            super();
            this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
        }
        /**初始化*/
        private onAddToStage(event:egret.Event){
            this.removeEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
            this.createGameScene();
        }
        /**创建游戏场景*/
        private createGameScene():void{}
    }
}
```

然后在GameApp.ts的onResourceLoadComplete方法中，创建GameContainer的实例：

```
//游戏的主类开始实例化
var gameContainer:fighter.GameContainer = new fighter.GameContainer();
this.addChild(gameContainer);
//下面的代码用于显示FPS等信息，可选
egret.Profiler.getInstance().run();
```

一般游戏都要从“开始按钮”开始，用户点击这个按钮，确定进入游戏。这里我们偷个懒，就用静态图片了，实际游戏中您可以根据设计方案，使用Egret的MovieClip实现一些动画等等。我们来修改GameContainer类：

```
/**开始按钮*/
private btnStart:egret.Bitmap;
/**创建游戏场景*/
private createGameScene():void{
    this.stageW = this.stage.stageWidth;
    this.stageH = this.stage.stageHeight;
    //开始按钮
    this.btnStart = fighter.createBitmapByName("btnStart");//开始按钮
    this.btnStart.x = (this.stageW-this.btnStart.width)/2;//居中定位
    this.btnStart.y = (this.stageH-this.btnStart.height)/2;//居中定位
    this.btnStart.touchEnabled = true;//开启触碰
    this.btnStart.addEventListener(egret.TouchEvent.TOUCH_TAP,this.gameStart,this);//点击按钮开始游戏
    this.addChild(this.btnStart);
}
```

运行项目，如果看到了这个按钮，表明我们这一步成功了。

滚动背景:
----------------------------

通过观察同类型的游戏，当飞机"行动"的时候，实际上是将下面的背景反向运动，形成视觉差，让我们感觉是飞机在运动。但我们又不可能真的做一个无限高的背景图片，让背景滚动永无边际，实际做法是用“首尾相接”的技巧，通过在有限的屏幕内，计算需要显示的图片数量，让这些图片首尾相接来运动，这样就可以实现“无缝”的过渡，让背景看起来永远在滚动。

观察我们素材目录中的bg.jpg，是用Photoshop做了特殊处理，顶部和底部是可以连接起来的。

素材已经满足需求，然后来看代码中如何实现。我们来创建一个类：BgMap.ts，它的实现如下：

```
module fighter
{
    /**
     * 可滚动的底图
     */
    export class BgMap extends egret.DisplayObjectContainer
    {
        /**图片引用*/
        private bmpArr:egret.Bitmap[];
        /**图片数量*/
        private rowCount:number;
        /**stage宽*/
        private stageW:number;
        /**stage高*/
        private stageH:number;
        /**纹理本身的高度*/
        private textureHeight:number;
        /**控制滚动速度*/
        private speed:number = 2;

        public constructor() {
            super();
            this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
        }
        /**初始化*/
        private onAddToStage(event:egret.Event){
            this.removeEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
            this.stageW = this.stage.stageWidth;
            this.stageH = this.stage.stageHeight;
            var texture:egret.Texture = RES.getRes("bgImage");
            this.textureHeight = texture.textureHeight;//保留原始纹理的高度，用于后续的计算
            this.rowCount = Math.ceil(this.stageH/this.textureHeight)+1;//计算在当前屏幕中，需要的图片数量
            this.bmpArr = [];
            //创建这些图片，并设置y坐标，让它们连接起来
            for(var i:number=0;i<this.rowCount;i++)
            {
                var bgBmp:egret.Bitmap = fighter.createBitmapByName("bgImage");
                bgBmp.y = this.textureHeight*i-(this.textureHeight*this.rowCount-this.stageH);
                this.bmpArr.push(bgBmp);
                this.addChild(bgBmp);
            }
        }
        /**开始滚动*/
        public start():void {
            this.removeEventListener(egret.Event.ENTER_FRAME,this.enterFrameHandler,this);
            this.addEventListener(egret.Event.ENTER_FRAME,this.enterFrameHandler,this);
        }
        /**逐帧运动*/
        private enterFrameHandler(event:egret.Event):void {
            for(var i:number=0;i<this.rowCount;i++)
            {
                var bgBmp:egret.Bitmap = this.bmpArr[i];
                bgBmp.y+=this.speed;
                //判断超出屏幕后，回到队首，这样来实现循环反复
                if(bgBmp.y > this.stageH) {
                    bgBmp.y = this.bmpArr[0].y-this.textureHeight;
                    this.bmpArr.pop();
                    this.bmpArr.unshift(bgBmp);
                }
            }
        }
        /**暂停滚动*/
        public pause():void {
            this.removeEventListener(egret.Event.ENTER_FRAME,this.enterFrameHandler,this);
        }
    }

}
```

然后修改GameContainer的createGameScene方法，将背景加入：

```
this.bg = new fighter.BgMap();//创建可滚动的背景
this.addChild(this.bg);
```

然后在btnStart的事件侦听函数中，增加bg.start调用：

```
/**游戏开始*/
private gameStart():void{
	this.bg.start();
}
```

运行项目，点击按钮，是否看到滚动的背景了？恭喜，这一步您也完成了。

创建飞机:
----------------------------

然后来分析一下如何创建飞机。飞机分两种：我的飞机和敌人的飞机，但基本属性是一致的，只是纹理和运动轨迹等方面有区别。我们来飞机创建一个类：Airplane.ts。

```
module fighter
{
    
    export class Airplane extends egret.DisplayObjectContainer
    {
        /**飞机位图*/
        private bmp:egret.Bitmap;
        /**创建子弹的时间间隔*/
        private fireDelay:number;
        /**定时射*/
        private fireTimer:egret.Timer;
        /**飞机生命值*/
        public blood:number = 10;

        public constructor(texture:egret.Texture,fireDelay:number) {
            super();
            this.fireDelay = fireDelay;
            this.bmp = new egret.Bitmap(texture);
            this.addChild(this.bmp);
            this.fireTimer = new egret.Timer(fireDelay);
            this.fireTimer.addEventListener(egret.TimerEvent.TIMER,this.createBullet,this);
        }
        /**开火*/
        public fire():void {
            this.fireTimer.start();
        }
        /**停火*/
        public stopFire():void {
            this.fireTimer.stop();
        }
        /**创建子弹*/
        private createBullet(evt:egret.TimerEvent):void {
            this.dispatchEventWith("createBullet");
        }
    }
}
```
> 注意上面的代码中，外部调用开火方法，即.fire()后，飞机实例将根据Timer的间隔来不断创建子弹，但创建子弹以及控制子弹运动等具体工作并不由飞机实现，飞机只是派发事件给外面的容器，由容器统一管理。

另外分析游戏，通过游戏的不断运行，不断有新的飞机被创建，以及被子弹击中的飞机需删除。为了有效控制对象数量，我们需要为飞机类加入工厂方法和对象池机制，做法如下：

```
private static cacheDict:Object = {};
/**生产*/
public static produce(textureName:string,fireDelay:number):fighter.Airplane
{
    if(fighter.Airplane.cacheDict[textureName]==null)
        fighter.Airplane.cacheDict[textureName] = [];
    var dict:fighter.Airplane[] = fighter.Airplane.cacheDict[textureName];
    var theFighter:fighter.Airplane;
    if(dict.length>0) {
        theFighter = dict.pop();
    } else {
        theFighter = new fighter.Airplane(RES.getRes(textureName),fireDelay);
    }
    theFighter.blood = 10;
    return theFighter;
}
/**回收*/
public static reclaim(theFighter:fighter.Airplane,textureName:string):void
{
    if(fighter.Airplane.cacheDict[textureName]==null)
        fighter.Airplane.cacheDict[textureName] = [];
    var dict:fighter.Airplane[] = fighter.Airplane.cacheDict[textureName];
    if(dict.indexOf(theFighter)==-1)
        dict.push(theFighter);
}
```

需要创建飞机的时候，调用produce方法，不需要的飞机实例通过reclaim方法回收，这样可以保持对象数量在一个稳定的水平。

创建子弹:
----------------------------

编写中...

让飞机和子弹运动起来:
----------------------------

编写中...

检测碰撞:
----------------------------

编写中...

发布和压缩:
----------------------------

- - -

作者:NeoGuo