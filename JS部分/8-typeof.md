# typeof 详解


## typeof判断

**typeof** 操作符返回一个字符串，指出未经计算的操作数的类型

| 类型 | 结果 |
| -- | -- |
| Undefined | "undefined" |
| Null | **"object"** |
| Boolean | "boolean" |
| Number | "number" |
| String | "string" |
| Symbol | "symbol" |
| 函数对象 | "function" |
| 任何其他对象 | "object" |

---

### 实例

```js
typeof NaN === "number" // true
typeof (typeof 1) === "string" // true, typeof总是返回一个字符串
// Undefined
typeof undefined === 'undefined';
typeof declaredButUndefinedVariable === 'undefined';
typeof undeclaredVariable === 'undefined';

typeof new String("abc") === 'object';

// 函数
typeof function(){} === 'function';
typeof class C{} === 'function'
typeof Math.sin === 'function';
typeof new Function() === 'function';
```

---

### null

```js
typeof null === 'object'
```

这是JS出现就有的BUG

> JS中的值是由一个表示类型的标签和实际的数据值表示的。对象的类型标签是0，由于null代表的是空指针（大多数平台下值为0x00），因此，null的类型标签也成为了0

### new 操作符号

```js
let str = new String('str')
typeof str // 'object'

let func = new Function()
typeof func // 'function'
```

### 例外

```js
typeof document.all === 'undefined'
```