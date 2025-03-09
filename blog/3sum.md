---
title: '3Sum'
date: 'March 9, 2025'
---

# 3Sum

You are given an array and you have to return a list of lists where $nums[i]$, $nums[j]$, and $nums[k]$ sum of to 0. $i \ != j \ != k$.

- $nums = [-1, 0, 1, 2, -1, -4]$
    - $res = [[-1, -1, 2], [-1, 0, 1]]$
    - nums[0] + nums[3] + nums[4]
    - nums[0] + nums[1] + nums[2]

## How to Solve?

You need to return a list of lists. Therefore, you should set your result to an empty list. It is also helpful to sort the list. As sorting the list ensures all negative numbers are at the front and positive numbers are at the back.

- $nums = [-1, 0, 1, 2, -1, -4]$
    - $nums = [-4, -1, -1, 0, 1, 2]$

Afterwards, iterate through the list and utilize a left and right pointer. The left pointer starts at $i + 1$ and increments, the right pointer starts at the end of the list.

<br />

To avoid duplicates, check if the current index past the first index is equal to the previous index. Start the next iteration if that is the case.

### Two Pointers

The rest of the algorithm uses two pointers. Let's assign the left pointer and the right pointer. We should also consider an index $i$, where its value is denoted as $a$.

- $a$.
- $l = i + 1$
    - $nums[l]$ represents $b$.
- $r = len(nums) - 1$
    - $nums[r]$ represents $c$.
- $a + b + c = 0$.

<br />

Let's use the above sorted array. Write a variable $3Sum$ where $3Sum = a + nums[l] + nums[r]$. If 3Sum is less than 0, the values add up to a value too large. Decrement the right pointer. If $3Sum$ is greater than 0, then the values add up to a value too small. Increment the left pointer. Otherwise, append the three values as a list of lists to the result array. Increment the left pointer and decrement the right pointer after finding a 3Sum solution, while also continuously incrementing the left pointer if its current index is the same as its previous.

- Ensure the left pointer and right pointer never meet or cross.

<br />

Below represents the array and tables following the two pointers algorithm.

- $nums = [-4, -1, -1, 0, 1, 2]$

|   index (i)   |   left    |   right   |   nums
|   ---         |   ---     |   ---     |   ---
|   a           |           |           |   -4
|               |   l       |           |   -1
|               |           |           |   -1
|               |           |           |   0
|               |           |           |   1
|               |           |   r       |   2

- $a + nums[l] + nums[r]$
    - $-4 + -1 + 2 = -3$
    - Too small, increment the left pointer.

|   index (i)   |   left    |   right   |   nums
|   ---         |   ---     |   ---     |   ---
|   a           |           |           |   -4
|               |           |           |   -1
|               |   l       |           |   -1
|               |           |           |   0
|               |           |           |   1
|               |           |   r       |   2

- $a + nums[l] + nums[r]$
    - $-4 + -1 + 2 = -3$
    - Too small, increment the left pointer.

|   index (i)   |   left    |   right   |   nums
|   ---         |   ---     |   ---     |   ---
|   a           |           |           |   -4
|               |           |           |   -1
|               |           |           |   -1
|               |   l       |           |   0
|               |           |           |   1
|               |           |   r       |   2


- $a + nums[l] + nums[r]$
    - $-4 + 0 + 2 = -2$
    - Too small, increment the left pointer.

|   index (i)   |   left    |   right   |   nums
|   ---         |   ---     |   ---     |   ---
|   a           |           |           |   -4
|               |           |           |   -1
|               |           |           |   -1
|               |           |           |   0
|               |   l       |           |   1
|               |           |   r       |   2

- $a + nums[l] + nums[r]$
    - $-4 + 1 + 2 = -1$
    - Too small, start new iteration.
    - Left pointer and right pointer will meet.
    - This means we must increment $i$.

|   index (i)   |   left    |   right   |   nums
|   ---         |   ---     |   ---     |   ---
|               |           |           |   -4
|   a           |           |           |   -1
|               |   l       |           |   -1
|               |           |           |   0
|               |           |           |   1
|               |           |   r       |   2

- $a + nums[l] + nums[r]$
    - $-1 + -1 + 2 = 0$
    - We have found our solution.
    - Append this result to the list.
    - $[[-1, -1, 2]]$
    - Increment the left and decrement the right pointer.

|   index (i)   |   left    |   right   |   nums
|   ---         |   ---     |   ---     |   ---
|               |           |           |   -4
|   a           |           |           |   -1
|               |           |           |   -1
|               |   l       |           |   0
|               |           |   r       |   1
|               |           |           |   2

- $a + nums[l] + nums[r]$
    - $-1 + 0 + 1 = 0$
    - We have found our 2nd solution.
    - Append this result to the list.
    - $[[-1, -1, 2], [-1, 0, 1]]$
    - Start the next iteration so $l \ != r$.

|   index (i)   |   left    |   right   |   nums
|   ---         |   ---     |   ---     |   ---
|               |           |           |   -4
|               |           |           |   -1
|   a           |           |           |   -1
|               |   l       |           |   0
|               |           |           |   1
|               |           |   r       |   2

- Notice how $a == nums[i - 1]$.
    - $nums[2] == nums[1]$.
    - Therefore, we must start the next iteration.

|   index (i)   |   left    |   right   |   nums
|   ---         |   ---     |   ---     |   ---
|               |           |           |   -4
|               |           |           |   -1
|               |           |           |   -1
|   a           |           |           |   0
|               |   l       |           |   1
|               |           |   r       |   2

- $a + nums[l] + nums[r]$
    - $0 + 1 + 2 = 3$.
    - Next iteration since $l \ != r$

<br />

Our table ends at this iteration. Why? Because a increments until the end of the list. However, $l$ and $r$ meet or $l$ surpasses r. This is a condition that cannot be satisfied. Therefore, we have finished the algorithm. You should return the set you found.

- $res = [[-1, -1, 2], [-1, 0, 1]]$

### Helpful Hints
- Sort the array first.
    - $nums.sort()$
- Enumerate with i and a.
    - $enumerate(nums)$
- $nums = [-2, -2, 0, 0, 2, 2]$
    - Note how $nums[3]$ equals $nums[2]$. If $a = nums[0]$, you want to append $nums[0]$, $nums[2]$, $nums[5]$. But you want to increment $l$ when $l = 3$ and $r = 4$. Because you are going to get the same solution. You do not want duplicates. It is also important to note that when $a = nums[1]$, you want to continue to the next iteration since $nums[1]$ equals $nums[0]$.

### Two Pointers Solution
```python
class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        # Initialize an empty list
        res = []
        # Sort the nums array
        nums.sort()

        # Iterate index i with value a
        for i, a in enumerate(nums):
            # If a > 0, no possible solution
            if a > 0:
                break
            
            # a != nums[i - 1] when i > 0
            # This avoids potential duplicates
            if a == nums[i - 1] and i > 0:
                continue
            
            # Initialize l to i + 1
            l = i + 1
            # Initialize r to last index
            r = len(nums) - 1
            
            # l cannot meet r
            while l < r:
                # threeSum = a + b + c
                threeSum = a + nums[l] + nums[r]

                # Greater than 0, decrement r
                if threeSum > 0:
                    r -= 1
                # Less than 0, increment l
                elif threeSum < 0:
                    l += 1
                # Equals 0, add solution
                else:
                    res.append([a, nums[l], nums[r]])

                    # Increment l, decrement r
                    l += 1
                    r -= 1

                    # Ensure no duplicates
                    # l cannot reach r
                    while l < r and nums[l] == nums[l - 1]:
                        l += 1
            
        return res