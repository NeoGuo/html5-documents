Egret框架GUI教程 - 下拉列表
===============

下拉列表其实就是另一种有特殊表现形式的List。它的默认显示是一个按钮，当您点击这个按钮，会弹出一个List，等您选择一项之后，按钮上的文本会发生变化。至于事件处理，获取选中值等方面，则和List的操作方式是一样的。

来看看创建方式：

```
//先创建一个数组
var sourceArr:any[] = [];
for (var i:number = 1; i < 50; i++)
{
    sourceArr.push({name:"item"+i});
}
//用ArrayCollection包装
var myCollection:egret.gui.ArrayCollection = new egret.gui.ArrayCollection(sourceArr);
//创建下拉列表
var ddl:egret.gui.DropDownList = new egret.gui.DropDownList();
ddl.dataProvider = myCollection;
ddl.y = 40;
//设置字段名
ddl.labelField = "name";
//默认选项
ddl.selectedIndex = 1;
//事件
ddl.addEventListener(egret.Event.CHANGE,this.listChangeHandler,this);
this.addElement(ddl);
/**事件侦听*/
private listChangeHandler(evt:egret.Event):void {
    var ddl:egret.gui.DropDownList = evt.currentTarget;
    console.log(ddl.selectedItem.name);
}
```

是不是和List的使用方式差不多？实际效果：

![github](https://raw.githubusercontent.com/NeoGuo/html5-documents/master/egret-gui/images/ddl1.png "Egret")
点击后展开列表->
![github](https://raw.githubusercontent.com/NeoGuo/html5-documents/master/egret-gui/images/ddl2.png "Egret")

选择一项，列表自动关闭，同时您可以捕获到事件：

![github](https://raw.githubusercontent.com/NeoGuo/html5-documents/master/egret-gui/images/ddl3.png "Egret")

然后我们来做一下修改，使用自定义的皮肤来给DropDownList整个容。为了简化操作，我们直接把上一节为List定制的ItemRenerer和ItemRendererSkin设置到DropDownList上面。

```
ddl.itemRenderer = new egret.gui.ClassFactory(uiskins.ToggleRenderer);
ddl.itemRendererSkinName = "uiskins.ToggleRendererSkin";
```

效果：

![github](https://raw.githubusercontent.com/NeoGuo/html5-documents/master/egret-gui/images/ddl4.png "Egret")