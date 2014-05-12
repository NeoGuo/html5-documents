/**
 * 文字Demo
 */
class Demo4 {

    /**游戏启动后，会自动执行此方法*/
    public startGame():void {
        this.initDefaultText();
        this.loadBitmapTextResource();
        this.initTextInput();
    }
    /**显示普通文本*/
    private initDefaultText():void {
        var label1 = new ns_egret.TextField();//创建TextField实例
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
        var stage = ns_egret.MainContext.instance.stage;//获取Stage引用
        stage.addChild(label1);//添加到显示列表
    }
    /**加载位图文本资源*/
    private loadBitmapTextResource():void {
        var loader:ns_egret.LoadingController = new ns_egret.LoadingController();
        loader.addResource("font.egf", ns_egret.ResourceLoader.DATA_TYPE_TEXT);//加载描述文件
        loader.addResource("font.png", ns_egret.ResourceLoader.DATA_TYPE_IMAGE);//加载图片
        loader.addEventListener(ns_egret.ResourceLoader.LOAD_COMPLETE, this.initBitmapText, this);//事件侦听加载完成
        loader.load();//执行加载
    }
    /**显示位图文本*/
    private initBitmapText():void {
        var data = ns_egret.ResourceLoader.create("font.egf").data;//获取描述
        eval(data);//将描述转换为变量
        var bitmap1 = new ns_egret.BitmapText();//创建位图字体
        bitmap1.texture = ns_egret.TextureCache.getInstance().getTexture("font.png");//设置纹理
        bitmap1.bitmapFontData = data;//设置描述信息
        bitmap1.text = "HelloWorld";//设置文本
        var stage = ns_egret.MainContext.instance.stage;//获取Stage引用
        stage.addChild(bitmap1);
    }
    /**显示文本输入*/
    private initTextInput():void {
        var input:ns_egret.TextInput = new ns_egret.TextInput();
        input.x = 120;
        input.y = 210;
        input.width = 400;
        input.height = 200;
        var stage = ns_egret.MainContext.instance.stage;//获取Stage引用
        stage.addChild(input);
        input.setText("输入点文字吧");
    }
}

//create app
var app = new Demo4();