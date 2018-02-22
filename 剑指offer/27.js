// 题目描述
// 输入一个字符串,打印出该字符串中字符的所有排列。例如输入字符串abc,则打印出由字符a,b,c所能排列出来的所有字符串abc,acb,bac,bca,cab和cba。
// 输入描述:
// 输入一个字符串,长度不超过9(可能有字符重复),字符只包括大小写字母。

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

console.log(Permutation('bb'))