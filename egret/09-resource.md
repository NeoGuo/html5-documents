Egret框架入门第一步 - 资源管理和屏幕适配
===============

如果您的游戏要运行在移动平台上，那么屏幕适配就是不可回避的问题。不同的手机，不同的屏幕尺寸，让开发者头痛不已。还好Egret框架已经考虑到了屏幕适配，并在很大程度上减轻了开发者的负担。在Egret中，负责屏幕适配的类是：StageDelegate，以及和它相配合的若干个类。同时资源管理也和屏幕适配有关系，比如我们通常需要为一个素材，准备两套或更多的不同像素的文件，来适应“普通”，“高清”等模式，避免在高清屏幕上素材出现模糊的情况。

先来看资源加载方面需要注意的一些事情，游戏开发之前您需要设计一下素材的目录结构，如果存在多套不同分辨率的资源，您可以使用assets/480/,assets/640/这样的方式来设计素材目录结构加以区分，如果只有一套资源，也可以不遵守assets/480/这样的规则，将prefix指向您自己的素材目录即可。

```
egret.ResourceLoader.prefix = "assets/480/";
```

加载的实现，推荐使用LoadingController:

```
var loadingController = new egret.LoadingController();
```

加载某个资源，将根据设定的ResourceLoader.prefix来获取，您不用重复传入完整路径，只需传入相对于资源根目录的路径。
```
loadingController.addResource("egret_icon.png", egret.ResourceLoader.DATA_TYPE_IMAGE);
```

然后来看一下如何设置屏幕适配的策略，首先，先获取所在环境的容器：

```
//获取游戏在所处的环境中的容器（环境不同，容器也不同）
var container = new egret.EqualToFrame();
```

然后设定的是游戏的运行尺寸，为了桌面调试方便，需要一个判断，如果是移动设备，则设置尺寸为和浏览器同等宽度；如果是桌面浏览器，则设置一个固定宽度，您可以修改FixedSize()的尺寸，来观察实际效果:

```
var content = egret.Browser.getInstance().isMobile ? new egret.FixedWidth() : new egret.FixedSize(480, 800);
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
class Demo9 {

    /**测试用的位图*/
    private logo:egret.Bitmap;

    /**游戏启动后，会自动执行此方法*/
    public startGame():void {
        //-------------------设置屏幕适配策略
        //获取游戏在所处的环境中的容器（环境不同，容器也不同）
        var container = new egret.EqualToFrame();
        //下面设定的是游戏的运行尺寸，为了桌面调试方便，下面进行了一个判断，如果是移动设备，则设置尺寸为和浏览器同等宽度；如果是
        //桌面浏览器，则设置一个固定宽度
        //您可以修改FixedSize()的尺寸，来观察实际效果
        var content = egret.Browser.getInstance().isMobile ? new egret.FixedWidth() : new egret.FixedSize(480, 800);
        //创建策略对象
        var policy = new egret.ResolutionPolicy(container, content);
        //所谓DesignSize，就是您设计游戏UI时候所依据的分辨率，因为通常情况下我们不可能为所有分辨率设计不同的UI，只能设计一到两种，
        //然后通过缩放来适应所有的情况。所以下面的设定，请和您设计的素材依据的分辨率保持一致。
        egret.StageDelegate.getInstance().setDesignSize(480, 800, policy);

        //--------------------资源加载
        //设置素材的根目录，如果存在多套不同分辨率的资源，您可以使用assets/480/,assets/640/这样的方式来设计素材目录结构加以区分，
        //如果只有一套资源，也可以不遵守assets/480/这样的规则，将prefix指向您自己的素材目录即可
        egret.ResourceLoader.prefix = "assets/480/";
        var loadingController = new egret.LoadingController();
        //资源加载，将根据设定的ResourceLoader.prefix来获取，您不用重复传入完整路径，只需传入相对于资源根目录的路径
        loadingController.addResource("egret_icon.png", egret.ResourceLoader.DATA_TYPE_IMAGE);
        //设置加载显示
        loadingController.setLoadingView(new LoadingUI());
        loadingController.addEventListener(egret.ResourceLoader.LOAD_COMPLETE, this.onResourceLoadComplete, this);
        loadingController.load();
    }
    /**显示*/
    private onResourceLoadComplete():void {
        var stage = egret.MainContext.instance.stage;//获取Stage引用
        this.logo = new egret.Bitmap();//创建位图
        this.logo.texture = egret.TextureCache.getInstance().getTexture("egret_icon.png");//设置纹理
        stage.addChild(this.logo);//添加到显示列表
    }

}

//create app
var app = new Demo9();
```

- - -

[上一篇:事件](https://github.com/NeoGuo/html5-documents/blob/master/egret/08-event.md)
