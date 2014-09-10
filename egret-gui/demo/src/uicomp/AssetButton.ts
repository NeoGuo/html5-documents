/**
 * Created by shaorui on 14-9-9.
 */
module uicomp
{
    export class AssetButton extends egret.gui.Button
    {
        public upAssetName:any;
        public downAssetName:any;
        public disabledAssetName:any;

        public constructor(upAssetName?:any,downAssetName?:any,disabledAssetName?:any) {
            super();
            this.upAssetName = upAssetName;
            this.downAssetName = downAssetName;
            this.disabledAssetName = disabledAssetName;
            this.skinName = "uiskins.AssetButtonSkin";
        }
    }
}