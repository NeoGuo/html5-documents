/**
 * Event Demo
 */
class Demo8 {

    /**游戏启动后，会自动执行此方法*/
    public startGame():void {
        this.loadResource();
    }
    /**加载所需资源*/
    public loadResource():void {
        //跟在Flash中类似，您要用位图，就要先加载进来
        var loader:ns_egret.LoadingController = new ns_egret.LoadingController();//使用LoadingController来加载和管理资源
        loader.addResource("egret_icon.png", ns_egret.ResourceLoader.DATA_TYPE_IMAGE);//传入资源地址和类型，注意默认资源根目录是assets/480
        loader.addEventListener(ns_egret.ResourceLoader.LOAD_COMPLETE, this.initDefaultView, this);//事件侦听加载完成
        loader.load();//执行加载
    }
    /**显示*/
    private initDefaultView():void {
        var stage = ns_egret.MainContext.instance.stage;
        var container = new ns_egret.DisplayObjectContainer();
        container.touchChildren = true;//等同于Flash的mouseChildren
        container.touchEnabled = true;//设置容器是否响应Touch交互
        var bitmap1 = ns_egret.Bitmap.initWithTexture(ns_egret.TextureCache.getInstance().getTexture("egret_icon.png"));
        bitmap1.name = "myBitmap";
        bitmap1.touchEnabled = true;
        container.addChild(bitmap1);
        container.name = "myContainer";
        container.x = container.y = 100;
        stage.addChild(container);
        container.addEventListener(ns_egret.TouchEvent.TOUCH_TAP,this.touchHandler,container);
    }
    /**事件侦听处理*/
    private touchHandler(event:ns_egret.TouchEvent):void {
        var msg:string = event.type;
        msg += "\n"+event.stageX+","+event.stageY;
        msg += "\n"+event.localX+","+event.localY;
        msg += "\n"+event.currentTarget.name+","+event.target.name;
        alert(msg);
    }
}

//create app
var app = new Demo8();