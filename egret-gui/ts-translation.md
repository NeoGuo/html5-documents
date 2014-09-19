6 函数
====================

TypeScript扩展了JavaScript的函数，包括：有类型参数，无类型参数，返回值类型定义，函数重载，参数默认值，其余参数。

6.1 函数声明
--------------------

函数声明是由一组可选的函数重载，跟随一个实际的函数实现组成的。

```
FunctionDeclaration:  ( Modified )
	FunctionOverloadsopt   FunctionImplementation

FunctionOverloads:
	FunctionOverload
	FunctionOverloads   FunctionOverload

FunctionOverload:
	function   Identifier   CallSignature   ;

FunctionImplementation:
	function   Identifier   CallSignature   {   FunctionBody   }

```

7 接口
====================