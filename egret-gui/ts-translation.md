6 函数
====================

TypeScript扩展了JavaScript的函数，包括：有类型参数，无类型参数，返回值类型定义，函数重载，参数默认值，其余参数。

6.1 函数声明
--------------------

函数声明是由一组可选的函数重载，跟随一个实际的函数实现组成的。

```
FunctionDeclaration:  ( Modified )
	FunctionOverloads(可选)   FunctionImplementation

FunctionOverloads:
	FunctionOverload
	FunctionOverloads   FunctionOverload

FunctionOverload:
	function   Identifier   CallSignature   ;

FunctionImplementation:
	function   Identifier   CallSignature   {   FunctionBody   }

```
> Modified指对ECMAScript已经存在的语法组件进行了替换，引用自第二章的翻译

函数声明介绍了一个在特定声明空间下的指定名称的函数。函数重载(如果存在的话)，必须指定相同的名称作为函数实现。如果一个函数声明中包含重载，重载确定给定函数对象的调用签名的类型，并且函数实现签名也必须分配给该类型。否则，函数实现本身将决定调用签名。函数重载对函数声明没有其他作用。 

> 函数签名是一组参数类型加上一个返回类型

6.2 函数重载
--------------------

函数重载可能相对于单一的函数签名来说，是在函数调用方面的一种更符合标准的模式。调用一个重载函数的编译时处理，会根据特定参数选择重载的"最佳人选"，并且这个重载的返回类型将变成结果类型的函数调用表达式。因此，使用重载可以是静态地描述一个函数在它的参数基础上的返回类型变量的方式。关于函数调用的重载实现过程在第4.12章节中有进一步的描述。

函数重载是一个纯粹的编译时的结构。他们对JavaScript的运行没有影响，因此没有运行时的成本。

一个函数重载的参数列表不能为参数指定默认值。换句话来说，就是一个重载可能只能用"?"来指定可选参数。

下面是函数重载的例子。

```
function attr(name: string): string;
function attr(name: string, value: string): Accessor;
function attr(map: any): Accessor;
function attr(nameOrMap: any, value?: string): any {
if (nameOrMap &&typeof nameOrMap === "string") {
// handle string case
    }
else {
// handle map case
    }
}
```

请注意每一个重载和最终的实现需要指定相同的标识符。局部变量'attr'的类型是被下面的声明决定的：

```
var attr: {
    (name: string): string;
    (name: string, value: string): Accessor;
    (map: any): Accessor;
};
```

注意实际的函数实现的签名并不包含在这个类型里面。

6.3 函数实现
--------------------

如果一个函数实现没有确定返回类型，那么可以称之为一个`隐形类型的函数`。

6.4 全局函数
--------------------

6.5 代码生成
--------------------

7 接口
====================

7.1 接口声明
--------------------

7.2 声明合并
--------------------

7.3 接口扩展类
--------------------

7.4 动态类型检测
--------------------

---

备注：
内容较为抽象，不好理解，可以同时参考[ECMAScript中文说明](http://yanhaijing.com/es5/)。