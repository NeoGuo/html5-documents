Egret框架GUI教程 - 列表
===============

列表组件(egret.gui.List)，实际上是和上一节所述的DataGroup密不可分的。它和DataGroup的区别在于：

* List是可以定制皮肤的，DataGroup没有皮肤
* 在默认提供的两套主题中，已经为List设置了默认的皮肤，实现常规的垂直布局，且具备滚动功能
* List拥有labelField和labelFunction，可以更灵活的定义文本显示
* 在List中选中一项，会触发change事件，然后您就可以执行后续的逻辑处理
* 可以设置List中的默认选项

来看看List的基本用法：

```
//先创建一个数组
var sourceArr:any[] = [];
for (var i:number = 1; i < 50; i++)
{
    sourceArr.push({name:"item"+i});
}
//用ArrayCollection包装
var myCollection:egret.gui.ArrayCollection = new egret.gui.ArrayCollection(sourceArr);
//创建列表
var dataList:egret.gui.List = new egret.gui.List();
dataList.dataProvider = myCollection;
dataList.percentWidth = 100;
dataList.percentHeight = 100;
this.addElement(dataList);
```

因为已经设置了默认皮肤，所以即使我们不在代码中设置皮肤，列表也是可以显示出来的：

![github](https://raw.githubusercontent.com/NeoGuo/html5-documents/master/egret-gui/images/list1.png "Egret")

可以看到列表中文本显示的是"Object"，因为我们的数据上，没有"label"属性，而是一个"name"属性，所以列表不知道应该取哪个属性作为显示文本。这里需要您用labelField或labelFunction显式定义一下：

```
//二选一，如果同时定义，以labelFunction为准
dataList.labelField = "name";
//dataList.labelFunction = this.myLabelFunction;
/**labelFunction*/
private myLabelFunction(item:any):string {
    return "Hi:"+item.name;
}
```

![github](https://raw.githubusercontent.com/NeoGuo/html5-documents/master/egret-gui/images/list2.png "Egret")

您可以设置，默认选中哪一项：

```
//默认选项
dataList.selectedIndex = 1;
dataList.selectedItem = myCollection.getItemAt(2);//索引从0开始计算，所以2代表第三项数据
```
> 如果用户改变了选项，您也是可以通过selectedIndex和selectedItem来获取的

![github](https://raw.githubusercontent.com/NeoGuo/html5-documents/master/egret-gui/images/list3.png "Egret")

事件
--------------------------

在列表中，您可以侦听change事件，了解选项的变化：

```
dataList.addEventListener(egret.gui.IndexChangeEvent.CHANGE,this.listChangeHandler,this);
/**事件侦听*/
private listChangeHandler(evt:egret.Event):void {
    var dataList:egret.gui.List = evt.currentTarget;
    console.log(evt.oldIndex+","+evt.newIndex);
    console.log(dataList.selectedItem.name);
}
```

![github](https://raw.githubusercontent.com/NeoGuo/html5-documents/master/egret-gui/images/list4.png "Egret")

注意change事件是必须选项改变后才会被触发的，如果您想要的是点击即触发(选项不一定改变)，可以侦听itemClick事件：

```
dataList.addEventListener(egret.gui.ListEvent.ITEM_CLICK,this.listClickhandler,this);
/**事件侦听*/
private listClickhandler(evt:egret.gui.ListEvent):void {
    var dataList:egret.gui.List = evt.currentTarget;
    console.log(evt.item.name+" clicked");
}
```

另外您还可以侦听IndexChangeEvent.CHANGING事件，这个事件派发在选项即将改变之前，如果您想阻止选项的发生，可以这样做：

```
dataList.addEventListener(egret.gui.IndexChangeEvent.CHANGING,this.listChangingHandler,this);
/**事件侦听*/
private listChangingHandler(evt:egret.gui.IndexChangeEvent):void {
    if(evt.newIndex==2) {
        evt.preventDefault();
    }
}
```

大数据优化
--------------------------

List有一个useVirtualLayout属性，默认是true，这个属性决定了列表创建内部对象的策略：

* 策略1 ```useVirtualLayout=false```，有多少数据就创建多少个ItemRenderer的实例
* 策略2 ```useVirtualLayout=true```，判断组件尺寸，确定同时能显示的最大个数，根据这个数字来创建一组ItemRenderer并循环利用，当您滚动切换数据的时候，只是这一组ItemRenderer循环切换自己的位置和显示，只要计算得当，这个过程将是无缝衔接且顺畅的。

显然策略2在数据量大的时候，会具备更好的性能优势。假设您有上千条数据，用策略1的话，界面估计就卡死了，而用策略2的话就不存在这个问题，因为数据量的增加，并不会导致显示对象数量的增加，也不会导致重绘次数的增加。

对比图(1000条数据)：

![github](https://raw.githubusercontent.com/NeoGuo/html5-documents/master/egret-gui/images/list5.png "Egret")
![github](https://raw.githubusercontent.com/NeoGuo/html5-documents/master/egret-gui/images/list6.png "Egret")

但您也要注意，在开启useVirtualLayout的情况下，数据的数量和ItemRenderer的数量的不对等的。所以这种情况下，你在list.contentGroup.getElementAt(index)上获取的对象，不一定和对应索引的数据相符合。如果您需要根据索引，获取一个ItemRenderer的实例，就必须注意这一点。

皮肤
--------------------------

如果您使用了simple主题，那默认的列表皮肤是skins.simple.ListSkin，来看看这个Skin里都包含了哪些内容：

```
//ListSkin.exml
<e:Skin xmlns:e="http://ns.egret-labs.org/egret" xmlns:w="http://ns.egret-labs.org/wing">
    <e:Scroller width="100%" height="100%">
        <e:DataGroup id="dataGroup" itemRendererSkinName="skins.simple.ItemRendererSkin">
            <e:layout>
                <e:VerticalLayout gap="0" horizontalAlign="contentJustify" />
            </e:layout>
        </e:DataGroup>
    </e:Scroller>
</e:Skin>
```

这个皮肤是用exml描述的，但应该不难理解。里面呢，就是一个Scroller包含一个DataGroup，结构很简单。如果翻译成对等的TS文件，应该是这样：

```
module skins.simple
{
    export class ListSkin extends egret.gui.Skin
    {
        /**和组件中的定义相对应，确定皮肤应该具备哪些部件*/
        public skinParts:Array<string> = ["dataGroup"];
        /**对于列表组件来说，dataGroup是必须有的*/
        public dataGroup:egret.gui.DataGroup;

        public constructor() {
            super();
        }
        public createChildren(): void {
            super.createChildren();
            //dataGroup必须有
            var scroller:egret.gui.Scroller = new egret.gui.Scroller();
            scroller.percentWidth = 100;
            scroller.percentHeight = 100;
            this.addElement(scroller);
            this.dataGroup = new egret.gui.DataGroup();
            this.dataGroup.itemRendererSkinName = "skins.simple.ItemRendererSkin";
            var vLayout:egret.gui.VerticalLayout = new egret.gui.VerticalLayout();
            vLayout.gap = 0;
            vLayout.horizontalAlign = egret.HorizontalAlign.CONTENT_JUSTIFY;
            this.dataGroup.layout = vLayout;
            scroller.viewport = this.dataGroup;
        }
    }
}
```
> 可以看出exml的描述相当简洁(在功能对等的情况下)，所以在实际的皮肤制作中，我们也应该尽量采取exml。关于exml的更多信息，在后面的皮肤章节中会详述。

我们来扩展一下这个列表皮肤，增加一个背景显示：

```
module uiskins
{
    export class BgListSkin extends egret.gui.Skin
    {
        private bg:egret.gui.UIAsset;
        /**和组件中的定义相对应，确定皮肤应该具备哪些部件*/
        public skinParts:Array<string> = ["dataGroup"];
        /**对于列表组件来说，dataGroup是必须有的*/
        public dataGroup:egret.gui.DataGroup;

        public constructor() {
            super();
        }
        public createChildren(): void {
            super.createChildren();
            var bmp:egret.Bitmap = new egret.Bitmap(RES.getRes("app_egret_labs_jpg"));
            this.bg = new egret.gui.UIAsset(bmp);
            this.bg.percentWidth = 100;
            this.bg.percentHeight = 100;
            this.addElement(this.bg);
            //dataGroup必须有
            var scroller:egret.gui.Scroller = new egret.gui.Scroller();
            scroller.top = 20;
            scroller.bottom = 20;
            scroller.left = 20;
            scroller.right = 20;
            this.addElement(scroller);
            this.dataGroup = new egret.gui.DataGroup();
            this.dataGroup.itemRendererSkinName = "skins.simple.ItemRendererSkin";
            var vLayout:egret.gui.VerticalLayout = new egret.gui.VerticalLayout();
            vLayout.gap = 0;
            vLayout.horizontalAlign = egret.HorizontalAlign.CONTENT_JUSTIFY;
            this.dataGroup.layout = vLayout;
            scroller.viewport = this.dataGroup;
        }
    }
}
```

然后设置列表的皮肤为我们扩展的这个：

```
dataList.skinName = uiskins.BgListSkin;
```

效果：

![github](https://raw.githubusercontent.com/NeoGuo/html5-documents/master/egret-gui/images/list7.png "Egret")

自定义ItemRenderer
--------------------------

默认的ItemRenderer和ItemRendererSkin只是显示一个文本，如果我们要增加更复杂的功能，比如显示一个开关按钮，就要自己去编写ItemRenderer和ItemRendererSkin了。

先编写一个有ToggleButton的ItemRenderer:

```
module uiskins
{
    export class ToggleRenderer extends egret.gui.ItemRenderer
    {
        public labelDisplay:egret.gui.Label;
        public toggleButton:egret.gui.ToggleButton;

        public constructor(){
            super();
            this.touchChildren = true;
        }
        public dataChanged():void{
            this.labelDisplay.text = this.data.name;
            this.toggleButton.selected = this.data.checked;
            this.toggleButton.addEventListener(egret.Event.CHANGE,this.toggleChangeHandler,this);
            this.toggleButton.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.toggleTouchHandler,this)
        }
        /**取消事件的传递，避免按钮操作影响列表操作*/
        private toggleTouchHandler(evt:egret.Event):void {
            evt.stopImmediatePropagation();
        }
        /**将按钮的操作映射到数据上*/
        private toggleChangeHandler(evt:egret.Event):void {
            this.data.checked = this.toggleButton.selected;
        }
    }
}
```

然后定义这个ItemRenderer的皮肤：

```
module uiskins
{
    export class ToggleRendererSkin extends egret.gui.Skin
    {
        /**和组件中的定义相对应，确定皮肤应该具备哪些部件*/
        public skinParts:Array<string> = ["labelDisplay","toggleButton"];
        /**文本标签*/
        public labelDisplay:egret.gui.Label;
        /**选择*/
        public toggleButton:egret.gui.ToggleButton;
        /**背景*/
        private bg:egret.gui.UIAsset;

        public constructor() {
            super();
            this.height = 80;
        }
        public createChildren(): void {
            super.createChildren();
            //设置状态
            this.states = [];
            this.states.push(new egret.gui.State("up",[]));
            this.states.push(new egret.gui.State("down",[]));
            this.states.push(new egret.gui.State("disabled",[]));
            //创建背景
            this.bg = new egret.gui.UIAsset();
            this.bg.percentWidth = 100;
            this.bg.percentHeight = 100;
            this.addElement(this.bg);
            //创建文本
            this.labelDisplay = new egret.gui.Label();
            this.labelDisplay.size = 36;
            this.labelDisplay.verticalAlign = "middle";
            this.labelDisplay.textAlign = "left";
            this.labelDisplay.paddingLeft = 20;
            this.labelDisplay.percentWidth=100;
            this.labelDisplay.percentHeight=100;
            this.addElement(this.labelDisplay);
            //toggle
            this.toggleButton = new egret.gui.ToggleButton();
            this.toggleButton.hostComponentKey="ToggleOnOffButton";//默认主题中定义的一个ToggleButton皮肤
            this.toggleButton.right=30;
            this.toggleButton.verticalCenter=0;
            this.addElement(this.toggleButton);
        }
        /**当状态改变时，背景和文本颜色也做相应的变化*/
        public commitCurrentState(): void {
            super.commitCurrentState();
            switch(this.currentState) {
                case "up":
                    this.bg.source = RES.getRes("button_normal_png");
                    this.labelDisplay.textColor = 0x111111;
                    break;
                case "down":
                    this.bg.source = RES.getRes("button_down_png");
                    this.labelDisplay.textColor = 0xffffff;
                    break;
                case "disabled":
                    this.bg.source = RES.getRes("button_disabled_png");
                    this.labelDisplay.textColor = 0xcccccc;
                    break;
            }
        }
    }
}
```

效果：

![github](https://raw.githubusercontent.com/NeoGuo/html5-documents/master/egret-gui/images/list8.png "Egret")

如果需要为同一个列表指定不同的ItemRenderer，您可以使用itemRendererFunction，示例：

```
dataList.itemRendererFunction = this.myItemRendererFunction;

private fact1:egret.gui.ClassFactory = new egret.gui.ClassFactory(ItemRendererClass1);
private fact2:egret.gui.ClassFactory = new egret.gui.ClassFactory(ItemRendererClass2);
private myItemRendererFunction(item:any):IFactory {
	if(item.type==1) {
		return this.fact1;
	} else {
		return this.fact2;
	}
}
```