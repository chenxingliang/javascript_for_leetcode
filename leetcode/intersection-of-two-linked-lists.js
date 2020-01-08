/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    if (headA == null || headB == null) {
        return null;
    };

    let stepA = headA,
        stepB = headB;
    
    while (stepA != stepB) {
        stepA = stepA == null ? headB : stepA.next;
        stepB = stepB == null ? headA : stepB.next;
    }

    return stepA;
};