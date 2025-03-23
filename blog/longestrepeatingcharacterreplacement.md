---
title: 'Longest Repeating Character Replacement'
date: 'March 11, 2025'
category: 'Sliding Window'
---

# Longest Repeating Character Replacement

You have a string $s$ and an integer $k$ which represents how many characters you can change to an uppercase English character to get the longest substring. The substring contains the same uppercase character.

- $s = "AABABBA"$
- $k = 1$
    - $Output: 4$
    - You can replace the character $"A"$ at $s[3]$ to get $"BBBB"$. It is also possible to replace the character $"B"$ at $s[2]$ to get $"AAAA"$.

## How to Solve?

Take a look at the first 5 characters of $s = "AABABBA"$. The first 5 characters are $"AABAB"$ and the B repeats twice. 

How can we remove the first three elements to get $"AB"$ to satisfy the condition where $k = 1$? This intuition is how we are going to implement our algorithm.

### Sliding Window

We should create a sliding window starting at the first index of the string. This is because at least one character is needed to evaluate when:

- $0 <= k <= s.length()$

We should track the count of the characters in a string using a hash map. The hash map stores the characters, but is used primarily for evaluating the count of a single character of the string at the index of the right pointer.

- $cnt = \{\}$
- Remember how hash maps work?
    - $\{ Key: Value \}$ pair.

Utilizing this knowledge, we can store the max frequency of a character in a string at $s[r]$ up until $r$ using a variable and the $max()$ function. The right pointer is denoted with $r$.

There should also be a result variable to return the longest substring we can create so far. Let's assign a left and right pointer to the beginning of the list to create our sliding window.

- $l = 0$
- $r = 0$
- $maxFreq = 0$

|   left    |   right   |   string
|   ---     |   ---     |   ---
|   l       |   r       |   'A'
|           |           |   'A'
|           |           |   'B'
|           |           |   'A'
|           |           |   'B'
|           |           |   'B'
|           |           |   'A'

- $cnt = \{A: 1\}$
- $maxFreq = 1$
    - Max of $maxFreq$ and $cnt[s[r]]$
- $res = 1$
    - Max of $res$ and $(r - l + 1)$

|   left    |   right   |   string
|   ---     |   ---     |   ---
|   l       |           |   'A'
|           |   r       |   'A'
|           |           |   'B'
|           |           |   'A'
|           |           |   'B'
|           |           |   'B'
|           |           |   'A'

- $cnt = \{A: 2\}$
- $maxFreq = 2$
    - Max of $maxFreq$ and $cnt[s[r]]$
- $res = 2$
    - Max of $res$ and $(r - l + 1)$

|   left    |   right   |   string
|   ---     |   ---     |   ---
|   l       |           |   'A'
|           |           |   'A'
|           |   r       |   'B'
|           |           |   'A'
|           |           |   'B'
|           |           |   'B'
|           |           |   'A'

- $cnt = \{A: 2, B: 1\}$
- $maxFreq = 2$
    - Max of $maxFreq$ and $cnt[s[r]]$
- $res = 3$
    - Max of $res$ and $(r - l + 1)$

|   left    |   right   |   string
|   ---     |   ---     |   ---
|   l       |           |   'A'
|           |           |   'A'
|           |           |   'B'
|           |   r       |   'A'
|           |           |   'B'
|           |           |   'B'
|           |           |   'A'

- $cnt = \{A: 3, B: 1\}$
- $maxFreq = 3$
    - Max of $maxFreq$ and $cnt[s[r]]$
- $res = 4$
    - Max of $res$ and $(r - l + 1)$

|   left    |   right   |   string
|   ---     |   ---     |   ---
|   l       |           |   'A'
|           |           |   'A'
|           |           |   'B'
|           |           |   'A'
|           |   r       |   'B'
|           |           |   'B'
|           |           |   'A'

- $cnt = \{A: 3, B: 2\}$
- $maxFreq = 3$
    - Max of $maxFreq$ and $cnt[s[r]]$
- Note that we cannot update res yet.
- $(r - l + 1) = 5$
- $maxFreq = 3$
    - $(r - l + 1) - maxFreq > k$
    - $k = 1$
        - Increment the $l$ pointer.
        - Decrement $s[l]$ from the map.
- $res = 4$

|   left    |   right   |   string
|   ---     |   ---     |   ---
|           |           |   'A'
|   l       |           |   'A'
|           |           |   'B'
|           |           |   'A'
|           |   r       |   'B'
|           |           |   'B'
|           |           |   'A'

- $cnt = \{A: 2, B: 2\}$
- $maxFreq = 3$
    - Max of $maxFreq$ and $cnt[s[r]]$
- $res = 4$
    - Max of $res$ and $(r - l + 1)$

|   left    |   right   |   string
|   ---     |   ---     |   ---
|           |           |   'A'
|   l       |           |   'A'
|           |           |   'B'
|           |           |   'A'
|           |           |   'B'
|           |   r       |   'B'
|           |           |   'A'

- $cnt = \{A: 2, B: 3\}$
- $maxFreq = 3$
    - Max of $maxFreq$ and $cnt[s[r]]$
- Note that we cannot update res yet.
- $(r - l + 1) = 5$
- $maxFreq = 3$
    - $(r - l + 1) - maxFreq > k$
    - $k = 1$
        - Increment the $l$ pointer.
        - Decrement $s[l]$ from the map.
- $res = 4$
    
|   left    |   right   |   string
|   ---     |   ---     |   ---
|           |           |   'A'
|           |           |   'A'
|   l       |           |   'B'
|           |           |   'A'
|           |           |   'B'
|           |   r       |   'B'
|           |           |   'A'

- $cnt = \{A: 1, B: 3\}$
- $maxFreq = 3$
    - Max of $maxFreq$ and $cnt[s[r]]$
- $res = 4$
    - Max of $res$ and $(r - l + 1)$

|   left    |   right   |   string
|   ---     |   ---     |   ---
|           |           |   'A'
|           |           |   'A'
|   l       |           |   'B'
|           |           |   'A'
|           |           |   'B'
|           |           |   'B'
|           |   r       |   'A'

- $cnt = \{A: 2, B: 3\}$
- $maxFreq = 3$
    - Max of $maxFreq$ and $cnt[s[r]]$
- Note that we cannot update res yet.
- $(r - l + 1) = 5$
- $maxFreq = 3$
    - $(r - l + 1) - maxFreq > k$
    - $k = 1$
        - Increment the $l$ pointer.
        - Decrement $s[l]$ from the map.
- $res = 4$

|   left    |   right   |   string
|   ---     |   ---     |   ---
|           |           |   'A'
|           |           |   'A'
|           |           |   'B'
|   l       |           |   'A'
|           |           |   'B'
|           |           |   'B'
|           |   r       |   'A'

- $cnt = \{A: 2, B: 2\}$
- $maxFreq = 3$
    - Max of $maxFreq$ and $cnt[s[r]]$
- $res = 4$
    - Max of $res$ and $(r - l + 1)$

We cannot update the left and right pointer anymore. The right pointer goes out of bounds. Return the result variable.

### Helpful Hints
- How to create a hash map?
    - $cnt = \{\}$
- How to get the max of two elements?
    - $max(x, y)$

### Sliding Window Solution
```python
class Solution:
    def characterReplacement(self, s: str, k: int) -> int:
        # Set a left pointer
        l = 0
        # Create a character hash map
        cnt = {}
        # Set a max frequency variable
        maxFreq = 0
        # Set the maximum substring
        res = 0

        # Iterate r from 0 to the end of the list
        for r in range(len(s)):
            # Add the character to the char set
            cnt[s[r]] = 1 + cnt.get(s[r], 0)
            # Get the maximum character frequency
            maxFreq = max(maxFreq, cnt[s[r]])

            # Check if frequency of characters
            # Exceeds the maximum frequency
            # Increment the left pointer
            if (r - l + 1) - maxFreq > k:
                cnt[s[l]] -= 1
                l += 1
            
            # Get the maximum substring
            res = max(res, (r - l + 1))

        return res