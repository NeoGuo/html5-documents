Egret框架GUI教程 - TabBar
===============

在上一节我们介绍了ViewStack，那么让用户用什么控制ViewStack的显示比较好呢？TabBar是个不错的选择。TabBar将根据数据源，显示一组按钮，并且在同一时间，只有一个按钮会被选中，并且如果数据源是一个ViewStack的话，那么TabBar的选中项索引将和ViewStack的选中项索引保持一致。

用法1：结合ViewStack
--------------------------

我们修改上一节的例子，不再用timer控制ViewStack的切换，而是绑定到TabBar上面：

```
private createTabWithViewStack():void {
    this.viewStack = new egret.gui.ViewStack();
    for(var i:number=0;i<3;i++) {
        var group:egret.gui.Group = new egret.gui.Group();
        group.name = "Group"+i;
        var btn:egret.gui.Button = new egret.gui.Button();
        btn.label = "Button"+i;
        group.addElement(btn);
        this.viewStack.addElement(group);
    }
    this.viewStack.selectedIndex = 0;
    //tabBar
    this.tabBar = new egret.gui.TabBar();
    this.tabBar.dataProvider = this.viewStack;
    //show
    this.addElement(this.viewStack);
    this.addElement(this.tabBar);
}
```

> 注意上面我们为循环产生的group设置了名称(通过name属性)，这样TabBar的显示，就可以根据Group的名称来做。由于ViewStack实现的是ICollection接口，它默认会取子项的name属性，就是说，想显示在TabBar的文本，必须写在子项的name属性上。

> 通过设置TabBar.dataProvider等于ViewStack实例，来实现两者的绑定。

效果：

![github](https://raw.githubusercontent.com/NeoGuo/html5-documents/master/egret-gui/images/tabbar1.png "Egret")

用法2：结合ArrayCollection
--------------------------

TabBar也是可以单独使用的，将数据源设置为一个ArrayCollection实例即可。并且您可以通过侦听itemClick事件，来获取TabBar的选中项。示意代码：

```
private createTabWithArrayCollection():void {
    //tabBar
    this.tabBar = new egret.gui.TabBar();
    this.tabBar.dataProvider = new egret.gui.ArrayCollection(["Tab 1", "Tab 2", "Tab 3"]);
    this.tabBar.addEventListener(egret.gui.ListEvent.ITEM_CLICK, this.onBarItemClick, this);
    //show
    this.addElement(this.tabBar);
}
private onBarItemClick(event:egret.gui.ListEvent):void {
    console.log(event.itemIndex);
}
```

效果：

![github](https://raw.githubusercontent.com/NeoGuo/html5-documents/master/egret-gui/images/tabbar2.png "Egret")