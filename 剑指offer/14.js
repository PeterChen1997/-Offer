//输入一个链表，输出该链表中倒数第k个结点

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function FindKthToTail(head, k) {
    if (!head || k <= 0) {
        return false
    } else {
        // 链表不好统计长度，所以要一次找到倒数结点需要方法
        // 通过两个指针的间距，模拟k的距离，从头到尾遍历
        let p1 = head
        let p2 = head
        for (let i = 1; i < k; i++) {
            if(p1.next != null) {
	            p1 = p1.next
            } else {
                return false
            }
        }
        while(p1.next != null) {
            p1 = p1.next
            p2 = p2.next
        }
        return p2
    }

}