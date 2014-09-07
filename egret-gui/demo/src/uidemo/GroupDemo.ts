/**
 * Created by shaorui on 14-8-14.
 */
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
            //this.myGroup.width = 100;
            //this.myGroup.height = 100;
            //this.myGroup.clipAndEnableScrolling = true;
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