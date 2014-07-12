/**
 * 位图Demo
 */
class Demo2 extends egret.DisplayObjectContainer {

    /**测试用的位图*/
    private logo:egret.Bitmap;

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
        this.startAnimation();//动画
        this.startSpriteSheet();
    }
    /**动画*/
    private startAnimation():void {
        this.logo.rotation = 0;
        var offsetX:number = this.logo.width/2;
        var offsetY:number = this.logo.height/2;
        this.logo.x = offsetX;
        this.logo.y = offsetY;
        this.logo.anchorX = 0.5;
        this.logo.anchorY = 0.5;
        var tw = egret.Tween.get(this.logo);
        tw.to({rotation:360},500);
        tw.to({x:280,y:offsetY},500).to({x:280,y:300},500).to({x:offsetX,y:300},500).to({x:offsetX,y:offsetY},500);
        tw.call(this.startAnimation, this);
    }
    /**使用精灵表*/
    private startSpriteSheet():void {
        var bitmap = new egret.Bitmap();
        bitmap.texture = RES.getRes("icons.activity_10");//从精灵表中获取某一项
        bitmap.x = 100;
        bitmap.y = 100;
        this.addChild(bitmap);
    }
}