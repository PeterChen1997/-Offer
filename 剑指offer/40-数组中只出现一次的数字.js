// 一个整型数组里除了两个数字之外，其他的数字都出现了两次。请写程序找出这两个只出现一次的数字。

function FindNumsAppearOnce(array)
{
    if(!array) {
        return null
    }
    let arr = []
    for(let i = 0; i < array.length; i++) {
        array.indexOf(array[i]) === array.lastIndexOf(array[i]) ? arr.push(array[i]) : ''
    }
    return arr
}