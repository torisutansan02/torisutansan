---
title: 'Minimum Window Substring'
date: 'March 12, 2025'
category: 'Sliding Window'
---

# Minimum Window Substring

You are given two strings $s$ and $t$ with lengths $m$ and $n$. Return a minimum window substring of $s$ that is a substring of $t$, including duplicates. Return $""$ if no such substring exists.

- $s = "BDABNC"$
- $t = "ABC"$
    - You can return $"ABNC"$ as the minimum window substring.
    - It contains $"ABC"$.

## How to Solve?

We need to keep count of the characters we have in our window in the string $s$. It is also imperative to know how many characters we need from our string $t$.

Using this intuition, we know this problem is a sliding window. It is possible that $t$ can contain 0 or 1 character so our sliding window should start at a size of 1.

### Sliding Window

Our sliding window needs to contain at least enough of the characters in $t$. Therefore, we should initialize a hash map to $t$ with its characters and counts.

Another thing to consider is how many characters we have in $s$ that satisfies the character count in $t$. We can use variables $have$ and $need$ to track this.

The last thing to think about is what we are returning. We want the minimum window substring. So our result should be an array with indices of the left and right pointer. To keep track of the result length, we can have a result length variable.

What if our string is empty?

- Return $""$

Otherwise, we need to utilize the sliding window algorithm. The right pointer continuously increments until we have enough characters to satisfy the hash map of $t$.

From there, we should compute if the current result length is less than the previous result length. Set our array to the left and right pointers if it does. Then, remove the character at the left pointer.

Check if the character at the left pointer is in the hash map of $t$ and that we have enough of those characters. If not, we need to decrement the $have$ variable. Afterwards, we increment our right pointer.

Below, I am going to assign our variables and demonstrate the sliding window algorithm. The left and right pointer starts at the beginning of the list.

- $s = "BDABNC"$
- $t = "ABC"$

These are the variables:

- $charT = Counter(t)$
    - $charT = \{"A": 1, "B": 1, "C": 1\}$
- $window = \{\}$
- $have = 0$
- $need = len(charT)$
- $res = [0, 0]$
- $resLen = float("infinity")$
    - Default value.
- $l = 0$
- $r = 0$

|   left    |   right   |   s
|   ---     |   ---     |   ---
|   l       |   r       |   'B'
|           |           |   'D'
|           |           |   'A'
|           |           |   'B'
|           |           |   'N'
|           |           |   'C'

- $charT = \{"A": 1, "B": 1, "C": 1\}$
- $window = \{"B": 1\}$
- $have = 1$
- $need = 3$
- Increment $r$.

|   left    |   right   |   s
|   ---     |   ---     |   ---
|   l       |           |   'B'
|           |   r       |   'D'
|           |           |   'A'
|           |           |   'B'
|           |           |   'N'
|           |           |   'C'

- $charT = \{"A": 1, "B": 1, "C": 1\}$
- $window = \{"B": 1, "D": 1\}$
- $have = 1$
- $need = 3$
- Increment $r$

|   left    |   right   |   s
|   ---     |   ---     |   ---
|   l       |           |   'B'
|           |           |   'D'
|           |   r       |   'A'
|           |           |   'B'
|           |           |   'N'
|           |           |   'C'

- $charT = \{"A": 1, "B": 1, "C": 1\}$
- $window = \{"B": 1, "D": 1, "A": 1\}$
- $have = 2$
- $need = 3$
- Increment $r$

|   left    |   right   |   s
|   ---     |   ---     |   ---
|   l       |           |   'B'
|           |           |   'D'
|           |           |   'A'
|           |   r       |   'B'
|           |           |   'N'
|           |           |   'C'

- $charT = \{"A": 1, "B": 1, "C": 1\}$
- $window = \{"B": 2, "D": 1, "A": 1\}$
- $have = 2$
- $need = 3$
- Increment $r$

|   left    |   right   |   s
|   ---     |   ---     |   ---
|   l       |           |   'B'
|           |           |   'D'
|           |           |   'A'
|           |           |   'B'
|           |   r       |   'N'
|           |           |   'C'

- $charT = \{"A": 1, "B": 1, "C": 1\}$
- $window = \{"B": 2, "D": 1, "A": 1, "N": 1\}$
- $have = 2$
- $need = 3$
- Increment $r$

|   left    |   right   |   s
|   ---     |   ---     |   ---
|   l       |           |   'B'
|           |           |   'D'
|           |           |   'A'
|           |           |   'B'
|           |           |   'N'
|           |   r       |   'C'

- $charT = \{"A": 1, "B": 1, "C": 1\}$
- $window = \{"B": 2, "D": 1, "A": 1, "N": 1, "C": 1\}$
- $have = 3$
- $need = 3$
- Since $have == need$:
    - $res = [0, 5]$
        - $res = [l, r]$
    - $resLength = 6$
        - $resLength = (r - l + 1)$
- Decrement $window[s[l]]$
- Don't decrement have since we still have one more $"B"$
- Increment $l$

|   left    |   right   |   s
|   ---     |   ---     |   ---
|           |           |   'B'
|   l       |           |   'D'
|           |           |   'A'
|           |           |   'B'
|           |           |   'N'
|           |   r       |   'C'

- $charT = \{"A": 1, "B": 1, "C": 1\}$
- $window = \{"B": 1, "D": 1, "A": 1, "N": 1, "C": 1\}$
- $have = 3$
- $need = 3$
- Since $have == need$:
    - $res = [1, 5]$
        - $res = [l, r]$
    - $resLength = 5$
        - $resLength = (r - l + 1)$
- Decrement $window[s[l]]$
- Increment $l$

|   left    |   right   |   s
|   ---     |   ---     |   ---
|           |           |   'B'
|           |           |   'D'
|   l       |           |   'A'
|           |           |   'B'
|           |           |   'N'
|           |   r       |   'C'

- $charT = \{"A": 1, "B": 1, "C": 1\}$
- $window = \{"B": 1, "A": 1, "N": 1, "C": 1\}$
- $have = 3$
- $need = 3$
- Since $have == need$:
    - $res = [2, 5]$
        - $res = [l, r]$
    - $resLength = 4$
        - $resLength = (r - l + 1)$
- Decrement $window[s[l]]$
    - $window = \{"B": 1, "N": 1, "C": 1\}$
    - $have = 2$
- Increment $l$

Notice our $have$ value is now not equal to our $need$ value. We also cannot increment $r$ since it goes out of bounds. Therefore, we must return the result:

- $s[l: r + 1]$

### Helpful Hints

- How to initialize a counter?
    - $charT = Counter(t)$
- What should I initially set $resLength$ to?
    - $resLength = float("infinity")$
- $res$ should start at $[0, 0]$

### Sliding Window Solution

```python
class Solution:
    def minWindow(self, s: str, t: str) -> str:
        # Is our t string empty?
        if t == "":
            return ""

        # Count characters in t with hash map
        charT = Counter(t)
        # Create an empty hash map for window
        window = {}

        # Initialize have to 0
        have = 0
        # Initialize need to how many characters
        # We need from t
        need = len(charT)

        # Initialize a result array
        res = [0, 0]
        # Initialize a result length
        # float("infinity") to make smaller
        resLength = float("infinity")

        # Set the left pointer to 0
        l = 0
        # Iterate r from 0 to len(nums) - 1
        for r in range(len(s)):
            # Add s[r] to our window hash map
            window[s[r]] = 1 + window.get(s[r], 0)

            # Update have if s[r] is in charT
            # And if exists in the window and
            # charT hash map
            if (s[r] in charT 
                and window[s[r]] == charT[s[r]]):
                have += 1
            
            # Check if have == need
            while have == need:
                # Update our resLength variable
                # and our result array
                if (r - l + 1) < resLength:
                    res = [l, r]
                    resLength = (r - l + 1)
                
                # Remove s[l] from window
                window[s[l]] -= 1

                # Decrement have if s[l] in
                # charT and there are not enough
                # characters in the window
                if (s[l] in charT and
                    window[s[l]] < charT[s[l]]):
                    have -= 1
                
                # Increment l
                l += 1

        l, r = res
        return s[l:r + 1] if resLength != float("infinity") else ""