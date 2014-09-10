/**
 * Created by shaorui on 14-9-1.
 */
module uiskins
{
    export class ToggleRenderer extends egret.gui.ItemRenderer
    {
        public labelDisplay:egret.gui.Label;
        public toggleButton:egret.gui.ToggleButton;

        public constructor(){
            super();
            this.touchChildren = true;
        }
        public dataChanged():void{
            this.labelDisplay.text = this.data.name;
            this.toggleButton.selected = this.data.checked;
            this.toggleButton.addEventListener(egret.Event.CHANGE,this.toggleChangeHandler,this);
            this.toggleButton.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.toggleTouchHandler,this)
        }
        /**取消事件的传递，避免按钮操作影响列表操作*/
        private toggleTouchHandler(evt:egret.Event):void {
            evt.stopImmediatePropagation();
        }
        /**将按钮的操作映射到数据上*/
        private toggleChangeHandler(evt:egret.Event):void {
            this.data.checked = this.toggleButton.selected;
        }
    }
}