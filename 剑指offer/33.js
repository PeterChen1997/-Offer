// 题目描述: 把只包含因子2、3和5的数称作丑数（Ugly Number）。例如6、8都是丑数，但14不是，因为它包含因子7。 习惯上我们把1当做是第一个丑数。求按从小到大的顺序的第N个丑数

function GetUglyNumber_Solution(index) {
    if (index == 0) {
        return 0
    }

    let arr = [1]
    let sum = 1
    let m2 = m3 = m5 = 0

    while (sum <= index) {
        // 遍历出m2, m3, m5中最小的下一位
        arr[sum] = Math.min(arr[m2] * 2, arr[m3] * 3, arr[m5] * 5)
        // 最大位的下标加1
        arr[sum] == arr[m2] * 2 ? m2++ : m2
        arr[sum] == arr[m3] * 3 ? m3++ : m3
        arr[sum] == arr[m5] * 5 ? m5++ : m5
        // 寻找下一位
        sum++
    }
    return arr[index - 1]
}

GetUglyNumber_Solution(3)