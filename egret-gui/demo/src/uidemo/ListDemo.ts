/**
 * Created by shaorui on 14-8-14.
 */
module uidemo
{
    export class ListDemo extends egret.gui.Group
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
            for (var i:number = 1; i < 50; i++)
            {
                sourceArr.push({name:"item"+i});
            }
            //用ArrayCollection包装
            var myCollection:egret.gui.ArrayCollection = new egret.gui.ArrayCollection(sourceArr);
            //创建列表
            var dataList:egret.gui.List = new egret.gui.List();
            dataList.dataProvider = myCollection;
            dataList.percentWidth = 100;
            dataList.percentHeight = 100;
            //设置字段名
            dataList.labelField = "name";
            //dataList.labelFunction = this.myLabelFunction;
            //默认选项
            //dataList.selectedIndex = 1;
            //dataList.selectedItem = myCollection.getItemAt(2);
            //dataList.allowMultipleSelection = false;//是否允许多选
            //事件
            dataList.addEventListener(egret.gui.IndexChangeEvent.CHANGE,this.listChangeHandler,this);
            dataList.addEventListener(egret.gui.IndexChangeEvent.CHANGING,this.listChangingHandler,this);
            //dataList.addEventListener(egret.gui.ListEvent.ITEM_CLICK,this.listClickhandler,this);
            //虚拟布局
            //dataList.useVirtualLayout = true;
            //皮肤
            dataList.skinName = uiskins.BgListSkin;
            dataList.itemRenderer = new egret.gui.ClassFactory(uiskins.ToggleRenderer);
            dataList.itemRendererSkinName = uiskins.ToggleRendererSkin;
            //可以设置不同的layout
            //var gridLayout:egret.gui.TileLayout = new egret.gui.TileLayout();
            //gridLayout.columnWidth = 240;
            //gridLayout.requestedColumnCount = 2;
            //gridLayout.paddingTop = 20;
            //dataList.layout = gridLayout;
            this.addElement(dataList);
        }
        /**事件侦听*/
        private listChangingHandler(evt:egret.gui.IndexChangeEvent):void {
            if(evt.newIndex==2) {
                evt.preventDefault();
            }
        }
        /**事件侦听*/
        private listChangeHandler(evt:egret.gui.IndexChangeEvent):void {
            var dataList:egret.gui.List = evt.currentTarget;
            console.log(evt.oldIndex+","+evt.newIndex);
            console.log(dataList.selectedItem.name);
        }
        /**事件侦听*/
        private listClickhandler(evt:egret.gui.ListEvent):void {
            var dataList:egret.gui.List = evt.currentTarget;
            console.log(evt.item.name+" clicked");
        }
        /**labelFunction*/
        private myLabelFunction(item:any):string {
            return "Hi:"+item.name;
        }
    }
}