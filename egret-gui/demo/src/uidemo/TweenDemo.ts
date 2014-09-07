/**
 * Created by shaorui on 14-8-14.
 */
module uidemo
{
    export class TweenDemo extends egret.gui.Group
    {
        public constructor() {
            super();
        }
        public createChildren(): void {
            super.createChildren();
            //var shape:egret.Shape = new egret.Shape();
            //shape.graphics.beginFill(0xFF0000,1);
            //shape.graphics.drawCircle(0,0,10);
            //shape.graphics.endFill();
            var fileIcon:egret.Bitmap = new egret.Bitmap(RES.getRes("file_icon"));
            console.log(fileIcon.width+","+fileIcon.height);
            fileIcon.width = 300;
            fileIcon.height = 600;
            console.log(fileIcon.width+","+fileIcon.height);
            var shapeUI:egret.gui.UIAsset = new egret.gui.UIAsset(fileIcon);
            this.addElement(shapeUI);
        }
    }
}