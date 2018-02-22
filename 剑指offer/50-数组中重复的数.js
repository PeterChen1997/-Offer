// 题目描述：输出第一个重复的数字
// 例如，如果输入长度为7的数组{2,3,1,0,2,5,3}，那么对应的输出是第一个重复的数字2。

// 题目描述：输出第一个重复的数字
// 例如，如果输入长度为7的数组{2,3,1,0,2,5,3}，那么对应的输出是第一个重复的数字2。

function duplicate(numbers, duplication)
{
    // write code here
    //这里要特别注意~找到任意重复的一个值并赋值到duplication[0]
    //函数返回True/False
    let obj = {}

    numbers.forEach(item => {
      if(obj[item]) {
        obj[item] ++
      } else {
        obj[item] = 1
      }
    })
    for(let item in obj) {
      if(obj[item] > 1) {
        duplication[0] = Number(item)
        return true
      }
    }
    return false
}



console.log(duplicate([2,1,3,1,4], []))