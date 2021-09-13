/*
 * @lc app=leetcode.cn id=82 lang=javascript
 *
 * [82] 删除排序链表中的重复元素 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode}
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  let newHead = null;
  let prev = null;
  let repeatNode = new ListNode(null);
  let current = head

  while (current) {
    if (current.val !== (current.next && current.next.val) && current.val !== repeatNode.val) {
      if (!newHead) {
        newHead = new ListNode(current.val);
        prev = newHead;
      } else {
        prev.next = new ListNode(current.val);
        prev = prev.next;
      }
    } else {
      repeatNode = current;
    }
    current = current.next;
  }
  return newHead;
};
// @lc code=end
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}
var node1 = new ListNode(1);
var node2 = new ListNode(2);
var node3 = new ListNode(3);
var node4 = new ListNode(3);
var node5 = new ListNode(4);
var node6 = new ListNode(4);
var node7 = new ListNode(5);
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;
node6.next = node7;

// var node1 = new ListNode(1);
// var node2 = new ListNode(2);
// var node3 = new ListNode(2);
// node1.next = node2;
// node2.next = node3;
// deleteDuplicates(node1)
console.log(deleteDuplicates(node1));