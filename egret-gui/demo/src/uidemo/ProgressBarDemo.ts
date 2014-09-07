/**
 * Created by shaorui on 14-8-14.
 */
module uidemo
{
    export class ProgressBarDemo extends egret.gui.Group
    {
        private pBar:egret.gui.ProgressBar;
        private vBar:egret.gui.ProgressBar;

        public constructor() {
            super();
        }
        public createChildren(): void {
            super.createChildren();
            //水平进度条
            this.pBar = new egret.gui.ProgressBar();
            this.pBar.hostComponentKey = "HProgressBar";
            this.pBar.y = 20;
            this.pBar.width = 200;
            this.pBar.height = 40;
            this.pBar.value = 0;//取值范围是0-100
            this.pBar.labelFunction = this.barLabelFunction;
            this.addElement(this.pBar);
            //垂直进度条
            this.vBar = new egret.gui.ProgressBar();
            this.vBar.hostComponentKey = "VProgressBar";
            this.vBar.direction = "bottomToTop";
            this.vBar.y = 60;
            this.vBar.height = 200;
            this.vBar.value = 0;//取值范围是0-100
            this.addElement(this.vBar);
            //用timer来模拟一下加载进度吧
            var timer:egret.Timer = new egret.Timer(100,100);
            timer.addEventListener(egret.TimerEvent.TIMER,this.timerHandler,this);
            timer.start();
        }
        private barLabelFunction(value:number,maximum:number):string {
            return "加载中... "+Math.ceil(value/maximum*100)+"%";
        }
        private timerHandler(evt:egret.TimerEvent):void {
            this.pBar.value += 1;
            this.vBar.value += 1;
        }
    }
}