/**
 * 显示列表Demo
 */
class Demo7 extends egret.DisplayObjectContainer{

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
        RES.loadConfig("resources/resource.json","resources/");
        RES.loadGroup("demo7");
    }
    /**显示*/
    private onResourceLoadComplete():void {
        //和Flash机制类似，stage是所有显示对象的'根'，stage下面是一个树状的显示列表
        //同时Egret的显示列表相对于原生Flash也做了一些简化
        //显示对象容器，使用DisplayObjectContainer
        var container = new egret.DisplayObjectContainer();
        //容器的缩放，旋转，位移将影响到它下面的子节点(即包含的显示对象)
        container.scaleX = 0.2;
        container.scaleY = 0.2;
        //和Flash一样，用addChild方法把一个显示对象添加到显示列表
        this.addChild(container);
        //位图是显示对象，纹理不是
        var bitmap1 = new egret.Bitmap(RES.getRes("egretIcon"));
        container.addChild(bitmap1);
        //显示对象的位置和尺寸，相对于stage来说，也受到父容器的影响，也就是说每个显示对象容器，拥有自己的坐标系
        bitmap1.x = bitmap1.y = 50;
    }

}