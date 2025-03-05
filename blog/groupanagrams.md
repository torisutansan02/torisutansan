---
title: 'Group Anagrams'
date: 'March 4, 2025'
---

# Group Anagrams

You have to group anagram strings together in an array.

## How to Solve?

Think about what consitutes a valid anagram. You want to count the characters in a string and compare if they have the same amount of characters as another string. By doing this, you can add the strings that are anagrams to a list.

- ["abc", "bca"]

### Hash Table

Your first thought should be to map the character count to a list of anagrams. Doing this, we create a list with a key and a value. The tuple represents a key, like if we have a tuple $(1, 1, 1, 0)$ with an a, b, c, and no d. Let's assume we have an input, where:

- $strs =$
    - $["abc", "cba", "bca", "abd"]$.

<br />

Start by making a dictionary for storing the strings. Then, iterate through the strings and keep track of the occurrences of characters. Append strings whose values match a key.

- $Count:$
- $["a": 0, "b": 0, "c": 0, "d": 0]$.
    - $String = "abc"$.
        - $Tuple:$
            - $(1, 1, 1, 0)$.
        - $Value:$
            - $["abc"]$.
    - $String = "cba"$.
        - $Tuple:$
            - $(1, 1, 1, 0)$.
        - $Value:$
            - $["abc", "cba"]$.
    - $String = "bca"$.
        - $Tuple:$
            - $(1, 1, 1, 0)$
        - $Value:$
            - $["abc", "cba", "bca"]$.
    - $String = "abd"$.
        - $Tuples:$
            - $(1, 1, 1, 0)$
            - $(1, 1, 0, 1)$
        - $Values:$
            - $["abc", "cba", "bca"]$
            - $["abd"]$.

<br />

Afterwards, return a list corresponding with the tuple's values.
- $[["abc", "cba", "bca"], ["abd"]]$

### Helpful Hints
- To initialize a default dictionary:
    - $x = defaultdict(list)$
        - Initialize an empty list if a key doesn't exist.
- To initialize a count:
    - $cnt = [0] * 26$
        - Array to count instances of characters.
- To add a character to the count array:
    - $cnt[ord(char) - ord("a")] += 1$
        - Unicode (ASCII) to zero-based index.
- To create a tuple:
    - $tuple(count)$
        - Append the string's value corresponding to a tuple key.

### Hash Table Solution

```python
class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        # Initialize result to a default dictionary
        x = defaultdict(list)

        # Iterate each string in strings
        for string in strs:
            # Initialize count array to 0 for a-z
            cnt = [0] * 26

            # Iterate each character in the string
            for char in string:
                # Increment character count
                cnt[ord(char) - ord("a")] += 1
            
            '''
            In the list, you must:
            append strings to tuple key.
            the tuple key corresponds to
            the count of characters for
            each string.
            '''
            x[tuple(cnt)].append(string)
        
        # Return the tuple values in a list
        # [["abc", "cba", "bca"], ["abd"]]
        return list(x.values())
