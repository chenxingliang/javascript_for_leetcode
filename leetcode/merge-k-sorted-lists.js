/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    let len = lists.length,
        interval = 1;
    
    while (interval < len) {
        for (let i = 0; i < len; i += interval * 2 ) {
            lists[i] = merge2Lists(lists[i], lists[i + interval]);
        }
        interval *= 2;
    }

    return len > 0 ? lists[0] : null;
};

var merge2Lists = function (l1, l2) {
    if (l1 == null) {
        return l2;
    }
    if (l2 == null) {
        return l1;
    }

    let head = new ListNode(),
        current = head;
    
    while (l1 != null && l2 != null) {
        if (l1.val < l2.val) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }

    current.next = l1 == null ? l2 : l1;

    return head.next;
};