Egret框架入门第一步 - 声音
===============

声音也是游戏里的一个必备因素，包括背景音乐，动作音效等等。在Egret中负责声音处理的是SoundContext类，准确的说，是SoundContext的继承者（比如HTML5SoundContext类）。在第四小节中我们介绍过，Egret是一个跨平台的解决方案(虽然目前尚未完全实现)，我们目前主要工作在它对HTML5的支持上，对应到声音上，我们使用的是HTML5SoundContext。

如果您具备一些HTML5的开发经验，应该知道目前浏览器对于声音的支持是有问题的：[支持的格式不统一](http://www.html5cn.com.cn/news/course/2012-10-06/139.html)。所以我们在Egret中，也要注意到这个问题。在准备声音素材的时候，可以让同一个音效具备3种格式：

* ogg
* mp3
* wav

然后在运行时判断所处环境，来决定播放哪一种格式。判断的函数如下：

```
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
```

然后使用如下的语句即可播放声音：

```
var soundContext:egret.SoundContext = egret.SoundContext.getInstance();//Egret中处理声音的是SoundContext
//soundContext.preloadSound("sfx_die.ogg");//可以预加载声音，以便需要的时候立刻播放
var soundPath:string = "sfx_die";//声音的前缀
if(this.checkSoundCanPlay("ogg"))//根据支持情况设置声音的后缀
    soundPath += ".ogg";
else if(this.checkSoundCanPlay("mp3"))
    soundPath += ".mp3";
else
    soundPath += ".wav";
soundContext.playMusic(soundPath,true);//播放声音，第二个参数决定是否重复
egret.Ticker.getInstance().callLater(function (){
    soundContext.stopMusic(true);//停止播放
},this,3000);//延迟3秒调用
```
> 您不一定要准备齐全3种格式，请根据您的目标平台自行决定

- - -

[上一篇:按钮](https://github.com/NeoGuo/html5-documents/blob/master/egret/05-button.md)
| [下一篇:容器](https://github.com/NeoGuo/html5-documents/blob/master/egret/07-container.md)
