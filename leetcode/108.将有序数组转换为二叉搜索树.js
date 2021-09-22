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
  const middle = Math.floor(nums.length / 2);
  const root = new TreeNode(nums[middle]);
  let level = 0;
  root.right = new TreeNode(nums[2 * level + 2 + middle]);
  root.left = new TreeNode(nums[-2 * level - 1 + middle]);
  function rc (root, level) {
    
  }
  rc(root, level);
  return root;
};
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