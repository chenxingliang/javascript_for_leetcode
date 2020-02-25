/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (digits.length == 0) {
        return [];
    }

    let dict = {
        '2': ['a', 'b', 'c'],
        '3': ['d', 'e', 'f'],
        '4': ['g', 'h', 'i'],
        '5': ['j', 'k', 'l'],
        '6': ['m', 'n', 'o'],
        '7': ['p', 'q', 'r', 's'],
        '8': ['t', 'u', 'v'],
        '9': ['w', 'x', 'y', 'z'],
    };

    let result = [];

    function backtrack(str, next_digits) {
        if (next_digits.length == 0) {
            result.push(str);
        } else {
            for (let i = 0; i < dict[next_digits[0]].length; i++) {
                backtrack(str + dict[next_digits[0]][i], next_digits.substr(1))
            }
        }
    }

    backtrack('', digits)

    return result;
};

let test = letterCombinations('234');

console.log(test);