/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
    let arr = [];

    inorder(root, arr);

    return arr[k - 1];
};

var inorder = function (root, arr) {
    if (root == null) {
        return arr;
    }
    inorder(root.left, arr);
    arr.push(root.val);
    inorder(root.right, arr);

    return arr;
}