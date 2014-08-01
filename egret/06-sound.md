Egret框架入门第一步 - 声音
===============

声音也是游戏里的一个必备因素，包括背景音乐，动作音效等等。目前egret支持的音乐文件格式只有mp3。

和图片创建一样，播放音乐文件也需要先加载音乐文件。

```
/**资源配置文件*/
{
"resources":
    [
        {"name":"sfx_die","type":"sound","url":"assets/sfx_die.mp3"}
    ],

"groups":
    [
        {"name":"demo6","keys":"sfx_die"}
    ]
}

/**加载所需资源*/
public loadResource():void {
    //使用资源管理器加载资源
    RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
    RES.loadConfig("resource/resource.json", "resource/");
    RES.loadGroup("demo6");
}
```

加载完毕后就可以对音乐文件进行 播放和停止的操作啦。
```
/**播放声音*/
private onResourceLoadComplete():void {
    //获取音乐文件
    var sound:egret.Sound = RES.getRes("sfx_die");
    //播放音乐文件
    sound.play();
    //3秒后音乐播放结束
    egret.setTimeout(function () {
        //音乐播放结束
        sound.pause();
    }, this, 3000);//间隔时间为3秒钟
}

```

- - -

[上一篇:按钮](https://github.com/NeoGuo/html5-documents/blob/master/egret/05-button.md)
| [下一篇:容器](https://github.com/NeoGuo/html5-documents/blob/master/egret/07-container.md)
