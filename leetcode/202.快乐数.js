/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  const unhappy = [4, 16, 37, 58, 89, 145, 42, 20];
  let str = n.toString();
  while (true) {
    let res = str.split('').reduce((sum, cur) => cur * cur + sum, 0);
    if (unhappy.includes(res)) {
      return false;
    }
    if (res === 1) {
      return true;
    }
    str = res.toString();
  }
};
// @lc code=end

// test1
// let test = isHappy(19)

// test2
let test = isHappy(2)

console.log(test)