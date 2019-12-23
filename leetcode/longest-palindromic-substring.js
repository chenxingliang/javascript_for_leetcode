/*
给定一个字符串 s， 找到 s 中最长的回文子串。 你可以假设 s 的最大长度为 1000。
*/

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    if (s == null || s.length < 1) {
        return '';
    }
    let start = 0,
        end = 0;
    
    for (var i = 0; i < s.length; i++) {
        var oddLen = getSubStringLength(s, i, i);
        var evenLen = getSubStringLength(s, i, i + 1);
        var len = oddLen > evenLen ? oddLen : evenLen;

        if (len > end - start) {
            start = Math.ceil(i - (len - 1) / 2);
            end = Math.floor(i + len / 2);
        }
    }

    return s.slice(start, end + 1);
};

var getSubStringLength = function(s, left, right) {
    while (left >= 0 && right < s.length && s[left] == s[right]) {
        left--;
        right++;
    }
    return right - left - 1;
}

var subStr = longestPalindrome('cbbdbdb');

console.log(subStr)