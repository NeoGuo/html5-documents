Egret框架入门第一步 - 事件
===============

Egret采用了和Flash类似的"事件流"机制，如果您对事件尚不了解，可以参照[Adobe关于Flash事件流的说明](http://help.adobe.com/zh_CN/as3/dev/WS5b3ccc516d4fbf351e63e3d118a9b90204-7e4f.html)。事件的基类是Event，所有的事件类从Event扩展而来，这一点和Flash一致。来看一下Event的构造函数：

```
public constructor(type:string, bubbles:boolean = false, cancelable:boolean = false) {
    this._type = type;
    this._bubbles = bubbles;
    this._cancelable = cancelable;
}
```
> 这就说明Egret中的事件支持冒泡机制，您可以在创建事件的时候决定它是否冒泡，同样也就有了target和currentTarget之分。

来看一个例子：

```
/**显示*/
private initDefaultView():void {
    var stage = ns_egret.MainContext.instance.stage;
    var container = new ns_egret.DisplayObjectContainer();
    container.touchChildren = true;//等同于Flash的mouseChildren
    container.touchEnabled = true;//设置容器是否响应Touch交互
    var bitmap1 = ns_egret.Bitmap.initWithTexture(ns_egret.TextureCache.getInstance().getTexture("egret_icon.png"));
    bitmap1.name = "myBitmap";
    bitmap1.touchEnabled = true;
    container.addChild(bitmap1);
    container.name = "myContainer";
    container.x = container.y = 100;
    stage.addChild(container);
    container.addEventListener(ns_egret.TouchEvent.TOUCH_TAP,this.touchHandler,container);
}
/**事件侦听处理*/
private touchHandler(event:ns_egret.TouchEvent):void {
    var msg:string = event.type;
    msg += "\n"+event.stageX+","+event.stageY;
    msg += "\n"+event.localX+","+event.localY;
    msg += "\n"+event.currentTarget.name+","+event.target.name;
    alert(msg);
}
```
点击后，可以看到下面的信息：

![github](https://raw.githubusercontent.com/NeoGuo/html5-documents/master/egret/images/egret_event.png "event")

- - -

[上一篇:容器](https://github.com/NeoGuo/html5-documents/blob/master/egret/07-container.md)
| [下一篇:资源管理](https://github.com/NeoGuo/html5-documents/blob/master/egret/09-resource.md)
