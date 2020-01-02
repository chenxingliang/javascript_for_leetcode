/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
    let current = head,
        hash = new Set();

    while (current) {
        if (hash.has(current)) {
            return current;
        }
        hash.add(current);
        current = current.next;
    }

    return null;
};