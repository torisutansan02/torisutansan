---
title: 'Longest Substring Without Repeating Characters'
date: 'March 11, 2025'
category: 'Sliding Window'
---

# Longest Substring Without Repeating Characters

Assume you have a string $s$ where you need to return a substring without duplicate characters.

- $s = "pwwkew"$
    - $Output: 3$
        - $"wke"$ and $"kew"$ are the longest strings.
        - You cannot return $"pwke"$ because there is a duplicate $"w"$ which means it is not a substring. Rather, it is a subsequence.

## How to Solve?

Notice how a repeating character immediately makes it impossible to extend the string.

With the string $s = "pwwkew"$, we have to eliminate the $"pw"$ before calculating $"wke"$. 

What if we had some method of removing characters up until that point?

### Sliding Window

We can create a sliding window where we set the left and right pointers to the beginning of a string. We know that one character has a length of 1.

How do we find out if a character is repeating? You can do this by creating a hash set.

|   left    |   right   |   string
|   ----    |   ---     |   ---
|   l       |   r       |   p
|           |           |   w
|           |           |   w
|           |           |   k
|           |           |   e
|           |           |   w

- $maxLength = 1$
    - $(r - l + 1) = 2$
- $charSet = \{"p"\}$
- Increment $r$ since $"p"$ was not previously in $charSet$

|   left    |   right   |   string
|   ----    |   ---     |   ---
|   l       |           |   p
|           |   r       |   w
|           |           |   w
|           |           |   k
|           |           |   e
|           |           |   w

- $maxLength = 2$
    - $(r - l + 1) = 1$
- $charSet = \{"p", "w"\}$
- Increment $r$ since $"w"$ was not previously in $charSet$

|   left    |   right   |   string
|   ----    |   ---     |   ---
|   l       |           |   p
|           |           |   w
|           |   r       |   w
|           |           |   k
|           |           |   e
|           |           |   w

- We have a duplicate $"w"$. We should not update the max length nor add a second $"w"$ to the hash set.
- Instead, let's remove characters at $s[l]$ and $increment$ the $l$ pointer until the duplicate character is gone.
- $charSet = \{"w"\}$
    - Popped the $"p"$ in $charSet$ from $s[l]$

|   left    |   right   |   string
|   ----    |   ---     |   ---
|           |           |   p
|   l       |           |   w
|           |   r       |   w
|           |           |   k
|           |           |   e
|           |           |   w

- $charSet = \{\}$
    - Popped the $"w"$ in $charSet$ from $s[l]$
- Increment $l$

|   left    |   right   |   string
|   ----    |   ---     |   ---
|           |           |   p
|           |           |   w
|   l       |   r       |   w
|           |           |   k
|           |           |   e
|           |           |   w

- $maxLength = 2$.
    - $(r - l + 1) = 1$
    - Which is less than the previous max length.
- $charSet = \{"w"\}$
    - Add a character since $s[r]$ does not exist in the hash set.
- Increment $r$

|   left    |   right   |   string
|   ----    |   ---     |   ---
|           |           |   p
|           |           |   w
|   l       |           |   w
|           |   r       |   k
|           |           |   e
|           |           |   w

- $maxLength = 2$.
    - $(r - l + 1) = 2$
    - Which is the same as the previous max length.
- $charSet = \{"w", "k"\}$
    - Add a character since $s[r]$ does not exist in the hash set.
- Increment $r$

|   left    |   right   |   string
|   ----    |   ---     |   ---
|           |           |   p
|           |           |   w
|   l       |           |   w
|           |           |   k
|           |   r       |   e
|           |           |   w

- $maxLength = 3$.
    - $(r - l + 1) = 3$
    - New max length > old max length.
- $charSet = \{"w", "k", "e"\}$
    - Add a character since $s[r]$ does not exist in the hash set.
- Increment $r$

|   left    |   right   |   string
|   ----    |   ---     |   ---
|           |           |   p
|           |           |   w
|   l       |           |   w
|           |           |   k
|           |           |   e
|           |   r       |   w

- Don't change max length because $s[r]$ is in $charSet$
- You must remove $s[l]$ since $"w"$ is in $charSet$ and increment $l$.
- $charSet = \{"w", "k", "e"\}$

|   left    |   right   |   string
|   ----    |   ---     |   ---
|           |           |   p
|           |           |   w
|           |           |   w
|   l       |           |   k
|           |           |   e
|           |   r       |   w

- $charSet = \{"k", "e", "w"\}$
    - Note how we removed the $"w"$ in the beginning of the set $before$ adding the new $"w"$. We also incremented $l$ and added $s[r]$ but only after removing $s[l]$ from $charSet$ first.
- $maxLength = 3$
    - $(r - l + 1) = 3$
    - Same max length as before.
- Don't iterate anymore since $r$ is at the end of the list.

Simply, return the max length.

### Helpful Hints
- Create a hash set.
    - $charSet = set()$
- How to remove from a set?
    - $remove()$
- How to add to a set?
    - $add()$
- How to get the max?
    - $max(x, y)$

### Sliding Window Solution
```python
class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        # Set a left pointer to 0
        l = 0
        # Set the current max length to 0
        maxLength = 0
        # Create a character set
        charSet = set()

        # Iterate r from 0 to the end of the list
        for r in range(len(s)):
            # Remove s[l] from charSet
            # Until there are no more duplicates
            # Of the value of s[r]
            while s[r] in charSet:
                charSet.remove(s[l])
                # Increment left pointer to remove
                # Next value in charSet
                l += 1

            # Get the max length of the substring
            # While s[r] is not in charSet
            maxLength = max(maxLength, (r - l + 1))

            # Add s[r] to the charSet
            charSet.add(s[r])
        
        return maxLength