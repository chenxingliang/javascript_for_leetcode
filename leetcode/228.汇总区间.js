/*
 * @lc app=leetcode.cn id=228 lang=javascript
 *
 * [228] 汇总区间
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
  const res = [];
  let min = nums[0];
  let max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] - 1 === nums[i - 1]) {
      max = nums[i];
    } else {
      if (min === max) {
        res.push(`${min}`);
      } else {
        res.push(`${min}->${max}`);
      }
      min = nums[i];
      max = nums[i];
    }
  }
  if (min === max) {
    res.push(`${min}`);
  } else {
    res.push(`${min}->${max}`);
  }
  return res;
};
// @lc code=end

