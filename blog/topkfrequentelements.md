---
title: 'Top K Frequent Elements'
date: 'March 5, 2025'
---

# Top K Frequent Elements

You have an array nums and an integer k, return the k most frequent elements.

- $nums = [1, 1, 1, 2, 2, 3]$
- $k = 2$
- Return $[1, 2]$ since 1 and 2 appear the most $k$ times.

## How to Solve?

Think about how many times a value appears in an array. You'd want to prioritize the values that appear in the most indexes in the array. Try to imagine how you can create a list of items to indicate how many times a value appears in an array.

### Bucket Sort

A bucket sort algorithm allows us to sort the values based on their occurrences. Assume the following array and k value:

- $nums = [1, 1, 1, 2, 2, 100], k = 2$

<br />

Let's create an empty hash map and frequency count.
- $cnt = \{\}$
    - An empty count hash map.
- $freq = [[]\ for\ i\ in\ range(len(nums) + 1)]$
    - $freq = [[], [], [], [], [], [], []]$
    - Setting 7 empty arrays in an array.
        - Each empty array represents the count from 0 to 6. 
        - This is why there are 7 empty arrays.

You can then use the hash map to update the count of the each element. This becomes useful for using the bucket sort algorithm. Iterate through nums and store its count to create the hash map:

|   Value   |   Count   |
|   ---     |   ---     |
|   1       |   3       |
|   2       |   2       |
|   100     |   1       |

- Our hash map looks like:
    - $cnt = \{1: 3, 2: 2, 100: 1\}$

<br />

You will then need to insert the values into the frequency array. You can use the tuple (n, c) to store the number corresponding to its count in the frequency's arrays.

- $n$ is our current number.
- $c$ is the count of the current number 

<br />

Our frequency array should end up looking like this after inserting the numbers based on their count.
- $[[], [100], [2], [1], [], [], []]$

<br />

The easiest part of the code is iterating backwards. Notice how 1 appears the most times. Followed shortly by 2. Since $k = 2$, we want to retrieve 2 values that appear the most times.

- Append one to an array:
    - $[1]$
- Append two to the same array:
    - $[1, 2]$
- Stop appending if the length of the array equals k.
    - And simply return the array.

### Helpful Hints
- Use count.items() to get the (n, c) pair.
    - Above Example:
        - $[(1, 3), (2, 2), (100, 1)]$
        - $freq[3].append(1)$
- To increment the count:
    - $cnt[n] = 1 + cnt.get(n, 0)$


### Bucket Sort Solution

```python
class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        # Initialize an empty Hash Map
        cnt = {}
        """
        Initialize a list of lists where
        the lists correspond to the
        frequency of numbers
        """
        freq = [[] for i in range(len(nums) + 1)]

        # Increment the count of numbers
        for n in nums:
            cnt[n] = cnt.get(n, 0) + 1
        
        """
        Store the number n to the index
        of count in the frequency lists
        """
        for n, c in cnt.items():
            freq[c].append(n)
        
        """
        Iterate backwards through frequency
        and store the result in an array.
        Return the array once its size
        reaches the value of k.
        """
        res = []
        for i in range(len(freq) - 1, -1, -1):
            for n in freq[i]:
                res.append(n)
                if len(res) == k:
                    return res