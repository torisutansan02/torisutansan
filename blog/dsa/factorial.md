---
title: 'Factorial'
date: 'June 11, 2025'
category: 'DSA'
---

# Factorial

A $recursive$ function is one which calls itself.
- Usually with a different input.

It breaks down a problem into smaller $subproblems$, solving them in reverse order.
- $Recursive$ can be turned into $iterative$ and vice-versa.

## How to Approach?

Break it down into two parts.
- The $Base$ Case.
- The $Recursive$ Step.

Essentially, you are making function calls to traverse to the base case.

Afterwards, you process the sub-problems and return their answers until you reach the top.

This type of problem is referred to as $bottom-up$, where the final return statement is the top of the $one-branch$ tree.

Try solving with $n = 5$ yourself, then refer to the solution below.

![Image](/dsa/factorial/Factorial1.svg)

### Time and Space

The time and space complexity are:
- T = $O(n)$, because n calls are made to the factorial function.
- S = $O(n)$, because a function call stack is used.

### Solution

```python
def factorial(n):
    # Base Case
    if n == 1 or n == 0:
        return 1
    
    # Recursive Step
    return n * factorial(n - 1) # Traverse to base case then process sub-problems
```

