/**
 * @param {number} capacity
 */

var LRUCache = function (capacity) {
    this.size = 0;
    this.capacity = capacity;
    this.cache = new Map();
    this.list = new DLinkList();
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    let node = this.cache.get(key);

    if (node == null) {
        return -1;
    }

    this.list.moveToHead(node);

    return node.value;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    let node = this.cache.get(key);

    if (node == null) {
        let newNode = new DLinkedNode();
        newNode.key = key;
        newNode.value = value;

        this.cache.set(key, newNode);
        this.list.addNode(newNode);

        ++this.size;

        if (this.size > this.capacity) {
            let tail = this.list.popTail();
            this.cache.delete(tail.key);
            --this.size;
        }
    } else {
        node.value = value;
        this.list.moveToHead(node);
    }
};

// 双向链表节点
class DLinkedNode {
    constructor (key, value) {
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

// 首尾固定的双向链表
class DLinkList {
    constructor () {
        this.head = new DLinkedNode();
        this.tail = new DLinkedNode();

        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    addNode (node) {
        node.prev = this.head;
        node.next = this.head.next;

        this.head.next.prev = node;
        this.head.next = node;
    }

    removeNode (node) {
        let prev = node.prev,
            next = node.next;

        prev.next = next;
        next.prev = prev;
    }

    moveToHead (node) {
        this.removeNode(node);
        this.addNode(node);
    }

    popTail () {
        let res = this.tail.prev;
        this.removeNode(res);
        return res;
    }
}

/*
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
*/

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
