/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
  if (!root) {
    return false;
  }
  if (root.val === targetSum && !root.left && !root.right) {
    return true;
  }
  function rc (node, sum, target) {
    if (node && !node.left && !node.right && sum === target && node !== root) {
      return true;
    } else if (node) {
      return rc(node.left, node.left ? node.left.val + sum : sum, target) || rc(node.right, node.right ? node.right.val + sum : sum, target);
    } else {
      return false
    }
  }
  return rc(root, root.val, targetSum);
};
// @lc code=end

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

// test1
// let node1 = new TreeNode(5);
// let node2 = new TreeNode(4);
// let node3 = new TreeNode(8);
// let node4 = new TreeNode(11);
// let node5 = new TreeNode(13);
// let node6 = new TreeNode(4);
// let node7 = new TreeNode(7);
// let node8 = new TreeNode(2);
// let node9 = new TreeNode(1);
// node1.left = node2;
// node1.right = node3;
// node2.left = node4;
// node3.left = node5;
// node3.right = node6;
// node4.left = node7;
// node4.right = node8;
// node6.right = node9;
// let test = hasPathSum(node1, 22);

// test2
// let node1 = new TreeNode(1);
// let node2 = new TreeNode(2);
// let node3 = new TreeNode(3);
// node1.left = node2;
// node1.right = node3;
// let test = hasPathSum(node1, 5);

// test3
// let node1 = new TreeNode(1);
// let node2 = new TreeNode(2);
// node1.left = node2;
// let test = hasPathSum(node1, 1);

console.log(test);