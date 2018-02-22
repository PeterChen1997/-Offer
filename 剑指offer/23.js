// 输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历的结果。如果是则输出Yes,否则输出No。假设输入的数组的任意两个数字都互不相同。

function VerifySquenceOfBST(sequence)
{
    if(!sequence) {
        return false
    }
    let itemIndex = sequence.length
    let flag = 0
    while( itemIndex-- ) {
        // 根据后序遍历 二叉搜索树 特点，最后一个数字比左子树大，比右子树小，后序遍历为左右中，所以先判断小，在判断大，如果符合则返回true   ，叶节点比其他数字都大   
        // 当前数字比剩下数字小
        while(sequence[flag] < sequence[itemIndex])
            flag++
        // 当前数字比剩下数字大
        while(sequence[flag] > sequence[itemIndex])
            flag++
        if(flag < itemIndex) {
            return false
        }
        flag = 0
        return true
    }
}