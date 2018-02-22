// 斐波那契而数列： 1,1,2,3,5,8...

// 递归实现
function Fibonacci(n) {
  let number = Number(n) === parseInt(n) ? Number(n) : -1
  console.log(number)
  if(number <= 0) {
    throw new Error('Please input a valid number')
  } else {
    if(n == 1 || n == 2) {
      return 1
    } else {
      return Fibonacci(n - 1) + Fibonacci(n - 2)
    }
  }
}

// 自底向上求
function FibonacciII(n) {
  let number = Number(n) === parseInt(n) ? Number(n) : -1
  if(number <= 0) {
    throw new Error('Please')
  } else {
    if(n == 1 || n == 2) {
      return 1
    } else {
      let fibArr = [1, 1]
      for(let i = 2; i < n; i++) {
        fibArr.push(fibArr[i - 2] + fibArr[i - 1])
      }
      return fibArr[n - 1]
    }
  }
}
