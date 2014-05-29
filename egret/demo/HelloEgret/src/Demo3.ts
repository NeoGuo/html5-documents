/**
 * Movieclip Demo
 */
class Demo3 extends egret.DisplayObjectContainer {

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
        RES.loadGroup("demo3");
    }
    /**加载完毕后即可使用*/
    private onResourceLoadComplete():void {
        var data = RES.getRes("monkey_json");//获取描述
        var texture = RES.getRes("monkey_png");//获取大图
        var monkey = new egret.MovieClip(data, texture);//创建电影剪辑
        this.addChild(monkey);//添加到显示列表
        monkey.setInterval(1);//设置动画每帧的时间间隔，单位是毫秒，数值越小，动作越快
        monkey.gotoAndPlay("stand");
    }
}