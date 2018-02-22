// 操作给定的二叉树，将其变换为源二叉树的镜像。

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Mirror(root)
{
    // 交换根节点的两个子节点
    // 交换左子节点的两个子节点
    // 交换右子节点的两个子节点
    if(!root) {
        return
    } else {
        let temp = root.left
        root.left = root.right
        root.right = temp
        Mirror(root.left)
        Mirror(root.right)
    }
}