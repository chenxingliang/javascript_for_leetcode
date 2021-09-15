/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  if (a === '0') {
    return b;
  }
  if (b === '0') {
    return a;
  }
  let bit = 0;
  let aIndex = a.length - 1;
  let bIndex = b.length - 1;
  const res = [];
  while (aIndex >= 0 || bIndex >= 0) {
    const cur = +(a[aIndex] || 0) + +(b[bIndex] || 0) + bit;
    if (cur > 2) {
      bit = 1;
      res.unshift(1);
    } else if (cur > 1) {
      bit = 1;
      res.unshift(0);
    } else if (cur > 0) {
      bit = 0;
      res.unshift(1);
    } else {
      bit = 0;
      res.unshift(0);
    }
    aIndex--;
    bIndex--;
  }
  if (bit === 1) {
    res.unshift(1);
  }
  return res.join('');
};
// @lc code=end
// const a = '11', b = '1';
// const a = '1010', b = '1011';
// const a = '1111', b = '1111';
const a = '100', b = '110010';
console.log(addBinary(a, b));
