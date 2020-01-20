/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    
};

var recurseTree = function (root, p, q) {
    if (root == null) {
        return false;
    }

    let left = 0,
        right = 0,
        middle = 0;

    if (root == p || root == q) {
        middle = 1;
    }

    left = recurseTree(root.left, p, q) ? 1 : 0;

    right = recurseTree(root.right, p, q) ? 1 : 0;

    if (left + middle + right >= 2) {}
}