// 题目描述： 求输入数组的，连续子数组的和的最大值

function FindGreatestSumOfSubArray(array)
{
    if(!array || array.length == 0) {
        return;
    }
    let max = array[0]
    let tempMax = array[0]
    for(let i = 1; i < array.length; i++) {
        // 判断是否tempMax是否为负数，并且比下一位数更小，如果是，则用大的替换tempMax
        if(array[i] > tempMax && tempMax < 0) {
            tempMax = array[i]
            continue
        }
        // 判断是否和有收益
        if(array[i] + tempMax > max) {
            tempMax = array[i] + tempMax
            max = tempMax
        } else {
            // 没有收益的情况下，暂存tempMax,来日再用
            if(tempMax > max) {
                max = tempMax
            }
            tempMax = array[i] + tempMax
        }
    }
    return tempMax > max ? tempMax : max
}

FindGreatestSumOfSubArray([1,-2,3,10,-4,7,2,-5])