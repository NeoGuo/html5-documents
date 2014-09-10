/**
 * Created by shaorui on 14-8-14.
 */
module uidemo
{
    export class TabBarDemo extends egret.gui.Group
    {
        private viewStack:egret.gui.ViewStack;
        private tabBar:egret.gui.TabBar;

        public constructor() {
            super();
        }
        public createChildren(): void {
            super.createChildren();
            //this.createTabWithViewStack();
            this.createTabWithArrayCollection();
        }
        private createTabWithArrayCollection():void {
            //tabBar
            this.tabBar = new egret.gui.TabBar();
            this.tabBar.dataProvider = new egret.gui.ArrayCollection(["Tab 1", "Tab 2", "Tab 3"]);
            this.tabBar.addEventListener(egret.gui.ListEvent.ITEM_CLICK, this.onBarItemClick, this);
            //show
            this.addElement(this.tabBar);
        }
        private onBarItemClick(event:egret.gui.ListEvent):void {
            console.log(event.itemIndex);
        }
        private createTabWithViewStack():void {
            this.viewStack = new egret.gui.ViewStack();
            for(var i:number=0;i<3;i++) {
                var group:egret.gui.Group = new egret.gui.Group();
                group.name = "Group"+i;
                var btn:egret.gui.Button = new egret.gui.Button();
                btn.label = "Button"+i;
                group.addElement(btn);
                this.viewStack.addElement(group);
            }
            this.viewStack.selectedIndex = 0;
            //tabBar
            this.tabBar = new egret.gui.TabBar();
            this.tabBar.dataProvider = this.viewStack;
            //show
            this.addElement(this.viewStack);
            this.addElement(this.tabBar);
        }
    }
}