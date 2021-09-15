/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  const result = [];
  let carry = 0;
  let curr = digits[digits.length - 1] + 1;
  for (let i = digits.length - 1; i >= 0; i--) {
    if (curr + carry < 10) {
      result.unshift(curr + carry);
      carry = 0;
    } else {
      result.unshift((curr + carry) % 10);
      carry = 1;
    }
    curr = digits[i - 1];
  }
  if (carry === 1) {
    result.unshift(carry);
  }
  return result;
};
// @lc code=end

// const test = [1,2,3];
const test = [4,3,2,1];
// const test = [0];
const res = plusOne(test);
console.log(res);