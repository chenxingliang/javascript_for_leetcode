/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  if (!root) {
    return [];
  }
  if (!root.left && !root.right) {
    return [root.val];
  }
  const res = [];
  function rc (node, res) {
    if (node.left) {
      rc(node.left, res);
    }
    res.push(node.val);
    if (node.right) {
      rc(node.right, res)
    }
  }
  rc(root, res);
  return res;
};
// @lc code=end
function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}
// test1
// const node1 = new TreeNode(1);
// const node2 = new TreeNode(2);
// const node3 = new TreeNode(3);
// node1.left = null;
// node1.right = node2;
// node2.left = node3;

// test2
// const node1 = null;

// test3
// const node1 = new TreeNode(1);

// test4
// const node1 = new TreeNode(1);
// const node2 = new TreeNode(2);
// node1.left = node2;

// test5
const node1 = new TreeNode(1);
const node2 = new TreeNode(2);
node1.left = null;
node1.right = node2;

const test = inorderTraversal(node1);
console.log(test);
