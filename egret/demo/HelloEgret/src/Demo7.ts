/**
 * 显示列表Demo
 */
class Demo7 {

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
        //和Flash机制类似，stage是所有显示对象的'根'，stage下面是一个树状的显示列表
        //同时Egret的显示列表相对于原生Flash也做了一些简化
        var stage = ns_egret.MainContext.instance.stage;
        //显示对象容器，使用DisplayObjectContainer
        var container = new ns_egret.DisplayObjectContainer();
        //容器的缩放，旋转，位移将影响到它下面的子节点(即包含的显示对象)
        container.scaleX = 0.2;
        container.scaleY = 0.2;
        //和Flash一样，用addChild方法把一个显示对象添加到显示列表
        stage.addChild(container);
        //位图是显示对象，纹理不是
        var bitmap1 = ns_egret.Bitmap.initWithTexture(ns_egret.TextureCache.getInstance().getTexture("egret_icon.png"));
        container.addChild(bitmap1);
        //显示对象的位置和尺寸，相对于stage来说，也受到父容器的影响，也就是说每个显示对象容器，拥有自己的坐标系
        bitmap1.x = bitmap1.y = 50;
    }

}

//create app
var app = new Demo7();