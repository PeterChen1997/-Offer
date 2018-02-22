// 输入一个整数，输出该数二进制表示中1的个数。其中负数用补码表示

// 采用位运算
// 将meta = 1左移，依次判断测试数的1的个数，直到meta << 1 = 0

function NumberOf1(n)
{
    let meta = 1
    let sum = 0
    while (meta) {
        if(n & meta) {
            sum++
        }
        meta = meta << 1
    }
    return sum
}

// 巧妙做法
// function NumberOf2(n) {
//     let sum = 0
//     while(n) {
//         n = (n - 1) & n
//         sum++
//     }
//     return sum
// }

// 1100-1 = 1011 两者相与为1000，相当于测试了一位为1的数字