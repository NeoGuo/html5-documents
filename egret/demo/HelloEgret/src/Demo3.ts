/**
 * Movieclip Demo
 */
class Demo3 {

    /**游戏启动后，会自动执行此方法*/
    public startGame():void {
        this.loadResource();
    }
    /**加载所需资源*/
    public loadResource():void {
        var loader:ns_egret.LoadingController = new ns_egret.LoadingController();
        loader.addResource("monkey.json", ns_egret.ResourceLoader.DATA_TYPE_BINARY);//加载描述文件
        loader.addResource("monkey.png", ns_egret.ResourceLoader.DATA_TYPE_IMAGE);//加载图片
        loader.addEventListener(ns_egret.ResourceLoader.LOAD_COMPLETE, this.onSpriteSheetLoadComplete, this);//事件侦听加载完成
        loader.load();//执行加载
    }
    /**精灵表加载完毕后即可使用*/
    private onSpriteSheetLoadComplete():void {
        var data = ns_egret.ResourceLoader.create("monkey.json").data;//获取描述
        data = JSON.parse(data);//将JSON字符串转换为Object
        var texture = ns_egret.TextureCache.getInstance().getTexture("monkey.png");//获取大图
        var monkey = new ns_egret.MovieClip(data, texture);//创建电影剪辑
        var stage = ns_egret.MainContext.instance.stage;//获取Stage引用
        stage.addChild(monkey);//添加到显示列表
        monkey.setInterval(1);//设置动画每帧的时间间隔，单位是毫秒，数值越小，动作越快
        monkey.gotoAndPlay("attack");
    }
}

//create app
var app = new Demo3();
