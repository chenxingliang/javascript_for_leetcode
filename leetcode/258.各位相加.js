/*
 * @lc app=leetcode.cn id=258 lang=javascript
 *
 * [258] 各位相加
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
  if (num < 10) {
    return num;
  }
  let res = 0;
  let n = num.toString();
  for (let i = 0; i < n.length; i++) {
    res += Number(n[i]);
  }
  return addDigits(res);
};
// @lc code=end

