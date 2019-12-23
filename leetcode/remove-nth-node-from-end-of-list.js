var removeNthFromEnd = function (head, n) {
    let initial = new ListNode(),
        arr = [head],
        len = 1,
        current = head;
    
    while (current.next) {
        arr.push(current.next);
        current = current.next;
    }

    len = arr.length;

    if (len === 1) {
        return null;
    }

    if (len === n && len > 1) {
        return head.next;
    }

    arr[len - n - 1].next = arr[len - n + 1];

    return arr[0];
};

console.log(removeNthFromEnd({
    val: 1
}, 1))