# ES6新语法

> 阮一峰es6入门：<https://es6.ruanyifeng.com/#docs/async>

## 概述

ES6主要有三大块改进：

- 语法扩展
- 基础类型API扩展
- 新对象

主要内容：

- 语法扩展
  - 箭头函数
  - let / const
  - forof forin
  - 解构赋值
  - async / await / generator
- 字符串扩展
  - includes / startsWith / endsWith / repeat
  - 模板字符串
- 数值扩展
  - Number.isNaN / isInteger / parseFloat
  - Math.trunc(4.4) => 4
  - 指数运算符
- 函数扩展
  - rest
- 数组扩展
  - Array.from() / fill() / inclueds()
- 对象扩展
  - ES2020 链式调用判断 ?.
  - ES2020 null判断符号 ??
- set / map
- proxy
- reflect
- promise

## 特殊点

### let 和 var 的区别

- let 为块级作用域，var 为函数作用域
- let 没有变量提升，有暂时性死区的问题
- let 不能重复声明

### rest 和 spread

```js
// rest
function rest (a, b, ...rest) {
  console.log(rest) //[3, 4]
}

rest(1,2,3,4)

// spread
const good = [1, 2]
function spread (a, b) {
  console.log(a, b)
}
spread(...good)


```

### 对象字面量扩展

- 可以在对象字面量里面定义原型
- 定义方法可以不用function关键字
- 直接调用父类方法

```js
//通过对象字面量创建对象
var human = {
    breathe() {
        console.log('breathing...');
    }
};
var worker = {
    __proto__: human, //设置此对象的原型为human,相当于继承human
    company: 'freelancer',
    work() {
        console.log('working...');
    }
};
human.breathe();//输出 ‘breathing...’
//调用继承来的breathe方法
worker.breathe();//输出 ‘breathing...’
```

### Symbol

Symbol 是一种新的数据类型，它的值是唯一的，不可变的。ES6 中提出 symbol 的目的是为了生成一个唯一的标识符，不过你访问不到这个标识符.

```js
var sym = Symbol( "Symbol" );
console.log(typeof sym); // symbol
```

如果要获取对象 symbol 属性，需要使用Object.getOwnPropertySymbols(o)

### iterators

使用Symbol.iterator给对象设置迭代器，知道done:true退出

```js
const arr = [1, 2, 3]
const iterator = arr[Symbol.iterator]()

itr.next() // { value: 1, done: false}
itr.next() // { value: 2, done: false}
itr.next() // { value: 3, done: false}
itr.next() // { value: undefined, done: true}
```

### Generators

ES6中非常受关注的的一个功能，能够在函数中间暂停，一次或者多次，并且之后恢复执行，在它暂停的期间允许其他代码执行，并可以用其实现异步

```js
function *foo(x) {
    var y = 2 * (yield (x + 1));
    var z = yield (y / 3);
    return (x + y + z);
}

var it = foo( 5 );

console.log( it.next() );       // { value:6, done:false }
console.log( it.next( 12 ) );   // { value:8, done:false }
console.log( it.next( 13 ) );   // { value:42, done:true }
```

### for...of 和 for...in

```js
// for...of遍历数组
const arr = [1, 2, 3]
for(let item of arr) {
  console.log(item) // 1 2 3
}

// for...in遍历对象
const arr2 = {
  "nice": 'man',
  "hello": 'world'
}
for(let name in arr2) {
  console.log(name) // nice hello
}
```

### Map, Set, WeakSet, WeakMap

Set是一组不重复的值，重复的值将被忽略, WeakSet and WeakMap是弱引用

Map相关操作方法，Set同理

```js
// Sets
var s = new Set();
s.add("hello").add("goodbye").add("hello");
s.size === 2;
s.has("hello") === true;

// Maps
var m = new Map();
m.set("hello", 42);
m.set(s, 34);
m.get(s) == 34;

// Weak Maps
var wm = new WeakMap();
wm.set(s, { extra: 42 });
wm.size === undefined

// Weak Sets
var ws = new WeakSet();
ws.add({ data: 42 });

```

### WeakMap 和 Map 的区别

WeakMap 结构与 Map 结构基本类似，唯一的区别是它只 **接受对象** 作为键名（ null 除外），不接受其他类型的值作为键名，而且键名所指向的对象，不计入垃圾回收机制

WeakMap 最大的好处是可以避免内存泄漏。一个仅被 WeakMap 作为 key 而引用的对象，会被垃圾回收器回收掉

WeakMap 拥有和 Map 类似的 set(key, value) 、 get(key)、has(key)、 delete(key) 和 clear() 方法, 没有任何与迭代有关的属性和方法

### Proxy

Proxy可以监听对象身上发生了什么事情，并在这些事情发生后执行一些相应的操作

```js
//定义被侦听的目标对象
var engineer = { name: 'Joe Sixpack', salary: 50 };
//定义处理程序
var interceptor = {
  set: function (receiver, property, value) {
    console.log(property, 'is changed to', value);
    receiver[property] = value;
  }
};
//创建代理以进行侦听
engineer = Proxy(engineer, interceptor);
//做一些改动来触发代理
engineer.salary = 60;
//控制台输出：salary is changed to 60
```

### await async

优点：

- 相对于promise使用更加简洁
- 错误处理的位置更加精确
- 便于条件判别
- 多个promise中间值的处理

```js
function timeout(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

async function asyncPrint(value, ms) {
    await timeout(ms);
    console.log(value);
}

asyncPrint('hello world', 50);
```
