/**
 * Created by shaorui on 14-9-1.
 */
module uiskins
{
    export class LabelRenderer extends egret.gui.ItemRenderer
    {
        public constructor(){
            super();
            this.touchChildren = true;
        }
        public dataChanged():void{
            this.labelDisplay.text = this.data.label;
        }
    }
}