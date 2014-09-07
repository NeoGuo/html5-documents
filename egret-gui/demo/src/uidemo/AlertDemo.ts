/**
 * Created by shaorui on 14-8-14.
 */
module uidemo
{
    export class AlertDemo extends egret.gui.Group
    {
        public constructor() {
            super();
        }
        public createChildren(): void {
            super.createChildren();
            //egret.gui.Alert.show("您还没有登录!","提醒",this.closeHandler);
            var alertInstance:egret.gui.Alert = egret.gui.Alert.show("您还没有登录,是否登录?","提醒",this.confirmHandler,"OK","Cancel");
            //alertInstance.skinName = uiskins.PanelSkin;
        }
        private closeHandler(evt:egret.gui.CloseEvent):void {
            console.log("用户关闭了提醒");
        }
        private confirmHandler(evt:egret.gui.CloseEvent):void {
            if(evt.detail==egret.gui.Alert.FIRST_BUTTON) {
                console.log("用户点击了OK");
            } else {
                console.log("用户点击了Cancel");
            }
        }
    }
}