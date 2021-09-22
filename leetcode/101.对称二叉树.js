/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
var isSymmetric = function(root) {
  if (!root) {
    return true;
  }
  function rc (left, right) {
    if (left && right) {
      if (left.val === right.val) {
        return rc(left.left, right.right) && rc(left.right, right.left);
      } else {
        return false;
      }
    } else if (!left && !right) {
      return true;
    } else {
      return false;
    }
  }
  return rc(root.left, root.right);
};
// @lc code=end
function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

// test1
const node1 = new TreeNode(1);
const node2 = new TreeNode(2);
const node3 = new TreeNode(2);
const node4 = new TreeNode(3);
const node5 = new TreeNode(3);
const node6 = new TreeNode(4);
const node7 = new TreeNode(4);

node1.left = node2;
node1.right = node3;
node2.left = node4;
node2.right = node6;
node3.left = node7;
node3.right = node5;

const test = isSymmetric(node1);
console.log(test);
