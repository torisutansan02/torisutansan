---
title: 'Two Sum II - Input Array is Sorted'
date: 'March 6, 2025'
---

# Two Sum II - Input Array is Sorted

You are given a sorted numbers array and a target where you have to find the index + 1 of two indices that add up to the target.

- $numbers = [2, 7, 11, 15]$
- $target = 9$
- You must return $[1, 2]$
    - The indexes that add up to 9 are $[0, 1]$

## How to Solve?

It is helpful that the input array is sorted. You might notice that adding the two indexes from the beginning of the list and the end of the list generates a value too big. Adding $numbers[0] + numbers[3] = 17$.

<br />

$What\ am\ I\ getting\ at?$
- Well, the pattern is that if the sum is greater than the target, maybe you should use a left and right pointer? What happens if we decrement the right pointer?
    - $2 + 11 = 13$.
    - Still too big.
- Again.
    - $2 + 7 = 9$.
    - We got our answer.

### Two Pointers

The intuition behind the problem is very simple. But coding it might seem a bit more difficult. This is because we are not returning the indexes of the left and right pointers. We are adding them by 1. Let's assign a left and right pointer. The algorithm we want to use checks if $numbers[l] + numbers[r] > target$, then decrement the right pointer. If the opposite, then increment the left pointer.

- $l = 0$
- $r = len(numbers) - 1$

<br />

Let's use the following numbers array and target:

- $numbers = [1, 1, 3, 6, 7]$
- $target = 9$

<br />

This example perfectly illustrates the two pointers algorithm and we could demonstrate it below.

|   l   |   r   |   numbers |
|   --- |   --- |   ---     |
|   l   |       |   1       |
|       |       |   1       |
|       |       |   3       |
|       |       |   6       |
|       |   r   |   7       |

- $numbers[l] + numbers[r] == 8$
    - $numbers[l] + numbers[r] < target$
    - Increment left pointer.

|   l   |   r   |   numbers |
|   --- |   --- |   ---     |
|       |       |   1       |
|   l   |       |   1       |
|       |       |   3       |
|       |       |   6       |
|       |   r   |   7       |

- $numbers[l] + numbers[r] == 8$
    - $numbers[l] + numbers[r] < target$
    - Increment left pointer.

|   l   |   r   |   numbers |
|   --- |   --- |   ---     |
|       |       |   1       |
|       |       |   1       |
|   l   |       |   3       |
|       |       |   6       |
|       |   r   |   7       |

- $numbers[l] + numbers[r] == 10$
    - $numbers[l] + numbers[r] > target$
    - Decrement right pointer.

|   l   |   r   |   numbers |
|   --- |   --- |   ---     |
|       |       |   1       |
|       |       |   1       |
|   l   |       |   3       |
|       |   r   |   6       |
|       |       |   7       |

- $numbers[l] + numbers[r] == 9$
    - $numbers[l] + numbers[r] == target$
    - We have found the result.
- You want to return $[l + 1, r + 1]$.

<br />

Do not keep iterating if we found the result. If we found the result, then you just want to return the left and right pointers + 1. You should also end the loop when the left pointer is less than the right pointer. Why? Because we want there two be two separate indices. If the left pointer ever equals the right pointer, then they are the same index.

### Helpful Hints

- Ensure that the result you return is:
    - $[l + 1, r + 1]$

### Two Pointers Solution

```python
class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        # Initialize left pointer to index 0
        l = 0
        # Initialize right pointer to the last index
        r = len(numbers) - 1

        # l and r should never cross or be equal
        while l < r:
            # If the sum > target, decrement r
            if numbers[l] + numbers[r] > target:
                r -= 1
            # If the sum < target, increment l
            elif numbers[l] + numbers[r] < target:
                l += 1
            # Sum == target
            else:
                # Indexes + 1
                return [l + 1, r + 1]