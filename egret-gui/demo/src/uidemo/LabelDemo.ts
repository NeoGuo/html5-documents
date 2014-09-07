/**
 * Created by shaorui on 14-8-14.
 */
module uidemo
{
    export class LabelDemo extends egret.gui.Group
    {
        public constructor() {
            super();
        }
        public createChildren(): void {
            super.createChildren();
            var label:egret.gui.Label = new egret.gui.Label();
            label.text = "我是地球人";
            //样式
            label.fontFamily = "Tahoma";//设置字体
            label.textColor = 0xFFFFFF;//设置颜色
            label.size = 35;//设置文本字号
            label.bold = true;//设置是否加粗
            label.italic = true;//设置是否斜体
            label.textAlign = "left";//设置水平对齐方式
            label.verticalAlign = "top";//设置垂直对齐方式
            label.lineSpacing = 2;//行间距
            //控制换行
            //label.width = 200;
            //label.height = 30;
            //label.text = "很多的文字很多的文字很多的文字很多的文字很多的文字很多的文字";
            //label.maxDisplayedLines = 2;//最大行数
            //padding控制
            label.padding = 30;
            //label.paddingLeft = 10;
            //label.paddingRight = 10;
            //label.paddingTop = 10;
            //label.paddingBottom = 10;
            this.addElement(label);
        }
    }
}