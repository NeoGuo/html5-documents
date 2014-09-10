/**
 * Created by shaorui on 14-8-14.
 */
module uidemo
{
    export class DataGroupDemo extends egret.gui.Group
    {
        public constructor() {
            super();
            this.percentWidth = 100;
            this.percentHeight = 100;
        }
        public createChildren(): void {
            super.createChildren();
            //先创建一个数组
            var sourceArr:any[] = [];
            for (var i:number = 1; i < 5; i++)
            {
                sourceArr.push({label:"item"+i});
            }
            //用ArrayCollection包装
            var myCollection:egret.gui.ArrayCollection = new egret.gui.ArrayCollection(sourceArr);
            //创建数据容器
            var dataGroup:egret.gui.DataGroup = new egret.gui.DataGroup();
            dataGroup.dataProvider = myCollection;
            dataGroup.itemRenderer = new egret.gui.ClassFactory(uiskins.LabelRenderer);
            dataGroup.itemRendererSkinName = "uiskins.LabelRendererSkin";
            dataGroup.percentWidth = 100;
            dataGroup.percentHeight = 100;
            //DataGroup应该设置layout
            var vLayout:egret.gui.VerticalLayout = new egret.gui.VerticalLayout();
            vLayout.horizontalAlign = egret.HorizontalAlign.CONTENT_JUSTIFY;
            vLayout.gap = 5;
            dataGroup.layout = vLayout;
            //var gridLayout:egret.gui.TileLayout = new egret.gui.TileLayout();
            //gridLayout.columnWidth = 240;
            //gridLayout.requestedColumnCount = 2;
            //gridLayout.paddingTop = 20;
            //dataGroup.layout = gridLayout;
            this.addElement(dataGroup);
        }
    }
}