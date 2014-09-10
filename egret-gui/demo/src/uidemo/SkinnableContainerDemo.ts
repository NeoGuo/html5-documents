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
            this.myContainer.skinName = uiskins.BackgroundSkin;
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
            var currentState:string = this.myContainer.getCurrentSkinState();
            console.log(currentState);
            if(currentState=="normal") {
                this.myContainer.setState("otherBG");
            } else {
                this.myContainer.setState("normal");
            }
        }
    }
    export class MyContainerDemo extends egret.gui.SkinnableContainer
    {
        private myState:string = "normal";
        public constructor() {
            super();
        }
        public setState(stateName:string):void {
            this.myState = stateName;
            this.invalidateSkinState();
        }
        /**重写*/
        public getCurrentSkinState():string {
            return this.myState;
        }
    }
}