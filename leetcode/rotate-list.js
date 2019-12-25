/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
    if (head == null) {
        return null;
    }

    if (head.next == null) {
        return head;
    }

    let old_head = head,
        new_head = head,
        current = head.next,
        len = 1;

    while (current) {
        len++;
        new_head = current;
        current = current.next;
    }

    new_head.next = old_head;
    current = old_head;

    for (let i = 0; i < len - k % len - 1; i++) {
        current = current.next;
    }

    new_head = current.next;
    current.next = null;

    return new_head;

};