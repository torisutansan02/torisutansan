---
title: 'Trapping Rain Water'
date: 'March 9, 2025'
category: 'Two Pointers'
---

# Trapping Rain Water

You are given an array $heights$ where each index represents a height. Your goal is to trap rain water where the water does not overflow.

- $height = [0, 1, 0, 2, 1, 0, 3]$
- $Output: 1 + 1 + 2$.
    - Note from indexes $h[1]$ to $h[3]$, you can add 1 rain water from $h[2]$. The minimum of these two indexes is 1 and you want to subtract $h[1] - h[2] = 1$. From $h[3]$ to $h[6]$, the min height is $h[3] = 2$.
    - $h[1] - h[2] = 1$
    - $h[3] - h[4] = 1$
    - $h[3] - h[5] = 2$ 

## How to Solve?

This problem is quite difficult, even though it uses a left and right pointer. You want to assign the left pointer to the beginning of the list and the right pointer at the end of the list. From there, you assign a $lMax$ to $height[l]$ and a $rMax$ to $height[r]$. 

You want to increment the left pointer if the left max is less than the right max, and vice versa for decrementing the right pointer. 

Then, you must update the left max and right max based on which is incremented or decremented. 

Afterwards, you will add the amount of rain water trapped by adding the max area to $lMax - height[l]$ or $rMax - height[r]$

### Two Pointers

Let's assign the left pointer to $l$ and the right pointer to $r$. We can also assign the left max to $lMax$ and the right max to $rMax$. We should also use a result variable to keep track of how much rain water we contained. Make sure the array is not empty, else return $0$.

- $height = [0, 1, 0, 2, 1, 0, 3]$
- $l = 0$
- $r = len(height) - 1$
- $lMax = height[l]$
- $rMax = height[r]$
- $res = 0$

|   left    |   right   |   height
|   ---     |   ---     |   ---
|   l       |           |   0
|           |           |   1
|           |           |   0
|           |           |   2
|           |           |   1
|           |           |   0
|           |   r       |   3

- $lMax < rMax$, increment the left pointer.
    - $0 < 3$
- $lMax = max(lMax, height[l])$
    - $lMax = 0$
- $res = res + (lMax - height[l])$
    - $res = 0 + (0 - 0)$

|   left    |   right   |   height
|   ---     |   ---     |   ---
|           |           |   0
|   l       |           |   1
|           |           |   0
|           |           |   2
|           |           |   1
|           |           |   0
|           |   r       |   3

- $lMax < rMax$, increment the left pointer.
    - $0 < 3$
- $lMax = max(lMax, height[l])$
    - $lMax = 1$
- $res = res + (lMax - height[l])$
    - $res = 0 + (1 - 1)$

|   left    |   right   |   height
|   ---     |   ---     |   ---
|           |           |   0
|           |           |   1
|   l       |           |   0
|           |           |   2
|           |           |   1
|           |           |   0
|           |   r       |   3

- $lMax < rMax$, increment the left pointer.
    - $1 < 3$
- $lMax = max(lMax, height[l])$
    - $lMax = 1$
- $res = res + (lMax - height[l])$
    - $res = 0 + (1 - 0)$

|   left    |   right   |   height
|   ---     |   ---     |   ---
|           |           |   0
|           |           |   1
|           |           |   0
|   l       |           |   2
|           |           |   1
|           |           |   0
|           |   r       |   3

- $lMax < rMax$, increment the left pointer.
    - $1 < 3$
- $lMax = max(lMax, height[l])$
    - $lMax = 2$
- $res = res + (lMax - height[l])$
    - $res = 1 + (2 - 2)$

|   left    |   right   |   height
|   ---     |   ---     |   ---
|           |           |   0
|           |           |   1
|           |           |   0
|           |           |   2
|   l       |           |   1
|           |           |   0
|           |   r       |   3

- $lMax < rMax$, increment the left pointer.
    - $2 < 3$
- $lMax = max(lMax, height[l])$
    - $lMax = 2$
- $res = res + (lMax - height[l])$
    - $res = 1 + (2 - 1)$

|   left    |   right   |   height
|   ---     |   ---     |   ---
|           |           |   0
|           |           |   1
|           |           |   0
|           |           |   2
|           |           |   1
|   l       |           |   0
|           |   r       |   3

- $lMax < rMax$, increment the left pointer.
    - $2 < 3$
- $lMax = max(lMax, height[l])$
    - $lMax = 2$
- $res = res + (lMax - height[l])$
    - $res = 2 + (2 - 0)$

Following this algorithm, we find that the max area is 4.

### Helpful Hints

- How do you get the max?
    - $max(lMax, height[l])$
- Make sure to check if there is an empty array.
    - If not, return $0$.


### Two Pointers Solution
```python
class Solution:
    def trap(self, height: List[int]) -> int:
        # Check if the array is empty
        if not height:
            return 0

        # Assign a variable to track rain water
        res = 0
        # Assign l to beginning of the list
        l = 0
        # Assign r to the end of the list
        r = len(height) - 1

        # Assign lMax to height[l]
        lMax = height[l]
        # Assign rMax to height[r]
        rMax = height[r]

        # l cannot meet or surpass r
        while l < r:
            # Increment l if lMax < rMax
            if lMax < rMax:
                # Increment left pointer
                l += 1
                # lMax - index's height
                # Add rain water
                lMax = max(lMax, height[l])
                res += lMax - height[l]
            else:
                # Increment right pointer
                r -= 1
                # rMax - index's height
                # Add rain water
                rMax = max(rMax, height[r])
                res += rMax - height[r]
        
        return res