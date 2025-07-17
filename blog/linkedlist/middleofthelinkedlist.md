---
title: 'Middle of the Linked List'
date: 'March 17, 2025'
category: 'Linked List'
---

# Middle of the Linked List

You are given the $head$ of a linked list and must return its middle node.
- If the linked list is even, return the $2nd$ of the two even nodes.

![Image](/linkedlist/middleOfTheLinkedList/MiddleOfTheLinkedList1.svg)

## How to Solve?

We should first start off at the $head$ of the list. Recognize the fact that the $middle$ of the linked list is half of the list.

This intuition suggests that we should have two pointers. Because if we have one pointer that reaches the end of the list, where should the other one be?

### Linked List

Let's say I have a mile time of $10$ minutes and my friend has a mile time of $5$ minutes.

Obviously, my friend goes $twice$ as fast as me. But I am still halfway in the track whereas my friend finished.

- Assuming we are constantly going the same pace.

Wouldn't this same intuition help us solve the problem? If we had a slow pointer and a fast pointer, the slow pointer will surely be far behind the fast pointer.

Let's set $s$ as our slow pointer and $f$ as our fast pointer. They initially point to the $head$, but $f$ is twice the pace as $s$ in our case.
- $s = head$
    - $s = s.next$
        - Slow goes at a pace of 1.
- $f = head$
    - $f = f.next.next$
        - Fast goes at a pace of 2.

Try using this intuition on a linked list yourself. If not, I will provide a visual diagram of the algorithm below.

![Image](/linkedlist/middleOfTheLinkedList/MiddleOfTheLinkedList2.svg)

Notice how $fast$ is not pointing to null by in example 2 on the first iteration. That is how $slow$ ends up being at $3$ in this case.

### Helpful Hints
- Make sure to end the $while$ loop when $fast$ or $fast.next$ is equal to $null$ as this is when $slow$ is in the middle.

### Linked List Solution
```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def middleNode(self, head: Optional[ListNode]) -> Optional[ListNode]:
        # Set slow and fast to head
        s, f = head, head

        # When fast is equal to null, then we found the middle
        # Fast goes twice as fast as slow
        while f and f.next:
            s = s.next
            f = f.next.next
        
        # Return slow since fast is at the end
        # Slow is 1/2 of the list
        return s