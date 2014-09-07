/**
 * Created by shaorui on 14-8-14.
 */
module uidemo
{
    export class ViewStackDemo extends egret.gui.Group
    {
        private viewStack:egret.gui.ViewStack;

        public constructor() {
            super();
        }
        public createChildren(): void {
            super.createChildren();
            this.viewStack = new egret.gui.ViewStack();
            var btn1:egret.gui.Button = new egret.gui.Button();
            btn1.label = "Button One";
            this.viewStack.addElement(btn1);
            var btn2:egret.gui.Button = new egret.gui.Button();
            btn2.label = "Button Two";
            this.viewStack.addElement(btn2);
            //this.viewStack.addEventListener("IndexChanged",this.indexChangeHandler,this);
            this.viewStack.selectedIndex = 1;
            //timer控制选项
            var timer:egret.Timer = new egret.Timer(500);
            timer.addEventListener(egret.TimerEvent.TIMER,this.changeIndexByTimer,this);
            timer.start();
            //show
            this.addElement(this.viewStack);
        }
        private changeIndexByTimer(evt:egret.TimerEvent):void {
            this.viewStack.selectedIndex = this.viewStack.selectedIndex==0?1:0
        }
        private indexChangeHandler(evt:egret.Event):void {
            console.log(this.viewStack.selectedIndex);
        }
    }
}