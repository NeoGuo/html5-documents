/**
 * Created by shaorui on 14-8-14.
 */
module uidemo
{
    export class ToggleButtonDemo extends egret.gui.Group
    {
        public constructor() {
            super();
        }
        public createChildren(): void {
            super.createChildren();
            var btn:egret.gui.ToggleButton = new egret.gui.ToggleButton();
            btn.x = btn.y = 20;
            btn.label = "我是ToggleButton";
            btn.addEventListener(egret.Event.CHANGE,this.changeHandler,this);
            this.addElement(btn);
            this.initToggleBar();
        }
        private changeHandler(evt:egret.Event):void {
            console.log(evt.target.selected);
        }

        private toggleBtns:egret.gui.ToggleButton[];
        private initToggleBar():void {
            this.toggleBtns = [];
            for(var i:number=0;i<4;i++) {
                var btn:egret.gui.ToggleButton = new egret.gui.ToggleButton();
                btn.label = i+1+"";
                btn.y = 100;
                btn.width = 80;
                btn.x = 20+i*80;
                btn.addEventListener(egret.Event.CHANGE,this.toggleChangeHandler,this);
                this.toggleBtns.push(btn);
                this.addElement(btn);
            }
        }
        private toggleChangeHandler(evt:egret.Event):void {
            for(var i:number=0;i<this.toggleBtns.length;i++) {
                var btn:egret.gui.ToggleButton = this.toggleBtns[i];
                btn.selected = (btn == evt.target);
            }
        }
    }
}