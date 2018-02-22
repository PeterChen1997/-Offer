// 输入一棵二叉树，判断该二叉树是否是平衡二叉树。

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function IsBalanced_Solution(pRoot)
{
    if(!pRoot) {
        return true
    }

    return Math.abs(TreeDepth(pRoot.left) - TreeDepth(pRoot.right)) <= 1

}

function TreeDepth(root) {
    if(!root) {
        return 0
    } else if(!root.left && !root.right) {
        return 1
    } else {
        return Math.max(TreeDepth(root.left), TreeDepth(root.right)) + 1
    }
}