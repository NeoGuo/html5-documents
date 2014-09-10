/**
 * Created by shaorui on 14-8-14.
 */
module uidemo
{
    export class StateButtonDemo extends egret.gui.Group
    {
        private stateBtn:uicomp.StateButton;
        public constructor() {
            super();
        }
        public createChildren(): void {
            super.createChildren();
            //普通按钮
            var btn1:egret.gui.Button = new egret.gui.Button();
            btn1.label = "Default Button";
            btn1.width = 200;
            btn1.height = 80;
            this.addElement(btn1);
            //自定义按钮
            var btn2:uicomp.AssetButton = new uicomp.AssetButton("app_egret_labs_jpg","button_down_png","button_disabled_png");
            btn2.label = "Asset Button";
            btn2.width = 200;
            btn2.height = 80;
            btn2.y = 100;
            this.addElement(btn2);
            //自定义按钮
            this.stateBtn = new uicomp.StateButton("app_egret_labs_jpg","button_down_png","app_egret_labs_jpg");
            this.stateBtn.width = 200;
            this.stateBtn.height = 80;
            this.stateBtn.y = 200;
            this.addElement(this.stateBtn);
            //check
            var cbx:egret.gui.CheckBox = new egret.gui.CheckBox();
            cbx.y = 300;
            cbx.addEventListener(egret.Event.CHANGE,this.changeSkinHandler,this);
            this.addElement(cbx);
        }
        private changeSkinHandler(evt:egret.Event):void {
            this.stateBtn.upSkinName = evt.target.selected?"button_normal_png":"app_egret_labs_jpg";
        }
    }
}