/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
    let depth = 0;

    if (root == null) {
        return depth;
    } 

    depth = Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;

    return depth;
};