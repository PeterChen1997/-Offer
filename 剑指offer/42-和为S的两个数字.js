// 输入一个递增排序的数组和一个数字S，在数组中查找两个数，是的他们的和正好是S，如果有多对数字的和等于S，输出两个数的乘积最小的。

function FindNumbersWithSum(array, sum)
{
    if(!array) {
        return null
    }
    let aHead = 0
    let bHead = array.length - 1
    let minResult = Number.MAX_SAFE_INTEGER
    let arr = []
    while(aHead <= bHead) {
        let total = array[aHead] + array[bHead]
        if(total > sum) {
            bHead--
        } else if(total === sum) {
            if(total < minResult) {
                minResult = total
                arr.length = 0
                arr.push(array[aHead])
                arr.push(array[bHead])
            }
            aHead++
            bHead--
        } else {
            aHead++
        }
    }
    return arr
}
