/*
 * @lc app=leetcode.cn id=100 lang=javascript
 *
 * [100] 相同的树
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  let res = true;
  if (p && q) {
    if (p.val !== q.val) {
      res = false;
    } else {
      res = isSameTree(p.left, q.left);
      if (res) {
        res = isSameTree(p.right, q.right);
      }
    }
  } else if (!p && !q) {
    res = true;
  } else {
    res = false;
  }
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
// node1.left = node2;
// node1.right = node3;

// test2
// const node1 = new TreeNode(1);
// const node2 = new TreeNode(2);
// const node3 = new TreeNode(1);
// const node4 = new TreeNode(2);
// node1.left = node2;
// node3.right = node4;

// test3
// const node1 = new TreeNode(0)

// const test = isSameTree(node1, node3);
// console.log(test);