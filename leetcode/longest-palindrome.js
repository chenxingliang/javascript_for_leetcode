/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let hash = Object.create(null),
        len = s.length,
        count = 0;

    for (let i = 0; i < len; i++) {
        if (hash[s[i]]) {
            hash[s[i]]++;
        } else {
            hash[s[i]] = 1;
        }
    }

    for (let key in hash) {
        hash[key] % 2 === 1 ? count++ : null;
    }

    return count === 0 ? len : (len - count + 1);

};