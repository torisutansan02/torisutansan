---
title: 'Evaluate Reverse Polish Notation'
date: 'March 12, 2025'
---

# Evaluate Reverse Polish Notation

You have an array of strings $tokens$ with numbers and arithmetic expressions.

<br />

Evaluate the expression using Reverse Polish Notation.

- Operators: $"+"$, $"-"$, $"*"$, $"/"$.
- Evaluate 2 previous integers.
    - And use their operand.
- Division truncates towards zero.
- No division by zero.

<br />

Examples:
- $Input: ["2", "1", "+", "3", "*"]$
    - $Output: 9$
    - $((2 + 1) * 3)$
    - Infix notation.
- $Input: ["4", "13", "5", "/", "+"]$
    - $Output: 6$
    - $(4 + (13 / 5))$
    - Infix notation.

## How to Solve?

Notice how we are going to need two previous values to use an operand. The $+$ operand requires us to use $2$ and then $1$ in that order.

- $["2", "1", "+", "3", "*"]$
- $2 + 1 = 3$.

<br />

Then $3$ becomes our new $first$ value and then our $second$ value is $3$. A good intuition is to think of it like a new array:

- $["3", "3", "*"]$
- $3 * 3 = 9$.

<br />

Notice how we follow this notation to get our result. We added the value $"3"$ to our array from $2 + 1$ and multiplied the existing $3$ to get a result of $9$.

<br />

Which data structure can we utilize to get this result?

### Stack

To solve this problem, we can create an empty stack. We want to add integers to this stack. But more specifically, we care about the two previous integers before an operation.

<br />

Why not add the operator?
- Because we can use an arithmetic expression or operand of the two previous values to get the next value.
- The next value will be the previous value of a value after it.
- Or the next value is going to be the result.

<br />

For example, follow this intution for the stack:
- $[2, 1, 3]$
- $2 + 1 = 3$
- $[3, 3]$
- $3 * 3 = 9$
    - Which is our result.

<br/>

Let's create two variables $a$ and $b$ where $a$ is the first previous value in our $stack$ and $b$ is the second previous value.

<br />

Below, I will simulate the behavior of iterating through $tokens$ while utilizing a $stack$ to return the result.

- $stack = []$
- $b, a = 0, 0$
    - Note how we pop from the end of a stack. This is why $b$ is the first popped value, and $a$ is the second popped value.

|   index (i)   |   tokens
|   ---         |   ---
|   $i$         |   $"2"$
|               |   $"1"$
|               |   $"+"$
|               |   $"3"$
|               |   $"*"$

|   stack   |
|   ---     |
|   2       |

- Add $2$ to the stack

|   index (i)   |   tokens
|   ---         |   ---
|               |   $"2"$
|   $i$         |   $"1"$
|               |   $"+"$
|               |   $"3"$
|               |   $"*"$

|   stack   |
|   ---     |
|   2       |
|   1       |

- Add $1$ to the stack

|   index (i)   |   tokens
|   ---         |   ---
|               |   $"2"$
|               |   $"1"$
|   $i$         |   $"+"$
|               |   $"3"$
|               |   $"*"$

|   stack   |
|   ---     |
|   3       |

- Note how if the token at the $i$ index is $"+-*/"$, we want to do the operation. In this case, it's addition.
- Set $b$ and $a$ to the popped values of the stack.
- $b + a$
    - $2 + 1 = 3$
- We add $3$ to the stack.

|   index (i)   |   tokens
|   ---         |   ---
|               |   $"2"$
|               |   $"1"$
|               |   $"+"$
|   $i$         |   $"3"$
|               |   $"*"$

|   stack   |
|   ---     |
|   3       |
|   3       |

- Add $3$ to the stack.

|   index (i)   |   tokens
|   ---         |   ---
|               |   $"2"$
|               |   $"1"$
|               |   $"+"$
|               |   $"3"$
|   $i$         |   $"*"$

|   stack   |
|   ---     |
|   9       |

- Note again how if the token at the $i$ index is $"+-*/"$, we want to do the operation. In this case, it's multiplication.
- Set $b$ and $a$ to the popped values of the stack.
- $b * a$
    - $3 * 3 = 9$
- We add $9$ to the stack.

<br />

Notice how $i$ reached the end of the list. We cannot iterate anymore and therefore the remaining value in the stack is our result.

- Return the value in the stack.

### Helpful Hints
- How to append to a stack?
    - $stack.append(i)$
- How to static cast?
    - Convert string to integer.
    - $int(i)$
- How to pop from a stack?
    - $stack.pop()$

### Stack Solution

```python
class Solution:
    def evalRPN(self, tokens: List[str]) -> int:
        # Initialize an empty stack
        stack = []

        # Iterate i from 0 to len(tokens) - 1
        for i in tokens:
            # Is i not an operand?
            if i not in "+-*/":
                # String to integer
                stack.append(int(i))
                # Continue to next iteration
                continue
            
            # Set b to stack[-1] [2, 1(b)]
            # Set a to stack[-2] [2(a), 1]
            b, a = stack.pop(), stack.pop()
            
            # Append the two previous values
            # By applying their operation
            stack.append(
                (a + b) if i == "+" else
                (a - b) if i == "-" else
                (a * b) if i == "*" else
                (int(a / b)) # Truncate towards zero
            )
        
        # Return remaining value
        return stack[0]