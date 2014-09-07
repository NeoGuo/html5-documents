Egret框架GUI教程 - 自定义布局类
===============

Egret GUI内置的4个布局类基本上可以满足我们大部分的需求了，不过在一些特殊情况下，我们可能会需要一些特殊的布局方式。假如您的老板说，这些按钮横着排不好看，给我排成一个环形的。那您就可以整个自定义的布局类，来代替默认的布局类就可以了：

新建一个MyLayout.ts，扩展自egret.gui.LayoutBase:

```
module uilayout {
    /**自定义的环形布局类*/
    export class MyLayout extends egret.gui.LayoutBase{
        public constructor(){
            super();
        }
        /**计算target的尺寸
         * 因为环形布局，依赖容器尺寸来定义半径，所以需要容器显式的设置width和height,在这种情况下measure方法将失去作用
         * 所以在这个例子里面，不需要重写measure方法
         * 如果您的自定义布局需要根据内部子项计算尺寸，请重写这个方法
         **/
        public measure():void{
            super.measure();
        }
        /**重写显示列表更新*/
        public updateDisplayList(unscaledWidth:number, unscaledHeight:number):void{
            super.updateDisplayList(unscaledWidth, unscaledHeight);
            if (this.target==null)
                return;
            console.log("fuck you");
            var centerX:number = unscaledWidth/2;// 获得容器中心的X坐标
            var centerY:number = unscaledHeight/2;// 获得容器中心的Y坐标
            var horizon:number = centerX/2;// 获得水平可用长度的一半
            var vertical:number = centerY/2;// 获得垂直可用长度的一半
            var radius = horizon > vertical ? vertical : horizon;// 取小的为圆形半径
            var count:number = this.target.numElements;
            var maxX:number = 0;
            var maxY:number = 0;
            for (var i:number = 0; i < count; i++){
                var layoutElement:egret.gui.ILayoutElement = <egret.gui.ILayoutElement> (this.target.getElementAt(i));
                if (layoutElement==null||!layoutElement.includeInLayout)
                    continue;
                var elementWidth:number = layoutElement.layoutBoundsWidth;
                var elementHeight:number = layoutElement.layoutBoundsHeight;
                var angle:number = 2 * Math.PI * i / count;// 获得角度的大小
                var childX:number = centerX + radius * Math.sin(angle) - elementWidth/2;// 获得圆周点的X坐标
                var childY:number = centerY - radius * Math.cos(angle) - elementHeight/2;// 获得圆周点的Y坐标
                layoutElement.setLayoutBoundsPosition(childX, childY);
                maxX = Math.max(maxX,childX+elementWidth);
                maxY = Math.max(maxY,childY+elementHeight);
            }
            this.target.setContentSize(maxX,maxY);
        }
    }
}
```

然后修改上节的例子，改为使用自定义布局类(通过设置group.layout属性)：

```
module uidemo
{
    export class CustomLayoutDemo extends egret.gui.Group
    {
        private myGroup:egret.gui.Group;
        public constructor() {
            super();
        }
        public createChildren(): void {
            super.createChildren();
            //bg
            var bgShape:egret.Shape = new egret.Shape();
            bgShape.graphics.beginFill(0x333333,1);
            bgShape.graphics.drawRect(0,0,400,400);
            bgShape.graphics.endFill();
            var bgAsset:egret.gui.UIAsset = new egret.gui.UIAsset(bgShape);
            this.addElement(bgAsset);
            //创建Group
            this.myGroup = new egret.gui.Group();
            this.myGroup.width = 400;
            this.myGroup.height = 400;
            this.myGroup.horizontalCenter = 0;
            this.myGroup.clipAndEnableScrolling = true;
            this.myGroup.layout = new uilayout.MyLayout();//自定义布局
            this.addElement(this.myGroup);
            //内部对象
            for(var i:number=0;i<20;i++) {
                var btn:egret.gui.Button = new egret.gui.Button();
                btn.width = 40;
                btn.height = 40;
                btn.label = "Button"+i;
                this.myGroup.addElement(btn);
            }
        }
    }
}
```

效果：

![github](https://raw.githubusercontent.com/NeoGuo/html5-documents/master/egret-gui/images/customlayout.png "Egret")

从上例可以看出，要编写自定义的布局类，重点是覆盖两个方法：

* measure方法，如果您的自定义布局需要根据内部子项计算容器的尺寸，请重写这个方法
* updateDisplayList方法，在这个方法里面，根据您的需求，确定所有子项的位置和尺寸