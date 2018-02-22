### 题目描述 （27题）
输入一个字符串,打印出该字符串中字符的所有排列。例如输入字符串abc,则打印出由字符a,b,c所能排列出来的所有字符串abc,acb,bac,bca,cab和cba。
输入描述:
输入一个字符串,长度不超过9(可能有字符重复),字符只包括大小写字母。

### 考察：全排列

### 解法1
全排列（递归交换）算法  
    1、将第一个位置分别其他元素进行交换；  
    2、对除第一个元素的剩余的位置进行全排列（递归）；  
    3、递归出口为只对一个元素进行全排列。  
```

var arr = []
var result = []
function Permutation(str)
{

    if(!str || str.length == 0) {
        return []
    }

    arr = str.split('')
    
    loop(0)

    return result
        .sort()
        .filter((item, index) => {
            return result.indexOf(item) == index
        })
}

function loop(index) {
    for(let i = index; i < arr.length; i++) {
        swap(arr, i, index)
        if(index + 1 < arr.length - 1) {
            loop(index + 1)
        } else {
            result.push(arr.join(''))
        }
        swap(arr, i, index)
    }
}

function swap(arr, i, index) {
    let temp = arr[i]
    arr[i] = arr[index]
    arr[index] = temp
}

console.log(Permutation('ab'))
```

### 解法2
全排列（递归链接）算法  
1、设定源数组为输入数组，结果数组存放排列结果（初始化为空数组）；  
2、逐一将源数组的每个元素链接到结果数组中（生成新数组对象）；  
3、从原数组中删除被链接的元素（生成新数组对象）；  
4、将新的源数组和结果数组作为参数递归调用步骤2、3，直到源数组为空，则输出一个排列。 
``` 
var count=0;  
function show(arr) {  
    document.write("P<sub>"+ ++count+"</sub>: "+arr+"<br />");  
}  
function perm(arr) {  
    (function fn(source, result) {  
        if (source.length == 0)  
            show(result);  
        else 
            for (var i = 0; i < source.length; i++)  
                fn(source.slice(0, i).concat(source.slice(i + 1)), result.concat(source[i]));  
    })(arr, []);  
}  
perm(["e1", "e2", "e3", "e4"]);  
```


### 更多解法
http://www.jb51.net/article/39291.htm