/**
 * Created by shaorui on 14-9-9.
 */
module uicomp
{
    export class StateButton extends egret.gui.Button
    {
        private _upSkinName:any;
        private _downSkinName:any;
        private _disabledSkinName:any;

        public upSkin:egret.gui.UIAsset;
        public downSkin:egret.gui.UIAsset;
        public disabledSkin:egret.gui.UIAsset;

        public constructor(upSkinName?:any,downSkinName?:any,disabledSkinName?:any) {
            super();
            this.skinName = "uiskins.StateButtonSkin";
            this._upSkinName = upSkinName;
            this._downSkinName = downSkinName;
            this._disabledSkinName = disabledSkinName;
        }

        public get upSkinName():any{
            return this._upSkinName;
        }
        public set upSkinName(value:any){
            if(value==this._upSkinName)
                return;
            this._upSkinName = value;
            if(this.upSkin){
                this.upSkin.source = value;
            }
        }

        public get downSkinName():any{
            return this._downSkinName;
        }
        public set downSkinName(value:any){
            if(value==this._downSkinName)
                return;
            this._downSkinName = value;
            if(this.downSkin){
                this.downSkin.source = value;
            }
        }

        public get disabledSkinName():any{
            return this._disabledSkinName;
        }
        public set disabledSkinName(value:any){
            if(value==this._disabledSkinName)
                return;
            this._disabledSkinName = value;
            if(this.disabledSkin){
                this.disabledSkin.source = value;
            }
        }

        public partAdded(partName:string, instance:any):void{
            super.partAdded(partName, instance);
            if (instance == this.upSkin){
                this.upSkin.source = this._upSkinName;
            }
            else if(instance==this.downSkin){
                this.downSkin.source = this._downSkinName;
            }
            else if(instance==this.disabledSkin){
                this.disabledSkin.source = this._disabledSkinName;
            }
        }
    }
}