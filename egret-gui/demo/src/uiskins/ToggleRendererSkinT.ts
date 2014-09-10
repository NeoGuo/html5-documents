/**
 * Created by shaorui on 14-9-1.
 */
module uiskins
{
    export class ToggleRendererSkinT extends egret.gui.Skin
    {
        /**和组件中的定义相对应，确定皮肤应该具备哪些部件*/
        public skinParts:Array<string> = ["labelDisplay","toggleButton"];
        /**文本标签*/
        public labelDisplay:egret.gui.Label;
        /**选择*/
        public toggleButton:egret.gui.ToggleButton;
        /**背景*/
        private bg:egret.gui.UIAsset;

        public constructor() {
            super();
            this.height = 80;
            //this.height = Math.random()>0.5?80:160;
        }
        public createChildren(): void {
            super.createChildren();
            //设置状态
            this.states = ["up","down","disabled"];
            //this.states.push(new egret.gui.State("up",[]));
            //this.states.push(new egret.gui.State("down",[]));
            //this.states.push(new egret.gui.State("disabled",[]));
            //创建背景
            this.bg = new egret.gui.UIAsset();
            this.bg.percentWidth = 100;
            this.bg.percentHeight = 100;
            this.addElement(this.bg);
            //创建文本
            this.labelDisplay = new egret.gui.Label();
            this.labelDisplay.size = 36;
            this.labelDisplay.verticalAlign = "middle";
            this.labelDisplay.textAlign = "left";
            this.labelDisplay.paddingLeft = 20;
            this.labelDisplay.percentWidth=100;
            this.labelDisplay.percentHeight=100;
            this.addElement(this.labelDisplay);
            //toggle
            this.toggleButton = new egret.gui.ToggleButton();
            this.toggleButton.hostComponentKey="ToggleOnOffButton";
            this.toggleButton.right=30;
            this.toggleButton.verticalCenter=0;
            this.addElement(this.toggleButton);
        }
        /**当状态改变时，背景和文本颜色也做相应的变化*/
        public commitCurrentState(): void {
            super.commitCurrentState();
            switch(this.currentState) {
                case "up":
                    this.bg.source = "button_normal_png";
                    this.labelDisplay.textColor = 0x111111;
                    break;
                case "down":
                    this.bg.source = "button_down_png";
                    this.labelDisplay.textColor = 0xffffff;
                    break;
                case "disabled":
                    this.bg.source = "button_disabled_png";
                    this.labelDisplay.textColor = 0xcccccc;
                    break;
            }
        }
    }
}