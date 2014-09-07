class GameApp extends egret.DisplayObjectContainer{

    /**
     * 加载进度界面
     */
    private loadingView:LoadingUI;

    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
    }

    private onAddToStage(evt:egret.Event){
        //设置加载进度界面
        this.loadingView  = new LoadingUI();
        this.stage.addChild(this.loadingView);
        //注入自定义的素材解析器
        egret.Injector.mapClass("egret.gui.IAssetAdapter",AssetAdapter);
        //设置默认皮肤
        this.setSkinType("simple");
    }
    /*
     * 设置皮肤类型
     * */
    private setSkinType(type:string):void
    {
        var path:string;
        switch (type)
        {
            case "ocean":
                egret.gui.Theme.load("resource/theme/theme_ocean.thm");
                path="resource/config/resource_ocean.json";
                break;
            case "simple":
                egret.gui.Theme.load("resource/theme/theme_simple.thm");
                path="resource/config/resource_simple.json";
                break;
        }
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE,this.onGroupComp,this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS,this.onResourceProgress,this);
        RES.loadConfig(path);
        RES.loadGroup("global");
    }
    public onGroupComp(event:RES.ResourceEvent):void {
        switch(event.groupName)
        {
            case "global":
                RES.loadGroup("skin");
                break;
            case "skin":
                RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE,this.onGroupComp,this);
                RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS,this.onResourceProgress,this);
                this.createGameScene();
                break;
        }
    }
    /**
     * preload资源组加载进度
     */
    private onResourceProgress(event:RES.ResourceEvent):void {
        this.loadingView.setProgress(event.itemsLoaded,event.itemsTotal);
    }
    private uiStage:egret.gui.UIStage;
    /**
     * 创建游戏场景
     */
    private createGameScene():void{
        this.stage.removeChild(this.loadingView);
        this.uiStage = new egret.gui.UIStage();
        this.addChild(this.uiStage);
        //control
        //this.uiStage.addElement(new uidemo.TweenDemo());
        //this.uiStage.addElement(new uidemo.LabelDemo());
        //this.uiStage.addElement(new uidemo.ButtonDemo());
        //this.uiStage.addElement(new uidemo.ToggleButtonDemo());
        //this.uiStage.addElement(new uidemo.CheckBoxDemo());
        //this.uiStage.addElement(new uidemo.RadioButtonDemo());
        //this.uiStage.addElement(new uidemo.SliderDemo());
        //this.uiStage.addElement(new uidemo.ProgressBarDemo());
        //this.uiStage.addElement(new uidemo.AlertDemo());
        //container
        //this.uiStage.addElement(new uidemo.GroupDemo());
        //this.uiStage.addElement(new uidemo.SkinnableContainerDemo());
        //this.uiStage.addElement(new uidemo.PanelDemo());
        //this.uiStage.addElement(new uidemo.ScrollerDemo());
        //DataCollection
        //this.uiStage.addElement(new uidemo.ArrayCollectionDemo());
        //this.uiStage.addElement(new uidemo.DataGroupDemo());
        //this.uiStage.addElement(new uidemo.ListDemo());
        //this.uiStage.addElement(new uidemo.DropDownListDemo());
        //this.uiStage.addElement(new uidemo.TreeDemo());
        //window
        //this.uiStage.addElement(new uidemo.TitleWindowDemo());
        //this.uiStage.addElement(new uidemo.PopUpDemo());
        //navigator
        //this.uiStage.addElement(new uidemo.ViewStackDemo());
        //this.uiStage.addElement(new uidemo.TabBarDemo());
        //layout
        //this.uiStage.addElement(new uidemo.DefaultLayoutDemo());
        //this.uiStage.addElement(new uidemo.CustomLayoutDemo());
        //this.uiStage.addElement(new uidemo.SpacerDemo());
        //state
        //this.uiStage.addElement(new uidemo.StateDemo());
        //skin

        //FPS
        //egret.Profiler.getInstance().run();
    }

}


