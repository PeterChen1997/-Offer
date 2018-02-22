// 题目描述：i am student. ==> student. am i

function ReverseSentence(str)
{
  // 一般做法：翻转字符串后翻转单词
  // js大法好
  return str
    .split(' ')
    .reverse()
    .join(' ')
}

console.log(ReverseSentence('i am a student'))