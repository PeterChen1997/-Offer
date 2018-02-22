// 输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字，例如，如果输入如下矩阵： 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 则依次打印出数字1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10.

function printMatrix(matrix)
{
    if(!matrix || !matrix.length) {
        return null
    }
    let rowLength = matrix.length
    let colLength = matrix[0].length
    
    let top = 0
    let bottom = rowLength - 1
    let left = 0
    let right = colLength - 1
    
    let result = []
    
    while(top <= bottom && left <= right) {
        // 移入最顶行数据
        for(let j = left; j <= right; j++) {
	        result.push(matrix[top][j])
        }
        // 移入最右一列数据
        for(let i = top + 1; i <= bottom; i++) {
            result.push(matrix[i][right])
        }
        // 移入最下一行数据，注意防止和顶行重复
        if(top != bottom)
            for(let j = right - 1; j >= left; j--) {
                result.push(matrix[bottom][j])
            }
        // 移入最左一列数据，注意防止和最右一列重复
        if(left != right)
            for(let i = bottom - 1 ; i > top; i--) {
                result.push(matrix[i][left])
            }

        top++
        right--
        bottom--
        left++        
    }
    return result
}