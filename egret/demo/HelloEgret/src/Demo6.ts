/**
 * Sound Demo
 */
class Demo6 {

    /**游戏启动后，会自动执行此方法*/
    public startGame():void {
        this.initDefaultText();
        this.initSound();
    }
    /**显示文本*/
    private initDefaultText():void {
        var label1 = new ns_egret.TextField();
        label1.textColor = 0xffffff;
        label1.text = "演示声音如何播放";
        var stage = ns_egret.MainContext.instance.stage;
        stage.addChild(label1);
    }
    /**播放声音*/
    private initSound():void {
        var soundContext:ns_egret.SoundContext = ns_egret.SoundContext.getInstance();//Egret中处理声音的是SoundContext
        //soundContext.preloadSound("sfx_die.ogg");//可以预加载声音，以便需要的时候立刻播放
        var soundPath:string = "sfx_die";//声音的前缀
        if(this.checkSoundCanPlay("ogg"))//根据支持情况设置声音的后缀
            soundPath += ".ogg";
        else if(this.checkSoundCanPlay("mp3"))
            soundPath += ".mp3";
        else
            soundPath += ".wav";
        soundContext.playMusic(soundPath,true);//播放声音，第二个参数决定是否重复
        ns_egret.Ticker.getInstance().callLater(function (){
            soundContext.stopMusic(true);//停止播放
        },this,3000);
        console.info("music is playing",soundContext instanceof ns_egret.HTML5SoundContext);
    }
    /**判断格式是否支持,format可以传递：ogg,mp3,wav*/
    private checkSoundCanPlay(format:String):boolean {
        var au = document.createElement('audio');
        var _check = function (typeStr) {
            var result = au.canPlayType(typeStr);
            return result != "no" && result != "";
        };
        if (au.canPlayType) {
            if(format=="mp3") {
                return _check("audio/mpeg");
            } else if(format=="ogg") {
                return _check('audio/ogg; codecs="vorbis"');
            } else if(format=="wav") {
                return _check('audio/wav; codecs="1"');
            } else {
                return false;
            }
        }
        return false;
    }
}

//create app
var app = new Demo6();