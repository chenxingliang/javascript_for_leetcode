/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
    let res = n;
    while (res > 1) {
        res = res / 2;
    }
    return res == 1 ? true : false;
};

console.log(isPowerOfTwo(2147483648))