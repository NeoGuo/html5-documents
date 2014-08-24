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

您也许已经注意到了，之所以有上面相对应的方法替换，是因为Egret GUI中的容器，不能直接接受egret.DisplayObject类型，所以Egret GUI不得已“封锁”了原先egret.DisplayObejctContainer所定义的一些方法，用一组包含"Element"关键字的方法代替，主要是为了限制可操作的类型。那么什么样的类型可以添加到Group容器里？通过方法定义可以发现，只有实现了egret.gui.IVisualElement接口的类型才能被接受。Egret GUI自身的组件，都是实现了这个接口的，比如按钮，复选框等等，所以这些都是没有问题的。

或许您会有疑问，如果是自己写了一个Bitmap之类的，就不能添加到Group里面吗？答案是可以的，但您需要先用UIAsset做一层封装，比如：

```
var fileIcon:egret.Bitmap = new egret.Bitmap(RES.getRes("file_icon"));
var shapeUI:egret.gui.UIAsset = new egret.gui.UIAsset(fileIcon);
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



一些使用技巧：

* 调用removeAllElements方法可以删除所有的内部显示对象
* 对于Group来说，它的尺寸不一定等于内部对象计算所得的尺寸，比如您的Group高度是100像素，但内部几个按钮的高度加起来可能是400像素，所以内部对象的计算高度和容器高度是不一致的。您可以使用contentWidth和contentHeight属性来获取内部高度。
* 如果内容尺寸超出容器尺寸，默认是全部显示的，您可以设置clipAndEnableScrolling为true，这样超出的部分就不再显示了。