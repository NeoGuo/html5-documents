/**
 * Created by shaorui on 14-9-1.
 */
module uiskins
{
    export class LabelRendererSkin extends egret.gui.Skin
    {
        /**和组件中的定义相对应，确定皮肤应该具备哪些部件*/
        public skinParts:Array<string> = ["labelDisplay"];
        /**文本标签*/
        public labelDisplay:egret.gui.Label;
        /**背景*/
        private bg:egret.gui.UIAsset;

        public constructor() {
            super();
            this.height = 80;
        }
        public createChildren(): void {
            super.createChildren();
            //设置状态，状态在皮肤中非常有用，不同类型的组件，可以拥有不同的状态
            //对于ItemRenderer，本质上就是一个按钮，所以它可以具备按钮的3种状态：up,down,disabled
            //在皮肤中，要使用哪些状态，您必须自己创建这些状态，并添加到states数组中，并且状态需要和组件相对应：
            //如果组件定义了某种状态，皮肤中未包含这个状态，则该组件进入该状态时，皮肤不会做相应的变化
            //如果皮肤声明了一个状态，组件未包含该状态，那实际上也毫无意义
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
            this.labelDisplay.size = 20;
            this.labelDisplay.verticalAlign = "middle";
            this.labelDisplay.textAlign = "center";
            this.labelDisplay.percentWidth=100;
            this.labelDisplay.percentHeight=100;
            this.addElement(this.labelDisplay);
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