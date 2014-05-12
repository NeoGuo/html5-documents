/**
 * 位图Demo
 */
class Demo2 {

    /**测试用的位图*/
    private logo:ns_egret.Bitmap;

    /**游戏启动后，会自动执行此方法*/
    public startGame():void {
        this.loadResource();
    }
    /**加载所需资源*/
    public loadResource():void {
        //跟在Flash中类似，您要用位图，就要先加载进来
        var loader:ns_egret.LoadingController = new ns_egret.LoadingController();//使用LoadingController来加载和管理资源
        loader.addResource("egret_icon.png", ns_egret.ResourceLoader.DATA_TYPE_IMAGE);//传入资源地址和类型，注意默认资源根目录是assets/480
        loader.addEventListener(ns_egret.ResourceLoader.LOAD_COMPLETE, this.onResourceLoadComplete, this);//事件侦听加载完成
        loader.load();//执行加载
    }
    /**加载完毕后即可使用*/
    private onResourceLoadComplete():void {
        var stage = ns_egret.MainContext.instance.stage;//获取Stage引用
        this.logo = new ns_egret.Bitmap();//创建位图
        this.logo.texture = ns_egret.TextureCache.getInstance().getTexture("egret_icon.png");//设置纹理
        stage.addChild(this.logo);//添加到显示列表
        this.startAnimation();//动画
        this.loadSpriteSheet();//加载精灵表
    }
    /**动画*/
    private startAnimation():void {
        this.logo.rotation = 0;
        var offsetX:number = this.logo.width/2;
        var offsetY:number = this.logo.height/2;
        this.logo.x = offsetX;
        this.logo.y = offsetY;
        this.logo.anchorPointX = offsetX;
        this.logo.anchorPointY = offsetY;
        var tw = ns_egret.Tween.get(this.logo);
        tw.to({rotation:360},500);
        tw.to({x:280,y:offsetY},500).to({x:280,y:300},500).to({x:offsetX,y:300},500).to({x:offsetX,y:offsetY},500);
        tw.call(this.startAnimation, this);
    }
    /**加载精灵表*/
    private loadSpriteSheet():void {
        var loader:ns_egret.LoadingController = new ns_egret.LoadingController();
        loader.addResource("icons.json", ns_egret.ResourceLoader.DATA_TYPE_BINARY);//加载描述文件
        loader.addResource("icons.png", ns_egret.ResourceLoader.DATA_TYPE_IMAGE);//加载图片
        loader.addEventListener(ns_egret.ResourceLoader.LOAD_COMPLETE, this.onSpriteSheetLoadComplete, this);//事件侦听加载完成
        loader.load();//执行加载
    }
    /**精灵表加载完毕后即可使用*/
    private onSpriteSheetLoadComplete():void {
        var data = ns_egret.ResourceLoader.create("icons.json").data;//获取描述
        data = JSON.parse(data);//将JSON字符串转换为Object
        //console.debug(typeof data);
        //console.debug(data);
        var texture = ns_egret.TextureCache.getInstance().getTexture("icons.png");//获取大图
        var spriteSheet = new ns_egret.SpriteSheet(data);//创建精灵表
        var bitmap = new ns_egret.Bitmap();
        bitmap.texture = texture;
        bitmap.spriteFrame = spriteSheet.getFrame("activity_10.png");//从精灵表中获取某一项
        bitmap.x = 100;
        bitmap.y = 100;
        var stage = ns_egret.MainContext.instance.stage;//获取Stage引用
        stage.addChild(bitmap);
    }
}
//create app
var app = new Demo2();