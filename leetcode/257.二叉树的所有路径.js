/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  const res = [];
  const rc = (node, path, res) => {
    if (!node.left && !node.right) {
      return res.push(path);
    }
    if (node.left) {
      rc(node.left, `${ path }->${ node.left.val }`, res);
    }
    if (node.right) {
      rc(node.right, `${ path }->${ node.right.val }`, res);
    }
  }
  rc(root, '' + root.val, res);
  return res;
};
// @lc code=end

