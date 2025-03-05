---
title: 'Two Sum'
date: 'February 27, 2025'
---

# Two Sum

You have an array of integers nums and an integer target.

You must return an array of two indices such that 
- $i_1 + i_2 = target.$

## How to Solve?

Imagine you have an array with a target, like:
- $nums = [2,7,11,15], target = 9.$

<br />

Intuitively, you know that the numbers 2 and 7 add up to 9.
This is easy to understand, but programming a solution without brute force requires some thought.

<br />

### A Brute Force Solution:
Indices represent $nums_0$ to $nums_{n - 1}$ where n represents the size of the array. A brute force solution would use two indices $i$ and $j$ to check every possible combination. Let's make the assumption that n is the size of the array.

- $nums[i]$ starts at $i = 0$ and ends at $n - 1$, and $nums[j]$ starts at $i + 1$ and ends at $n - 1$, representing the summation:
    - $\sum^{n - 1}_{j=i+1} f(j)$
- If $i = 0$ and $j = 1$ to $n - 1.$
    - $target = nums[0] + nums[1].$
    - where $nums[0] = 2$ and $nums[1] = 7.$

<br />

We found that $nums[0]$ and $nums[1]$ add up to the target value. So we return the array indices $[0, 1].$

<br />
 
This solution runs fast in this case, because the first two indices are the return value. But what about in this scenario?
- $nums = [11, 15, 2, 7].$
- We have to iterate the $i$ index 3 times.
- Each iteration of $i$, we have to iterate $j$ a total of $(n - 1) - i$ times.

<br />

In the worse case scenario, we have to traverse the loop in the time complexity $O(n^2)$. Since we are using variables, the space complexity is $O(1)$. This is because variables take up constant space, as opposed to initializing a new data structure to return the values.

### A Hash Map Solution

A hash map makes it easy to store values and run through the loop once. This reduces the runtime, but also requires us to use more space.

<br />

Let's create a hashmap. The first column represents the index and the second value is mapped to the index.

<br />

|   Index   |   Value   |
|   ----    |   ----    |
|   0       |   11      |
|   1       |   15      |
|   2       |   5       |
|   3       |   4       |

Using a hash map, we can store the values in one for loop. Notice how subtracting the target value which is 9 from the fourth index which has a value of 4 equals 5. By using a hash map, you can retrieve the index of its corresponding value. The value 5 is stored in the index 2. So you'd want to return the index of where the value is the difference between the target and the value at the current index.

- $difference = target - nums[3]$
- $difference (value) = 9 - 4 = 5$
- $hashMap[difference] = 2 (index)$

Note how that we do not have to use nested for loops and iterate through the values once. This is because storing the indexes and values in a hash map in memory uses extra space. We utilize memory to reduce the runtime (or time complexity).

- Time Complexity: $O(n)$
- Memory Complexity: $O(n)$

```python

class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        hashMap = {} # Initialize an empty hash map.

        # i = index, n = value
        for i, n in enumerate(nums):
            # Subtract target from i's value.
            diff = target - n

            # Check if diff is in the hash map.
            if diff in hashMap:
                # Return the index that corresponds to diff
                return [hashMap[diff], i]
            
            # Store the value of the current index.
            hashMap[n] = i
        
        return
