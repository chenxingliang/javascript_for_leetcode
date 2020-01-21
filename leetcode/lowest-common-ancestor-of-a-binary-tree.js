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
    let stack = [],
        parentQueue = new Map();

    parentQueue.set(root, null);
    stack.push(root);

    while (!parentQueue.has(p) || !parentQueue.has(q)) {
        let node = stack.pop();

        if (node.left != null) {
            parentQueue.set(node.left, node);
            stack.push(node.left);
        }

        if (node.right != null) {
            parentQueue.set(node.right, node);
            stack.push(node.right);
        }
    }

    let ancestors = new Set();

    while (p != null) {
        ancestors.add(p);
        p = parentQueue.get(p);
    }

    while(!ancestors.has(q)) {
        q = parentQueue.get(q);
    }

    return q;
};