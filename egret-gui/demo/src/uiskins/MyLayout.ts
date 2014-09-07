/**
 * Created by shaorui on 14-9-7.
 */
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