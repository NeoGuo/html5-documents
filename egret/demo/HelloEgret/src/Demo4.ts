/**
 * 文字Demo
 */
class Demo4 extends egret.DisplayObjectContainer {

    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.startGame,this);
    }
    /**游戏启动后，会自动执行此方法*/
    public startGame():void {
        this.loadResource();
    }
    /**加载所需资源*/
    private loadResource():void {
        //使用资源管理器加载资源
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE,this.onResourceLoadComplete,this);
        RES.loadConfig("resource/resource.json","resource/");
        RES.loadGroup("demo4");
    }
    /**加载完毕后即可使用*/
    private onResourceLoadComplete(event:RES.ResourceEvent):void {
        this.initDefaultText();
        this.initBitmapText();
        this.initTextInput();
    }
    /**显示普通文本*/
    private initDefaultText():void {
        var label1 = new egret.TextField();//创建TextField实例
        //label1.fontFamily = "Impact";//设置字体，中文慎用，受系统和浏览器限制，表现可能不一致
        label1.textColor = 0xffffff;//设置颜色，和Flash一样，设置16进制的数值
        label1.textAlign = "left";//设置文本对齐，可选:left,center,right
        label1.text = "English我是光头强\n你是熊大";//用\n来换行
        label1.size = 30;//设置字号
        label1.width = 120;//如果设置宽度，则文本自动换行
        label1.strokeColor = 0xFF0000;//设置描边颜色，描边在游戏中的文字上很常见
        label1.stroke = 2;//设置描边大小
        //设置坐标
        label1.x = 120;
        label1.y = 100;
        //支持旋转和斜切
        label1.rotation = 30;
        label1.skewX = 30;
        this.addChild(label1);//添加到显示列表
    }
    /**显示位图文本*/
    private initBitmapText():void {
        var bitmap1 = new egret.BitmapText();
        bitmap1.spriteSheet = RES.getRes("bitmapFont");
        bitmap1.text = "HelloWorld";
        this.addChild(bitmap1);
    }
    /**显示文本输入*/
    private initTextInput():void {
        var input:egret.TextInput = new egret.TextInput();
        input.x = 120;
        input.y = 210;
        input.width = 400;
        input.height = 200;
        this.addChild(input);
        input.setText("输入点文字吧");
    }
}
