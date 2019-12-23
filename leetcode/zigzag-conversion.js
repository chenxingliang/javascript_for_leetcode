// Z 字形变换
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    if (s == null || s.length < 1) {
        return '';
    }

    if (s.length == 1) {
        return s;
    }

    var arr = [],
        isDown = false,
        row = 0;

    for (var i = 0; i < s.length; i++) {
        if (arr[row] == null) {
            arr[row] = '';
        }
        arr[row] += s[i];

        if (row == 0 || row == numRows - 1) {
            isDown = !isDown;
        }

        row += isDown ? 1 : -1;
    }

    return arr.reduce((a, b) => a + b);
};

console.log(convert('0123456789', 3))