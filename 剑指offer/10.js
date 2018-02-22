// 我们可以用2*1的小矩形横着或者竖着去覆盖更大的矩形。请问用n个2*1的小矩形无重叠地覆盖一个2*n的大矩形，总共有多少种方法？

// 依然是斐波那契数列的变式，列出前几种情况，归纳得出

function rectCover(number)
{
    let arr = [0, 1, 2]
    let index = 3
    if(number <= 2) {
        return arr[number]
    } else {
        while(index <= number) {
            arr.push(arr[index - 1] + arr[index - 2])
            index++
        }
	    return arr[number]
        
    }
}