/**
 * Created by shaorui on 14-8-14.
 */
module uidemo
{
    export class PopUpDemo extends egret.gui.Group
    {
        private panel:egret.gui.Panel;

        public constructor() {
            super();
        }
        public createChildren(): void {
            super.createChildren();
            this.panel = new egret.gui.Panel();
            this.panel.title = "Hello Panel";
            this.panel.width = 400;
            var btn:egret.gui.Button = new egret.gui.Button();
            btn.label = "touch me";
            btn.horizontalCenter = 0;
            btn.verticalCenter = 0;
            btn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.btnTouchHandler,this);
            this.panel.addElement(btn);
            egret.gui.PopUpManager.addPopUp(this.panel,true,true);
        }
        private btnTouchHandler(evt:egret.TouchEvent):void {
            egret.gui.PopUpManager.removePopUp(this.panel);
        }
    }
}