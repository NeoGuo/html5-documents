Egret框架GUI教程 - 视图状态
===============

在Egret GUI组件中提供了"视图状态"的概念。咱们以按钮举例，Egret GUI的按钮包含3种视图状态，如下图所示：

![github](https://raw.githubusercontent.com/NeoGuo/html5-documents/master/egret-gui/images/state1.png "Egret")

这3个视图状态，在按钮的皮肤中，也有对应的定义：

![github](https://raw.githubusercontent.com/NeoGuo/html5-documents/master/egret-gui/images/state2.png "Egret")

如上图所示，在exml文件中，视图状态是用```<e:State>```节点表示的。name属性代表视图状态名称。states则是Skin的属性，这是一个数组，皮肤中创建的视图状态实例需要放在这个数组中。

如果只是在皮肤中定义几个视图状态，而不使用的话，那么视图状态也就没有什么意义。我们可以根据视图状态，改变皮肤的显示，比如当按钮进入禁用视图状态的时候，把文字变灰。要实现这一点，在exml中是非常方便的，请看这样的设置：

```
<e:Label id="labelDisplay" 
             textColor.up="0x111111"
             textColor.down="0x222222" 
             textColor.disabled="0xcccccc" 
             />
```

如上所示，我们可以在同一个属性上，通过追加"点+视图状态名称"的方式，来设置属性在不同视图状态的值。当皮肤进入某个视图状态的时候，就会自动根据您的设置，改变属性的值。

如果您的皮肤是使用TypeScript编写的，那么可以使用视图状态吗？当然是可以的。上面那段exml片段翻译成TypeScript代码，应该是类似这样的：

```
this.states = [
    new egret.gui.State("up", [
        new egret.gui.SetProperty("labelDisplay", "textColor", 0x1e7465)
    ]),
    new egret.gui.State("down", [
        new egret.gui.SetProperty("labelDisplay", "textColor", 0x1e7465)
    ]),
    new egret.gui.State("disabled", [
        new egret.gui.SetProperty("labelDisplay", "textColor", 0x727070)
    ])
];
```

在上面的代码片段中，我们使用egret.gui.State来创建视图状态实例，这个类的构造函数接受两个参数，参数1是视图状态名称，参数2是一个数组，接受您根据视图状态要做的设置。这些设置是通过egret.gui.SetProperty来实现的。

如果您不需要使用egret.gui.SetProperty，只是定义视图状态名称，那可以这样简化：

```
this.states = ["up","down","disabled"];
```

> 注：这段代码只是说明EXML状态标签到TypeScript的编译过程和原理，实际上并不建议您直接使用SetProperty类。如果在自定义皮肤(使用TypeScript编写的)中，需要针对状态进行处理，建议覆盖皮肤的commitCurrentState方法来实现。

还有几个需要注意的点：

* 如果皮肤缺少了视图状态定义，引擎是不会报错的，这个问题需要您自己检查，确保皮肤视图状态都被定义了。
* 视图状态是可以自定义，比如叫做"MyState"之类的，但需要在您的自定义组件和自定义皮肤中同时处理，才会有意义。

自定义视图状态
---------------------

如果您需要使用自定义视图状态，首先需要在自定义组件上，重写getCurrentSkinState方法：

```
export class MyContainerDemo extends egret.gui.SkinnableContainer
{
    private _highlight:boolean = false;

    public get hightlight():boolean {
        return this._highlight;
    }
    public set hightlight(value:boolean) {
        if(this._highlight == value)
            return;
        this._highlight = value;
        this.invalidateSkinState();
    }

    public constructor() {
        super();
    }

    /**重写*/
    public getCurrentSkinState():string {
        if(this._highlight)
            return "highlight";
        return  super.getCurrentSkinState();
    }
}
```

然后在自定义皮肤上，也要声明您的自定义状态：

```
<e:Skin xmlns:e="http://ns.egret-labs.org/egret" xmlns:w="http://ns.egret-labs.org/wing">
    <e:states>
        <e:State name="normal" />
        <e:State name="highlight" />
    </e:states>
    <e:UIAsset id="bg" width="100%" height="100%"
               source="app_egret_labs_jpg"
               source.highlight="panel_back_png" />
    <e:Group id="contentGroup" width="100%" height="100%" />
</e:Skin>
```
> 在上例中，我们定义了两个状态，normal和highlight

然后我们重写原先可定义皮肤容器的一个例子，测试状态的切换：

```
export class SkinnableContainerDemo extends egret.gui.Group
{
    private myContainer:MyContainerDemo;
    public constructor() {
        super();
    }
    public createChildren(): void {
        super.createChildren();
        //创建Group
        this.myContainer = new MyContainerDemo();
        this.myContainer.skinName = "uiskins.BackgroundSkin";
        this.myContainer.width = 300;
        this.myContainer.height = 300;
        this.addElement(this.myContainer);
        this.myContainer.validateNow();
        //内部对象
        var btn:egret.gui.Button = new egret.gui.Button();
        btn.label = "Button";
        btn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.changeState,this);
        this.myContainer.addElement(btn);
    }
    private changeState(evt:egret.TouchEvent):void {
        this.myContainer.hightlight = !this.myContainer.hightlight;
    }
}
```

效果：

![github](https://raw.githubusercontent.com/NeoGuo/html5-documents/master/egret-gui/images/state3.png "Egret")