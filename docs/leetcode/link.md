---
title: 链表
order: 3
toc: menu
nav:
  title: 算法
  order: 5
---

## 合并链表

- 题目描述：

```text
  输入两个递增排序的链表，合并这两个链表并使新链表中的节点仍然是递增排序的。
```

- 示例：

```javascript
输入：1->2->4, 1->3->4
输出：1->1->2->3->4->4
```

- 代码：

```javascript
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
const mergeTwoLists = function (l1, l2) {
  const head = new ListNode();

  let cur = head;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      cur.next = l1;
      l1 = l1.next;
    } else {
      cur.next = l2;
      l2 = l2.next;
    }

    cur = cur.next;
  }

  cur.next = l1 ? l1 : l2;

  return head.next;
};
```

## 删除链表重复元素

- 题目描述：

```text
  存在一个按升序排列的链表，给你这个链表的头节点 head ，请你删除所有重复的元素，使每个元素 只出现一次 。返回同样按升序排列的结果链表。
```

- 示例：

```javascript
输入：head = [1,1,2]
输出：[1,2]

输入：head = [1,1,2,3,3]
输出：[1,2,3]
```

- 代码：

```javascript
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
var deleteDuplicates = function (head) {
  let cur = head;

  while (cur) {
    if (cur.next && cur.val === cur.next.val) {
      cur.next = cur.next.next;
    } else {
      cur = cur.next;
    }
  }

  return head;
};
```

## 删除链表重复元素扩展

- 题目描述：

```text
  存在一个按升序排列的链表，给你这个链表的头节点 head ，请你删除链表中所有存在数字重复情况的节点，只保留原始链表中 没有重复出现 的数字。返回同样按升序排列的结果链表。
```

- 示例：

```javascript
输入：head = [1,2,3,3,4,4,5]
输出：[1,2,5]

输入：head = [1,1,1,2,3]
输出：[2,3]
```

- 代码：

```javascript
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
var deleteDuplicates = function (head) {
  if (!head || !head.next) {
    return head;
  }

  let dummy = new ListNode();
  let cur = dummy;

  dummy.next = head;

  while (cur && cur.next) {
    if (cur.next.next && cur.next.val === cur.next.next.val) {
      let val = cur.next.val;

      while (cur.next && cur.next.val === val) {
        cur.next = cur.next.next;
      }
    } else {
      cur = cur.next;
    }
  }

  return dummy.next;
};
```

## 删除链表的倒数第 N 个结点

- 题目描述：

```text
  给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。进阶：你能尝试使用一趟扫描实现吗？
```

- 示例：

```javascript
输入：head = [1,2,3,4,5], n = 2
输出：[1,2,3,5]

输入：head = [1], n = 1
输出：[]
```

- 代码：

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  var fast = head;
  var slow = head;

  while (n--) {
    fast = fast.next;
  }

  while (fast.val) {
    fast = fast.next;
    slow = slow.next;
  }

  slow.next = fast;
  return head;
};
```

## 反转链表

- 题目描述：

```text
  定义一个函数，输入一个链表的头结点，反转该链表并输出反转后链表的头结点。
```

- 示例：

```javascript
输入: 1->2->3->4->5->NULL
输出: 5->4->3->2->1->NULL
```

- 代码：

```javascript
var reverseList = function (head) {
  let dummy = new ListNode();
  let current = head;

  while (current) {
    let beforeNode = dummy.next;
    let newNode = new ListNode(current.val);

    dummy.next = newNode;
    newNode.next = beforeNode;
    current = current.next;
  }
  return dummy.next;
};
```
