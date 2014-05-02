Egret框架入门第一步 - Hello World
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
* [WebStorm](http://www.jetbrains.com/webstorm/) (推荐) - 跨平台
* SublimeText(可选) - 跨平台
* VS2012 - 只支持Windows

安装和配置:
----------------------------

关于Node.js，npm，TypeScript的安装参见[WIKI](https://github.com/egret-team/egret/wiki)，这一步非常关键，请遵循步骤正确完成安装。

目前基于Egret框架的应用调试，必须基于一个HTTP服务器来进行，简言之，就是您需要在浏览器中用http://localhost/demo这样的形式来运行。如果您之前没有接触过本地Server调试，也不必太顾虑，配置过程相对还是简单的。不同的操作系统有不同的选择，如果您是Windows系统，可以用系统自带的IIS([配置教程](http://jingyan.baidu.com/article/b907e627e6abe646e7891c01.html))，或者在网上找一个Apache的集成安装包。如果您是Mac OS X系统，就更简单了，Mac OS X自带了Apache，可以参考[这篇教程](http://www.cnblogs.com/snandy/archive/2012/11/13/2765381.html)设置一下虚拟站点。

至于IDE，您可以根据自己的系统和个人喜好自由选择，本文将使用WebStorm 8.0来完成演示，这个工具在前端开发界有很高的声誉。

运行HelloWorld:
----------------------------

程序员的习惯是，学习一个框架从HelloWorld开始。这里也不免俗，先带您运行Egret框架的HelloWorld。

####下载和配置Egret

Egret是一个开源框架，托管在GitHub上，地址是：[github.com/egret-team/egret](https://github.com/egret-team/egret)，您可以通过Git客户端Clone到本地，或者直接下载ZIP包到本地解压。

然后请把WebServer指向您的工作目录，确保此目录可以被您的WebServer访问到，以下将使用{egret_workspace}代指您的工作目录。将刚才下载到的Egret源码放到{egret_workspace}下面，并确保文件夹名为egret(注意大小写)。

然后需要使用Egret框架内置的命令行工具来完成项目的创建和编译，这个工具叫做Egret Command Line Tools，简称Egret CLT。

首先需要使用npm来安装Egret CLT，命令如下：
```
$ cd {egret_workspace}
$ npm install egret/tools -g
```
> Mac OS用户请加上sudo来确保执行权限。

然后执行下面的命令来创建您的第一个Egret项目：
```
$ cd {egret_workspace} 
$ egret c HelloEgret
```
> 工作目录下的所有项目将公用同一个egret库。

然后执行成功后，您可以看到工作目录下多了HelloEgret这个项目。然后敲入下面的命令来编译：
```
$ egret b
```
> 如果发现运行时缺少文件，请检查config.local，是否包含了所有的路径。

执行完毕后，就可以运行HelloEgret项目，打开浏览器，输入站点目录下的/output/HelloEgret/launcher/index.html路径即可，比如：http://localhost/output/HelloEgret/launcher/index.html。顺利的话，您将会看到如下的画面：

![github](https://raw.githubusercontent.com/NeoGuo/html5-documents/master/egret/images/hello_egret.png "HelloEgret")

- - -

[下一篇:纹理和位图](https://github.com/NeoGuo/html5-documents/blob/master/egret/02-bitmap.md)
