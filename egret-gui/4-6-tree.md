Egret框架GUI教程 - Tree
===============

Tree这种组件，在Web上很常见，但在手机上用的还是比较少。Egret GUI中也提供了Tree组件，这里我们简单介绍一下其用法(参考自官方实例)。

首先看一下数据源，Tree所需的数据源跟一般的List是不同的，因为一般的List只需要一个一维数组的数据源就足够了，但Tree的数据源必须是有层次结构的（因为Tree的显示也是有层次的）。

```
//数据源
var dp:egret.gui.ObjectCollection = new egret.gui.ObjectCollection();
dp.source = {children: [
    {dir: true, name: "TreeItem0",
        children: [
            {name: "TreeItem00"},
            {dir: true, name: "TreeItem01",
                children: [
                    {name: "TreeItem010"}
                ]}
        ]},
    {dir: true, name: "TreeItem1", children: [{name: "TreeItem10"},{name: "TreeItem11"}]},
    {name: "TreeItem2"}
]};
```

注意数据源的类型是ObjectCollection，而不是之前的ArrayCollection。可以看到确定层级关系的是对象的"children"属性，每个对象用"children"来包含它的子集。这一点也要通知数据容器，确定数据的parent节点是谁：

```
//设置数据源的父子关系，这样才会缩进
egret.gui.ObjectCollection.assignParent(dp.source,"children","parent");
```

有了数据源，就可以创建树：

```
//创建树
var tree:egret.gui.Tree = new egret.gui.Tree();
tree.labelField="name";
tree.top = 20;
tree.left = 20;
tree.right = 20;
tree.height = 300;
tree.dataProvider = dp;
tree.expandItem(dp.getItemAt(0),true);
this.addElement(tree);
```

效果：

![github](https://raw.githubusercontent.com/NeoGuo/html5-documents/master/egret-gui/images/tree1.png "Egret")

您还可以通过iconFunction，设置每一项前面显示的小图标：

```
tree.iconFunction = this.iconFunc;
/*呈现项的icon筛选*/
private iconFunc(item:any):any {
    if (item.dir)
        return "tree_icon_dir_png";
    else
        return "tree_icon_file_png";
}
```

![github](https://raw.githubusercontent.com/NeoGuo/html5-documents/master/egret-gui/images/tree2.png "Egret")