// 输入两个链表，找出它们的第一个公共结点。

// 解释：单向链表只有一个p->next，则公共结点后的部分完全相同

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/

function FindFirstCommonNode(pHead1, pHead2)
{
    if(!pHead1 || !pHead2) {
        return null
    }
    let length1 = 0
    let length2 = 0
    let temp1 = pHead1
    let temp2 = pHead2
    while(temp1.next) {
        temp1 = temp1.next
        length1++
    }
    while(temp2.next) {
        temp2 = temp2.next
        length2++
    }
    
    let more = length1 - length2
    if(more >= 0) {
        while(more) {
            pHead1 = pHead1.next
            more--
        }
    } else {
        more = -more
        while(more) {
            pHead2 = pHead2.next
            more--
        }
    }

    while(pHead1 != pHead2) {
        pHead1 = pHead1.next
        pHead2 = pHead2.next
    }
    return pHead1
    
}
