/**
 * Created by shaorui on 14-8-25.
 */
module uiskins
{
    export class PanelSkinT extends egret.gui.Skin
    {
        /**背景图片*/
        private bg:egret.gui.UIAsset;
        /**和组件中的定义相对应，确定皮肤应该具备哪些部件*/
        public skinParts:Array<string> = ["titleDisplay","contentGroup"];
        /**用于显示标题*/
        public titleDisplay:egret.gui.Label;
        /**对于SkinnableContainer来说，contentGroup是必须有的*/
        public contentGroup:egret.gui.Group;

        public constructor() {
            super();
        }
        public createChildren(): void {
            super.createChildren();
            //这里借用一下Alert的背景先
            this.bg = new egret.gui.UIAsset("panel_back_png");
            this.bg.percentWidth = 100;//这个相当于HTML中的百分比，设置100就是100%的意思
            this.bg.percentHeight = 100;//宽和高都是100%，也就是充满整个空间咯(根据皮肤的尺寸)
            this.addElement(this.bg);
            //标题栏
            this.titleDisplay = new egret.gui.Label();
            this.titleDisplay.x = 20;
            this.titleDisplay.y = 16;
            this.titleDisplay.textColor = 0x000000;
            this.addElement(this.titleDisplay);
            //contentGroup必须有，否则你添加到Panel的对象是显示不出来的
            this.contentGroup = new egret.gui.Group();
            this.contentGroup.top = 64;
            this.contentGroup.bottom = 0;
            this.contentGroup.left = 0;
            this.contentGroup.right = 0;
            this.addElement(this.contentGroup);
        }
    }
}