// 题目描述：判断s字符串是否为数字
function isNumeric(s)
{
    return !isNaN(Number(s))
    // regexp
    // return /^[\+\-]?\d*(\.\d+)?([eE][+-]?\d+)?$/.test(s)
}