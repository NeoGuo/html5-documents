Egret框架入门第一步 - Hello World
===============

Egret框架很重要的一个特性就是，允许开发者使用[TypeScript](http://www.typescriptlang.org/)来开发应用或游戏（框架本身就是基于TypeScript编写），熟悉Flash/AS3开发的朋友，会很容易掌握TypeScript这个语言，再加上Egret框架的显示对象封装采用了和Flash的显示列表机制很相似的设计，Flash开发者用起来会非常舒心。

> 补充：对Flash开发者，官方贴心的给出了[Flash AS3移植Egret在线参考](http://online.egret-labs.org/)。

![github](https://raw.githubusercontent.com/NeoGuo/html5-documents/master/egret/images/egret-logo.png "Egret")

这篇教程将向您展示Egret框架的基本用法：

环境和软件要求:
----------------------------

####环境和工具
* Node.js和npm ([下载安装](http://www.nodejs.org/))
* TypeScript ([中文介绍](http://baike.baidu.com/view/9400999.htm))
* 一个HTTP服务器(比如Apache) - 非必须

####IDE
* [WebStorm](http://www.jetbrains.com/webstorm/) (推荐) - 跨平台
* SublimeText(可选) - 跨平台
* VS2012(或更高版本) - 只支持Windows

安装和配置:
----------------------------

关于Node.js，npm，TypeScript的安装参见[WIKI](https://github.com/egret-team/egret/wiki/Configure-Development-Environment)，这一步非常关键，请遵循步骤正确完成安装。

目前基于Egret框架的应用调试，必须基于一个HTTP服务器来进行，简言之，就是您需要在浏览器中用http://localhost/demo这样的形式来运行。那如何来配置一个HTTP服务器呢？会不会很麻烦？不必担心，Egret已经为大家考虑到了这一点，为了方便大家使用和调试，Egret内置了一个简单的HTTP服务器，使用方式会在下文中提及。不过为了获得更好的开发体验，Egret还是建议大家尽量使用成熟的HTTP服务器，比如Apache这样的。即使是自己配置服务器，也不必太顾虑，配置过程相对还是简单的。不同的操作系统有不同的选择，如果您是Windows系统，可以用系统自带的IIS([配置教程](http://jingyan.baidu.com/article/b907e627e6abe646e7891c01.html))，或者在网上找一个AppServ的安装包。如果您是Mac OS X系统，就更简单了，Mac OS X自带了Apache，可以参考[这篇教程](http://www.cnblogs.com/snandy/archive/2012/11/13/2765381.html)设置一下虚拟站点。

至于IDE，您可以根据自己的系统和个人喜好自由选择，本文将使用WebStorm 8.0来完成演示，这个工具在前端开发界有很高的声誉。

Egret可以兼容多数现代浏览器，不过为了调试方便，建议大家使用Chrome浏览器，因为Chrome的开发者工具真的很强大。

运行HelloWorld:
----------------------------

程序员的习惯是，学习一个框架从HelloWorld开始。这里也不免俗，先带您运行Egret框架的HelloWorld。

####下载和配置Egret

Egret是一个开源框架，托管在GitHub上，地址是：[github.com/egret-team/egret](https://github.com/egret-team/egret)，您可以通过Git客户端Clone到本地，或者直接下载ZIP包到本地解压。然后使用命令行进入egret所在的目录，执行：
```
npm install -g
```

执行这个语句的目的是安装Egret框架内置的命令行工具(用于完成项目的创建和编译)，工具的名称是Egret Command Line Tools，简称Egret CLT。

等候安装成功，然后输入下面的命令，可以查看Egret工具的帮助信息：
```
egret
```
> Mac OS用户请加上sudo来确保执行权限。如果安装失败，请根据提示，找到失败原因并重新安装。

对于开发人员来说，一个好的习惯是，将特定的一组项目放在一起，这个目录可以称作工作目录(workspace)。当然本质上，就是您磁盘上的一个文件夹。如果您使用自己的HTTP服务器（而不是Egret内置的），请把服务器指向您的工作目录，确保此目录可以被您的服务器访问到，为了便于描述，以下将使用{egret_workspace}代指您的工作目录。

执行下面的命令来创建您的第一个Egret项目：
```
cd {egret_workspace} 
egret create HelloEgret
```
> 创建大约耗时十几秒，请耐心等候。

然后执行成功后，您可以看到工作目录下多了HelloEgret这个项目。

现在就可以运行HelloEgret项目，这时您有两个选择：如果希望使用Egret内置的HTTP服务器，则执行命令```egret startserver HelloEgret```，这个命令会使用默认浏览器自动运行当前项目；如果您使用自己的HTTP服务器，请打开浏览器输入站点目录下的/HelloEgret/launcher/路径即可，比如：http://localhost/HelloEgret/launcher/。顺利的话，您将会看到如下的画面：

![github](https://raw.githubusercontent.com/NeoGuo/html5-documents/master/egret/images/hello_egret.png "HelloEgret")

如果您有任何的ts代码修改，请敲入下面的命令编译后再运行项目：
```
egret build HelloEgret
```

另外官网还提供了很多实例，您可以从[这里](https://github.com/egret-team/egret-examples)下载，根据说明来安装和编译，并浏览这些例子的实际效果和源码展示。

![github](https://raw.githubusercontent.com/NeoGuo/html5-documents/master/egret/images/egret_samples.png "Egret")

![github](https://raw.githubusercontent.com/NeoGuo/html5-documents/master/egret/images/egret_fps.jpg "Egret")

- - -

[下一篇:纹理和位图](https://github.com/NeoGuo/html5-documents/blob/master/egret/02-bitmap.md)
