/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
  function rc (node) {
    if (!node) {
      return 0;
    }
    let leftDepth = rc(node.left);
    let rightDepth = rc(node.right);
    if (leftDepth && rightDepth) {
      return Math.min(leftDepth, rightDepth) + 1;
    } else if (!leftDepth) {
      return rightDepth + 1;
    } else {
      return leftDepth + 1;
    }
  }
  return rc(root);
};
// @lc code=end

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

// test1
let node1 = new TreeNode(3);
let node2 = new TreeNode(9);
let node3 = new TreeNode(20);
let node4 = new TreeNode(15);
let node5 = new TreeNode(7);
node1.left = node2;
node1.right = node3;
node3.left = node4;
node3.right = node5;

// test2
// let node1 = new TreeNode(2);
// let node2 = new TreeNode(3);
// let node3 = new TreeNode(4);
// let node4 = new TreeNode(5);
// let node5 = new TreeNode(6);
// node1.right = node2;
// node2.right = node3;
// node3.right = node4;
// node4.right = node5;

let test = minDepth(node1);
console.log(test);