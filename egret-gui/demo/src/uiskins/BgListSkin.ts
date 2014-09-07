/**
 * Created by shaorui on 14-8-25.
 */
module uiskins
{
    export class BgListSkin extends egret.gui.Skin
    {
        private bg:egret.gui.UIAsset;
        /**和组件中的定义相对应，确定皮肤应该具备哪些部件*/
        public skinParts:Array<string> = ["dataGroup"];
        /**对于列表组件来说，dataGroup是必须有的*/
        public dataGroup:egret.gui.DataGroup;

        public constructor() {
            super();
        }
        public createChildren(): void {
            super.createChildren();
            var bmp:egret.Bitmap = new egret.Bitmap(RES.getRes("app_egret_labs_jpg"));
            this.bg = new egret.gui.UIAsset(bmp);
            this.bg.percentWidth = 100;
            this.bg.percentHeight = 100;
            this.addElement(this.bg);
            //dataGroup必须有
            var scroller:egret.gui.Scroller = new egret.gui.Scroller();
            scroller.top = 20;
            scroller.bottom = 20;
            scroller.left = 20;
            scroller.right = 20;
            this.addElement(scroller);
            this.dataGroup = new egret.gui.DataGroup();
            this.dataGroup.itemRendererSkinName = "skins.simple.ItemRendererSkin";
            var vLayout:egret.gui.VerticalLayout = new egret.gui.VerticalLayout();
            vLayout.gap = 0;
            vLayout.horizontalAlign = egret.HorizontalAlign.CONTENT_JUSTIFY;
            this.dataGroup.layout = vLayout;
            scroller.viewport = this.dataGroup;
        }
    }
}