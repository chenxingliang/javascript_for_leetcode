/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
var preorderTraversal = function(root) {
  let res = [];

  function rc (node, res) {
    if (!node) {
      return;
    } else {
      res.push(node.val);
      rc(node.left, res);
      rc(node.right, res);
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
const node1 = new TreeNode(1);
const node2 = new TreeNode(2);
const node3 = new TreeNode(3);
node1.right = node2;
node2.left = node3;
let test = preorderTraversal(node1);

// test2
// let test = preorderTraversal();

// test3
// const node1 = new TreeNode(1);
// let test = preorderTraversal(node1);

// test4
// const node1 = new TreeNode(1);
// const node2 = new TreeNode(2);
// node1.left = node2;
// let test = preorderTraversal(node1);

console.log(test)