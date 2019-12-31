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
var maxPathSum = function (root) {
    let max_sum = -Infinity;

    function max_gain(node) {
        if (node == null) {
            return 0;
        }

        let left_gain = Math.max(max_gain(node.left), 0);
        let right_gain = Math.max(max_gain(node.right), 0);

        let price_new_path = node.val + left_gain + right_gain;

        max_sum = Math.max(max_sum, price_new_path);

        return node.val + Math.max(left_gain, right_gain);
    }

    max_gain(root);

    return max_sum;
};