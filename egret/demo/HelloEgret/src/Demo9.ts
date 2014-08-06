/**
 * 资源 Demo
 */
class Demo9 extends egret.DisplayObjectContainer{

    /**加载进度界面*/
    private loadingView:LoadingUI;
    /**测试用的位图*/
    private logo:egret.Bitmap;

    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.startGame,this);
    }

    /**游戏启动后，会自动执行此方法*/
    public startGame():void {

        //--------------------资源加载
        //使用RES模块，侦听GROUP_COMPLETE事件和GROUP_PROGRESS事件，可以同步显示加载进度，并继续执行加载完成后的逻辑
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE,this.onResourceLoadComplete,this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS,this.onResourceProgress,this);
        //如果存在多套不同分辨率的资源，您可以使用assets/480/,assets/640/这样的方式来设计素材目录结构加以区分，
        RES.loadConfig("resource/resource.json","resource/");//加载资源配置文件
        RES.loadGroup("preload");//加载某个资源group

        //-------------------设置加载进度界面
        this.loadingView  = new LoadingUI();
        this.stage.addChild(this.loadingView);
    }
    /**preload资源组加载进度*/
    private onResourceProgress(event:RES.ResourceEvent):void {
        this.loadingView.setProgress(event.itemsLoaded,event.itemsTotal);
    }
    /**显示*/
    private onResourceLoadComplete():void {
        this.stage.removeChild(this.loadingView);
        this.logo = new egret.Bitmap();//创建位图
        this.logo.texture = RES.getRes("egretIcon");//设置纹理
        this.addChild(this.logo);//添加到显示列表
    }

}