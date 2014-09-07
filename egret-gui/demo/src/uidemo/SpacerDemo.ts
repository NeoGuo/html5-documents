/**
 * Created by shaorui on 14-8-14.
 */
module uidemo
{
    export class SpacerDemo extends egret.gui.Group
    {
        public constructor() {
            super();
        }
        public createChildren(): void {
            super.createChildren();
            var group:egret.gui.Group = new egret.gui.Group();
            group.percentWidth = 100;
            group.layout = new egret.gui.HorizontalLayout();
            var btn1:egret.gui.Button = new egret.gui.Button();
            btn1.label = "Left";
            var btn2:egret.gui.Button = new egret.gui.Button();
            btn2.label = "Right";
            //var spacer:egret.gui.Spacer = new egret.gui.Spacer();
            var spacer:egret.gui.Button = new egret.gui.Button();
            spacer.visible = false;
            spacer.percentWidth = 100;
            group.addElement(btn1);
            group.addElement(spacer);
            group.addElement(btn2);
            this.addElement(group);
        }
    }
}