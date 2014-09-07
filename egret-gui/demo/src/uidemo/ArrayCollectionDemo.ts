/**
 * Created by shaorui on 14-8-14.
 */
module uidemo
{
    export class ArrayCollectionDemo extends egret.gui.Group
    {
        public constructor() {
            super();
        }
        public createChildren(): void {
            super.createChildren();
            //先创建一个数组
            var sourceArr:any[] = [{name:"one",value:1},{name:"two",value:2}];
            //用ArrayCollection包装
            var myCollection:egret.gui.ArrayCollection = new egret.gui.ArrayCollection();
            //当数据改变的时候，ArrayCollection会派发事件
            myCollection.addEventListener(egret.gui.CollectionEvent.COLLECTION_CHANGE,this.collectionChangeHandler,this);
            //添加一项
            var itemData:Object = {name:"three",value:3};
            myCollection.addItem(itemData);//相当于push
            myCollection.addItemAt({name:"zero",value:0},0);//添加的指定的索引位置
            //获取
            console.log(myCollection.getItemAt(0).name);//根据索引位置获取某一项数据
            console.log(myCollection.getItemIndex(itemData));//获取某一项数据所在的索引值
            console.log(myCollection.length);//获取数组长度
            //切换顺序
            myCollection.moveItemAt(0,1);
            //替换数据
            myCollection.replaceItemAt({name:"zero",value:-1},0);
            //删除
            myCollection.removeItemAt(0);//删除某一个
            myCollection.removeAll();//全部删除
        }
        private collectionChangeHandler(evt:egret.gui.CollectionEvent):void {
            console.log("数据已改变:"+evt.kind+","+evt.target.length);
        }
    }
}