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
// var sortedArrayToBST = function(nums) {
//   function rc (nums, left, right) {
//     if (left > right) {
//       return null;
//     }
//     const middle = Math.ceil((right - left) / 2);
//     const root = new TreeNode(nums[middle]);
//     root.left = rc(nums, left, middle - 1);
//     root.right = rc(nums, middle + 1, right);
//     return root;
//   }
//   return rc(nums, 0, nums.length - 1);
// };
function sort(nums,start,end) {
  // 构不成区间，返回null
  if(start>end)   
      return null
// 注意这里必须向下取整，js和其他语言的区别，如果默认的话应该是
  let mid = start+Math.ceil((end-start)/2)
// 树的结点的定义树是这样定义的
  let root = new TreeNode(nums[mid],null,null)  
  root.left = sort(nums,start,mid-1)
  root.right = sort(nums,mid+1,end)
  return root
}

var sortedArrayToBST = function(nums) {

  return sort(nums,0,nums.length-1)
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