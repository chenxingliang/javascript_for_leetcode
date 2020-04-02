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
var reverseKGroup = function(head, k) {
    let dummy = new ListNode(),
        pre = dummy,
        tail = dummy;

    dummy.next = head;

    while (true) {
        let count = k;
        while (count && tail) {
            count--;
            tail = tail.next;
        }
        if (!tail) {
            break;
        }
        head = pre.next;
        while (pre.next != tail) {
            let cur = pre.next;
            pre.next = cur.next;
            cur.next = tail.next;
            tail.next = cur;
        }
        pre = head;
        tail = head;
    }

    return dummy.next;
};