/*
 * @lc app=leetcode.cn id=171 lang=javascript
 *
 * [171] Excel 表列序号
 */

// @lc code=start
/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
  const Map = {
    A: 1,
    B: 2,
    C: 3,
    D: 4,
    E: 5,
    F: 6,
    G: 7,
    H: 8,
    I: 9,
    J: 10,
    K: 11,
    L: 12,
    M: 13,
    N: 14,
    O: 15,
    P: 16,
    Q: 17,
    R: 18,
    S: 19,
    T: 20,
    U: 21,
    V: 22,
    W: 23,
    X: 24,
    Y: 25,
    Z: 26
  }

  let res = 0;
  for (let i = 0; i < columnTitle.length; i++) {
    res += Map[columnTitle[i]] * (26 ** (columnTitle.length - i - 1));
  }
  
  return res
};
// @lc code=end

// test1
// let test = titleToNumber('A');

// test2
// let test = titleToNumber('AB');

// test3
// let test = titleToNumber('ZY');

// test4
// let test = titleToNumber('FXSHRXW');

// test5
let test = titleToNumber('AZ');

console.log(test);