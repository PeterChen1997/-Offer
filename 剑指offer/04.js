// 输入某二叉树的前序遍历和中序遍历的结果，请重建出该二叉树。假设输入的前序遍历和中序遍历的结果中都不含重复的数字。例如输入前序遍历序列{1,2,4,7,3,5,6,8}和中序遍历序列{4,7,2,1,5,3,8,6}，则重建二叉树并返回

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */

// 前序遍历：中左右：第一个节点为根节点
// 中序遍历：左中右
function reConstructBinaryTree(pre, vin)
{
    if (pre.length == 0 || vin.length == 0) {
        return null
    }
    let rootIndex = vin.indexOf(pre[0])
    let leftSubTree = vin.slice(0, rootIndex)
    let rightSubTree = vin.slice(rootIndex + 1)
    
    let node = new TreeNode(vin[rootIndex])
    node.left = reConstructBinaryTree(pre.slice(1, rootIndex + 1), leftSubTree)
    node.right = reConstructBinaryTree(pre.slice(rootIndex + 1), rightSubTree)
    
    return node
}