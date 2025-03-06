---
title: 'Longest Consecutive Sequence'
date: 'March 5, 2025'
---

# Longest Consecutive Sequence

You have an unsorted array nums and you must return the length of the longest consecutive sequence.

- $nums = [100, 4, 200, 1, 3, 2]$
    - Longest Sequence: $1, 2, 3, 4$
    - Output: $4$

## How to Solve?

To solve this in a linear runtime $O(n)$, you can utilize a hash set. What exactly does this hash set do? You can check if the left neighbor of a number exists. If it does not, it is the start of an interval. You can iterate through the interval to see if there is a sequence that exists.

### Hash Set Solution

Let's first assign a hash set to the set of nums.

- $nums = [100, 4, 200, 1, 3, 2]$
- $hashSet = \{100, 4, 200, 1, 3, 2\}$
    - $100$ does not have a left neighbor.
        - $99$ does not exist in the set.
        - $Length = 1$
    - $4$ has a left neighbor.
        - $3$ exists in the set.
        - Do nothing.
    - $200$ does not have a left neightbor.
        - $199$ does not exist in the set.
        - $Length = 1$
    - $1$ does not have a left neighbor.
        - $0$ does not exist in the set.
        - $Length = 1$
        - Does it have a right neighbor?
            - Yes.
            - $2, 3, 4$
            - $Length = 4$

<br />

You check the neighbors via a hash set.

- $nums = [100, 4, 200, 1, 3, 2]$
    - $hashSet = \{100, 4, 200, 1, 3, 2\}$

<br />

A hash set differs from a hash map in various ways:
- Hash Sets contain unique values.
    - $nums = [100, 4, 200, 1, 3, 2, 1]$
        - $hashSet = \{100, 4, 200, 1, 3, 2\}$
- Hash Maps have key-value pairs where values can be duplicates but keys are not.

<br />

Using the hash set, you should se the length of all values in the set that does not have a left neighbor to $1$. Afterwards, you should check if the right neighbor exists in the hash set and $increment$ the $length$.

### Helpful Hints
- You should use a loop to iterate through the hash set.
- Check if it has a left neighbor.
    - If it does, do nothing.
    - Else, set $length = 1$.
- Check if the first occurrence of a sequence has a right neighbor.
    - If it does, $increment$ the $length$.
    - Do this until the sequence ends.
- Initialize a hash set.
    - $hashSet = set(nums)$

### Hash Set Solution

```python
class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        # Initialize a hash set of nums
        hashSet = set(nums)
        # Initialize the longest length
        longest = 0

        # Iterate through all numbers in nums
        for n in nums:
            # Is the left neighbor in the hash set?
            if (n - 1) not in hashSet:
                # If it is not, length = 1
                length = 1
                """
                Does the first number in a sequence
                have a right neighbor? Does it have
                multiple right neighbors?
                """
                while (n + length) in hashSet:
                    length += 1
                # Set the longest current length
                longest = max(longest, length)
        
        return longest