// 从上往下打印出二叉树的每个节点，同层节点从左至右打印

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function PrintFromTopToBottom(root)
{
    if(!root) {
        return false
    }
    let list = []
    let start = root
    let result = []
    while(start) {
        result.push(start.val)
        start.left && list.push(start.left)
        start.right && list.push(start.right)
        start = list.shift()
    }
    return result
}