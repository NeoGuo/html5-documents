Egret框架入门第一步 - 资源管理和屏幕适配
===============

如果您的游戏要运行在移动平台上，那么屏幕适配就是不可回避的问题。不同的手机，不同的屏幕尺寸，让开发者头痛不已。还好Egret框架已经考虑到了屏幕适配，并在很大程度上减轻了开发者的负担。在Egret中，负责屏幕适配的类是：StageDelegate，以及和它相配合的若干个类。同时资源管理也和屏幕适配有关系，比如我们通常需要为一个素材，准备两套或更多的不同像素的文件，来适应“普通”，“高清”等模式，避免在高清屏幕上素材出现模糊的情况。

先来看资源加载方面需要注意的一些事情，游戏开发之前您需要设计一下素材的目录结构，如果存在多套不同分辨率的资源，您可以使用assets/480/,assets/640/这样的方式来设计素材目录结构加以区分，如果只有一套资源，也可以不遵守assets/480/这样的规则，将prefix指向您自己的素材目录即可。

加载的实现，推荐使用RES模块:

```
//使用RES模块，侦听GROUP_COMPLETE事件和GROUP_PROGRESS事件，可以同步显示加载进度，并继续执行加载完成后的逻辑
RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE,this.onResourceLoadComplete,this);
RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS,this.onResourceProgress,this);
RES.loadConfig("resource/resource.json","resource/");//加载资源配置文件
RES.loadGroup("preload");//加载某个资源group
```

然后将您需要加载的资源，都配置在resource.json中即可，注意路径是相对RES.loadConfig中传递的第二个参数而言的。
```
{
"resources":
    [
        {"name":"bgImage","type":"image","url":"assets/bg.jpg"},
        {"name":"egretIcon","type":"image","url":"assets/egret_icon.png"},
        {"name":"description","type":"json","url":"config/description.json"},
        {"name":"icons","type":"sheet","url":"assets/icons.json"},
        {"name":"monkey_png","type":"image","url":"assets/monkey.png"},
        {"name":"monkey_json","type":"json","url":"assets/monkey.json"},
        {"name":"bitmapFont","type":"font","url":"assets/font.fnt"}
    ],

"groups":
    [
        {"name":"preload","keys":"bgImage,egretIcon"},
        {"name":"demo2","keys":"egretIcon,icons"},
        {"name":"demo3","keys":"monkey_png,monkey_json"},
        {"name":"demo4","keys":"bitmapFont"},
        {"name":"demo7","keys":"egretIcon"},
        {"name":"demo8","keys":"egretIcon"}
    ]
}
```

您可以手工编辑这个配置文件，也可以使用egret推出的Res Tool，这是一个强大的专门管理resource.json的工具，而且是免费的哦，有了它，您就可以在可视化界面中修改resource.json了。[点击这里下载Res Tool](http://www.egret-labs.org/download/restool-download.html)。

然后来看一下如何设置屏幕适配的策略，首先，先获取所在环境的容器：

```
//获取游戏在所处的环境中的容器（环境不同，容器也不同）
var container = new egret.EqualToFrame();
```

然后设定的是游戏的运行尺寸，为了桌面调试方便，需要一个判断，如果是移动设备，则设置尺寸为和浏览器同等宽度；如果是桌面浏览器，则使用与设计相同的尺寸(不缩放):

```
var content = egret.Browser.getInstance().isMobile ? new egret.FixedWidth() : new egret.NoScale();
```

紧接着来创建策略对象：

```
var policy = new egret.ResolutionPolicy(container, content);
```

最后需要设置一下DesignSize，所谓DesignSize，就是您设计游戏UI时候所依据的分辨率，因为通常情况下我们不可能为所有分辨率设计不同的UI，只能设计一到两种，然后通过缩放来适应所有的情况。所以下面的设定，请和您设计的素材依据的分辨率保持一致。

```
egret.StageDelegate.getInstance().setDesignSize(480, 800, policy);
```

一个典型的设置了屏幕策略的程序可能是如下的完整实例：

```
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
        //-------------------设置屏幕适配策略
        //获取游戏在所处的环境中的容器（环境不同，容器也不同）
        var container = new egret.EqualToFrame();
        //下面设定的是游戏的运行尺寸，为了桌面调试方便，下面进行了一个判断，如果是移动设备，则设置尺寸为和浏览器同等宽度
        var content = egret.Browser.getInstance().isMobile ? new egret.FixedWidth() : new egret.NoScale();
        //创建策略对象
        var policy = new egret.ResolutionPolicy(container, content);
        //所谓DesignSize，就是您设计游戏UI时候所依据的分辨率，因为通常情况下我们不可能为所有分辨率设计不同的UI，只能设计一到两种，
        //然后通过缩放来适应所有的情况。所以下面的设定，请和您设计的素材依据的分辨率保持一致。
        egret.StageDelegate.getInstance().setDesignSize(480, 800, policy);

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
```

- - -

[上一篇:事件](https://github.com/NeoGuo/html5-documents/blob/master/egret/08-event.md)
