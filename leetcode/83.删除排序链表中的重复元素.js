/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
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
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  let current = head;
  while (current && current.next) {
    if (current.val === current.next.val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }
  return head;
};
// @lc code=end
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}
var node1 = new ListNode(1);
var node2 = new ListNode(1);
var node3 = new ListNode(2);
var node4 = new ListNode(3);
var node5 = new ListNode(3);
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
const test = deleteDuplicates(node1);
console.log(test);
