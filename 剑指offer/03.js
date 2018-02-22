// 题目描述
// 输入一个链表，从尾到头打印链表每个节点的值。


// 链表 IN js
// function ListNode(x){
//     this.val = x;
//     this.next = null;
// }



function printListFromTailToHead(head) {
    if (!head) {
        return 0
    } else {
        let valArr = []
        for (; head; head = head.next) {
            valArr.push(head.val)
            if (head.next == null) {
                break
            }
        }
        return valArr.reverse()
    }
}