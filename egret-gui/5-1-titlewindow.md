Egret框架GUI教程 - 窗体
===============

大家想必对"窗体"这个概念不会陌生，在操作系统的GUI层面，窗体可以说是非常常用和基本的功能。Egret GUI中，也提供了窗体类，就是egret.gui.TitleWindow。它的特性是：

* TitleWindow本身是容器，您可以在TitleWindow上面添加其他部件
* 和Panel一样，您可以设置TitleWindow的标题
* TitleWindow拥有一个关闭按钮，您可以通过showCloseButton属性控制这个按钮是否显示
* 窗体要弹出，需要借助egret.gui.PopUpManager类的静态方法addPopUp

看一个实例：

```
module uidemo
{
    export class TitleWindowDemo extends egret.gui.Group
    {
        private win:egret.gui.TitleWindow;

        public constructor() {
            super();
        }
        public createChildren(): void {
            super.createChildren();
            this.win = new egret.gui.TitleWindow();
            this.win.showCloseButton = true;
            this.win.title = "Hello Window";
            this.win.width = 400;
            var btn:egret.gui.Button = new egret.gui.Button();
            btn.label = "touch me";
            btn.horizontalCenter = 0;
            btn.verticalCenter = 0;
            btn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.btnTouchHandler,this);
            this.win.addElement(btn);
            this.win.addEventListener(egret.gui.CloseEvent.CLOSE,this.closeWindHandler,this);
            egret.gui.PopUpManager.addPopUp(this.win,true,true);
        }
        private btnTouchHandler(evt:egret.TouchEvent):void {
            egret.gui.PopUpManager.removePopUp(this.win);
        }
        private closeWindHandler(evt:egret.gui.CloseEvent):void {
            egret.gui.PopUpManager.removePopUp(this.win);
        }

    }
}
```
> 当用户点击关闭按钮，TitleWindow会派发close事件，您可以捕获这个事件后，调用PopUpManager.removePopUp关掉窗体

> egret.gui.PopUpManager.addPopUp需要传入3个参数，参数1是要弹出的窗体，但不一定是TitleWindow类型，只要是实现了IVisualElement的对象都可以弹出。参数2是确定是否启用模态，在模态下窗体下面的内容都是遮罩且不能点击的。参数3指定被弹出的窗体是否居中显示，它的作用等效于在外部调用centerPopUp()来居中。

效果：

![github](https://raw.githubusercontent.com/NeoGuo/html5-documents/master/egret-gui/images/titlewindow1.png "Egret")

TitleWindows是可以定制皮肤的，如果您设定的主题是simple，那默认的皮肤是skins.simple.TitleWindowSkin。现在我们在默认皮肤的基础上，做一下修改，实现一个红色版本的TitleWindow。

首先拷贝skins/simple/TitleWindowSkin.exml，到您自己的皮肤目录，比如uiskins下面。然后打开该文件，修改为如下内容：

```
<e:Skin xmlns:e="http://ns.egret-labs.org/egret" xmlns:w="http://ns.egret-labs.org/wing"
        minHeight="230" minWidth="470" maxWidth="710">
    <w:HostComponent name="egret.TitleWindow" />
    <e:Rect width="100%" height="100%" strokeAlpha="1" strokeColor="0x888888" strokeWeight=".5" fillColor="0xff0000" fillAlpha="1"></e:Rect>
    <e:Group left="3" right="9" height="50"  id="moveArea" >
        <e:Label id="titleDisplay" fontFamily="Tahoma" size="26"
                 textColor="0xffffff" maxDisplayedLines="1" left="5" right="5" verticalCenter="0"
                 minHeight="28" verticalAlign="middle" textAlign="center" />
        <e:UIAsset id="closeButton" verticalCenter="0" right="10" source="titlewindow_close_png"/>
    </e:Group>
    <e:Rect left="10" right="10" bottom="10" top="50" fillColor="0xffffff" fillAlpha="1"></e:Rect>
    <e:Group width="100%" bottom="0"  top="50" id="contentGroup">
    </e:Group>
</e:Skin>
```
> 主要的修改是，删除了原先的背景图片，用Rect来填充背景色，并修改文本颜色

为TitleWindow设置皮肤：

```
this.win.skinName = "uiskins.TitleWindowSkin";
```

编译运行，效果会变成这样：

![github](https://raw.githubusercontent.com/NeoGuo/html5-documents/master/egret-gui/images/titlewindow2.png "Egret")