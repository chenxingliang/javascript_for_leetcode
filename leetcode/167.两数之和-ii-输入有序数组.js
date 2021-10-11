/*
 * @lc app=leetcode.cn id=167 lang=javascript
 *
 * [167] 两数之和 II - 输入有序数组
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] === target - numbers[j]) {
        return [i + 1, j + 1];
      } else if (numbers[i] > target - numbers[j]) {
        break;
      }
    }
  }
};
// @lc code=end

// test1
// let test = twoSum([2,7,11,15], 9);

// test2
// let test = twoSum([2,3,4], 6);

// test3
let test = twoSum([-1, 0], -1);

console.log(test);