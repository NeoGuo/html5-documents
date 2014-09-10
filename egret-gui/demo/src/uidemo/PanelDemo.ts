/**
 * Created by shaorui on 14-8-14.
 */
module uidemo
{
    export class PanelDemo extends egret.gui.Group
    {
        private myPanel:egret.gui.Panel;
        public constructor() {
            super();
        }
        public createChildren(): void {
            super.createChildren();
            //创建Group
            this.myPanel = new egret.gui.Panel();
            this.myPanel.skinName = "uiskins.PanelSkin";
            this.myPanel.title = "My Panel";
            this.myPanel.x = 40;
            this.myPanel.y = 40;
            this.myPanel.width = 400;
            this.myPanel.height = 300;
            this.addElement(this.myPanel);
            this.myPanel.validateNow();
            //内部对象
            var btn:egret.gui.Button = new egret.gui.Button();
            btn.label = "Button";
            btn.horizontalCenter = 0;
            btn.verticalCenter = 0;
            this.myPanel.addElement(btn);
        }

    }
}