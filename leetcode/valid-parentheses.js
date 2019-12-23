/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let stack = [],
        len = s.length,
        labelMap = {
            '{': '}',
            '(': ')',
            '[': ']'
        };

    if (len % 2 != 0) {
        return false;
    }

    for (let item of s) {
        if (labelMap[item]) {
            stack.push(labelMap[item])
        } else if (item === stack[stack.length - 1]) {
            stack.pop()
        } else {
            return false;
        }

        if (stack.length > len / 2) {
            return false;
        }
    }

    return stack.length === 0;
};

console.log(isValid('(('))