/*
 * @lc app=leetcode.cn id=190 lang=javascript
 *
 * [190] 颠倒二进制位
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
  let str = n .toString(2).padStart(32, '0');
  let res = '';
  for (let i = str.length - 1; i >= 0; i--) {
    res += str[i];
  }
  return parseInt(res, 2);
};
// @lc code=end

// test1
let test = reverseBits('00000010100101000001111010011100');

console.log(test)