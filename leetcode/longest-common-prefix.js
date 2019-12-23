/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (strs == null || strs.length === 0) {
        return '';
    }

    let min = Infinity,
        len = strs.length,
        low,
        high,
        middle;

    for (let str of strs) {
        min = Math.min(min, str.length);
    }

    low = 1;
    high = min;

    while (low <= high) {
        middle = Math.floor((low + high) / 2);
        if (isCommonPrefix(strs, middle)) {
            low = middle + 1;
        } else {
            high = middle - 1;
        }
    }

    return strs[0].substr(0, Math.floor((low + high) / 2));
};

var isCommonPrefix = function (strs, len) {
    let start = strs[0].substr(0, len);

    for (let str of strs) {
        if (!str.startsWith(start)) {
            return false;
        }
    }

    return true;
}