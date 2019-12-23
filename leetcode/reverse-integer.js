/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let sign = 1;
    if (x < 0) {
        sign = -1;
        x = x * sign
    }

    let reverse = (x + '').split('').reverse().join('') * sign;

    if (reverse > Math.pow(2, 31) - 1 || reverse < Math.pow(-2, 31)) {
        return 0;
    }

    return reverse;
};

console.log(reverse(1534236469))