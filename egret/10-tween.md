Egret框架入门第一步 - Tween的使用
===============

在Bitmap一节中，我们简单介绍过Tween的使用方法，如果要实现一段缓动动画，Tween无疑是最好的选择。除了可以用简洁的语法，实现复杂的动画队列之外，其实Tween还有一个强大的地方，就是可以用各种Ease函数，控制缓动的细节。

Egret库中默认集成了一些Ease实现，要使用它们，只需在参赛中传入即可，比如：

```
var tw = egret.Tween.get(this.logo,{loop:true});
tw.to({x:360,y:600},1000,egret.Ease.sineIn);
```

为了便于您理解各种Ease函数的实现效果，这里有一个Ease效果实时预览：

<iframe src="http://www.tech-mx.com/egret/tween/launcher/" width="480px" height="800px"></iframe>

* [点击这里查看Ease效果实时预览](http://www.tech-mx.com/egret/tween/launcher/)



- - -

[上一篇:资源](https://github.com/NeoGuo/html5-documents/blob/master/egret/09-resource.md)