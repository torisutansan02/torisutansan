---
title: 'Valid Palindrome'
date: 'March 6, 2025'
category: 'Two Pointers'
---

# Valid Palindrome

A valid palindrome is a string where after converting all uppercase and lowercase letters into lowercase, you can read it the same from left to right as right to left. Ignore all non-letters like $","$. You want to return True if it is a valid palindrome and False otherwise.

- s = "race car"
    - $res = "racecar"$
    - $True$
- s = "dilly dally"
    - $res = "dillydally"$
    - $False$

## How to Solve?

You want to compare the characters on the left and the right. If you notice that the character on the left matches the character on the right, keep iterating until you reach the middle.

- Keep in mind to ignore any characters that are not a letter. 

### Two Pointers

Let's assign a left and right pointer where the left pointer starts at the beginning of the list. The right pointer is going to start at the end of the list. We are going to use the string $"race car"$ as our example string.

- s = "rac ecar"
    - Note how I purposefully altered this string to show the case where we have a character that is a space.

Create a table to represent the left and right pointer's position.

- $l = 0$
- $r = len(s) - 1$

|   left    |   right   |   s   |
|   ---     |   ---     |   --- |
|   l       |           |   'r' |
|           |           |   'a' |
|           |           |   'c' |
|           |           |   ' ' |
|           |           |   'e' |
|           |           |   'c' |
|           |           |   'a' |
|           |   r       |   'r' |

- $s[l] == s[r]$, continue

|   left    |   right   |   s   |
|   ---     |   ---     |   --- |
|           |           |   'r' |
|   l       |           |   'a' |
|           |           |   'c' |
|           |           |   ' ' |
|           |           |   'e' |
|           |           |   'c' |
|           |   r       |   'a' |
|           |           |   'r' |

- $s[l] == s[r]$, continue

|   left    |   right   |   s   |
|   ---     |   ---     |   --- |
|           |           |   'r' |
|           |           |   'a' |
|   l       |           |   'c' |
|           |           |   ' ' |
|           |           |   'e' |
|           |   r       |   'c' |
|           |           |   'a' |
|           |           |   'r' |

- $s[l] == s[r]$, continue

|   left    |   right   |   s   |
|   ---     |   ---     |   --- |
|           |           |   'r' |
|           |           |   'a' |
|           |           |   'c' |
|   l       |           |   ' ' |
|           |   r       |   'e' |
|           |           |   'c' |
|           |           |   'a' |
|           |           |   'r' |

- Notice how $s[l]$ is a blank space. Because of this, we should not consider where it $equals$ $s[r]$. So, we can simply increment the left pointer and move on to the next iteration. This would also be true for the right pointer if it is not a letter. Do not increment or decrement the other pointer that contains a character.

|   left    |   right   |   s   |
|   ---     |   ---     |   --- |
|           |           |   'r' |
|           |           |   'a' |
|           |           |   'c' |
|           |           |   ' ' |
|   l       |   r       |   'e' |
|           |           |   'c' |
|           |           |   'a' |
|           |           |   'r' |

- Notice how $s[l] == s[r]$ and the pointers are the same value where $l == r$. At this point, you should end your while loop and return True since we've found that this string is a palindrome.
    - Try creating your own example where you have to decrement the right pointer, but not the left pointer.

### Helpful Hints

- How do you determine if a character is alphanumeric?
    - $isalnum()$
- How do you convert an uppercase letter to a lowercase letter?
    - $lower()$

### Two Pointers Solution

```python
class Solution:
    def isPalindrome(self, s: str) -> bool:
        # Initialize left pointer to index 0
        l = 0
        # Initialize right point to last index.
        r = len(s) - 1

        """
        You want to iterate until the left index
        passes the right index. The last iteration
        should be when the two meet.
        """
        while l <= r:
            # Check if s[l] is alphanumeric
            if not s[l].isalnum():
                l += 1
            # Check if s[r] is alphanumeric
            elif not s[r].isalnum():
                r -= 1
            # s[l] == s[r]
            elif s[l].lower() != s[r].lower():
                return False
            # Increment l, decrement r
            else:
                l += 1
                r -= 1
        
        # We found a valid palindrome
        return True