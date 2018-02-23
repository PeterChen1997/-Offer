### 深拷贝函数，用两种方式实现

```js
var a = {
    name:"mary",
    age:20,
    friend:{
        name:"哈哈",
        age:19,
        hobby:"eat"
    }
}
function deep(obj){
    var newobj = {};
    for(var key in obj){
        if(obj.hasOwnProperty(key)){
            if(typeof obj[key] === "number" || typeof obj[key] === "string" || typeof obj[key] === "boolean" || obj[key] === undefined || obj[key] === null){
                newobj[key] = obj[key];
            }else{
                newobj[key] = deep(obj[key]);
            }
        }
    }
    return newobj;
}
``` 
```js
var b = deep(a);
a.friend.age = 29;
//console.log(a);
console.log(b);
var obj = {
    name : "haha",
    age :"16",
    hobby : "football"
}
var text = JSON.stringify(obj);            //得到一个字符串
JSON.parse(text);                   //重新将字符串生成一个对象，和原来的没有任何关系
```
---

浅拷贝

```js
function shallowClone(copyObj) {
  var obj = {};
  for ( var i in copyObj) {
    obj[i] = copyObj[i];
  }
  return obj;
}
var x = {
  a: 1,
  b: { f: { g: 1 } },
  c: [ 1, 2, 3 ]
};
var y = shallowClone(x);
console.log(y.b.f === x.b.f);     // true
```

```js

var x = {
  a: 1,
  b: { f: { g: 1 } },
  c: [ 1, 2, 3 ]
};
var y = Object.assign({}, x);
console.log(y.b.f === x.b.f);     // true

```