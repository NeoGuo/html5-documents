Egret框架GUI教程 - 状态
===============

在Egret GUI组件中提供了"状态"的概念。咱们以按钮举例，Egret GUI的按钮包含3种状态，如下图所示：

![github](https://raw.githubusercontent.com/NeoGuo/html5-documents/master/egret-gui/images/state1.png "Egret")

这3个状态，在按钮的皮肤中，也有对应的定义：

![github](https://raw.githubusercontent.com/NeoGuo/html5-documents/master/egret-gui/images/state2.png "Egret")

如上图所示，在exml文件中，状态是用<e:State>节点表示的。name属性代表状态名称。states则是Skin的属性，这是一个数组，皮肤中创建的状态实例需要放在这个数组中。

如果只是在皮肤中定义几个状态，而不使用的话，那么状态也就没有什么意义。我们可以根据状态，改变皮肤的显示，比如当按钮进入禁用状态的时候，把文字变灰。要实现这一点，在exml中是非常方便的，请看这样的设置：

```
<e:Label id="labelDisplay" 
             textColor.up="0x111111"
             textColor.down="0x222222" 
             textColor.disabled="0xcccccc" 
             />
```

如上所示，我们可以在同一个属性上，通过追加"点+状态名称"的方式，来设置属性在不同状态的值。当皮肤进入某个状态的时候，就会自动根据您的设置，改变属性的值。

如果您的皮肤是使用TypeScript编写的，那么可以使用状态吗？当然是可以的。上面那段exml片段翻译成TypeScript代码，应该是类似这样的：

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

在上面的代码片段中，我们使用egret.gui.State来创建状态实例，这个类的构造函数接受两个参数，参数1是状态名称，参数2是一个数组，接受您根据状态要做的设置。这些设置是通过egret.gui.SetProperty来实现的。

如果您不需要使用egret.gui.SetProperty，只是定义状态名称，那可以这样简化：

```
this.states = ["up","down","disabled"];
```

还有几个需要注意的点：

* 如果皮肤缺少了状态定义，引擎是不会报错的，这个问题需要您自己检查，确保皮肤状态都被定义了。
* 状态是可以自定义，比如叫做"MyState"之类的，但需要在您的自定义组件和自定义皮肤中同时处理，才会有意义。