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
var sortList = function (head) {
    return head == null ? null : mergeList(head);
};

var mergeList = function (head) {
    if (head.next == null) {
        return head;
    }

    let slow = head,
        fast = head,
        pre = null;

    while (fast && fast.next) {
        pre = slow;
        slow = slow.next;
        fast = fast.next.next;
    }

    pre.next = null;

    let left = mergeList(head),
        right = mergeList(slow);
    
    return merge(left, right);
}

var merge = function (l1, l2) {
    let res = new ListNode(),
        current = res;

    while (l1 && l2) {
        if (l1.val < l2.val) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }

    current.next = l1 ? l1 : l2;

    return res.next;
}