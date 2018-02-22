// 输入两个整数序列，第一个序列表示栈的压入顺序，请判断第二个序列是否为该栈的弹出顺序。假设压入栈的所有数字均不相等。例如序列1,2,3,4,5是某栈的压入顺序，序列4，5,3,2,1是该压栈序列对应的一个弹出序列，但4,3,5,1,2就不可能是该压栈序列的弹出序列。（注意：这两个序列的长度是相等的）

function IsPopOrder(pushV, popV)
{
    if(!pushV || !popV) {
        return false
    }
    let temp = []
    let inP = 0
    let outP = 0
    let tempP = -1
    while (inP < pushV.length || tempP != -1) {
        if(pushV[inP] == popV[outP]) {
            inP++
            outP++
            continue

        } else if(tempP != -1 && temp[tempP] == popV[outP]) {
            tempP--
            outP++
            continue
        } else {
            // 不相同的输入，入temp栈
            if(inP != pushV.length) {
                tempP++
                temp[tempP] = pushV[inP]
                inP++
            } else {
                // temp栈与pop栈不同
                return false
            }
            
        }
    }
    return true

}