/**
 * Created by shaorui on 14-8-14.
 */
module uidemo
{
    export class StateDemo extends egret.gui.Group
    {
        public constructor() {
            super();
        }
        public createChildren(): void {
            super.createChildren();
            //layout
            var layout:egret.gui.VerticalLayout = new egret.gui.VerticalLayout();
            layout.gap = 40;
            layout.padding = 40;
            this.layout = layout;
            //btn
            var btn:egret.gui.Button = new egret.gui.Button();
            btn.label = "普通状态";
            this.addElement(btn);
            var btn2:egret.gui.Button = new egret.gui.Button();
            btn2.label = "按钮按下";
            this.addElement(btn2);
            var btn3:egret.gui.Button = new egret.gui.Button();
            btn3.label = "按钮禁用";
            btn3.enabled = false;
            this.addElement(btn3);
        }
    }
}