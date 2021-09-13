/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  if (target <= nums[0]) {
    return 0;
  }
  if (target > nums[nums.length - 1]) {
    return nums.length;
  }
  if (target === nums[nums.length - 1]) {
    return nums.length - 1;
  }
  let max = nums.length;
  let min = 0;
  let middle = Math.floor((max - min) / 2);
  while (true) {
    if (target === nums[middle]) {
      return middle;
    } else if (target < nums[middle] && target > nums[middle - 1]) {
      return middle;
    } else if (target < nums[middle] && target === nums[middle - 1]) {
      return middle - 1;
    } else if (target > nums[middle] && target <= nums[middle + 1]) {
      return middle + 1;
    } else if (target < nums[middle]) {
      max = middle - 1;
      middle = Math.floor((max - min) / 2) + min;
    } else if (target > nums[middle]) {
      min = middle + 1
      middle = Math.floor((max - min) / 2) + min;
    } 
  }
};
// @lc code=end
// console.log(searchInsert([1,3,5,6], 5))
// console.log(searchInsert([1,3,5,6], 2))
// console.log(searchInsert([1,3,5,6], 7))
// console.log(searchInsert([1,3,5,6], 0))
// console.log(searchInsert([1], 0))
// console.log(searchInsert([1,4,6,7,8,9], 7))
// console.log(searchInsert([1,3], 3))
// console.log(searchInsert([1,2,3,4,5,10], 2))
// console.log(searchInsert([1,4,6,7,8,9], 6))
console.log(searchInsert([1,3,5,6], 2))