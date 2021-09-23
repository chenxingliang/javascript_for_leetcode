/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
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
 * @return {boolean}
 */
var isBalanced = function(root) {
  if (!root) {
    return true;
  }
  function rc (node) {
    if (!node) {
      return 0;
    }
    return Math.max(rc(node.left), rc(node.right)) + 1;
  }
  return Math.abs(rc(root.left) - rc(root.right)) <= 1 && isBalanced(root.left) && isBalanced(root.right);
};
// @lc code=end
function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

// test1
// let node1 = new TreeNode(3);
// let node2 = new TreeNode(9);
// let node3 = new TreeNode(20);
// let node4 = new TreeNode(15);
// let node5 = new TreeNode(7);
// node1.left = node2;
// node1.right = node3;
// node3.left = node4;
// node3.right = node5;

// test2
// let node1 = new TreeNode(3);
// let node2 = new TreeNode(2);
// let node3 = new TreeNode(2);
// let node4 = new TreeNode(3);
// let node5 = new TreeNode(3);
// let node6 = new TreeNode(4);
// let node7 = new TreeNode(4);
// node1.left = node2;
// node1.right = node3;
// node2.left = node4;
// node2.right = node5;
// node3.left = node6;
// node3.right = node7;

// test3
// let node1 = new TreeNode(1);
// let node2 = new TreeNode(2);
// let node3 = new TreeNode(3);
// node1.right = node2;
// node2.right = node3;

// test4
let node1 = new TreeNode(1);
let node2 = new TreeNode(2);
let node3 = new TreeNode(2);
let node4 = new TreeNode(3);
let node5 = new TreeNode(3);
let node6 = new TreeNode(4);
let node7 = new TreeNode(4);
node1.left = node2;
node1.right = node3;
node2.left = node4;
node3.right = node5;
node4.left = node6;
node5.right = node7;

let test = isBalanced(node1);
console.log(test);