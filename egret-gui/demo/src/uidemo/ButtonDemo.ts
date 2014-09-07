/**
 * Created by shaorui on 14-8-14.
 */
module uidemo
{
    export class ButtonDemo extends egret.gui.Group
    {
        public constructor() {
            super();
        }
        public createChildren(): void {
            super.createChildren();
            var btn:egret.gui.Button = new egret.gui.Button();
            btn.x = btn.y = 20;
            btn.label = "我是按钮";
            var btn2:egret.gui.Button = new egret.gui.Button();
            btn2.width = 200;
            btn2.height = 200;
            btn2.x = 20;
            btn2.y = 100;
            btn2.label = "我是按钮2";
            //btn.enabled = false;
            btn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.btnTouchHandler,this);
            this.addElement(btn);
            this.addElement(btn2);
        }
        private btnTouchHandler(evt:egret.TouchEvent):void {
            egret.gui.Alert.show("button touched","Confirm");
        }
    }
}