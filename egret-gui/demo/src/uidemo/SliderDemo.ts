/**
 * Created by shaorui on 14-8-14.
 */
module uidemo
{
    export class SliderDemo extends egret.gui.Group
    {
        public constructor() {
            super();
        }
        public createChildren(): void {
            super.createChildren();
            //水平
            var hSlider:egret.gui.HSlider = new egret.gui.HSlider();
            hSlider.width = 200;
            hSlider.x = 20;
            hSlider.y = 20;
            hSlider.minimum = 0;//定义最小值
            hSlider.maximum = 100;//定义最大值
            hSlider.value = 10;//定义默认值
            hSlider.addEventListener(egret.Event.CHANGE,this.changeHandler,this);
            this.addElement(hSlider);
            //竖着
            var vSlider:egret.gui.VSlider = new egret.gui.VSlider();
            vSlider.height = 200;
            vSlider.x = 100;
            vSlider.y = 60;
            vSlider.minimum = 100;//定义最小值
            vSlider.maximum = 200;//定义最大值
            vSlider.value = 120;//定义默认值
            vSlider.addEventListener(egret.Event.CHANGE,this.changeHandler,this);
            this.addElement(vSlider);
        }
        private changeHandler(evt:egret.TouchEvent):void {
            console.log(evt.target.value);
        }
    }
}