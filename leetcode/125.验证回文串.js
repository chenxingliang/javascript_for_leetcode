/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  let start = 0;
  let end = s.length - 1;
  while (start < end) {
    let left = s[start].charCodeAt();
    let right = s[end].charCodeAt();
    if (!(
      (48 <= left && left <= 57) ||
      (65 <= left && left <= 90) ||
      (97 <= left && left <= 122)
    )) {
      start++;
    } else if (!(
      (48 <= right && right <= 57) ||
      (65 <= right && right <= 90) ||
      (97 <= right && right <= 122)
    )) {
      end--;
    } else if (s[start].toLocaleLowerCase() !== s[end].toLocaleLowerCase()) {
      return false;
    } else {
      start++;
      end--;
    }
  }
  return true;
};
// @lc code=end

// test1
// let test = isPalindrome('A man, a plan, a canal: Panama');

// test2
// let test = isPalindrome('race a car');

// test
let test = isPalindrome('abccba');

console.log(test);