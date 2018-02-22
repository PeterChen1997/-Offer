// 数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。例如输入一个长度为9的数组{1,2,3,2,2,2,5,4,2}。由于数字2在数组中出现了5次，超过数组长度的一半，因此输出2。如果不存在则输出0。

function MoreThanHalfNum_Solution(numbers) {
    if (!numbers || numbers.length == 0) {
        return 0
    }
    let lastNum = numbers[0]
    let flag = 1
    for (let i = 1; i < numbers.length; i++) {
        if(lastNum != numbers[i]) {
            flag--
        } else {
            flag++
        }

        if(flag <= 0) {
            lastNum = numbers[i]
            flag = 1
        }
    }
    let result = checkLastNum(lastNum, numbers)
    return result
}

function checkLastNum(num, arr) {
    let index = 0
    arr.map(item => {
        if(item == num) {
            index++
        }
    })
    if(index > arr.length / 2) {
        return num
    } else {
        return 0
    }
}

console.log(MoreThanHalfNum_Solution([1, 2, 2]))