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

如果一个函数实现没有确定返回类型，那么可以称之为一个`隐式类型的函数`。一个隐式类型函数的返回类型会从它的函数体中进行推断：

* 如果在f的函数体找不到return语句，则推断返回类型为void。
* 否则，如果f的函数体直接引用了f，或者引用了通过同样的分析引用f的任何隐式类型函数，则推断返回类型为any。
* 否则，推断的返回类型应该是根据函数体中的返回语句表达式得出的，最佳常见类型(参考第3.10节)的扩展形式(参考第3.9节)，忽略没有表达式的返回语句。如果推断出的最佳常见类型，不是返回语句表达式的类型中的某一个，则会发生编译错误(比如，如果最佳常见类型是一个空类型)。

在这个例子里：

```
function f(x: number) {
    if (x <= 0) return x;
	return g(x);
}
function g(x: number) {
	return f(x -1);
}
```

函数'f'和'g'的推断返回类型是any，因为这两个函数通过一个无返回类型注释的循环引用了自己。添加一个明确的返回类型'number'可以打破这个循环，使得返回类型被推断为'number'或其它。

一个返回类型不是void或any类型的显式类型函数，必须在它的函数体内至少拥有一个return语句。一个例外是，如果函数实现是由一个单一的'throw'语句组成的。

在一个函数实现中，'this'的的类型是any。

在一个函数实现的签名上，一个参数可以通过在后面跟随一个初始化值来标记为可选。当一个参数声明中包含类型注释和初始化值，初始化值表达式通过给定类型的上下文确定类型(参考第4.19节)，并且必须分配给指定类型，否则会发生编译时错误。当一个参数声明没有类型注释，但是包含一个初始化值，参数的类型将是初始化值表达式类型的扩展(参考第3.9节)。

初始化值表达式的作用域是函数体内部，但不能引用局部变量，并且只允许访问被定义在初始化参数左侧的参数。

对于每一个有初始化值的参数，在生成的JavaScript代码内部，一个省略的参数代替默认值的声明，将在第6.5小节进行说明。例子：

```
function strange(x: number, y = x * 2, z = x + y) {
return z;
}
```

生成的JavaScript等效于：

```
function strange(x, y, z) {
if (typeof y === "undefined") { y = x * 2; }
if (typeof z === "undefined") { z = x + y; }
return z;
}
```

在这个例子里：

```
var x = 1;
function f(a = x) {
var x = "hello";
}
```

局部变量'x'的作用范围是在参数初始化表达式上(因为使用的是外部的那个'x')，但是引用它是错误的，因为它总是会在参数初始化的求值计算完成后还未初始化。

6.4 泛型函数
--------------------

一个函数实现可能在它的签名中包含有类型的参数(参考第3.7.2.1节)，那么它就被称之为`泛型函数`。类型参数提供了一种机制，用来表示在调用操作中参数和返回类型之间的关系。类型参数没有运行时的表示，因为他们纯粹是一个编译时的结构。

类型参数是在函数实现签名中声明的，作用范围是这个函数实现的签名和函数体。

下面是泛型函数的一个例子：

```
interface Comparable {
	localeCompare(other: any): number;
}
function compare<T extends Comparable>(x: T, y: T): number {
	if (x == null) return y == null ? 0 : -1;
	if (y == null) return 1;
	return x.localeCompare(y);
}
```

注意参数'x'和'y'是已知的约束条件'Comparable'的子类型，因此他们有一个'compareTo'成员。这些细节已经在3.4.1一节中得到进一步的描述。

调用泛型函数的类型参数，可以在调用操作中明确指定，或者也可以(如果可能的话)从调用时的常规参数类型中进行推断(参考第4.12.2节)。在下面的例子中：

```
class Person {
	name: string;
    localeCompare(other: Person) {
		return compare(this.name, other.name);
    }
}
```

'compare'的类型参数会被自动推断为'string'，因为两个参数都是string类型。

6.5 代码生成
--------------------

由函数声明生成的JavaScript代码等同于：

```
function<FunctionName>(<FunctionParameters>) {
<DefaultValueAssignments>
<FunctionStatements>
}
```

FunctionName是函数的名称(如果是函数表达式则忽略)。

FunctionParameters是函数的由逗号分隔的参数名称列表。

DefaultValueAssignments是一组默认属性值的赋值语句，每一个参数对应一个默认值，根据他们声明的顺序：

```
if (typeof<Parameter> === "undefined") { <Parameter> = <Default>; }
```

其中'Parameter'是参数名称，而'Default'则是默认值表达式。

FunctionStatements则是由函数体指定生成的代码语句。

7 接口
====================

接口提供了一种能力，来命名和参数化对象类型，并且合成已命名的对象类型到新的类型上。

接口没有运行时的表示 - 他们纯粹是一个编译时的结构。接口是非常有用的，特别是在记录和验证属性的所需形式，作为参数传递的对象，以及从函数返回的对象等方面。

因为TypeScript拥有一个结构类型系统，具有一组特定成员的接口类型被认为是相同的，并且是可以被另一个拥有相同的一组成员的接口类型或对象类型取代的(参考第3.8.2节)。

类的声明可以通过'implements'语句引用接口，以便验证他们为这个接口提供的实现。

7.1 接口声明
--------------------

一个接口声明，通过在模块中引入一个类型名称，声明一个新的命名类型(参考第3.5节)。

```
InterfaceDeclaration:
	interface   Identifier   TypeParameters(可选)   InterfaceExtendsClause(可选)
	ObjectType
InterfaceExtendsClause:
	extends   ClassOrInterfaceTypeList
ClassOrInterfaceTypeList:
	ClassOrInterfaceType
	ClassOrInterfaceTypeList   ,   ClassOrInterfaceType
ClassOrInterfaceType:
	TypeReference
```

一个接口描述的标识符可能不属于预定义的类型名称(参考第3.6.1节)。

一个接口可以拥有类型参数(参考第3.4.1节)，作为当接口被作为类型引用时的实际类型的占位符。一个拥有类型参数的接口被称之为泛型接口。一个泛型接口声明中的类型参数的作用范围是整个声明，并且可能在'InterfaceExtendsClause'和'ObjectType'中引用。

一个接口可以继承在'InterfaceExtendsClause'指定的零个或多个基本类型。基本类型必须是对类或接口类型的类型引用。

一个接口拥有在它的声明中的'ObjectType'上指定的成员，并且进一步继承所有的，没有在接口声明中隐藏的基本类型成员：

* 一个属性声明隐藏了一个具有相同名称的公开的基本类型属性。
* 一个字符串索引签名声明隐藏了一个基本类型字符串索引签名。
* 一个数字索引签名声明隐藏了一个基本类型数字索引签名。

下面的约束必须通过一个接口声明得到满足，否则会出现编译时错误：

* 一个接口的声明可能不会直接或间接的指定起源于同一声明中的基本类型。换句话说，一个接口不能直接或间接地成为其自身的基本类型，无论类型参数是什么。
* 一个接口不能声明一个相同名称的属性作为继承的私有属性。
* 相同名称的继承属性必须是相同的(参见第3.8.2节)。
* 接口的所有属性必须满足在第3.7.4节指定的，通过接口索引签名隐含的约束。
* 已声明的接口的实例类型(参见第3.5.1节)，必须分配(参见第3.8.4节)到每个基本类型引用。

一个接口允许继承来自多个基本类型的相同的成员，并且在这种情况下，只包含其中任意一个特定的成员。

下面是一个关于两个接口包含相同名称的属性但是不同类型的例子：

```
interface Mover {
    move(): void;
    getStatus(): { speed: number; };
}
interface Shaker {
    shake(): void;
    getStatus(): { frequency: number; };
}
```

一个扩展'Mover'和'Shaker'的接口，必须声明一个新的'getStatus'属性，因为它继承的两个'getStatus'属性有不同的类型。新的'getStatus'属性必须被声明，使得所产生的'MoverShaker'同时是'Mover'和'Shaker'的子类型。

```
interface MoverShaker extends Mover, Shaker {
    getStatus(): { speed: number; frequency: number; };
}
```

由于函数和构造类型仅仅是包含调用和构造特征的对象类型，接口可以用来声明一个命名函数和构造类型。比如：

```
interface StringComparer { (a: string, b: string): number; }
```

这个声明类型'StringComparer'是一个函数类型，得到两个字符串，返回一个数字。

7.2 声明合并
--------------------

接口是"开放式"的，相同限定名称的接口声明相对于一个公共的根源，有助于建立一个单一的接口。

当一个泛型接口有多个声明，所有的声明必须具有相同类型的参数列表，即相同顺序的相同类型的参数名称。

对于一个接口多个声明，扩展的部分合并为单一的一组基本类型，并且接口的声明内容被合并到一个单一的对象类型。声明合并产生了一个相对于前面附加的每个接口声明成员的声明排序，在这个排序中成员都被写入到接口声明中的成员顺序组合列表。因此，在最后的接口声明中的成员将首先出现在合并类型的声明排序中。

比如，一组声明做如下排序：

```
interface Document {
    createElement(tagName: any): Element;
}
interface Document {
    createElement(tagName: string): HTMLElement;
}
interface Document {
    createElement(tagName: "div"): HTMLDivElement;
    createElement(tagName: "span"): HTMLSpanElement;
    createElement(tagName: "canvas"): HTMLCanvasElement;
}
```

上面的声明等价于下面的单个声明：

```
interface Document {
    createElement(tagName: "div"): HTMLDivElement;
    createElement(tagName: "span"): HTMLSpanElement;
    createElement(tagName: "canvas"): HTMLCanvasElement;
    createElement(tagName: string): HTMLElement;
    createElement(tagName: any): Element;
}
```

需要注意的是，最后那个接口声明的成员会首先出现在合并的声明中。还需要注意的是，在同一个接口中声明的成员的相对顺序将被保留。

7.3 接口扩展类
--------------------

当一个接口类型扩展了一个类的类型，它会继承类的成员而不是它们的实现。这就好比如果一个接口声明了所有的类成员，而不提供一个实现。接口甚至可以继承一个基类的私有成员。当一个包含私有成员的类是一个接口类型的基本类型，接口类型只能在类或子类中实现。比如：

```
class Control {
	private state: any;
}
interface SelectableControl extends Control {
    select(): void;
}
class Button extends Control {
    select() { }
}
class TextBox extends Control {
    select() { }
}
class Image extends Control {
}
class Location {
    select() { }
}
```

在上面的例子中，'SelectableControl'包含了'Control'的所有成员，其中就包括私有的'state'属性。由于'state'是一个私有成员，它只可能在'Control'的子类中实现'SelectableControl'。这是因为只有'Control'的子类拥有一个起源于同一个声明的'state'私有成员，这就要求私有成员是兼容的(参考第3.8节)。

在'Control'类里面，有可能通过一个'SelectableControl'的实例来访问'state'私有成员。实际上，一个'SelectableControl'相当于一个'Control'，明确地知道有'select'方法。'Button'和'TextBox'类是'SelectableControl'的子类(因为他们都继承了'Control'并且拥有一个'select'方法)，但是'Image'和'Location'两个类则不是。

7.4 动态类型检测
--------------------

TypeScript并没有提供一个直接的机制用于动态地测试一个对象是否实现了一个特定的接口。相反，TypeScript代码可以使用JavaScript技术来检测是否有一组适当的成员出现在对象上。比如，基于第7.1节的声明，下面是一个对'MoverShaker'接口的动态检测：

```
var obj: any = getSomeObject();
if (obj && obj.move && obj.shake && obj.getStatus) {
	var moverShaker = <MoverShaker> obj;
    ...
}
```

如果这个检测是经常使用的，可以把它抽象成一个函数：

```
function asMoverShaker(obj: any): MoverShaker {
	return obj && obj.move && obj.shake && obj.getStatus ? obj : null;
}
```

---

备注：
内容较为抽象，不好理解，可以同时参考[ECMAScript中文说明](http://yanhaijing.com/es5/)。