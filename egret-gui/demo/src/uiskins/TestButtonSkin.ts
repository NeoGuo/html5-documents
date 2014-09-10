/**
 * Created by shaorui on 14-9-9.
 */
module uiskins
{
    export class TestButtonSkin extends egret.gui.Skin
    {
        public skinParts:Array<string> = ["bg","labelDisplay"];
        public bg:egret.gui.UIAsset;
        public labelDisplay:egret.gui.Label;

        public constructor() {
            super();
            this.height = 60;
            this.minWidth = 140;
            this.elementsContent = [this.getBG(), this.getLabelDisplay()];
            this.states = [
                new egret.gui.State("up", [
                    new egret.gui.SetProperty("labelDisplay", "textColor", 0x1e7465)
                ]),
                new egret.gui.State("down", [
                    new egret.gui.SetProperty("labelDisplay", "textColor", 0x1e7465)
                ]),
                new egret.gui.State("disabled", [
                    new egret.gui.SetProperty("labelDisplay", "textColor", 0x727070)
                ])
            ];
        }
        /**背景*/
        private getBG():egret.gui.UIAsset {
            var bg = new egret.gui.UIAsset();
            this.bg = bg;
            bg.percentHeight = 100;
            bg.percentWidth = 100;
            return bg;
        }
        /**文本*/
        private getLabelDisplay():egret.gui.Label {
            var t = new egret.gui.Label();
            this.labelDisplay = t;
            t.bottom = 12;
            t.fontFamily = "Tahoma";
            t.left = 10;
            t.right = 10;
            t.size = 20;
            t.textAlign = "center";
            t.top = 8;
            t.verticalAlign = "middle";
            return t;
        }
        /**当状态改变时，背景也做相应的变化*/
        public commitCurrentState(): void {
            super.commitCurrentState();
            switch(this.currentState) {
                case "up":
                    this.bg.source = this.hostComponent["upSkinName"];
                    break;
                case "down":
                    this.bg.source = this.hostComponent["downSkinName"];
                    break;
                case "disabled":
                    this.bg.source = this.hostComponent["disabledSkinName"];
                    break;
            }
        }
        public createChildren(): void {
            super.createChildren();
        }
    }
}