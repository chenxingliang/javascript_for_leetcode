/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    if (matrix.length == 0) {
        return matrix;
    }

    let result = [],
        rowLen = matrix.length,
        colLen = matrix[0].length,
        len = rowLen * colLen || 0,
        row = 0,
        col = 0,
        horizontal = true,
        vertical = true
        top = 0,
        right = 0,
        bottom = 0,
        left = 0;
    
    for (let i = 0; i < len; i++) {
        if (horizontal && vertical) {
            result[i] = matrix[row][col++];
            // 向右
            if (col > colLen - 1 - right) {
                horizontal = false;
                row++;
                col--;
                top++;
            }
        } else if (!horizontal && vertical) {
            result[i] = matrix[row++][col];
            // 向下
            if (row > rowLen - 1 - bottom) {
                vertical = false;
                row--;
                col--;
                right++;
            }
        } else if (!horizontal && !vertical) {
            result[i] = matrix[row][col--];
            // 向左
            if (col < 0 + left) {
                horizontal = true;
                row--;
                col++;
                bottom++;
            }
        } else {
            result[i] = matrix[row--][col];
            // 向上
            if (row < 0 + top) {
                vertical = true;
                row++;
                col++;
                left++;
            }
        }
    }

    return result;
};

// console.log(spiralOrder([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]))

// console.log(spiralOrder([
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 10, 11, 12]
// ]))

console.log(spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
]))