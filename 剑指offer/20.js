// 定义栈的数据结构，请在该类型中实现一个能够得到栈最小元素的min函数。

let stack = []
let temp = []

function push(node) {

    stack.push(node)
    if (!temp.length || temp[temp.length - 1] > node) {
        temp.push(node)
    } else {
        temp.push(temp[temp.length - 1])
    }


}

function pop() {
    if (!stack.length) {
        return null
    }
    temp.pop()
    stack.pop()
}

function top() {
    if (!stack.length) {
        return null
    }
    return stack[stack.length - 1]
}

function min() {
    if (!temp.length) {
        return 0
    }
    return temp[temp.length - 1]
}