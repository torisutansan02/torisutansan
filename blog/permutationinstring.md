---
title: 'Permutation in String'
date: 'March 12, 2025'
category: 'Sliding Window'
---

# Permutation in String

The wording of this question is quite awful. While it is true that it $s2$ needs to contain a permutation of $s1$, it would better be described as a substring that $s2$ contains a $substring$ that is an $anagram$ of $s1$.

You are given two string $s1$ and $s2$. You must return true if $s2$ contains a $substring$ that is an $anagram$ of $s1$.

- $s1 = "ab"$
- $s2 = "eidbao"$
    - True, because $s2$ contains $"ba"$ which is an anagram of $"ab"$
    - An anagram contains the same characters with the same count.

## How to Solve?

The size of $s1$ is the most important factor in solving this problem. If you have:

- $s1 = "ab"$

What you want to evaluate is two consecutive characters in the string $s2$. If it was size 3, then 3 characters. What kind of algorithm does this suggest we should implement?

### Sliding Window

When creating our sliding window, we must consider that the length of $s1$ is always going to be either equal to or less than the length of $s2$. The size of $s1$ is going to the be size of our window.

If $s1$ has a size of 2, we care about evaluating two characters in $s2$.

What if $s2$ is smaller than $s1$?

- Then it is impossible for $s2$ to have a substring that is an anagram of $s1$. Immediately return false.

What is $s1$ and $s2$ are the same size?

- Evaluate if the two strings are anagrams and return $True$ if that is the case. Or return true if the two hash maps already match.

Otherwise, we would go about our sliding window algorithm. The most intuitive approach is to use two hash maps for storing the counts of $s1$ and $s2$ that are the size of $s1$. We can do this with the code below:

- $s1Char = Counter(s1)$
    - Count all characters in $s1$
- $s2Char = Count(s2[:len(s1)])$
    - Count the first characters of $s2$ up until the length of $s1$

Let's assign a left pointer to the beginning of the list and a right pointer to the the length of $s1$. This creates a window of length $s1 + 1$.

- $l = 0$
    - Decrement $s[l]$ from the map.
- $r = len(s1)$
    - Add $s[r]$ to the map.

The tables below demonstrate the behavior of the sliding window. We want to increment the left and right pointer at the same time. 

We also want to add the character at the right pointer and remove the character at the left pointer prior to incrementing.

- $s1 = "ab"$
- $s2 = "eidbao"$
- $s1Char = \{"a": 1, "b": 1\}$
- $s2Char = \{"e": 1, "i": 1\}$
    - Before first iteration.

|   left    |   right   |   s2
|   ---     |   ---     |   ---
|   l       |           |   e
|           |           |   i
|           |    r      |   d
|           |           |   b
|           |           |   a
|           |           |   o

- $s1Char = \{"a": 1, "b": 1\}$
- $s2Char = \{"i": 1, "d": 1\}$
    - Decrement $s[l]$ from the hash map.
    - Add $s[r]$ to the hash map.
- Increment $l$ and $r$.

|   left    |   right   |   s2
|   ---     |   ---     |   ---
|           |           |   e
|   l       |           |   i
|           |           |   d
|           |    r      |   b
|           |           |   a
|           |           |   o

- $s1Char = \{"a": 1, "b": 1\}$
- $s2Char = \{"d": 1, "b": 1\}$
    - Decrement $s[l]$ from the hash map.
    - Add $s[r]$ to the hash map.
- Increment $l$ and $r$.

|   left    |   right   |   s2
|   ---     |   ---     |   ---
|           |           |   e
|           |           |   i
|   l       |           |   d
|           |           |   b
|           |    r      |   a
|           |           |   o

- $s1Char = \{"a": 1, "b": 1\}$
- $s2Char = \{"b": 1, "a": 1\}$
    - Decrement $s[l]$ from the hash map.
    - Add $s[r]$ to the hash map.
- Increment $l$ and $r$.

Technically, our hash maps are equal. We can preemptively return if $s1Char == s2Char$, but I'll continue the table for the sake of the algorithm.

|   left    |   right   |   s2
|   ---     |   ---     |   ---
|           |           |   e
|           |           |   i
|           |           |   d
|   l       |           |   b
|           |           |   a
|           |    r      |   o

- $s1Char = \{"a": 1, "b": 1\}$
- $s2Char = \{"a": 1, "o": 1\}$
    - Decrement $s[l]$ from the hash map.
    - Add $s[r]$ to the hash map.
- No need to increment $l$ or $r$ anymore.
    - $r$ will go out of bounds.

If we have found that $s1Char$ and $s2Char$ do not have the same hash map, there was no substring in $s2$ that contains an anagram of $s1$. You should return $False$.

### Helpful Hints

- How to create a Counter?
    - $char = Counter(s1)$
    - Sets characters as keys and their count as values in a hash map.
- How to increment or decrement a counter?
    - $char[s1[i]] += 1$
    - $char[s1[i]] -= 1$

### Sliding Window Solution

```python
class Solution:
    def checkInclusion(self, s1: str, s2: str) -> bool:
        # Check if s2's length is smaller than s1
        if len(s2) < len(s1):
            return False

        # Create a hash map for s1 and s2
        # Hash maps are the size of s1
        # And get chars of s2 until size == s1
        s1Char = Counter(s1)
        s2Char = Counter(s2[:len(s1)])

        # Do the hash maps already match?
        if s1Char == s2Char:
            return True
        
        # Assign a left pointer
        l = 0

        # Sliding window starts at 0 to len(s1)
        # r = len(s1)
        for r in range(len(s1), len(s2)):
            # Decrement s[l]'s character
            s2Char[s2[l]] -= 1
            # Increment s[r]'s character
            s2Char[s2[r]] += 1

            # Does s2Char == s1Char now?
            if s2Char == s1Char:
                return True
            
            # Increment the left pointer
            l += 1
        
        return False