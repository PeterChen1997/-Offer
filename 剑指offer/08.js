// 一只青蛙一次可以跳上1级台阶，也可以跳上2级。求该青蛙跳上一个n级的台阶总共有多少种跳法
// 斐波那契数列变式

function jumpFloor(number)
{
    let arr = [0, 1]
    const all = number + 1
    let sum = all
    while(sum - 2 >= 0) {
      arr.push(arr[all - sum] + arr[all - sum + 1])
      sum--
      if(all - sum + 1 == number + 1)
          break
    }
    return arr[number + 1]
}