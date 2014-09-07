/**
 * Created by shaorui on 14-8-14.
 */
module uidemo
{
    export class CheckBoxDemo extends egret.gui.Group
    {
        public constructor() {
            super();
        }
        public createChildren(): void {
            super.createChildren();
            this.layout = new egret.gui.VerticalLayout();
            var cbx:egret.gui.CheckBox = new egret.gui.CheckBox();
            cbx.addEventListener(egret.Event.CHANGE,this.changeHandler,this);
            cbx.label = "选择我1";
            this.addElement(cbx);
            var cbx2:egret.gui.CheckBox = new egret.gui.CheckBox();
            cbx2.label = "选择我2";
            cbx2.selected = true;
            this.addElement(cbx2);
        }
        private changeHandler(evt:egret.Event):void {
            console.log(evt.target.selected);
        }
    }
}