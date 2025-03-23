---
title: 'Find Minimum in Rotated Sorted Array'
date: 'March 15, 2025'
category: 'Binary Search'
---

# Find Minimum in Rotated Sorted Array

You are given a rotated sorted array $nums$ and you must find the minimum value of it.

- $nums = [4, 5, 6, 1, 2]$
    - $Output: 1$
        - Minimum value is $0$.

## How to Solve?

Try to separate the arrays in two halves.

- $[4, 5, 6]$
- $[1, 2]$

<br />

Why should we ever care about the first half if the second half has the answer we need?

<br />

Is there an algorithm where we can eliminate $half$ of the values we don't need to find the minimum?

### Binary Search

Yes, that algorithm is binary search. But this problem doesn't utilize binary search in a somewhat conventional way.

- $[4, 5, 6, 1, 2, 3]$

<br />

Notice how our middle pointer starts at $nums[2]$ which is $6$. That isn't what we are looking for.

<br />

Then we eliminate $[4, 5, 6]$.

- $[1, 2, 3]$

<br />

Notice how our middle pointer is now at $nums[1]$ which is $2$. What do we do? That isn't our minimum value.

<br />

Well, you might have noticed that our left pointer $l$ is at the first index which is $1$, and our right pointer is at the last index which is $3$.

- Can't we just set the result to $min(res, nums[l])$ if our value at the left pointer is smaller than our value at the right pointer?

<br />

That's exactly the intuition behind this problem. We need to check first if the value at the left pointer has a smaller value than the value at the right pointer.

<br />

Let's set a left pointer $l$ to the beginning of the list and a right pointer $r$ at the end of the list. Then, we can perform binary search with a $m$ middle pointer.

- We'll make sure to constantly check if $nums[l] < nums[r]$
    - Then set $res = min(res, nums[l])$
- Otherwise, we perform binary search normally.

<br />

Below are the variables and the table illustrating the binary search algorithm:

- $nums = [4, 5, 6, 1, 2, 3]$
- $l = 0$
- $r = len(nums) - 1$
- $res = nums[0]$

|   l   |   r   |   m
|   --- |   --- |   ---
|   0   |   5   |   2

|   l   |   r   |   m   |   index(i)
|   --- |   --- |   --- |   ---
|   l   |       |       |   4
|       |       |       |   5
|       |       |   m   |   6
|       |       |       |   1
|       |       |       |   2
|       |   r   |       |   3

- $nums = [4, 5, 6, 1, 2, 3]$
- $m = 2$
    - $m = (l + r) // 2$
- $res = 4$
    - $min(res, nums[m])$
- $nums[m] >= nums[l]$
    - $l = m + 1$

|   l   |   r   |   m
|   --- |   --- |   ---
|   3   |   5   |   4

|   l   |   r   |   m   |   index(i)
|   --- |   --- |   --- |   ---
|       |       |       |   4
|       |       |       |   5
|       |       |       |   6
|   l   |       |       |   1
|       |       |   m   |   2
|       |   r   |       |   3

- $nums = [4, 5, 6, 1, 2, 3]$
- $m = 4$
    - $m = (l + r) // 2$
- $res = 1$
    - Why? When $nums[m] = 2$?
        - Because look at $nums[l]$ It is equal to $1$.
        - $nums[l] < nums[m] < nums[r]$
        - We found where the rotation occurs.
        - $res = min(res, nums[l])$
- Should we continue the algorithm?

<br />

No, we should break. Because we found the minimum value in the array. Searching any further will give us $2$ or $3$.

### Helpful Hints

- How do I find the min of 2 values?
    - $min(x, y)$
- Does it matter if my $if$ condition for checking if $l$ is at the point of rotation has:
    - $nums[l] < nums[r]$
    - $nums[l] < nums[m]$
        - Not really, but you must initialize $m = 0$ before the $while$ loop if you want to use this comparison
- How do I find the middle pointer?
    - $m = l + ((r - l) // 2)$

### Binary Search Solution
```python
class Solution:
    def findMin(self, nums: List[int]) -> int:
        # Set the current result to
        # To the first index
        res = nums[0]
        # Set l to 0
        l = 0
        # Set r to len(nums) - 1
        r = len(nums) - 1

        # l cannot ever pass r
        while l <= r:
            # Check if the index represents
            # The point of rotation
            if nums[l] < nums[r]:
                # nums[l] IS the min
                res = min(res, nums[l])
                break
            
            # Set the middle pointer
            m = l + ((r - l) // 2)
            res = min(res, nums[m])

            # Check if nums[l] <= nums[m]
            # If so, set l = m + 1
            if nums[l] <= nums[m]:
                l = m + 1
            # Else set r = m - 1
            else:
                r = m - 1

        return res