Egret框架入门第一步 - Tween的使用
===============

在Bitmap一节中，我们简单介绍过Tween的使用方法，如果要实现一段缓动动画，Tween无疑是最好的选择。除了可以用简洁的语法，实现复杂的动画队列之外，其实Tween还有一个强大的地方，就是可以用各种Ease函数，控制缓动的细节。

Egret库中默认集成了一些Ease实现，要使用它们，只需在参赛中传入即可，比如：

```
var tw = egret.Tween.get(this.logo,{loop:true});
tw.to({x:360,y:600},1000,egret.Ease.sineIn);
```

为了便于您理解各种Ease函数的实现效果，这里有一个Ease效果实时预览：

![github](https://raw.githubusercontent.com/NeoGuo/html5-documents/master/egret/images/tween_demo.png "Tween")

<iframe src="http://www.tech-mx.com/egret/tween/launcher/" width="480px" height="800px"></iframe>

* [点击这里查看Ease效果实时预览](http://www.tech-mx.com/egret/tween/launcher/)

除了可以使用内置的Ease，您也可以自定义Ease函数，在Tween中使用，比如：

```
/**自定义的Ease*/
private customEase (t:number):number {
    return Math.random()*t;
}
```
> 这个函数的含义在于，传入时间系数t(0-1)，返回一个经过计算的运动系数。如果你直接写return t，那意味着什么？没错，那就是一个匀速运动。
> 这里我们用随机数相乘一下，得到的结果就是，位置不停的闪动，当然这样写只是举例，可能没什么实际意义。
> 关于Ease的具体解释，可以参考[这里](http://zengrong.net/post/1151.htm).

上面那个例子的完整代码在这里：

```
class Demo11 extends egret.DisplayObjectContainer {

    /**测试用的位图*/
    private logo:egret.Bitmap;
    /**Ease组合*/
    private easeArr:any[];
    /**index*/
    private easeIndex:number = 0;
    /**label*/
    private easeLabel:egret.TextField;

    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.startGame,this);
    }

    /**游戏启动后，会自动执行此方法*/
    public startGame():void {
        this.loadResource();
    }
    /**加载所需资源*/
    private loadResource():void {
        //使用资源管理器加载资源
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE,this.onResourceLoadComplete,this);
        RES.loadConfig("resource/resource.json","resource/");
        RES.loadGroup("demo2");
    }
    /**加载完毕后即可使用*/
    private onResourceLoadComplete(event:RES.ResourceEvent):void {
        this.logo = new egret.Bitmap();//创建位图
        this.logo.texture = RES.getRes("egretIcon");//设置纹理
        this.addChild(this.logo);//添加到显示列表
        this.logo.scaleX = this.logo.scaleY = 0.4;
        this.logo.x = this.logo.y = 100;
        this.logo.anchorX = 0.5;
        this.logo.anchorY = 0.5;
        var btn:egret.Bitmap = new egret.Bitmap(RES.getRes("btn"));
        btn.x = (480-btn.width)/2;
        btn.y = 10;
        btn.touchEnabled = true;
        btn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.startAnimation,this);
        this.addChild(btn);
        this.easeArr = [];
        this.easeArr.push({name:"sineIn",ease:egret.Ease.sineIn});
        this.easeArr.push({name:"sineOut",ease:egret.Ease.sineOut});
        this.easeArr.push({name:"sineInOut",ease:egret.Ease.sineInOut});
        this.easeArr.push({name:"Custom",ease:this.customEase});
        this.easeArr.push({name:"backIn",ease:egret.Ease.backIn});
        this.easeArr.push({name:"backOut",ease:egret.Ease.backOut});
        this.easeArr.push({name:"backInOut",ease:egret.Ease.backInOut});
        this.easeArr.push({name:"circIn",ease:egret.Ease.circIn});
        this.easeArr.push({name:"circOut",ease:egret.Ease.circOut});
        this.easeArr.push({name:"circInOut",ease:egret.Ease.circInOut});
        this.easeArr.push({name:"bounceIn",ease:egret.Ease.bounceIn});
        this.easeArr.push({name:"bounceOut",ease:egret.Ease.bounceOut});
        this.easeArr.push({name:"bounceInOut",ease:egret.Ease.bounceInOut});
        this.easeArr.push({name:"elasticIn",ease:egret.Ease.elasticIn});
        this.easeArr.push({name:"elasticOut",ease:egret.Ease.elasticOut});
        this.easeArr.push({name:"elasticInOut",ease:egret.Ease.elasticInOut});
        this.easeArr.push({name:"quadIn",ease:egret.Ease.quadIn});
        this.easeArr.push({name:"quadOut",ease:egret.Ease.quadOut});
        this.easeArr.push({name:"quadInOut",ease:egret.Ease.quadInOut});
        this.easeArr.push({name:"cubicIn",ease:egret.Ease.cubicIn});
        this.easeArr.push({name:"cubicOut",ease:egret.Ease.cubicOut});
        this.easeArr.push({name:"cubicInOut",ease:egret.Ease.cubicInOut});
        this.easeArr.push({name:"quartIn",ease:egret.Ease.quartIn});
        this.easeArr.push({name:"quartOut",ease:egret.Ease.quartOut});
        this.easeArr.push({name:"quartInOut",ease:egret.Ease.quartInOut});
        this.easeArr.push({name:"quintIn",ease:egret.Ease.quintIn});
        this.easeArr.push({name:"quintOut",ease:egret.Ease.quintOut});
        this.easeArr.push({name:"quintInOut",ease:egret.Ease.quintInOut});
        this.easeLabel = new egret.TextField();
        this.easeLabel.x = btn.x;
        this.easeLabel.y = btn.y+40;
        this.addChild(this.easeLabel);
    }
    /**自定义的Ease*/
    private customEase (t:number):number {
        return Math.random()*t;
    }
    /**动画*/
    private startAnimation(evt:egret.TouchEvent):void {
        this.logo.x = this.logo.y = 100;
        this.logo.rotation = 0;
        egret.Tween.removeTweens(this.logo);
        var tw = egret.Tween.get(this.logo,{loop:true});
        var easeObj = this.easeArr[this.easeIndex];
        this.easeLabel.text = easeObj.name;
        tw.to({x:360,y:600},1000,easeObj.ease).wait(1000).to({x:100,y:100},1000,easeObj.ease).wait(1000);
        this.easeIndex++;
        if(this.easeIndex>=this.easeArr.length)
            this.easeIndex = 0;
    }
}
```

- - -

[上一篇:资源](https://github.com/NeoGuo/html5-documents/blob/master/egret/09-resource.md)