// 在一个字符串(1<=字符串长度<=10000，全部由字母组成)中找到第一个只出现一次的字符,并返回它的位置

function FirstNotRepeatingChar(str)
{
    if(!str) {
        return null
    }
    
    let strArr = str.split('')
    let result = strArr.reduce((obj, item, index) => {
        if(!obj[item]) {
            obj[item] = {
                position : index,
                sum : 1
            }
        } else {
            obj[item].sum++
        }
        return obj
    }, {})
    let minPosition = Number.MAX_VALUE
    let target
    for (item in result) {
        if(result[item].sum == 1 && result[item].position < minPosition) {
            target = result[item]
            break
        }
    }
    return target.position
}

console.log(FirstNotRepeatingChar('googgle'))