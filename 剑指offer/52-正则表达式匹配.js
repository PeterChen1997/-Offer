// 正则表达式匹配
//s, pattern都是字符串
function match(s, pattern)
{
    let regex = new RegExp(`^${pattern}$`)
    return regex.test(s)
}

console.log(match('aabbcc','a*bbc*'))