/*
 * @lc app=leetcode.cn id=108 lang=javascript
 *
 * [108] 将有序数组转换为二叉搜索树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  function rc (nums, left, right) {
    if (left > right) {
      return null;
    }
    const middle = left + Math.ceil((right - left) / 2);
    const root = new TreeNode(nums[middle]);
    root.left = rc(nums, left, middle - 1);
    root.right = rc(nums, middle + 1, right);
    return root;
  }
  return rc(nums, 0, nums.length - 1);
}
// @lc code=end

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

// test1
const test1 = [-10, -3, 0, 5, 9];
const test = sortedArrayToBST(test1);
console.log(test);