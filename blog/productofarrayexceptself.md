---
title: 'Product of Array Except Self'
date: 'March 5, 2025'
category: 'Arrays'
---

# Product of Array Except Self

You have an array nums and you need to return an array where the index's value is equal to the product of all other values.

- $nums = [1, 2, 3, 4]$
- Note how $nums[1] = 1$.
    - So the returned array should be $2 * 3 * 4 = 24$.
    - Returned array:
        - $[24, 12, 8, 6]$

## How to Solve?

You must calculate the prefix which tracks the product of all elements before index $i$. Afterwards, you must calculate the postfix which tracks the product of all elements after index $i$.

### Prefix and Postfix Products

Let's first find the prefix of the indices.

- $[1, 2, 3, 4]$
    - First value is 1. No index before.
    - Second value is 1. One index before.
    - Third value is 2. $2 * 1 = 2$.
    - Fourth value is 6. $3 * 2 * 1 = 6$.
- $[1, 1, 2, 6]$

Let's find the postfix of the indices.

- $[1, 2, 3, 4]$
- $[1, 1, 2, 6]$
    - Fourth value is 6. No index before.
    - Third value is 8. $2 * 4 = 8$.
    - Third value is 12. $1 * 3 * 4 = 12$.
    - Fourth value is 24. $1 * 2 * 3 * 4 = 24$.
- $[24, 12, 8, 6]$.

Do you notice how we are doing a lot of repeated work? What if we stored the prefix and postfix in a variable? Let's create a table demonstrating the calculations we need to keep two variables $prefix$ and $postfix$. We should also create a result array the size of nums and store it's content with 1's.

- $nums = [1, 2, 3, 4]$
- $res = [1, 1, 1, 1]$
- $prefix = 1$

Here is the prefix formula and table.

|   i       |   prefix before   |   res[i]              |   prefix after
|   ---     |   ---             |   ---                 |   ---
|   index   |   prefix          |   $res[i] * prefix$   |   $prefix * nums[i]$   

|   i   |   prefix before   |   res[i]  |   prefix after
|   --- |   ---             |   ---     |   ---
|   0   |   1               |   1       |   1
|   1   |   1               |   1       |   2
|   2   |   2               |   2       |   6
|   3   |   6               |   6       |   24

- $nums = [1, 2, 3, 4]$
- $res = [1, 1, 2, 6]$
- $postfix = 1$

Here is postfix formula and table.

|   i       |   postfix before      |   res[i] before   |   res[i] after        |   postfix after
|   ---     |   ---                 |   ---             |   ---                 |   ---
|   index   |   postfix             |   res[i]          |   $res[i] * postfix$  |   $postfix * nums[i]$

|   i       |   postfix before      |   res[i] before   |   res[i] after        |   postfix after
|   ---     |   ---                 |   ---             |   ---                 |   ---
|   3       |   1                   |   6               |   6                   |   4
|   2       |   4                   |   2               |   8                   |   12
|   1       |   12                  |   1               |   12                  |   24
|   0       |   24                  |   1               |   24                  |   24

- $res = [24, 12, 8, 6]$

Note how the prefix and postfix products lead us to the solution we are looking for. You'd want to return the result after these operations.

### Helpful Hints

- You should use two for loops.
    - One for loop for the prefix.
    - Another for loop for the postfix.

### Prefix and Postfix Products Solution

```python
class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        # Initialize an array to [1] * len(nums)
        arr = [1] * len(nums)

        # Initialize a prefix
        prefix = 1
        for i in range(len(nums)):
            arr[i] *= prefix
            prefix *= nums[i]
        
        # Initialize a postfix
        postfix = 1
        for i in range(len(nums) - 1, -1, -1):
            arr[i] *= postfix
            postfix *= nums[i]
        
        return arr