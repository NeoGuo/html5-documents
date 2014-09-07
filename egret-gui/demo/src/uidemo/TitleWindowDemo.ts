/**
 * Created by shaorui on 14-8-14.
 */
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
            this.win.skinName = uiskins.TitleWindowSkin;
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