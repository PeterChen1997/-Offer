// 题目描述
// 在一个二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。

function Find(target, array) {

    var colLength = array.length;
    var rowLength = array[0].length;
    var col = colLength - 1;
    var row = 0;
    while (row < rowLength && col >= 0) {
        if (array[col][row] < target) {
            row++;
            continue;
        } else if (array[col][row] == target) {
            return true;
        } else {
            col--;
            continue;
        }
    }
    return false;
}


module.exports = {
    Find: Find
};