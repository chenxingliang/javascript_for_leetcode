/*
 * @lc app=leetcode.cn id=119 lang=javascript
 *
 * [119] 杨辉三角 II
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  if (rowIndex === 0) {
    return [1];
  }
  if (rowIndex === 1) {
    return [1, 1];
  }
  let res = [1, 1];
  for (let i = 2; i <= rowIndex; i++) {
    let temp = [1];
    for (let j = 0; j < i - 1; j++) {
      temp.push(res[j] + res[j + 1]);
    }
    temp.push(1);
    res = temp;
  }
  return res;
};
// @lc code=end

// test1
// let test = getRow(3);

// test2
let test = getRow(3);

console.log(test);