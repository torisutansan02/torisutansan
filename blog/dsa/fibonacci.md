---
title: 'Fibonacci'
date: 'June 11, 2025'
category: 'DSA'
---

# Fibonacci

The $fibonacci$ sequence is a problem that calculates the $nth$ fibonacci number.

It is often denoted as the $(n - 1)$th and $(n - 2)$th number.
- $F(n) = F(n - 1) + F(n - 2)$

## How to Approach?

Start off with the $base$ cases.
- $F(0) = 0$ and $F(1) = 1$

Then do the $recursive$ step.
- $F(n) = F(n - 1) + F(n - 2)$
- This is the $recurrence$ relation.

How is this problem different from factorial?
- It is a two-branch problem as we are using two function calls.
- By the way, most problems are multi-branch.

Try $n = 5$ yourself, then refer to the coding solution.

![Image](/dsa/fibonacci/Fibonacci1.svg)

### Time and Space

Notice how because it is $two-branch$, each $parent$ can have two $children$ each.
- This gives a hint about the time complexity.

$2 + 4 + 8 + ...$

It is the $geometric$ series!
- $T = O(2^n)$
- $M = O(2^n)$

### Solution

```python
def F(n):
    # Base Cases
    if n == 0:
        return 0
    elif n == 0:
        return 1
    
    # Recursive Step
    return F(n - 1) + F(n - 2)
```
