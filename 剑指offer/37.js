// 统计一个数字在排序数组中出现的次数。

// 思路：二分查找第一个和最后一个数字，然后算出次数
function GetNumberOfK(data, k)
{
    if(!data || !data.length) {
        return 0
    }
    let first = GetFirst(data, k, 0, data.length - 1)
    let last = GetLast(data, k, data.length, 0, data.length - 1)
    if(first > -1 && last > -1) {
        return last - first + 1
    }
    return last - first
}

function GetFirst(data, k, start, end) {
    if(start > end) {
        return -1
    }
    let mid = Math.floor((start + end) / 2)
    if(data[mid] == k) {
        if((mid > 0 && data[mid - 1] != k) || mid == 0) {
            return mid
        } else {
            end = mid - 1
        }
    } else if(data[mid] > k) {
        end = mid - 1
    } else {
        start = mid + 1
    }
    return GetFirst(data, k, start, end)
}

function GetLast(data, k, length, start, end) {
    if(start > end) {
        return -1
    }
    let mid = Math.floor((start + end) / 2)
    if(data[mid] == k) {
        if((mid < length - 1  && data[mid + 1] != k) || mid == length - 1) {
            return mid
        } else {
            start = mid + 1
        }
    } else if(data[mid] < k) {
        start = mid + 1
    } else {
        end = mid - 1
    }
    return GetLast(data, k, length, start, end)
}

// console.log(GetFirst([1,2,3,3,3,3,4,5], 3, 0, 7))
// console.log(GetLast([1,2,3,3,3,3],3, 5, 0, 5))

// console.log(GetNumberOfK([1,2,3,3,3,3],3))