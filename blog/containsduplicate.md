---
title: 'Contains Duplicate'
date: 'March 4, 2025'
---

# Contains Duplicate

You have an array nums, where you return True if a value appears in at least two indexes. Return False otherwise.

## How to Solve?

Imagine you have an array $nums = [1, 2, 3, 1]$.

<br />

Simply, you scan the array and recognize that there are two 1's. You then know that this array contains duplicates.

<br />

### Brute Force

One of the ways you can solve this problem is with a brute force approach. You would use two pointers $i$ and $j$ to compare the current index with future indexes. Assume the size of the array is $n$.

- Start at index $i = 0$ and end at $n - 2$.
- Start at index $j = i + 1$ and end at $n - 1$.

|   i   |   j   |   nums    |
|   --- |   --- |   ---     |
|   0   |   0   |   1       |
|   1   |   1   |   2       |
|   2   |   2   |   3       |
|   3   |   3   |   1       |

- Note how when $i = 0, nums[i] = 1$ and  when $j = 3, nums[j] = 1$.
- The above chart helps illustrate the following summations:
    - $\sum^{n - 2}_{i=0} f(i)$
    - $\sum^{n - 1}_{j=i+1} g(j)$
    - If $i = 0$, compare $i$ to $j = 1, 2, 3$.
    - If $i = 2$, compare $i$ to $j = 3$.

<br />

Notice how ineffective the solution is. You have to run through every index in the list. Then, you have to compare the current index to the following indexes. Two nested for loops, resulting in a runtime of:
- $O(n^2)$.
- The Space Complexity is $O(1)$ since we do not need any additional data structures.

### Hash Set

A Hash Set solution stores previous values and checks if those values correspond with the current index $i$'s value.

- Let's look at the Hash Set for $nums = [1, 2, 3, 1]$.

|   Number  |   Count   |
|   ---     |   ---     |
|   1       |   2       |
|   2       |   1       |
|   3       |   1       |

Note how every index iteration, we store the count of the number. By this logic, you can compare the index at $i = 3$ to the hash set's values. If the value exists in the hash set, then return True. Return False if the value does not exist.

- Time Complexity: $O(n)$.
    - Iterate through the array once.
- Space Complexity: $O(n)$.
    - Store values into a hash set.

### Helpful Hints
- Use a for loop to iterate through every index.
    - In addition, add the value at the index to the hash set.
- Initialize a hash set like:
    - $x = set()$
- Add a new value to a hash set:
    - $x.add(i)$

### Hash Set Solution

```python
class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        # Initialize a Hash Set
        hashSet = set()

        # Iterate index i in nums
        for i in nums:

            # Does nums[i] exist in the hash set?
            if i in hashSet:
                return True
            
            # Add the index i's value to the hash set.
            hashSet.add(i)
        
        # Return False if there are no duplicates.
        return False

