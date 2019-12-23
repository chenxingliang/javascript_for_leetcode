/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
    let dictionary = [];

    let dp = (i, j) => {
        if (dictionary[i] == undefined) {
            dictionary[i] = [];
        }
        if (dictionary[i][j] != undefined) {
            return dictionary[i][j]
        }
        if (j == p.length) {
            return i == s.length;
        }

        let first = i < s.length && (p[j] == s[i] || p[j] == '.');
        let ans;

        if (j <= p.length - 2 && p[j + 1] == '*') {
            ans = dp(i, j + 2) || (first && dp(i + 1, j));
        } else {
            ans = first && dp(i + 1, j + 1);
        }
        
        dictionary[i][j] = ans;
        return ans
    }

    return dp(0, 0);
};

console.log(isMatch('aaaaaaaaa', 'a*'))