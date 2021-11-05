/*
 * @lc app=leetcode.cn id=263 lang=javascript
 *
 * [263] 丑数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function(n) {
  let divisor = [2, 3, 5];
  let i = 0;
  while (i < divisor.length && n > 1) {
    let temp = n / divisor[i];
    if (temp <= Math.floor(temp)) {
      n = temp;
    } else {
      i++;
    }
  }
  return n === 1;
};
// @lc code=end

