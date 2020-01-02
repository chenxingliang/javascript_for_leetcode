/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    if (head == null) {
        return false;
    }

    let index = 0,
        current = head,
        hash = new Map();
    
    while (current) {
        if (hash.get(current)) {
            return true;
        }
        hash.set(current, index);
        index++;
        current = current.next;
    }

    return false;
};

let one = {
        val: 3,
        next: null
    },
    two = {
        val: 2,
        next: null
    },
    three = {
        val: 0,
        next: null
    },
    four = {
        val: -4,
        next: null
    };

one.next = two;
two.next = three;
three.next = four;
four.next = two;

console.log(hasCycle(one));