// 输入一颗二叉树和一个整数，打印出二叉树中结点值的和为输入整数的所有路径。路径定义为从树的根结点开始往下一直到叶结点所经过的结点形成一条路径。
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function FindPath(root, expectNumber)
{
    if(!root) {
        return []
    }
    let result = []
    let stack = []
    dfs(root, expectNumber, result, stack)
    return result
}

function dfs(root, expectNumber, result, stack) {
    stack.push(root.val)
    // 判断叶节点
    if(root.val == expectNumber && root.left == null && root.right == null) {
        result.push(stack.slice(''))

    // 不能使用else if， 判断左子树后还要判断右子树
    // } else if (root.left != null) {
    //     dfs(root.left, expectNumber - root.val, result, stack)
    // } else if (root.right != null) {
    //     dfs(root.right, expectNumber - root.val, result, stack)
    // }
    
    } else {
        // 先判断结点左子树
        if(root.left!=null){
            dfs(root.left,expectNumber-root.val, result, stack);
        }
        // 再判断结点右子树        
        if(root.right != null){
            dfs(root.right,expectNumber-root.val, result, stack);
        }
    }
    stack.pop()
}

