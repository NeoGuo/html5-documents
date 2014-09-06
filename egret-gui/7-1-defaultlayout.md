Egret框架GUI教程 - 默认布局类
===============

在Group一节中，我们介绍了容器有一个layout属性，通过设置不同的Layout实例即可实现不同的布局效果。Egret GUI中内置了4个布局类：

* BasicLayout
* HorizontalLayout
* VerticalLayout
* TileLayout

BasicLayout(基本布局)
--------------------------------

这是Group的默认布局模式。在基本布局模式下，容器内的子项的定位方式，取决于每个子项的坐标设置。比如：

```
this.myGroup.layout = new egret.gui.BasicLayout();//用绝对定位，控制xy坐标
for(var i:number=0;i<4;i++) {
    var btn:egret.gui.Button = new egret.gui.Button();
    btn.x = i*50;
    btn.y = 40+i*100;
    this.myGroup.addElement(btn);
}
```

效果：

![github](https://raw.githubusercontent.com/NeoGuo/html5-documents/master/egret-gui/images/layout1.png "Egret")

上面设置的是子项的位置，至于尺寸，则是设置每个子项的width和height就可以了。上面所述的情况比较简单，即每个子项的位置和尺寸是确定的，是定值。但我们的实际需求，比这个要复杂一点。比如我有一个按钮，我希望它能根据容器的尺寸，自动处于居中位置，不需要我自己去写代码来设置x和y坐标。这个时候就有两个属性可用：

* horizontalCenter
* verticalCenter

您可以认为这两个值就是定义对象的中心点与容器的中心点之间的差值。如果两项都设置为0，代表中心点完全重合，也就实现了我们所需要的自动居中功能。

```
btn.horizontalCenter = 0;
btn.verticalCenter = 0;
```

![github](https://raw.githubusercontent.com/NeoGuo/html5-documents/master/egret-gui/images/layout1.png "Egret")

假如需求更复杂一些，我们需要按钮不仅仅是居中，还始终和容器边界保持20像素的差值，那您可以设置的属性是：

* top
* bottom
* left
* right

top的值，就是定义对象的上边界和容器的上边界之间的距离，其他3个值以此类推。回到上面那个问题，应该在按钮上这样设置：

```
btn.top = 20;
btn.bottom = 20;
btn.left = 20;
btn.right = 20;
```

![github](https://raw.githubusercontent.com/NeoGuo/html5-documents/master/egret-gui/images/layout3.png "Egret")

在尺寸的定义上，您还可以使用百分比。比如要让按钮和容器的尺寸一致，可以设置：

```
btn.percentWidth = 100;
btn.percentHeight = 100;
```
> 这个设置效果上等同于将top,bottom,left,right都设置为0

这些属性您可以综合利用(相矛盾的设置除外)，比如尺寸是容器的一半，并且居中，应该这样设置：

```
btn.percentWidth = 50;
btn.percentHeight = 50;
btn.horizontalCenter = 0;
btn.verticalCenter = 0;
```

![github](https://raw.githubusercontent.com/NeoGuo/html5-documents/master/egret-gui/images/layout4.png "Egret")

HorizontalLayout(横向布局)
--------------------------------

在横向布局，以及下面将要讲的垂直布局，格子布局中，都会忽略您在子项上的坐标设置，所有子项的位置将由布局类统一管理。

横向布局会自动将所有的子项横着排列，您可以做以下的设置：

* gap属性，设置子项之间的间距
* horizontalAlign属性，设置水平对齐方式
* verticalAlign属性，设置垂直对齐方式
* padding属性，设置容器内间距，如果需要分开设置可以使用paddingTop,paddingBottom,paddingLeft,paddingRight

示例：

```
var hLayout:egret.gui.HorizontalLayout = new egret.gui.HorizontalLayout();
hLayout.gap = 10;
hLayout.horizontalAlign = egret.HorizontalAlign.CENTER;
hLayout.padding = 10;
hLayout.verticalAlign = egret.VerticalAlign.MIDDLE;
this.myGroup.layout = hLayout;//横向布局
```

![github](https://raw.githubusercontent.com/NeoGuo/html5-documents/master/egret-gui/images/layout5.png "Egret")

VerticalLayout(垂直布局)
--------------------------------

垂直布局的行为和横向布局类似，只不过方向变了，从水平方向变为竖直方向。示例：

```
var vLayout:egret.gui.VerticalLayout = new egret.gui.VerticalLayout();
vLayout.gap = 10;
vLayout.horizontalAlign = egret.HorizontalAlign.CENTER;
vLayout.padding = 10;
vLayout.verticalAlign = egret.VerticalAlign.MIDDLE;
this.myGroup.layout = vLayout;//垂直布局
```

![github](https://raw.githubusercontent.com/NeoGuo/html5-documents/master/egret-gui/images/layout6.png "Egret")

TileLayout(格子布局)
--------------------------------

格子布局，则是既做横向排列，也做纵向排列，实现的效果像格子一样。可设置的属性主要包括：

* horizontalGap属性，设置子项之间的水平间距
* verticalGap属性，设置子项之间的垂直间距
* columnAlign属性，指定如何将完全可见列与容器宽度对齐。
* rowAlign属性，指定如何将完全可见行与容器高度对齐。
* padding属性，设置容器内间距，如果需要分开设置可以使用paddingTop,paddingBottom,paddingLeft,paddingRight
* requestedColumnCount属性，明确指定要显示的列数

> 其中columnAlign和rowAlign的设置对于边界对齐起重要作用，不同的设置形成的效果也不尽相同，关于这些属性的详细分析参见[这篇文档](http://bbs.egret-labs.org/thread-102-1-1.html)。

示例：

```
var tileLayout:egret.gui.TileLayout = new egret.gui.TileLayout();//格子布局
tileLayout.horizontalGap = 10;
tileLayout.verticalGap = 10;
tileLayout.columnAlign = egret.gui.ColumnAlign.JUSTIFY_USING_WIDTH;
tileLayout.rowAlign = egret.gui.RowAlign.JUSTIFY_USING_HEIGHT;
tileLayout.padding = 0;
//tileLayout.requestedColumnCount = 2;//设置两列显示
this.myGroup.layout = tileLayout;
```

![github](https://raw.githubusercontent.com/NeoGuo/html5-documents/master/egret-gui/images/layout7.png "Egret")