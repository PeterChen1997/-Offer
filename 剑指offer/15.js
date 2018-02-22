// 输入一个链表，反转链表后，输出链表的所有元素

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function ReverseList(pHead)
{
    // 使用三个指针分别指向当前节点的头结点，当前节点和当前节点的下一个节点
    let p1 = pHead
    let p2 = null
    let p3 = null
    if(!p1) {
        // pHead指向null
        return false
    } else if(!pHead.next) {
        // 只有一个节点
        return pHead
    } else {
        while(p1) {
            p3 = p1.next
            p1.next = p2
            p2 = p1
            p1 = p3
        }
        return p2
    }
}