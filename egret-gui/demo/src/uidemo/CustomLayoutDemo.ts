/**
 * Created by shaorui on 14-8-14.
 */
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
            this.myGroup.layout = new uilayout.MyLayout();
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