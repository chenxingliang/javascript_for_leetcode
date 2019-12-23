/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let str = x + '',
        len = str.length;

    for (let i = 0; i < len; i++) {
        if (i >= len - i - 1) {
            break;
        }
        if (str[i] !== str[len - i - 1]) {
            return false;
        }
    }

    return true;
};

console.log(isPalindrome(12321))