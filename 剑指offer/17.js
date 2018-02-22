// 输入两棵二叉树A，B，判断B是不是A的子结构。（ps：我们约定空树不是任意一个树的子结构）

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function HasSubtree(pRoot1, pRoot2)
{
    if(!pRoot1 || !pRoot2) {
        return false
    } else {
        return isSubtree(pRoot1, pRoot2) || HasSubtree(pRoot1.left, pRoot2) || HasSubtree(pRoot1.right, pRoot2)
    }
}

function isSubtree(p1, p2) {
    if(!p2) {
        return true
    } else if(!p1) {
        return false
    } else {
        if(p1.val == p2.val) {
            return isSubtree(p1.left, p2.left) && isSubtree(p1.right, p2.right)
        } else {
            return false
        }    
    }
    
}