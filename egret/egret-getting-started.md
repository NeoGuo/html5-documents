Egret框架入门第一步
===============

Egret框架很重要的一个特性就是，允许开发者使用[TypeScript](http://www.typescriptlang.org/)来开发应用或游戏（框架本身就是基于TypeScript编写），熟悉Flash/AS3开发的朋友，会很容易掌握TypeScript这个语言，再加上Egret框架的显示对象封装采用了和Flash的显示列表机制很相似的设计，Flash开发者用起来会非常舒心。

![github](https://raw.githubusercontent.com/NeoGuo/html5-documents/master/egret/images/egret-logo.png "Egret")

这篇教程将向您展示Egret框架的基本用法：

环境和软件要求:
----------------------------

####环境和工具
* Node.js和npm ([下载安装](http://www.nodejs.org/))
* TypeScript ([中文介绍](http://baike.baidu.com/view/9400999.htm))
* 一个HTTP服务器(比如Apache)

####IDE
* [WebStorm](http://www.jetbrains.com/webstorm/) (推荐)
* SublimeText(可选)

安装和配置:
----------------------------

关于Node.js，npm，TypeScript的安装参见[WIKI](https://github.com/egret-team/egret/wiki)，这一步非常关键，请遵循步骤正确完成安装。

目前基于Egret框架的应用调试，必须基于一个HTTP服务器来进行，简言之，就是您需要在浏览器中用http://localhost/demo这样的形式来运行。如果您之前没有接触过本地Server调试，也不必太顾虑，配置过程相对还是简单的。不同的操作系统有不同的选择，如果您是Windows系统，可以用系统自带的IIS([配置教程](http://jingyan.baidu.com/article/b907e627e6abe646e7891c01.html))，或者在网上找一个Apache的集成安装包。如果您是Mac OS X系统，就更简单了，Mac OS X自带了Apache，可以参考[这篇教程](http://www.cnblogs.com/snandy/archive/2012/11/13/2765381.html)设置一下虚拟站点。