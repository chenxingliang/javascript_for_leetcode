/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let dict = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    },
    len = s.length - 1,
    res = 0;

    for (let i = 0; i < len; i++) {
        if (dict[s[i]] < dict[s[i + 1]]) {
            res -= dict[s[i]];
        } else {
            res += dict[s[i]];
        }
    }

    res += dict[s[len]];

    return res;
};

let test = romanToInt('IV');

console.log(test);