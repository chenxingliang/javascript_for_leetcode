/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    if (l1 == null) {
        return l2;
    }

    if (l2 == null) {
        return l1;
    }

    let start = new ListNode(),
        current = start;
    
    while (true) {
        if (l1.val <= l2.val) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
        if (l1 == null) {
            current.next = l2;
            break;
        } 
        if (l2 == null) {
            current.next = l1;
            break;
        }
    }

    return start.next;
};