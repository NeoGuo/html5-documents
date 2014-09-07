/**
 * Created by shaorui on 14-8-14.
 */
module uidemo
{
    export class SkinnableContainerDemo extends egret.gui.Group
    {
        private myContainer:egret.gui.SkinnableContainer;
        public constructor() {
            super();
        }
        public createChildren(): void {
            super.createChildren();
            //创建Group
            this.myContainer = new egret.gui.SkinnableContainer();
            this.myContainer.skinName = uiskins.BackgroundSkin;
            this.myContainer.width = 300;
            this.myContainer.height = 300;
            this.addElement(this.myContainer);
            this.myContainer.validateNow();
            //内部对象
            var btn:egret.gui.Button = new egret.gui.Button();
            btn.label = "Button";
            this.myContainer.addElement(btn);
        }

    }
}