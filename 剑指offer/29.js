// 输入n个整数，找出其中最小的K个数。例如输入4,5,1,6,2,7,3,8这8个数字，则最小的4个数字是1,2,3,4,。

function GetLeastNumbers_Solution(input, k)
{
    if(k > input.length) {
        return []
    }
    return input.sort().slice(0, k)
}

/* 常规解法：
    使用大小为k的容器存储，存储最小的k位数字
    和容器内最大的数字进行比较
    如果满了，对其中最大的数进行替换
    如果未满，则加入容器中
*/