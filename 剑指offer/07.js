// 大家都知道斐波那契数列，现在要求输入一个整数n，请你输出斐波那契数列的第n项。
// n<=39

function Fibonacci(n)
{
    let arr = [0, 1]
    const all = 39
    let sum = all
    while(sum - 2 >= 0) {
      arr.push(arr[all - sum] + arr[all - sum + 1])
      sum--
      if(all - sum + 1 == n)
          break
    }
    return arr[n]
}