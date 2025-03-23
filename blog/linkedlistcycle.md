---
title: 'Linked List Cycle'
date: 'March 17, 2025'
category: 'Linked List'
---

# Linked List Cycle

You are given a linked list with a $head$. Determine if there is a cycle in the linked list. A cycle occurs when a node points to a previous node.

<img src="/linkedListCycle/LinkedListCycle1.png" style="width: 100%; height: 100%;">

## How to Solve?

We obviously need to have two pointers that indicate where the linked list has a cycle.

- If it does not have a cycle, then surely one of the pointers equals $null$, right?

### Linked List

We are using a linked list so let's focus on the $head$ of the linked list.

Let's assume we have two pointers that point to the $head$, what would be the behavior of the two pointers?

Well, imagine a tortoise and a hare running in a straight line. The straight line then leads to a running track.

- If the hare is faster than the tortoise, will the hare end of meeting the tortoise at some point?

This is the intuition behind the tortoise and hare algorithm, this question is literally asking if the hare catches up to the tortoise if they are racing in a race track.

Let's set $s$ as our hare and $f$ as our tortoise.
- $s = head$
    - $s = s.next$
        - Goes at a speed of 1.
- $f = head$
    - $f = f.next.next$
        - Goes at a speed of 2.
    
Try creating a linked list with a cycle and see if the hare meets the tortoise if it going twice its pace. Otherwise, I will create a visual below to demonstrate it works.

<img src="/linkedListCycle/LinkedListCycle2.png" style="width: 100%; height: 100%;">

### Helpful Hints

What if there is no cycle?
- Then eventually, fast and fast.next will be set to $null$ and you should end the $while$ loop.
    - Return $False$
- Return $True$ if there is a cycle.

### Linked List Solution
```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def hasCycle(self, head: Optional[ListNode]) -> bool:
        # Set s and f to head
        s, f = head, head

        # Attempt to find the cycle
        # If no cycle exists, then fast points to null
        while f and f.next:
            # Slow = 1 speed
            s = s.next
            # Fast = 2 speed
            f = f.next.next

            # Fast catches up to slow
            if f == s:
                return True
        
        # There was no cycle
        return False