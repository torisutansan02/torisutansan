---
title: 'Valid Anagram'
date: 'March 3, 2025'
category: 'Arrays'
---

# Valid Anagram

You have two strings s and t.

You must return True if they are both anagrams of each other, False otherwise.

## How to Solve?

First, think about an edge case. If you have two strings, where:
- $s = "ana"$
- $t = "an"$

You'll find that the number of a's is 2 for string s and the number of a's for string t is 1.

- Immediately, you want to check if the strings are not equal and return false since they will never be anagrams.

### Sorting

Sorting is not optimal, because the fastest sorting algorithm is merge sort. A merge sort algorithm takes a runtime of:
- $O(nlogn)$. 

However, the space complexity is $O(1)$.
- $s = "anagram"$
- $t = "naagram"$

After sorting:
- $s = "anagram"$
- $t = "anagram"$

You can then return True if both of these strings match each other like the above example or False otherwise.

### Hash Map Solution
A hash map solution requires us to count the number of instances a character appears in a string.
By running through two examples, we can understand how hash maps help us in this problem.

- $s = "anagram"$
- $t = "naagram"$

|   Character   |   Number  |
|   ---         |   ---     |
|   a           |   3       |
|   n           |   1       |
|   g           |   1       |
|   r           |   1       |
|   m           |   1       |

- Note how both of these share the same hash map as shown above, because each character appears the same number of times.

#### Counter Example

What if the strings are not the same, how would the hash maps look like?
- $s = "ana"$
- $t = "rat"$

|   Character   |   Number  |
|   ---         |   ---     |
|   a           |   2       |
|   n           |   1       |

- The above hash map account for s.

|   Character   |   Number  |
|   ---         |   ---     |
|   r           |   1       |
|   a           |   1       |
|   t           |   1       |

- The above hash map accounts for t.

Note how the two hash maps are not the same. We know from looking at the count of the characters from a hash map, these are not going to be anagrams.

#### Helpful Hints
- Remember that the edge case is when two strings are of different lengths. Always return False in this case.
- How do you initialize a hash map in Python?
    - x = {}
- How do you get the count of a hash map?
    - Use a $for$ or $while$ loop starting at index 0 to n - 1.
    - $x[str[i]] = 1 + x.get(str[i], 0)$
        - $x[str[0]]$
            - $x["a"]$
        - $1 + x.get("a", 0)$
            - If there is a value associated with character "a" that exists, increment the value. Otherwise, initialize the value to 0.
    - In short, the for or while loop is ensuring you are counting all the characters in the two strings. Once this is done, you want to return True if the hash maps are equal to each other.
        - So if you have two hash maps x and y:
            - Return True if x == y, else return False.

- Time Complexity: O(n)
- Memory Complexity: O(n)
    - Because we are using two hash maps for both strings.
        - O(n + n) reduces to O(n).

```python
class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        # All anagrams have strings of equal length
        if len(s) != len(t):
            return False

        # Initialize the two hash maps
        charS = {}
        charT = {}
        
        '''
        Because s and t are the same length, 
        you can iterate from 0 to n - 1 
        with either string
        '''
        for i in range(len(s)):
            '''
            Increment the character in the 
            hash map of s by 1.
            Look up its current value or 
            start with 0 if it does not exist.
            '''
            charS[s[i]] = 1 + charS.get(s[i], 0)
            '''
            Exact same process for the 
            character in the hash map of t.
            '''
            charT[t[i]] = 1 + charT.get(t[i], 0)
        
        '''
        Return True if the two tables 
        are identical, False otherwise
        '''
        return charS == charT
