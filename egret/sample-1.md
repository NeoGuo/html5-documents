Egret框架入门教程 - 使用Egret创建一个打飞机的游戏
===============

这里我们用Egret框架来实现一个打飞机的游戏（请忽略作者简陋的美术设计，游戏的诸多细节也存在缺失，不过基本可以体现出Egret的一些特性了）。

游戏界面截图：

![github](https://raw.githubusercontent.com/NeoGuo/html5-documents/master/egret/images/fighter_01.jpg "打飞机")

* [点击这里查看演示](http://www.tech-mx.com/egret/fighter/launcher/)
* [本教程的源码下载](https://github.com/NeoGuo/html5-documents/tree/master/egret/demo/Fighter/)

注意事项：

1. 本教程假设您已经掌握了Egret的基本用法，包括：显示列表，显示对象(位图，容器等等)，事件处理，素材配置，项目的创建，编译，发布等等，这些知识您可以从[文档中心](http://docs.egret-labs.org/)学到，为了避免在学习教程的过程中"卡壳"，请务必先学好基础知识。
2. 教程中一些变量可能没写全，源码中是有的，发现问题请先对比源码，回头我再改改教程，对不住了

下面是制作过程：

创建项目:
----------------------------

使用Egret命令行，创建一个新项目"Fighter":
```
cd {workspace}
egret create Fighter
```

Egret会根据内置模板创建项目的基本目录结构，我们要编写的代码将放置在src下面，而素材将放置在resource下面。要运行和测试项目，需要打开launcher目录下的index.html，不过绝对不能双击打开，[需要用一个HTTP服务器（您自配的或者Egret自带的）来运行](https://github.com/NeoGuo/html5-documents/blob/master/egret/01-hello-world.md)。目前我们还未对项目进行修改，运行项目会看到默认的Egret界面。

准备素材:
----------------------------

千里之行，始于足下，写这个游戏我们先从整理素材做起。或许正规的流程应该是先策划，然后是UI设计，然后是反复论证...不过我们这里就省略了，我们的重点是学习Egret，做到这一点就足够了。本教程所用的素材是从网上搜集，如有侵权，请告知，将及时删除。

![github](https://raw.githubusercontent.com/NeoGuo/html5-documents/master/egret/images/fighter_02.jpg "打飞机")

您可以从本教程配套的源码目录中，resource目录下找到这些素材。

将这些素材放到resource/assets目录下面，然后修改resource.json文件，将素材配置好，方便在代码中引用：

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

回到GameContainer类，来创建飞机实例：

```
/**我的飞机*/
private myFighter:fighter.Airplane;
/**敌人的飞机*/
private enemyFighters:fighter.Airplane[] = [];
/**触发创建敌机的间隔*/
private enemyFightersTimer:egret.Timer = new egret.Timer(1000);
```
> 我的飞机就1个，所以是一个实例，但敌机是N个，我们创建数组来包含敌机；Timer用于控制创建敌机的时间间隔，间隔越小，敌机越多。

修改createGameScene方法，增加创建我的飞机的代码：

```
//我的飞机
this.myFighter = new fighter.Airplane(RES.getRes("f1"),100);
this.myFighter.y = this.stageH-this.myFighter.height-50;
this.addChild(this.myFighter);
```

然后在gameStart方法中，增加创建敌机的机制：

```
this.myFighter.fire();//我的飞机开火
this.enemyFightersTimer.addEventListener(egret.TimerEvent.TIMER,this.createEnemyFighter,this);
this.enemyFightersTimer.start();
```
创建敌机的方法是createEnemyFighter：

```
/**创建敌机*/
private createEnemyFighter(evt:egret.TimerEvent):void{
    var enemyFighter:fighter.Airplane = fighter.Airplane.produce("f2",1000);
    enemyFighter.x = Math.random()*(this.stageW-enemyFighter.width);//随机坐标
    enemyFighter.y = -enemyFighter.height-Math.random()*300;//随机坐标
    enemyFighter.fire();
    this.addChildAt(enemyFighter,this.numChildren-1);
    this.enemyFighters.push(enemyFighter);
}
```

创建子弹:
----------------------------

首先创建子弹类Bullet.ts，同飞机类似，也采用对象池机制：

```
module fighter
{
    
    export class Bullet extends egret.Bitmap
    {
        private static cacheDict:Object = {};
        /**生产*/
        public static produce(textureName:string):fighter.Bullet
        {
            if(fighter.Bullet.cacheDict[textureName]==null)
                fighter.Bullet.cacheDict[textureName] = [];
            var dict:fighter.Bullet[] = fighter.Bullet.cacheDict[textureName];
            var bullet:fighter.Bullet;
            if(dict.length>0) {
                bullet = dict.pop();
            } else {
                bullet = new fighter.Bullet(RES.getRes(textureName));
            }
            bullet.textureName = textureName;
            return bullet;
        }
        /**回收*/
        public static reclaim(bullet:fighter.Bullet,textureName:string):void
        {
            if(fighter.Bullet.cacheDict[textureName]==null)
                fighter.Bullet.cacheDict[textureName] = [];
            var dict:fighter.Bullet[] = fighter.Bullet.cacheDict[textureName];
            if(dict.indexOf(bullet)==-1)
                dict.push(bullet);
        }

        public textureName:string;

        public constructor(texture:egret.Texture) {
            super(texture);
        }
    }
}
```

子弹的创建是由侦听"createBullet"事件来驱动的，所以为我的飞机以及敌机都添加事件侦听：

```
this.myFighter.addEventListener("createBullet",this.createBulletHandler,this);
enemyFighter.addEventListener("createBullet",this.createBulletHandler,this);//在createEnemyFighter方法中修改
```

创建的子弹分两种，即我的子弹和敌人的子弹，放在两个数组中：

```
/**我的子弹*/
private myBullets:fighter.Bullet[] = [];
/**敌人的子弹*/
private enemyBullets:fighter.Bullet[] = [];
```

在方法createBulletHandler中实现创建子弹的过程：

```
/**创建子弹(包括我的子弹和敌机的子弹)*/
private createBulletHandler(evt:egret.Event):void{
    var bullet:fighter.Bullet;
    if(evt.target==this.myFighter) {
        for(var i:number=0;i<2;i++) {
            bullet = fighter.Bullet.produce("b1");
            bullet.x = i==0?(this.myFighter.x+10):(this.myFighter.x+this.myFighter.width-22);
            bullet.y = this.myFighter.y+30;
            this.addChildAt(bullet,this.numChildren-1-this.enemyFighters.length);
            this.myBullets.push(bullet);
        }
    } else {
        var theFighter:fighter.Airplane = evt.target;
        bullet = fighter.Bullet.produce("b2");
        bullet.x = theFighter.x+28;
        bullet.y = theFighter.y+10;
        this.addChildAt(bullet,this.numChildren-1-this.enemyFighters.length);
        this.enemyBullets.push(bullet);
    }
}
```

让飞机和子弹运动起来:
----------------------------

到目前为止，飞机和子弹都可以创建了，但还无法运动，我们侦听enterFrame事件，集中处理对象的运动。在gameStart方法中增加：

```
this.addEventListener(egret.Event.ENTER_FRAME,this.gameViewUpdate,this);
```

gameViewUpdate方法，负责处理飞机和子弹的运动：

```
/**游戏画面更新*/
private gameViewUpdate(evt:egret.Event):void{
    //为了防止FPS下降造成回收慢，生成快，进而导致DRAW数量失控，需要计算一个系数，当FPS下降的时候，让运动速度加快
    var nowTime:number = egret.getTimer();
    var fps:number = 1000/(nowTime-this._lastTime);
    this._lastTime = nowTime;
    var speedOffset:number = 60/fps;
    //我的子弹运动
    var i:number = 0;
    var bullet:fighter.Bullet;
    var myBulletsCount:number = this.myBullets.length;
    var delArr:any[] = [];
    for(;i<myBulletsCount;i++) {
        bullet = this.myBullets[i];
        bullet.y -= 12*speedOffset;
        if(bullet.y<-bullet.height)
            delArr.push(bullet);
    }
    for(i=0;i<delArr.length;i++) {//回收不显示的子弹
        bullet = delArr[i];
        this.removeChild(bullet);
        fighter.Bullet.reclaim(bullet,"b1");
        this.myBullets.splice(this.myBullets.indexOf(bullet),1);
    }
    delArr = [];
    //敌人飞机运动
    var theFighter:fighter.Airplane;
    var enemyFighterCount:number = this.enemyFighters.length;
    for(i=0;i<enemyFighterCount;i++) {
        theFighter = this.enemyFighters[i];
        theFighter.y += 4*speedOffset;
        if(theFighter.y>this.stageH)
            delArr.push(theFighter);
    }
    for(i=0;i<delArr.length;i++) {//回收不显示的飞机
        theFighter = delArr[i];
        this.removeChild(theFighter);
        fighter.Airplane.reclaim(theFighter,"f2");
        theFighter.removeEventListener("createBullet",this.createBulletHandler,this);
        theFighter.stopFire();
        this.enemyFighters.splice(this.enemyFighters.indexOf(theFighter),1);
    }
    delArr = [];
    //敌人子弹运动
    var enemyBulletsCount:number = this.enemyBullets.length;
    for(i=0;i<enemyBulletsCount;i++) {
        bullet = this.enemyBullets[i];
        bullet.y += 8*speedOffset;
        if(bullet.y>this.stageH)
            delArr.push(bullet);
    }
    for(i=0;i<delArr.length;i++) {//回收不显示的子弹
        bullet = delArr[i];
        this.removeChild(bullet);
        fighter.Bullet.reclaim(bullet,"b2");
        this.enemyBullets.splice(this.enemyBullets.indexOf(bullet),1);
    }
}
```

敌人的飞机的位置，是系统确定的，但我的飞机的位置，则是您手指的位置确定的，所以需要侦听touch事件，及时更新我的飞机的坐标。

```
this.touchEnabled=true;
this.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.touchHandler,this);
/**响应Touch*/
private touchHandler(evt:egret.TouchEvent):void{
    if(evt.type==egret.TouchEvent.TOUCH_MOVE)
    {
        var tx:number = evt.localX;
        tx = Math.max(0,tx);
        tx = Math.min(this.stageW-this.myFighter.width,tx);
        this.myFighter.x = tx;
    }
}

```

现在运行项目，可以看见满天飞的飞机和子弹了，是不是有点小激动了？但现在您的子弹对敌机是视而不见的，下面我们来增加碰撞检测的代码： 

检测碰撞:
----------------------------

我们创建一个方法gameHitTest，来集中处理各个对象的碰撞。这个方法在gameViewUpdate中调用，以便实时地检测到碰撞：

```
/**游戏碰撞检测*/
private gameHitTest():void {
    var i:number,j:number;
    var bullet:fighter.Bullet;
    var theFighter:fighter.Airplane;
    var myBulletsCount:number = this.myBullets.length;
    var enemyFighterCount:number = this.enemyFighters.length;
    var enemyBulletsCount:number = this.enemyBullets.length;
    //将需消失的子弹和飞机记录
    var delBullets:fighter.Bullet[] = [];
    var delFighters:fighter.Airplane[] = [];
    //我的子弹可以消灭敌机
    for(i=0;i<myBulletsCount;i++) {
        bullet = this.myBullets[i];
        for(j=0;j<enemyFighterCount;j++) {
            theFighter = this.enemyFighters[j];
            if(fighter.GameUtil.hitTest(theFighter,bullet)) {
                theFighter.blood -= 2;
                if(delBullets.indexOf(bullet)==-1)
                    delBullets.push(bullet);
                if(theFighter.blood<=0 && delFighters.indexOf(theFighter)==-1)
                    delFighters.push(theFighter);
            }
        }
    }
    //敌人的子弹可以减我血
    for(i=0;i<enemyBulletsCount;i++) {
        bullet = this.enemyBullets[i];
        if(fighter.GameUtil.hitTest(this.myFighter,bullet)) {
            this.myFighter.blood -= 1;
            if(delBullets.indexOf(bullet)==-1)
                delBullets.push(bullet);
        }
    }
    //敌机的撞击可以消灭我
    for(i=0;i<enemyFighterCount;i++) {
        theFighter = this.enemyFighters[i];
        if(fighter.GameUtil.hitTest(this.myFighter,theFighter)) {
            this.myFighter.blood -= 10;
        }
    }
    if(this.myFighter.blood<=0) {
        this.gameStop();
    } else {
        while(delBullets.length>0) {
            bullet = delBullets.pop();
            this.removeChild(bullet);
            if(bullet.textureName=="b1")
                this.myBullets.splice(this.myBullets.indexOf(bullet),1);
            else
                this.enemyBullets.splice(this.enemyBullets.indexOf(bullet),1);
            fighter.Bullet.reclaim(bullet,bullet.textureName);
        }
        this.myScore += delFighters.length;
        while(delFighters.length>0) {
            theFighter = delFighters.pop();
            theFighter.stopFire();
            theFighter.removeEventListener("createBullet",this.createBulletHandler,this);
            this.removeChild(theFighter);
            this.enemyFighters.splice(this.enemyFighters.indexOf(theFighter),1);
            fighter.Airplane.reclaim(theFighter,"f2");
        }
    }
}
```

在gameStop方法中，结束游戏：

```
/**游戏结束*/
private gameStop():void{
    this.addChild(this.btnStart);
    this.bg.pause();
    this.removeEventListener(egret.Event.ENTER_FRAME,this.gameViewUpdate,this);
    this.removeEventListener(egret.TouchEvent.TOUCH_MOVE,this.touchHandler,this);
    this.myFighter.stopFire();
    this.myFighter.removeEventListener("createBullet",this.createBulletHandler,this);
    this.enemyFightersTimer.removeEventListener(egret.TimerEvent.TIMER,this.createEnemyFighter,this);
    this.enemyFightersTimer.stop();
    //清理子弹
    var i:number = 0;
    var bullet:fighter.Bullet;
    while(this.myBullets.length>0) {
        bullet = this.myBullets.pop();
        this.removeChild(bullet);
        fighter.Bullet.reclaim(bullet,"b1");
    }
    while(this.enemyBullets.length>0) {
        bullet = this.enemyBullets.pop();
        this.removeChild(bullet);
        fighter.Bullet.reclaim(bullet,"b2");
    }
    //清理飞机
    var theFighter:fighter.Airplane;
    while(this.enemyFighters.length>0) {
        theFighter = this.enemyFighters.pop();
        theFighter.stopFire();
        theFighter.removeEventListener("createBullet",this.createBulletHandler,this);
        this.removeChild(theFighter);
        fighter.Airplane.reclaim(theFighter,"f2");
    }
}
```

这时运行项目，您就可以体验消灭敌机的乐趣了。

成绩展示:
----------------------------

现在我们增加成绩显示。新增类ScorePanel.ts，用文本显示成绩数值：

```
module fighter
{
    /**
     * 成绩显示
     */
    export class ScorePanel extends egret.Sprite
    {
        private txt:egret.TextField;

        public constructor() {
            super();
            var g:egret.Graphics = this.graphics;
            g.beginFill(0x000000,0.8);
            g.drawRect(0,0,400,200);
            g.endFill();
            this.txt = new egret.TextField();
            this.txt.width = 400;
            this.txt.height = 200;
            this.txt.textAlign = "center";
            this.txt.textColor = 0xFFFFFF;
            this.txt.size = 24;
            this.txt.y = 60;
            this.addChild(this.txt);
        }

        public showScore(value:number):void {
            var msg:string = "您的成绩是:\n"+value+"\n再来一次吧";
            this.txt.text = msg;
        }
    }
}
```

在gameStop方法中，增加显示成绩的代码：

```
//显示成绩
this.scorePanel.showScore(this.myScore);
this.scorePanel.x = (this.stageW-this.scorePanel.width)/2;
this.scorePanel.y = 100;
this.addChild(this.scorePanel);
```

发布和压缩:
----------------------------

如果只是测试，用build命令就可以，但如果发布就要用publish命令了，即：

```
egret publish Fighter
```

publish的好处是，将使用Google压缩工具，将Egret框架和您自身项目分散的js文件集中编译到一个game_min.js中，而且是做了压缩混淆的。这样一方面可以大大加快游戏启动速度，一方面让代码失去了可读性，有利于版权的保护。如果您的游戏要上线，记得使用这个命令哦。

WEBGL测试:
----------------------------

在Egret 1.0 RC2的版本中，已经增加了对WebGL的支持，所以我就改了一下打飞机的代码，感受一下性能方面的差异

* [普通Canvas渲染](http://www.tech-mx.com/egret/fighter/crazy/)
* [WebGL渲染](http://www.tech-mx.com/egret/fighter/crazy/?m=webgl)

请使用支持WebGL的浏览器观看，比如Chrome

*想在您的项目中开启WebGL?*

因为对WebGL的支持还处于测试阶段，所以WebGL是默认关闭的，您可以打开launcher/egret_loader.js，找到第78行

```
//WebGL是egret的Beta特性，默认关闭
if(false){// egret.WebGLUtils.checkCanUseWebGL()) {
```

改成```if(egret.WebGLUtils.checkCanUseWebGL()) {```即可
这样如果浏览器支持，就会自动开启WebGL渲染机制。

- - -

作者:NeoGuo