// 题目描述：例如，字符序列S=”abcXYZdef”,要求输出循环左移3位后的结果，即“XYZdefabc”。

function LeftRotateString(str, n)
{
  if(!str) {
    return ''
  }
  let length = str.length
  let moveBits = n % length
  return str.slice(moveBits) + str.slice(0, moveBits)
}

