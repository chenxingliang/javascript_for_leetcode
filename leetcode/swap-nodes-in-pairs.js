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
var swapPairs = function(head) {
    if (head === null || head.next === null) {
        return head;
    }

    let newHead = new ListNode(),
        prev = newHead;

    while (head !== null && head.next !== null) {
        prev.next = head.next;
        head.next = prev.next.next;
        prev.next.next = head;

        prev = head;
        head = head.next;
    }

    return newHead.next;
};