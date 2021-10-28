/*
 * @lc app=leetcode.cn id=191 lang=javascript
 *
 * [191] 位1的个数
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
  let res = 0;
  while (n > 1) {
    if (n % 2 === 1) {
      res++;
    }
    n = Math.floor(n / 2);
  }
  if (n === 1) {
    res++;
  }
  return res;
};
// @lc code=end

// test1
// let test = hammingWeight(7)

// test2
// let test = hammingWeight(parseInt('10000000', 2))

// test3
let test = hammingWeight(parseInt('11111111111111111111111111111101', 2))

console.log(test)