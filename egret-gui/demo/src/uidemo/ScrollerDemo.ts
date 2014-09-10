/**
 * Created by shaorui on 14-8-14.
 */
module uidemo
{
    export class ScrollerDemo extends egret.gui.Group
    {
        public constructor() {
            super();
        }
        public createChildren(): void {
            super.createChildren();
            //创建一个Scroller
            var myController:egret.gui.Scroller = new egret.gui.Scroller();
            //注意位置和尺寸的设置是在Scroller上面，而不是容器上面
            myController.x = 40;
            myController.y = 40;
            myController.width = 400;
            myController.height = 300;
            //创建容器
            var group:egret.gui.Group = new egret.gui.Group();
            //创建一个大图添加到容器上
            var bmpAsset:egret.gui.UIAsset = new egret.gui.UIAsset("egret_labs");
            group.addElement(bmpAsset);
            //设置viewport
            myController.viewport = group;
            this.addElement(myController);
        }

    }
}