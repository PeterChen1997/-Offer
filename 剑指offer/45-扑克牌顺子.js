// 题目描述：扑克牌抽5张，判断是不是顺子，两个大王两个小王是癞子

function IsContinuous(numbers)
{
    if(!numbers || numbers.length === 0) {
      return false
    }
    let length = numbers.length
    let omnipotent = 0
    let gap = 0
    numbers = numbers.sort()
    numbers.map(number => number === 0 ? omnipotent++ : '')
    let head = omnipotent
    let head2 = head + 1
    while(head2 < length) {
      if(numbers[head] === numbers[head2]) {
        return false
      }
      gap += numbers[head2] - numbers[head] - 1
      head = head2
      head2++
    }
    return gap <= omnipotent ? true : false
}