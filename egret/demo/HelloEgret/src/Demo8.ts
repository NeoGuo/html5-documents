/**
 * Event Demo
 */
class Demo8 extends egret.DisplayObjectContainer{

    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.startGame,this);
    }

    /**游戏启动后，会自动执行此方法*/
    public startGame():void {
        this.loadResource();
    }
    /**加载所需资源*/
    public loadResource():void {
        //使用资源管理器加载资源
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE,this.onResourceLoadComplete,this);
        RES.loadConfig("resource/resource.json","resource/");
        RES.loadGroup("demo8");
    }
    /**显示*/
    private onResourceLoadComplete():void {
        var container = new egret.DisplayObjectContainer();
        container.touchChildren = true;//等同于Flash的mouseChildren
        container.touchEnabled = true;//设置容器是否响应Touch交互
        var bitmap1 = new egret.Bitmap(RES.getRes("egretIcon"));
        bitmap1.name = "myBitmap";
        bitmap1.touchEnabled = true;
        container.addChild(bitmap1);
        container.name = "myContainer";
        container.x = container.y = 100;
        this.addChild(container);
        container.addEventListener(egret.TouchEvent.TOUCH_TAP,this.touchHandler,container);
    }
    /**事件侦听处理*/
    private touchHandler(event:egret.TouchEvent):void {
        var msg:string = event.type;
        msg += "\n"+event.stageX+","+event.stageY;
        msg += "\n"+event.localX+","+event.localY;
        msg += "\n"+event.currentTarget.name+","+event.target.name;
        alert(msg);
    }
}