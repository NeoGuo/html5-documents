/**
 * Created by shaorui on 14-8-14.
 */
module uidemo
{
    export class DropDownListDemo extends egret.gui.Group
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
            //创建下拉列表
            var ddl:egret.gui.DropDownList = new egret.gui.DropDownList();
            ddl.dataProvider = myCollection;
            ddl.y = 40;
            ddl.width = 300;
            //设置字段名
            ddl.labelField = "name";
            //默认选项
            ddl.selectedIndex = 1;
            //事件
            ddl.addEventListener(egret.Event.CHANGE,this.listChangeHandler,this);
            //皮肤
            //ddl.skinName = uiskins.DropDownListSkin;
            ddl.itemRenderer = new egret.gui.ClassFactory(uiskins.ToggleRenderer);
            ddl.itemRendererSkinName = "uiskins.ToggleRendererSkin";
            //add
            this.addElement(ddl);
        }
        /**事件侦听*/
        private listChangeHandler(evt:egret.Event):void {
            var ddl:egret.gui.DropDownList = evt.currentTarget;
            console.log(ddl.selectedItem.name);
        }
    }
}