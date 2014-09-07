/**
 * Created by shaorui on 14-8-14.
 */
module uidemo
{
    export class TreeDemo extends egret.gui.Group
    {
        public constructor() {
            super();
            this.percentWidth = 100;
            this.percentHeight = 100;
        }
        public createChildren(): void {
            super.createChildren();
            //数据源
            var dp:egret.gui.ObjectCollection = new egret.gui.ObjectCollection();
            dp.source = {children: [
                {dir: true, name: "TreeItem0",
                    children: [
                        {name: "TreeItem00"},
                        {dir: true, name: "TreeItem01",
                            children: [
                                {name: "TreeItem010"}
                            ]}
                    ]},
                {dir: true, name: "TreeItem1", children: [{name: "TreeItem10"},{name: "TreeItem11"}]},
                {name: "TreeItem2"}
            ]};
            //设置数据源的父子关系，这样才会缩进
            egret.gui.ObjectCollection.assignParent(dp.source,"children","parent");
            //创建树
            var tree:egret.gui.Tree = new egret.gui.Tree();
            tree.iconFunction = this.iconFunc;
            tree.labelField="name";
            tree.top = 20;
            tree.left = 20;
            tree.right = 20;
            tree.height = 300;
            tree.dataProvider = dp;
            tree.expandItem(dp.getItemAt(0),true);
            this.addElement(tree);
        }
        /*呈现项的icon筛选*/
        private iconFunc(item:any):any {
            if (item.dir)
                return "tree_icon_dir_png";
            else
                return "tree_icon_file_png";
        }
    }
}