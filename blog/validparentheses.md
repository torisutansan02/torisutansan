---
title: 'Valid Parentheses'
date: 'March 12, 2025'
---

# Valid Parentheses

You have a string $s$ that contains characters $"("$, $")"$, $"\{"$, $"\}"$, $"["$, $"]"$. To find a valid parentheses, each opening bracket, brace, or parentheses must be closed by their correspondent closing counterpart.

<br />

They must also be closed in the correct order.

- $s = "([{}])"$
- $Output: True$

<br />

An invalid example:

- $s = "([)]"$
- $Output: False$

## How to Solve?

To find the correct pair, think about a hash map. If you find a $"("$, it's key pair is $")"$.

<br />

Using this intution, it is wise to create a hash map where the closing parentheses is the key and it's value is an opening parentheses. 

<br />

You can utilize a stack for the opening parentheses and pop them from the stack.

### Stack

To solve this problem, we can create an empty stack. For this stack, we want to append only opening parentheses. If we find closing parentheses, we can pop from the stack.

<br />

Below, I will declare the stack and hash map. The tables will illustrate the behavior of the stack. Use a $for$ loop and increment $i$ until the end of the string.

- $s = "[({})]"$
- $stack = []$
- $hashMap = \{ ")" : "(", "\}" : "\{", "]" : "[" \}$

|   i (index)   |   string
|   ---         |   ---
|   i           |   $'['$
|               |   $'('$
|               |   $'\{'$
|               |   $'\}'$
|               |   $')'$
|               |   $']'$

|   stack   |
|   ---     |
|   [       |

- Add $'['$ to the stack.

|   i (index)   |   string
|   ---         |   ---
|               |   $'['$
|   i           |   $'('$
|               |   $'\{'$
|               |   $'\}'$
|               |   $')'$
|               |   $']'$

|   stack   |
|   ---     |
|   '['     |
|   '('     |

- Add $'('$ to the stack.

|   i (index)   |   string
|   ---         |   ---
|               |   $'['$
|               |   $'('$
|   i           |   $'\{'$
|               |   $'\}'$
|               |   $')'$
|               |   $']'$

|   stack   |
|   ---     |
|   '['     |
|   '('     |
|   '{'     |

- Add '{' to the stack.

|   i (index)   |   string
|   ---         |   ---
|               |   $'['$
|               |   $'('$
|               |   $'\{'$
|   i           |   $'\}'$
|               |   $')'$
|               |   $']'$

|   stack   |
|   ---     |
|   '['     |
|   '('     |

- Pop '{' from the stack.

|   i (index)   |   string
|   ---         |   ---
|               |   $'['$
|               |   $'('$
|               |   $'\{'$
|               |   $'\}'$
|   i           |   $')'$
|               |   $']'$

|   stack   |
|   ---     |
|   '['     |

- Pop $'('$ from the stack.

|   i (index)   |   string
|   ---         |   ---
|               |   $'['$
|               |   $'('$
|               |   $'\{'$
|               |   $'\}'$
|               |   $')'$
|   i           |   $']'$

|   stack   |
|   ---     |
|   Empty   |

- Pop $'['$ from the stack.
- We have reached the end of the list.

<br />

We want to return $True$ since the stack is empty.

### Helpful Hints

- Stack must be empty to return $True$
- The corresponding parantheses must match the type that is being popped from the stack.
    - Otherwise we return $False$.

### Stack Solution

```python
class Solution:
    def isValid(self, s: str) -> bool:
        # Initialize an empty stack
        stack = []
        # Key : Value = ")" : "("
        # Initialize a hash map
        hashMap = {")" : "(", "}": "{", "]" : "["}

        # Iterate through the list
        # With i from 0 to len(s) - 1
        for i in s:
            # Check if i is a closed parentheses 
            # Or append to the stack
            if i in hashMap:
                # Check if the stack is empty or 
                # If the top of the stack is equal
                # To the key in the hash map
                if stack and stack[-1] == hashMap[i]:
                    stack.pop()
                else:
                    return False
            else:
                # Append open parentheses
                stack.append(i)
        
        # Stack must be empty to be True
        # Else False
        return True if not stack else False