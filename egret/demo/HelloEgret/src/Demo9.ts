/**
 * 资源 Demo
 */
class Demo9 {

    /**测试用的位图*/
    private logo:ns_egret.Bitmap;

    /**游戏启动后，会自动执行此方法*/
    public startGame():void {
        //-------------------设置屏幕适配策略
        //获取游戏在所处的环境中的容器（环境不同，容器也不同）
        var container = new ns_egret.EqualToFrame();
        //下面设定的是游戏的运行尺寸，为了桌面调试方便，下面进行了一个判断，如果是移动设备，则设置尺寸为和浏览器同等宽度；如果是
        //桌面浏览器，则设置一个固定宽度
        //您可以修改FixedSize()的尺寸，来观察实际效果
        var content = ns_egret.Browser.getInstance().isMobile ? new ns_egret.FixedWidth() : new ns_egret.FixedSize(480, 800);
        //创建策略对象
        var policy = new ns_egret.ResolutionPolicy(container, content);
        //所谓DesignSize，就是您设计游戏UI时候所依据的分辨率，因为通常情况下我们不可能为所有分辨率设计不同的UI，只能设计一到两种，
        //然后通过缩放来适应所有的情况。所以下面的设定，请和您设计的素材依据的分辨率保持一致。
        ns_egret.StageDelegate.getInstance().setDesignSize(480, 800, policy);

        //--------------------资源加载
        //设置素材的根目录，如果存在多套不同分辨率的资源，您可以使用assets/480/,assets/640/这样的方式来设计素材目录结构加以区分，
        //如果只有一套资源，也可以不遵守assets/480/这样的规则，将prefix指向您自己的素材目录即可
        ns_egret.ResourceLoader.prefix = "assets/480/";
        var loadingController = new ns_egret.LoadingController();
        //资源加载，将根据设定的ResourceLoader.prefix来获取，您不用重复传入完整路径，只需传入相对于资源根目录的路径
        loadingController.addResource("egret_icon.png", ns_egret.ResourceLoader.DATA_TYPE_IMAGE);
        //设置加载显示
        loadingController.setLoadingView(new LoadingUI());
        loadingController.addEventListener(ns_egret.ResourceLoader.LOAD_COMPLETE, this.onResourceLoadComplete, this);
        loadingController.load();
    }
    /**显示*/
    private onResourceLoadComplete():void {
        var stage = ns_egret.MainContext.instance.stage;//获取Stage引用
        this.logo = new ns_egret.Bitmap();//创建位图
        this.logo.texture = ns_egret.TextureCache.getInstance().getTexture("egret_icon.png");//设置纹理
        stage.addChild(this.logo);//添加到显示列表
    }

}

//create app
var app = new Demo9();