---
title: 'Reverse Linked List'
date: 'March 16, 2025'
category: 'Linked List'
---

# Reverse Linked List

You are given the $head$ of a linked list and must return the reverse of the linked list.

- $1-2-3-4-5$
- $5-4-3-2-1$

## How to Solve?

With a linked list, assume that the end of the linked list always points to $null$.

$1-2-3-4-5-null$

How does this give us a hint to the solution?

### Linked List

Well, imagine if we have two previous and current pointers where the previous pointer equals $null$ and the current pointer equals $head$.

|   head    |   list
|   ---     |   ---
|   h       |   1
|           |   2
|           |   3
|           |   4
|           |   5

Intuitively, we need to set head to where $5$ is at.

$1-2-3-4-5$

Imagine we have three pointers instead of two:
- $nxt = None$
    - Temporary variable to store the next value.
- $prev = None$
    - Starts at $null$
- $curr = head$
    - Starts at $head$

#### First Iteration:

|   nxt     |   prev    |   curr    |   head    |   list
|   ---     |   ---     |   ---     |   ---     |   ---
|           |   p       |           |           |   null   
|           |           |   c       |   h       |   1   
|   n       |           |           |           |   2   
|           |           |           |           |   3   
|           |           |           |           |   4   
|           |           |           |           |   5  
|           |           |           |           |   null  

- $nxt = 2$
    - $nxt = curr.next$
        - $curr = 1$
        - $curr.next = 2$
- $curr.next=>prev$
    - $curr = head$
        - or $1$
    - $prev = null$
        - or $0$
- $prev = 1$
    - $prev = curr$
- $curr = 2$
    - $curr = nxt$

$1-null$

#### Second Iteration:

|   nxt     |   prev    |   curr    |   head    |   list
|   ---     |   ---     |   ---     |   ---     |   ---
|           |           |           |           |   null   
|           |   p       |           |           |   1   
|           |           |   c       |   h       |   2   
|   n       |           |           |           |   3   
|           |           |           |           |   4   
|           |           |           |           |   5  
|           |           |           |           |   null  

- $nxt = 3$
    - $nxt = curr.next$
        - $curr = 2$
        - $curr.next = 3$
- $curr.next=>prev$
    - $curr = head$
        - or $2$
    - $prev = 2$
- $prev = 2$
    - $prev = curr$
- $curr = 3$
    - $curr = nxt$

$2-1-null$

#### Third Iteration:

|   nxt     |   prev    |   curr    |   head    |   list
|   ---     |   ---     |   ---     |   ---     |   ---
|           |           |           |           |   null   
|           |           |           |           |   1   
|           |   p       |           |           |   2   
|           |           |   c       |   h       |   3   
|   n       |           |           |           |   4   
|           |           |           |           |   5  
|           |           |           |           |   null  

- $nxt = 4$
    - $nxt = curr.next$
        - $curr = 3$
        - $curr.next = 4$
- $curr.next=>prev$
    - $curr = head$
        - or $3$
    - $prev = 2$
- $prev = 3$
    - $prev = curr$
- $curr = 4$
    - $curr = nxt$

$3-2-1-null$

#### Fourth Iteration:

|   nxt     |   prev    |   curr    |   head    |   list
|   ---     |   ---     |   ---     |   ---     |   ---
|           |           |           |           |   null   
|           |           |           |           |   1   
|           |           |           |           |   2   
|           |   p       |           |           |   3   
|           |           |   c       |   h       |   4   
|   n       |           |           |           |   5  
|           |           |           |           |   null 

- $nxt = 5$
    - $nxt = curr.next$
        - $curr = 4$
        - $curr.next = 5$
- $curr.next=>prev$
    - $curr = head$
        - or $3$
    - $prev = 3$
- $prev = 4$
    - $prev = curr$
- $curr = 5$
    - $curr = nxt$

$4-3-2-1-null$

#### Fifth Iteration:

|   nxt     |   prev    |   curr    |   head    |   list
|   ---     |   ---     |   ---     |   ---     |   ---
|           |           |           |           |   null   
|           |           |           |           |   1   
|           |           |           |           |   2   
|           |           |           |           |   3   
|           |   p       |           |           |   4   
|           |           |   c       |   h       |   5  
|   n       |           |           |           |   null 

- $nxt = null$
    - $nxt = curr.next$
        - $curr = 5$
        - $curr.next = null$
- $curr.next=>prev$
    - $curr = head$
        - or $5$
    - $prev = 4$
- $prev = 5$
    - $prev = curr$
- $curr = null$
    - $curr = nxt$

$5-4-3-2-1-null$

|   nxt     |   prev    |   curr    |   head    |   list
|   ---     |   ---     |   ---     |   ---     |   ---
|           |           |           |           |   null   
|           |           |           |           |   1   
|           |           |           |           |   2   
|           |           |           |           |   3   
|           |           |           |           |   4   
|           |   p       |           |           |   5  
|   n       |           |   c       |   h       |   null

Notice how both $curr$ and $nxt$ equal to $null$. Therefore, we must return $prev$ since it is now equal to $5$ which was the end of the original linked list. In this case, $curr$ also becomes $null$ effectively ending the $while$ loop.


### Helpful Hints
- How do I get the next value in a linked list?
    - $x.next$
- Store a temporary variable for the $next$ value in a linked list.

### Linked List Solution
```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        # Set previous to null
        prev = None
        # Set nxt to null
        nxt = None
        # Set curr to head
        curr = head

        # Keep running until curr is null
        while curr:
            # Store the next value in a temp variable
            nxt = curr.next
            # Curr needs to point to the previous value
            curr.next = prev
            # Set previous value to current value
            prev = curr
            # Set current value to next value
            # For next iteration
            curr = nxt
        
        # Return prev as it is equal to the end of
        # The linked list before we reversed it.
        # AKA, it is the new head
        return prev