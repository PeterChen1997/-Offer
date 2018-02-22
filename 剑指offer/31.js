// 题目描述： 求出1~n的整数中1出现的次数(例如：1,11,13,14)

function NumberOf1Between1AndN_Solution(n)
{
    if(n < 1) {
        return 0
    }
    let sum = 0
    let temp = 0
    let flag = 1
    while (flag <= n) {
        sum += loop(flag)
        flag++
    }
    return sum
}

function loop(flag) {
    let tempFlag = flag
    let sum = 0
    for(;tempFlag != 0;tempFlag = Math.floor(tempFlag / 10)) {
        temp = tempFlag % 10
        if(temp == 1) {
            sum++
        }
    }
    return sum
}

NumberOf1Between1AndN_Solution(5)

/* 常规解法：
    通过分析数学规律，分段递归
*/