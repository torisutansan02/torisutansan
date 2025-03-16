---
title: 'Koko Eating Bananas'
date: 'March 15, 2025'
---

# Koko Eating Bananas

You have an array $piles$ representing the bananas in a pile and an integer $h$ representing hours. You must return a value $k$ of how many bananas you can eat per pile that totals less than $h$.

<br />

The goal is to minimize the amount of bananas per pile, so reduce $k$ to its smallest value.

<br />

Example:
- $piles = [2, 4, 5, 7]$
- $h = 8$
    - $Output: 3$
        - $(2/3) = 1$
        - $(4/3) = 2$
        - $(5/3) = 2$
        - $(7/3) = 3$
        - $Total = 8$

## How to Solve?

The easiest way to solve how many bananas you must eat is to simply look at the largest value in the array.

- $7$.

<br />

If I eat $7$ bananas per hours, it takes me $4$ hours to finish all the bananas. This is going to be our upper bound. Quite simply, we can iterate from eating $1$ banana to $7$ bananas and find the minimum to eat all of them in $8$ hours or less.

### Binary Search

But why do that? Now that we know our lower bound is $1$ and our upper bound is $7$, is there an algorithm we can utilize to reduce our runtime?

<br />

Yes there is, and the approach is very intuitive. Our lower bound is our left pointer $l$, and our upper bound is our right pointer $r$.

- We can use binary search.

<br />

Below, I will simulate how binary search is going to work. We will use a middle pointer $k$ to get the middle index between $l$ and $r$. We are going to halve our possibilities each iteration.

- $piles = [2, 4, 5, 7]$
- $h = 8$
- $l = 1$
    - Minimum of $1$ banana.
- $r = 7$
    - $r = max(piles)$
- $res = r$
    - Our worst case is to return the maximum amount of hours.
- $hours = 0$

<br />

Utilize the formula:
- $k = l + ((r - l) // 2)$
    - For getting the middle index

|   l   |   r   |   k
|   --- |   --- |   ---
|   1   |   7   |   4

|   i (index)   |   piles
|   ---         |   ---
|   0           |   2
|   1           |   4
|   2           |   5
|   3           |   7

- $k = 4$
    - $(l + r) // 2 = 4$
- $hours = 6$
    - $hours += math.ceil(piles[i] / k)$
    - $hours += (2 / 4) = 1$
    - $hours += (4 / 4) = 1$
    - $hours += (5 / 4) = 2$
    - $hours += (7 / 4) = 2$
- $hours <= h$
    - $res = 4$
        - $res = min(res, k)$
    - $r = k - 1$

|   l   |   r   |   k
|   --- |   --- |   ---
|   1   |   3   |   2

|   i (index)   |   piles
|   ---         |   ---
|   0           |   2
|   1           |   4
|   2           |   5
|   3           |   7

- $k = 2$
    - $(l + r) // 2 = 2$
- $hours = 10$
    - $hours += math.ceil(piles[i] / k)$
    - $hours += (2 / 2) = 1$
    - $hours += (4 / 2) = 2$
    - $hours += (5 / 2) = 3$
    - $hours += (7 / 2) = 4$
- $hours >= h$
    - No need to update $res$
    - $l = k + 1$

|   l   |   r   |   k
|   --- |   --- |   ---
|   3   |   3   |   2

|   i (index)   |   piles
|   ---         |   ---
|   0           |   2
|   1           |   4
|   2           |   5
|   3           |   7

- $k = 3$
    - $(l + r) // 2 = 3$
- $hours = 8$
    - $hours += math.ceil(piles[i] / k)$
    - $hours += (2 / 3) = 1$
    - $hours += (4 / 3) = 2$
    - $hours += (5 / 3) = 2$
    - $hours += (7 / 3) = 3$
- $hours <= h$
    - $res = 3$
        - $res = min(res, k)$
    - But notice $l == r$. No need to continue the algorithm.

<br />

Return our result $res$.

### Helpful Hints
- How do I round decimals up?
    - $math.ceil(3/2)$
- How do I get the max of an array?
    - $max(array)$


### Binary Search Solution
```python
class Solution:
    def minEatingSpeed(self, piles: List[int], h: int) -> int:
        # Set our left pointer to 1, lower bound
        l = 1
        # Set our right pointer to max(piles), upper bound
        r = max(piles)
        # Our result in the worse case
        # Is the max amount of bananas
        res = max(piles)

        # l cannot pass r
        while l <= r:
            # Set hours to 0 for each iteration
            hours = 0
            # Set k to the middle pointer
            k = l + ((r - l) // 2)

            # Iterate through the piles
            for i in range(len(piles)):
                # Update our hours
                # Current piles divided by k
                hours += math.ceil(piles[i] / k)
            
            # Check if hours is <= to h
            # Then we can eat k bananas
            if hours <= h:
                # Update result
                res = min(res, k)
                # Check for smaller res
                r = k - 1
            # Else we need to eat more bananas
            else:
                # Check for bigger res
                l = k + 1

        return res