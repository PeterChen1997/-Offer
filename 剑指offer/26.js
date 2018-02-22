// 输入一棵二叉搜索树，将该二叉搜索树转换成一个排序的双向链表。要求不能创建任何新的结点，只能调整树中结点指针的指向。
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Convert(pRootOfTree) {
    if (!pRootOfTree || pRootOfTree.length < 2) {
        return pRootOfTree
    }
    // 转换左子树
    if (pRootOfTree.left) {
        var left = Convert(pRootOfTree.left)
        // 寻找root左边第一个节点
        let nearRoot = left
        while (nearRoot && nearRoot.right) {
            nearRoot = nearRoot.right
        }
        // 联结根节点
        nearRoot.right = pRootOfTree
        pRootOfTree.left = nearRoot

    }
    if (pRootOfTree.right) {
        // 转换右子树
        let right = Convert(pRootOfTree.right)
        //联结根节点
        pRootOfTree.right = right
        right.left = pRootOfTree
    }
    if(!left) {
        return pRootOfTree
    } else {
        return left
    }
}