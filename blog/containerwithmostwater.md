---
title: 'Container with Most Water'
date: 'March 9, 2025'
---

# Container With Most Water

You are given an array $height$ where each index represents a height. You must return the maximum area that contains water, such that the minimum height of two indexes multiplied by its width represents its area. Its width is denoted by how far apart the two indexes are from each other.

- $height = [1, 8, 6, 2, 5, 4, 8, 3, 7]$
- $Output: 7 * 7 = 49$
    - $height[1] = 8$
    - $height[8] = 7$
    - Take the min height which is $7$ and multiply it by its width which is $8 - 1$. This is the max area.

## How to Solve?

Immediately, it is easy to recognize that the solution for the example uses the 2nd and last index. This hints at a two pointer solution. You want to set the left pointer at the beginning of the list and the right pointer at the end. Afterwards, you should evaluate its area. If the height of the left pointer is smaller than the height of the right pointer, increment the left pointer. Else, decrement the right pointer.

### Two Pointers

Let's assign the left pointer to $0$ and the right pointer to $len(height) - 1$. Getting the area requires that water does not spill over. For this, you want to get the minimum of the height of the left pointer and right pointer. The width is the right pointer subtracted from the left pointer. Below represents the formula for the area and the algorithm for the two pointers.

- $height = [1, 8, 6, 4, 8, 7]$
- $area = (r - l) * min(h[l], h[r])$
- $l = 0$
- $r = len(height) - 1$

|   left    |   right   |   height  |
|   ---     |   ---     |   ---     |
|   l       |           |   1       |
|           |           |   8       |
|           |           |   6       |
|           |           |   4       |
|           |           |   8       |
|           |   r       |   7       |

- $min(h[l], h[r]) = 1$
- $(r - l) = 5$
    - $(5 - 0) = 5$
- $Area = 5$
    - $maxArea = 5$
- Increment $l$ since $h[l] < h[r]$

|   left    |   right   |   height  |
|   ---     |   ---     |   ---     |
|           |           |   1       |
|   l       |           |   8       |
|           |           |   6       |
|           |           |   4       |
|           |           |   8       |
|           |   r       |   7       |

- $min(h[l], h[r]) = 7$
- $(r - l) = 4$
    - $(5 - 1) = 4$
- $Area = 28$
    - $maxArea = 28$
- Decrement $r$ since $h[r] <= h[l]$

|   left    |   right   |   height  |
|   ---     |   ---     |   ---     |
|           |           |   1       |
|   l       |           |   8       |
|           |           |   6       |
|           |           |   4       |
|           |   r       |   8       |
|           |           |   7       |

- $min(h[l], h[r]) = 8$
- $(r - l) = 3$
    - $(4 - 1) = 3$
- $Area = 24$
    - $maxArea = 28$
- Decrement $r$ since $h[r] <= h[l]$
    - It actually does not matter if they are the same height.

|   left    |   right   |   height  |
|   ---     |   ---     |   ---     |
|           |           |   1       |
|   l       |           |   8       |
|           |           |   6       |
|           |   r       |   4       |
|           |           |   8       |
|           |           |   7       |

- $min(h[l], h[r]) = 4$
- $(r - l) = 2$
    - $(3 - 1) = 2$
- $Area = 8$
    - $maxArea = 28$
- Decrement $r$ since $h[r] <= h[l]$

|   left    |   right   |   height  |
|   ---     |   ---     |   ---     |
|           |           |   1       |
|   l       |           |   8       |
|           |   r       |   6       |
|           |           |   4       |
|           |           |   8       |
|           |           |   7       |

- $min(h[l], h[r]) = 6$
- $(r - l) = 1$
    - $(2 - 1) = 1$
- $Area = 6$
    - $maxArea = 28$
- Note how this is the last iteration since l is going to meet r if we continue.
- The max area you found is what you are going to return.

### Helpful Hints
- How do you find the min of the heights?
    - $min(height[l], height[r])$
- How do you find the max area?
    - $res = max(res, area)$

### Two Pointers Solution
```python
class Solution:
    def maxArea(self, height: List[int]) -> int:
        # Initialize the max area
        res = 0
        # l at the beginning, r at the end
        l, r = 0, len(height) - 1

        # l cannot intersect with r
        while l < r:
            # Get the area (width * height)
            area = (r - l) * min(height[l], height[r])
            # Evaluate if it is the max area
            res = max(res, area)

            # Increment l if it's height is < r
            if height[l] < height[r]:
                l += 1
            # Decrement r if it's height is <= l
            else:
                r -= 1
        
        return res