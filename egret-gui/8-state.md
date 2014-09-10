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
        return this._highlight?"otherBG":"normal";
    }
}
```

然后在自定义皮肤上，也要声明您的自定义状态：

```
module uiskins
{
    export class BackgroundSkin extends egret.gui.Skin
    {
        private bg:egret.gui.UIAsset;
        /**和组件中的定义相对应，确定皮肤应该具备哪些部件*/
        public skinParts:Array<string> = ["contentGroup"];
        /**对于SkinnableContainer来说，contentGroup是必须有的*/
        public contentGroup:egret.gui.Group;
        public constructor() {
            super();
        }
        public createChildren(): void {
            super.createChildren();
            //var bmp:egret.Bitmap = new egret.Bitmap(RES.getRes("app_egret_labs_jpg"));
            this.bg = new egret.gui.UIAsset(RES.getRes("app_egret_labs_jpg"));
            this.bg.percentWidth = 100;//这个相当于HTML中的百分比，设置100就是100%的意思
            this.bg.percentHeight = 100;//宽和高都是100%，也就是充满整个空间咯(根据皮肤的尺寸)
            this.addElement(this.bg);
            //contentGroup必须有，否则你添加到SkinnableContainer的对象是显示不出来的
            this.contentGroup = new egret.gui.Group();
            this.addElement(this.contentGroup);
            //设置状态
            this.states = [
                new egret.gui.State("normal", [
                    new egret.gui.SetProperty("bg", "source", RES.getRes("app_egret_labs_jpg"))
                ]),
                new egret.gui.State("otherBG", [
                    new egret.gui.SetProperty("bg", "source", RES.getRes("panel_back_png"))
                ])
            ];
        }
    }
}
```
> 在上例中，我们定义了两个自定义状态，normal和otherBG

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
        this.myContainer.skinName = uiskins.BackgroundSkin;
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