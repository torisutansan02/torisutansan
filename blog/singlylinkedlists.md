---
title: 'Singly Linked Lists'
date: 'April 6, 2025'
category: 'DSA'
---

# Singly Linked List

Consider this more of a cheat sheet than a guide.

Below, I will include common operations to implement a Linked List. I am also going to link a repository with OOP principles to run Linked List operations.

[Linked Lists](https://github.com/torisutansan02/Implementing-Data-Structures-and-Algorithms/tree/main/Linked%20Lists)

## Visual Cheat Sheet

Below, I will include visuals based on the level of difficult for the implementation.

Each level should represent a day where you spend studying its implementation.

I cannot guarantee that you will become a master at linked lists after this, but you will certainly be better.

### Linked List Implementation

Below are the operations to create a functional linked list.

- Bonus:
    - Add pop()
    - Add popfront()

![Singly Linked List](/linkedLists/LinkedList1.png)

- get() implementation.

```python
def get(self, index):
    if index < 0 or index >= self.size:
        return None
    
    curr = self.head

    i = 0
    while i < index:
        curr = curr.next
        i += 1
    
    return curr.val
```

- append() implementation.

```python
def append(self, val):
    value = Node(val)

    if not self.head:
        self.head = value
        self.size += 1
        return
    
    curr = self.head
    while curr.next:
        curr = curr.next
    
    curr.next = value
    self.size += 1
```

- prepend() implementation.

```python
def prepend(self, val):
    value = Node(val)
    value.next = self.head
    self.head = value
    self.size += 1
```

- insert() implementation.

```python
def insert(self, index, val):
    if index < 0 or index > self.size:
        return
    
    if index == 0:
        self.prepend(val)
        return

    value = Node(val)
    
    curr = self.head

    i = 0
    while i < index - 1:
        curr = curr.next
        i += 1

    value.next = curr.next
    curr.next = value
    self.size += 1
```

- delete() implementation

```python
def delete(self, index):
    if index < 0 or index >= self.size:
        return
    if index == 0:
        self.head = self.head.next
        self.size -= 1
        return
    curr = self.head
    i = 0
    while i < index - 1:
        curr = curr.next
        i += 1
    curr.next = curr.next.next
    self.size -= 1
```

### Reverse, Find Middle, Find Cycle

Below are the basic operations for solving LeetCode questions.

These are easy problems to solve on LeetCode and are the fundamentals for more difficult problems.

![Singly Linked List](/linkedLists/LinkedList2.png)

- reverseList() implementation.

```python
def reverseList(self, head):
    prev = None
    curr = head
    while curr:
        nxt = curr.next
        curr.next = prev
        prev = curr
        curr = nxt
    return prev
```

- findMiddle() implementation.

```python
def findMiddle(self, head):
    slow = fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
    return slow
```

- hasCycle() implementation.

```python
def hasCycle(self, head):
    slow = fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        if slow == fast:
            return True
    return False
```

### Dummy Nodes

The problems below use dummy nodes to solve there corresponding Linked List questions.

Dummy nodes are useful for edge cases and returning the proper linked list.

![Singly Linked List](/linkedLists/LinkedList3.png)

- mergedTwoSortedLists() implementation.

```python
def mergeTwoSortedLists(self, list1, list2):
    dummy = Node(0)
    head = dummy

    while list1 and list2:
        if list1.val < list2.val:
            head.next = list1
            list1 = list1.next
        else:
            head.next = list2
            list2 = list2.next
        head = head.next
    
    head.next = list1 if list1 else list2

    return dummy.next
```

- removeNthFromEnd() implementation.

```python
def removeNthFromEnd(self, head, n):
    dummy = Node(0)
    dummy.next = head
    slow = fast = dummy

    i = 0
    while i < n:
        fast = fast.next
        i += 1

    while fast.next:
        slow = slow.next
        fast = fast.next
    
    slow.next = slow.next.next
    return dummy.next
```

### Combined Strategies and Complexities

The problems below are more complex in their implementations.

By design, they are much more difficult to solve. However, you should think about the patterns they utilize.

If you combine these patterns or use them optimally, you'll discover that solving Linked List problems are not so difficult.

They require practice and patience, like all things LeetCode.

![Singly Linked List](/linkedLists/LinkedList4.png)

- isPalindrome() implementation.

```python
def isPalindrome(self, head):
    slow = fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next

    prev = None
    while slow:
        nxt = slow.next
        slow.next = prev
        prev = slow
        slow = nxt
    
    left, right = head, prev
    while right:
        if left.val != right.val:
            return False
        left = left.next
        right = right.next
    
    return True
```

```python
def detectCycle(self, head):
    slow = fast = head

    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        if slow == fast:
            break

    if fast == None:
        return None
    
    slow = head
    while slow != fast:
        slow = slow.next
        fast = fast.next

    return slow
```