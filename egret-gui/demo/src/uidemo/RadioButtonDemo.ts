/**
 * Created by shaorui on 14-8-14.
 */
module uidemo
{
    export class RadioButtonDemo extends egret.gui.Group
    {
        public constructor() {
            super();
        }
        public createChildren(): void {
            super.createChildren();
            this.layout = new egret.gui.VerticalLayout();
            this.initRadioButton();
        }
        private initRadioButton():void {
            var rdb:egret.gui.RadioButton = new egret.gui.RadioButton();
            rdb.label = "选择我1";
            rdb.value = 1;
            rdb.groupName = "G1";
            rdb.addEventListener(egret.Event.CHANGE,this.radioChangeHandler,this);
            this.addElement(rdb);
            var rdb2:egret.gui.RadioButton = new egret.gui.RadioButton();
            rdb2.label = "选择我2";
            rdb2.value = 2;
            rdb2.selected = true;//默认选项
            rdb2.groupName = "G1";
            rdb2.addEventListener(egret.Event.CHANGE,this.radioChangeHandler,this);
            this.addElement(rdb2);
        }
        private radioChangeHandler(evt:egret.Event):void {
            console.log(evt.target.value);
        }
        private initRadioButtonWithGroup():void {
            //单选按钮需要绑定到一个组上
            var radioGroup:egret.gui.RadioButtonGroup = new egret.gui.RadioButtonGroup();
            radioGroup.addEventListener(egret.Event.CHANGE,this.groupChangeHandler,this);
            //创建单选按钮
            var rdb:egret.gui.RadioButton = new egret.gui.RadioButton();
            rdb.label = "选择我1";
            rdb.value = 1;
            rdb.group = radioGroup;
            this.addElement(rdb);
            var rdb2:egret.gui.RadioButton = new egret.gui.RadioButton();
            rdb2.label = "选择我2";
            rdb2.value = 2;
            rdb2.selected = true;//默认选项
            rdb2.group = radioGroup;
            this.addElement(rdb2);
        }
        private groupChangeHandler(evt:egret.Event):void {
            var radioGroup:egret.gui.RadioButtonGroup = evt.target;
            console.log(radioGroup.selectedValue);
        }
    }
}