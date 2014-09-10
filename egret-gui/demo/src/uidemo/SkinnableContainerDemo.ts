/**
 * Created by shaorui on 14-8-14.
 */
module uidemo
{
    export class SkinnableContainerDemo extends egret.gui.Group
    {
        private myContainer:MyContainerDemo;
        public constructor() {
            super();
        }
        public createChildren(): void {
            super.createChildren();
            //创建Group
            this.myContainer = new MyContainerDemo();
            this.myContainer.skinName = "uiskins.BackgroundSkin";
            this.myContainer.width = 300;
            this.myContainer.height = 300;
            this.addElement(this.myContainer);
            this.myContainer.validateNow();
            //内部对象
            var btn:egret.gui.Button = new egret.gui.Button();
            btn.label = "Button";
            btn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.changeState,this);
            this.myContainer.addElement(btn);
        }
        private changeState(evt:egret.TouchEvent):void {
            this.myContainer.hightlight = !this.myContainer.hightlight;
        }
    }
    export class MyContainerDemo extends egret.gui.SkinnableContainer
    {
        private _highlight:boolean = false;

        public get hightlight():boolean {
            return this._highlight;
        }
        public set hightlight(value:boolean) {
            if(this._highlight == value)
                return;
            this._highlight = value;
            this.invalidateSkinState();
        }

        public constructor() {
            super();
        }

        /**重写*/
        public getCurrentSkinState():string {
            if(this._highlight)
                return "highlight";
            return  super.getCurrentSkinState();
        }
    }
}