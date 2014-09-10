Egret框架GUI教程 - Group
===============

在Egert GUI提供的容器中，egret.gui.Group是最轻量级的，它本身不可以设置皮肤，也不会具备外观，它的呈现只取决于内部的显示对象。如果您需要使用容器，并且没有设置皮肤的需求，那么请尽量使用Group。

与egret.Sprite相比，egret.gui.Group有一些特殊的地方，也是初学者很容易犯错的地方，包括：

* 不可以使用addChildAt，用addElementAt代替
* 不可以使用addChildAt，用addElementAt代替
* 不可以使用removeChild，用removeElement代替
* 不可以使用removeChildAt，用removeElementAt代替
* 不可以使用getChildAt，用getElementAt代替
* 不可以使用getChildIndex，用getElementIndex代替
* 不可以使用setChilcIndex，用setElementIndex代替
* 不可以使用swapChildren，用swapElements代替
* 不可以使用swapChildrenAt，用swapElementsAt代替
* 不可以使用numChildren，用numElements代替

您也许已经注意到了，之所以有上面相对应的方法替换，是因为Egret GUI中的容器，不能直接接受egret.DisplayObject类型，所以Egret GUI不得已“封锁”了原先egret.DisplayObejctContainer所定义的一些方法，用一组包含"Element"关键字的方法代替，主要是为了限制可操作的类型。那么什么样的类型可以添加到Group容器里？通过方法定义可以发现，只有实现了egret.gui.IVisualElement接口的类型才能被接受。Egret GUI自身的组件，都是实现了这个接口的，比如按钮，复选框等等，所以这些都是没有问题的。关于详细说明信息，您可以参考[《为何要使用addElement()等方法》](http://bbs.egret-labs.org/thread-102-1-1.html)。

或许您会有疑问，如果是自己写了一个Bitmap之类的，就不能添加到Group里面吗？答案是可以的，但您需要先用UIAsset做一层封装，比如：

```
var shapeUI:egret.gui.UIAsset = new egret.gui.UIAsset("file_icon");
myGroup.addElement(shapeUI);
```

如果您自定义一个类，继承自Group，那么注意，内部的其它对象应该在createChildren()方法中创建和添加，也就是说，您要覆盖Group的createChildren()方法。参见下面的例子：

```
module uidemo
{
    export class GroupDemo extends egret.gui.Group
    {
        public constructor() {
            super();
        }
        /**override*/
        public createChildren(): void {
            super.createChildren();
            //内部对象
            var btn:egret.gui.Button = new egret.gui.Button();
            btn.label = "Button";
            this.addElement(btn);
        }
    }
}
```

Egret GUI中的容器的一个显著特点是，可以配置一个layout对象，来实现不同的布局方式。这对我们的开发工作是非常有好处的，我们可以使用默认的几个布局类，来节省大量的编码工作。在下面的例子中，我们在Group里面放了4个按钮，点击按钮，可以切换4种布局模式：绝对定位，横向布局，垂直布局，格子布局。

```
module uidemo
{
    export class GroupDemo extends egret.gui.Group
    {
        private myGroup:egret.gui.Group;
        public constructor() {
            super();
        }
        public createChildren(): void {
            super.createChildren();
            //创建Group
            this.myGroup = new egret.gui.Group();
            this.addElement(this.myGroup);
            //内部对象
            for(var i:number=0;i<4;i++) {
                var btn:egret.gui.Button = new egret.gui.Button();
                btn.label = "Button"+i;
                btn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.btnTouchHandler,this);
                this.myGroup.addElement(btn);
            }
            this.btnTouchHandler(null);
        }
        private layoutIndex:number = 0;
        /**点击按钮，可以切换4种布局模式：绝对定位，横向布局，垂直布局，格子布局*/
        private btnTouchHandler(evt:egret.TouchEvent):void {
            if(this.layoutIndex==0) {
                this.myGroup.layout = new egret.gui.BasicLayout();//用绝对定位，控制xy坐标
                for(var i:number=0;i<4;i++) {
                    var btn:egret.gui.Button = <egret.gui.Button>this.myGroup.getElementAt(i);
                    btn.x = i*50;
                    btn.y = 40+i*100;
                }
            } else if(this.layoutIndex==1) {
                this.myGroup.layout = new egret.gui.HorizontalLayout();//横向布局
            } else if(this.layoutIndex==2) {
                this.myGroup.layout = new egret.gui.VerticalLayout();//垂直布局
            } else if(this.layoutIndex==3) {
                var tileLayout:egret.gui.TileLayout = new egret.gui.TileLayout();//格子布局
                tileLayout.requestedColumnCount = 2;//设置两列显示
                this.myGroup.layout = tileLayout;
            }
            this.layoutIndex++;
            if(this.layoutIndex==4) {
                this.layoutIndex = 0;
            }
        }
    }
}
```

实现效果：

![github](https://raw.githubusercontent.com/NeoGuo/html5-documents/master/egret-gui/images/group1.png "Egret")
> 关于布局类的使用，我们会在后面布局的章节中继续探讨

一些使用技巧：

* 调用removeAllElements方法可以删除所有的内部显示对象
* Group和所有其他GUI组件都遵循一个原则：组件在没被外部显式设置尺寸(直接设置width/height或设置left right这种相对布局属性)的前提下。会自己测量出一个“合适”的大小。这时候Group宽高就是contentWidth和contentHeight的宽高。如果您显式设置了Group的尺寸，则它的尺寸不一定等于内部对象尺寸，比如您的Group高度是100像素，但内部几个按钮的高度加起来可能是400像素。您可以使用contentWidth和contentHeight属性来获取内部高度。
* 如果内容尺寸超出容器尺寸，默认是全部显示的，您可以设置clipAndEnableScrolling为true，这样超出的部分就不再显示了。