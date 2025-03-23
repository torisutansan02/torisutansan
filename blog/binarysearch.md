---
title: 'Binary Search'
date: 'March 14, 2025'
category: 'Binary Search'
---

# Binary Search

You have an array $nums$ and a $target$ which can or cannot be in $nums$. If you find $target$, return the index where the target occurs. If not, return -1.

- Write in $O(log(n))$ time complexity.

<br />

Example:
- $nums = [1, 2, 3, 4, 5, 6]$
- $target = 5$
    - $Output: 4$
    - The $target$ is 4 which is $nums[4]$ in this example.

## How to Solve?

What if I asked you to pick a number from $1$ through $10$? You can guess a random number and it could probably be correct. But what if it isn't?

<br />

How can I optimize a method playing a guessing game to get the right number? What if you instead picked the number $5$, and I told you that the number is greater than $5$?

<br />

You then pick a number between $6$ and $10$ which is $8$. But then I tell you the number is greater than $8$. So you pick a number between $9$ and $10$ which is $9$.

<br />

The answer I was thinking of was $9$. But notice how the hints I gave to the answer helped us reach that point. Wouldn't that be better than guessing $1$, then $2$, then $3$ , $...$, $9$.

### Binary Search

The same intuition is precisely how binary search works. We set a left pointer $l$ to the beginning of a list of numbers. We then set a right pointer $r$ to the end of a list of numbers.

<br />

Afterwards, we add the two numbers $(l + r)$ and divide them by $2$ to get the middle pointer $m$.

- $l = 0$
- $r = 100$
- $m = (0 + 100) / 2 = 50$

<br />

If the number is greater than the guess, set the left pointer to $m + 1$

- $l = 51$
- $r = 100$
- $m = (51 + 100) / 2 = 75$

<br />

If the number is less than the guess, set the right pointer to $m - 1$

- $l = 51$
- $r = 74$
- $m = (51 + 74) / 2 = 62$.

<br />

Notice how this game drastically reduces the amount of time it takes to find the right number.

<br />

Let's set our pointers $l$, $r$, and $m$, where we are going to use the $nums$ array to find the $target$. I will include a table with the current $l$, $r$, and $m$ values.

- $l = 0$
- $r = len(nums) - 1$
- $nums = [1, 2, 3, 4, 5, 6]$
- $target = 5$

|   l   |   r   |   m
|   --- |   --- |   ---
|   0   |   5   |   2

- Does $nums[2] == 3$?
    - No
- $(0 + 5) / 2 = 2$
- $l = m + 1$

|   l   |   r   |   m
|   --- |   --- |   ---
|   3   |   5   |   4

- Does $nums[4] == 5?$
    - Yes.

<br />

Return $m$ as the $index$.

### Helpful Hints
- How to find the middle index?
    - $(l + r) // 2$
    - $l + ((r - l) // 2)$
        - Avoids overflow.


### Binary Search Solution
```python
class Solution:
    def search(self, nums: List[int], target: int) -> int:
        # Set l to 0 and r to len(nums) - 1
        l, r = 0, len(nums) - 1

        # l cannot reach or exceed r
        while l <= r:
            # Find the middle index
            m = l + ((r - l) // 2)

            # Is the number too big?
            if nums[m] > target:
                # Search first half
                r = m - 1
            # Is the number too small?
            elif nums[m] < target:
                # Search first half
                l = m + 1
            # We found the number
            else:
                return m

        # If we don't find the number, return -1
        return -1

