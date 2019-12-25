/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
    let max = n ** 2,
        result = [],
        action = {
            go: 1,
            back: -1,
            stop: 0
        },
        vertical = action.stop;
        horizontal = action.go,
        top = 0,
        right = 0,
        bottom = 0,
        left = 0,
        r = 0,
        c = 0;

    for (let i = 0; i < max; i++) {
        if (!result[r]) {
            result[r] = [];
        }

        result[r][c] = i + 1;
        r += vertical;
        c += horizontal;

        if (c > n - right - 1) {
            vertical = action.go;
            horizontal = action.stop;
            c += action.back;
            r += action.go;
            top++;
        } else if (r > n - bottom - 1) {
            vertical = action.stop;
            horizontal = action.back;
            r += action.back;
            c += action.back;
            right++;
        } else if (c < 0 + left) {
            vertical = action.back;
            horizontal = action.stop;
            c += action.go;
            r += action.back;
            bottom++;
        } else if (r < 0 + top) {
            vertical = action.stop;
            horizontal = action.go;
            r += action.go;
            c += action.go;
            left++;
        }
    }

    return result;
};

console.log(generateMatrix(4))