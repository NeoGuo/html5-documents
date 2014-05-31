/**
 * Sound Demo
 */
class Demo6 extends egret.DisplayObjectContainer {

    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.startGame, this);
    }

    /**游戏启动后，会自动执行此方法*/
    public startGame():void {
        this.initDefaultText();
        this.loadResource();
    }

    /**显示文本*/
    private initDefaultText():void {
        var label1 = new egret.TextField();
        label1.textColor = 0xffffff;
        label1.text = "演示声音如何播放";
        this.addChild(label1);
    }

    /**加载所需资源*/
    public loadResource():void {
        //使用资源管理器加载资源
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.loadConfig("resources/resource.json", "resources/");
        RES.loadGroup("demo6");
    }

    /**播放声音*/
    private onResourceLoadComplete():void {
        //获取音乐文件
        var sound:egret.Sound = RES.getRes("sfx_die");
        //播放音乐文件
        sound.play();
        //3秒后音乐播放结束
        egret.Ticker.getInstance().setTimeout(function () {
            //音乐播放结束
            sound.stop();
        }, this, 3000);
    }
}