// 题目描述：构建乘积数组，b[i] = a[0]*a[1]*...a[i-1]*a[i+1]*...a[n-1]

function multiply(array)
{
    // write code here
    if(!array || array.length === 0) {
      return []
    }
    let processArr = [1]
    let length = array.length
    // 0 ~ i 数组
//     对于第一个for循环
// 第一步：b[0] = 1;
// 第二步：b[1] = b[0] * a[0] = a[0]
// 第三步：b[2] = b[1] * a[1] = a[0] * a[1];
// 第四步：b[3] = b[2] * a[2] = a[0] * a[1] * a[2];
// 第五步：b[4] = b[3] * a[3] = a[0] * a[1] * a[2] * a[3];
    for(let i = 1; i < length; i++) {
      processArr[i] = processArr[i - 1] * array[i - 1]
    }
    console.log(processArr)
    // i + 1 ~ length - 1
    let temp = 1
    for(let i = length - 1; i > 0; i--) {
      temp *= array[i] 
      processArr[i - 1] = processArr[i - 1] * temp
    }
    return processArr
}

console.log(multiply([1,2,3]))