/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let len = matrix.length;

    for (let r = 0; r < len / 2; r++) {
        for (let c = 0; c < len; c++) {
            [matrix[r][c], matrix[len - r - 1][c]] = [matrix[len - r - 1][c], matrix[r][c]];
        }
    }

    for (let r = 0; r < len; r++) {
        for (let c = 0; c < r; c++) {
            [matrix[r][c], matrix[c][r]] = [matrix[c][r], matrix[r][c]];
        }
    }
};