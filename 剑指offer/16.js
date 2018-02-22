// 输入两个单调递增的链表，输出两个链表合成后的链表，当然我们需要合成后的链表满足单调不减规则

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function Merge(pHead1, pHead2)
{
    let p1 = pHead1
    let p2 = pHead2
    let list
    if(!p1) {
        return p2
    } else if(!p2) {
        return p1
    } else {
        if(p1.val < p2.val) {
            list = p1
            list.next = Merge(p1.next, p2)
        } else {
            list = p2
            list.next = Merge(p1, p2.next)
        }
        return list
    }
}