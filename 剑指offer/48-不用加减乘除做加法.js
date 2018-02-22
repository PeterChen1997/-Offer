// 写一个函数，求两个整数之和，要求在函数体内不得使用+、-、*、/四则运算符号


// js中 异或^ 与& 或|
function Add(num1, num2)
{
  let sum = 0
  let carry = 0
  do {
    sum = num1 ^ num2
    carry = (num1 & num2) << 1
    num1 = sum
    num2 = carry
  } while(num2 !== 0)
  return sum
}