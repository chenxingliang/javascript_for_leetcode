/**
 * @param {number} capacity
 */

let cache = new Map(),
    size,
    capacity,
    head,
    tail;

var LRUCache = function (capacity) {
    this.size = 0;
    this.capacity = capacity;

    head = new DLinkedNode();
    tail = new DLinkedNode();

    head.next = tail;
    tail.prev = head;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    let node = cache.get(key);

    if (node == null) {
        return -1;
    }

    moveToHead(node);

    return node.value;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    let node = cache.get(key);

    if (node == null) {
        let newNode = new DLinkedNode();
        newNode.key = key;
        newNode.value = value;

        cache.set(key, newNode);
        addNode(newNode);

        ++this.size;

        if (this.size > this.capacity) {
            let tail = popTail();
            cache.delete(tail.key);
            --this.size;
        }
    } else {
        node.value = value;
        moveToHead(node);
    }
};

var DLinkedNode = function (key, value) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
}

var addNode = function (node) {
    node.prev = head;
    node.next = head.next;

    head.next.prev = node;
    head.next = node;
}

var removeNode = function (node) {
    let prev = node.prev,
        next = node.next;

    prev.next = next;
    next.prev = prev;
}

var moveToHead = function (node) {
    removeNode(node);
    addNode(node);
}

var popTail = function () {
    let res = tail.prev;
    removeNode(res);
    return res;
}

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

let test = new LRUCache(1);

test.put(2, 1)
test.get(2)
test.put(3, 2)
test.get(2)
test.get(3)
