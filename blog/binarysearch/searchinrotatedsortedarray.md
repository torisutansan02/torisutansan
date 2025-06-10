---
title: 'Search in Rotated Sorted Array'
date: 'March 15, 2025'
category: 'Binary Search'
---

# Search in Rotated Sorted Array

You are given an integer array $nums$ and you must find the index $i$ that contains the $target$ value.

- $nums = [4, 5, 6, 7, 0, 1, 2]$
- $target = 0$
- $Output: 4$
    - $nums[4] = 0$

## How to Solve?

This question is particularly difficult. But notice how in the second example, the $0$ is in the second half of the array. This gives us a hint to the solution.

Should we split the array in half?

### Binary Search

This is what we get when we split the array in half:

- $[4, 5, 6, 7]$
- $[0, 1, 2]$

Notice how 0 is in the second half. This problem is quite complex, and it is best explained in examples.

- But now that we know we need to use binary search, we just need to find the constraints for setting the left and right pointers.

Below, I will provide multiple examples of the implementation of binary search. These examples are meant to give hints as to what the constraints are.

### Example 1:

- $nums = [4, 5, 6, 7, 0, 1, 2]$
- $target = 0$
- $l = 0$
    - Set $l$ to beginning of the list.
- $r = len(nums) - 1$
    - Set $r$ to the end of the list

|   l   |   r   |   m
|   --- |   --- |   ---
|   0   |   6   |   3

|   l   |   r   |   m   |   index(i)
|   --- |   --- |   --- |   ---
|   l   |       |       |   4
|       |       |       |   5   
|       |       |       |   6
|       |       |   m   |   7
|       |       |       |   0
|       |       |       |   1
|       |   r   |       |   2

- $m = 3$
    - $m = l + ((r - l) // 2)$
- Notice how $nums[l] <= nums[m]$?
    - And how $nums[l] > target$?
    - Therefore, we must set:
        - $l = m + 1$

|   l   |   r   |   m
|   --- |   --- |   ---
|   4   |   6   |   5

|   l   |   r   |   m   |   index(i)
|   --- |   --- |   --- |   ---
|       |       |       |   4
|       |       |       |   5   
|       |       |       |   6
|       |       |       |   7
|   l   |       |       |   0
|       |       |   m   |   1
|       |   r   |       |   2

- $m = 5$
    - $m = l + ((r - l) // 2)$
- Notice how $nums[l] <= nums[m]$?
    - And how $nums[l] <= target$?
    - Therefore, we must set:
        - $r = m - 1$

|   l   |   r   |   m
|   --- |   --- |   ---
|   4   |   4   |   4

|   l   |   r   |   m   |   index(i)
|   --- |   --- |   --- |   ---
|       |       |       |   4
|       |       |       |   5   
|       |       |       |   6
|       |       |       |   7
|   l   |   r   |   m   |   0
|       |       |       |   1
|       |       |       |   2

- $m = 4$
    - $m = l + ((r - l) // 2)$
- Notice how $nums[m] == target$?
    - Our constraint after computing m should check if this is the case.
    - We simply want to return $m$ in this case.

Unfortunately, this does not satisfy all our constraints. Let's use another example.

### Example 2:

- $nums = [4, 5, 6, 0, 1, 2, 3]$
- $target = 6$
- $l = 0$
    - Set $l$ to beginning of the list.
- $r = len(nums) - 1$
    - Set $r$ to the end of the list

|   l   |   r   |   m
|   --- |   --- |   ---
|   0   |   6   |   3

|   l   |   r   |   m   |   index(i)
|   --- |   --- |   --- |   ---
|   l   |       |       |   4
|       |       |       |   5   
|       |       |       |   6
|       |       |   m   |   0
|       |       |       |   1
|       |       |       |   2
|       |   r   |       |   3

- $m = 3$
    - $m = l + ((r - l) // 2)$
- Notice how $nums[l] > nums[m]$?
    - And how $nums[r] < target$?
    - Therefore, we must set:
        - $r = m - 1$

|   l   |   r   |   m
|   --- |   --- |   ---
|   0   |   2   |   1

|   l   |   r   |   m   |   index(i)
|   --- |   --- |   --- |   ---
|   l   |       |       |   4
|       |       |   m   |   5   
|       |   r   |       |   6
|       |       |       |   0
|       |       |       |   1
|       |       |       |   2
|       |       |       |   3

- $m = 1$
    - $m = l + ((r - l) // 2)$
- Notice how $nums[l] <= nums[m]$?
    - And how $nums[m] < target$?
    - Therefore, we must set:
        - $l = m + 1$

|   l   |   r   |   m
|   --- |   --- |   ---
|   2   |   2   |   2

|   l   |   r   |   m   |   index(i)
|   --- |   --- |   --- |   ---
|       |       |       |   4
|       |       |       |   5   
|   l   |   r   |   m   |   6
|       |       |       |   0
|       |       |       |   1
|       |       |       |   2
|       |       |       |   3

- $m = 2$
    - $m = l + ((r - l) // 2)$
- Notice how $nums[l] == nums[m]$?
    - Return $m$.

### Example 3:

- $nums = [4, 5, 6, 7, 8, 0, 1, 2]$
- $target = 5$
- $l = 0$
    - Set $l$ to beginning of the list.
- $r = len(nums) - 1$
    - Set $r$ to the end of the list

|   l   |   r   |   m
|   --- |   --- |   ---
|   0   |   7   |   3

|   l   |   r   |   m   |   index(i)
|   --- |   --- |   --- |   ---
|   l   |       |       |   4
|       |       |       |   5   
|       |       |       |   6
|       |       |   m   |   7
|       |       |       |   8
|       |       |       |   0
|       |       |       |   1
|       |   r   |       |   2

- $m = 3$
    - $m = l + ((r - l) // 2)$
- Notice how $nums[l] <= nums[m]$?
    - And how $target <= nums[m]$?
    - Therefore, we must set:
        - $r = m - 1$

|   l   |   r   |   m
|   --- |   --- |   ---
|   0   |   2   |   1

|   l   |   r   |   m   |   index(i)
|   --- |   --- |   --- |   ---
|   l   |       |       |   4
|       |       |   m   |   5   
|       |   r   |       |   6
|       |       |       |   7
|       |       |       |   8
|       |       |       |   0
|       |       |       |   1
|       |       |       |   2

- $m = 1$
    - $m = l + ((r - l) // 2)$
- Notice how $nums[m] == target$?
    - Return $m$

### Helpful Hints

When solving the examples on paper, make sure to:
- Keep track of the constraints for setting $l$ and $r$

### Binary Search Solution
```python
class Solution:
    def search(self, nums: List[int], target: int) -> int:
        # Set l to beginning of the list
        l = 0
        # Set r to the end of the list
        r = len(nums) - 1

        # Binary search: l <= r
        while l <= r:
            # Set a middle pointer value
            m = l + ((r - l) // 2)
            # Check if the value at the middle
            # Pointer is equal to the target
            if nums[m] == target:
                return m
            
            # [4, 5, 6, 7, 0, 1, 2]
            #  l        m        r
            # nums[l] <= nums[m]
            if nums[l] <= nums[m]:
                # [0, 1, 2], t = 2
                #  l  m  r
                # [2, 3, 1], t = 1
                #  l  m  r
                if target > nums[m] or nums[l] > target:
                    l = m + 1
                else:
                    r = m - 1

            # [4, 5, 6, 7, 8, 0, 1, 2], t = 5
            #  l        m           r
            # nums[l] > nums[m]
            else:
                # [2, 0, 1], t = 2
                #  l  m  r
                # [4, 0, 1, 2, 3], t = 0
                #  l     m     r
                if target > nums[r] or nums[m] > target:
                    r = m - 1
                else:
                    l = m + 1
        
        # Return -1 if we never find m
        return -1