/**
 * Created by shaorui on 14-8-14.
 */
module uidemo
{
    export class DefaultLayoutDemo extends egret.gui.Group
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
            this.myGroup.clipAndEnableScrolling = true;
            this.addElement(this.myGroup);
            //内部对象
            for(var i:number=0;i<4;i++) {
                var btn:egret.gui.Button = new egret.gui.Button();
                btn.label = "Button"+i;
                //btn.percentWidth,btn.percentHeight
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
                    btn.x = 20+i*50;
                    btn.y = 20+i*100;
                }
            } else if(this.layoutIndex==1) {
                var hLayout:egret.gui.HorizontalLayout = new egret.gui.HorizontalLayout();
                hLayout.gap = 10;
                hLayout.horizontalAlign = egret.HorizontalAlign.CENTER;
                hLayout.padding = 10;
                hLayout.verticalAlign = egret.VerticalAlign.MIDDLE;
                this.myGroup.layout = hLayout;//横向布局
            } else if(this.layoutIndex==2) {
                var vLayout:egret.gui.VerticalLayout = new egret.gui.VerticalLayout();
                vLayout.gap = 10;
                vLayout.horizontalAlign = egret.HorizontalAlign.CENTER;
                vLayout.padding = 10;
                vLayout.verticalAlign = egret.VerticalAlign.MIDDLE;
                this.myGroup.layout = vLayout;//垂直布局
            } else if(this.layoutIndex==3) {
                var tileLayout:egret.gui.TileLayout = new egret.gui.TileLayout();//格子布局
                tileLayout.horizontalGap = 10;
                tileLayout.verticalGap = 10;
                tileLayout.columnAlign = egret.gui.ColumnAlign.JUSTIFY_USING_WIDTH;
                tileLayout.rowAlign = egret.gui.RowAlign.JUSTIFY_USING_HEIGHT;
                tileLayout.padding = 10;
                //tileLayout.requestedColumnCount = 2;//设置两列显示
                this.myGroup.layout = tileLayout;
            }
            this.layoutIndex++;
            if(this.layoutIndex==4) {
                this.layoutIndex = 0;
            }
        }
    }
}