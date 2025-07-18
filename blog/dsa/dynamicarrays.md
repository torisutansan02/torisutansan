---
title: 'Dynamic Arrays'
date: 'July 17, 2025'
category: 'DSA'
---

# Dynamic Arrays

They **grow** as **elements** are added.
- In **JavaScript** and **Python**, these arrays are the default.
- No need to specify a size.

Some languages provide a **default** size:
- $10$ for Java.

## Insertion

```python
import random

arr = [1]
n = len(arr)
capacity = 1

# Array, Length, Value, Capacity
def pushback(arr, n, capacity):
    val = random.randint(1, 10)
    
    # Length is greater than or equal to the capacity
    if n >= capacity:
        arr, capacity = resize(arr, capacity)
    
    # Insert value into the last element
    arr[n] = val
    n += 1
    return arr, n, capacity
```

![Image](/dsa/dynamicarrays/DynamicArrays1.svg)

## Resize

You can **resize** dynamic arrays.
- Append 0's to **double** the capacity.

Adding **elements** runs in $O(1)$ **amortized** time.
- Average time **taken** per **operation**
- **Resize** for loop takes $O(n)$ runtime.
    - Not performed **every** operation.
    - Performed when **space** is needed.

```python
import random

arr = [1]
n = len(arr)
capacity = 1

# Array, Length, Value, Capacity
def pushback(arr, n, capacity):
    val = random.randint(1, 10)
    
    # Length is greater than or equal to the capacity
    if n >= capacity:
        arr, capacity = resize(arr, capacity)
    
    # Insert value into the last element
    arr[n] = val
    n += 1
    return arr, n, capacity

# Resize to double the array
def resize(arr, capacity):
    for i in range(capacity, capacity * 2):
        arr.append(0)
    
    capacity *= 2

    return arr, capacity

arr, n, capacity = pushback(arr, n, capacity)
print(arr)
print(n)
print(capacity)
```

![Image](/dsa/dynamicarrays/DynamicArrays2.svg)

### Why Double?

What is the **sum** of all operations?
- **Geometric Series**
    - **Divergent**
    - $r \leq -1$
    - $$S_n = \frac{2^{n} - 1}{2 - 1} = 2^{n} - 1$$
    - $\sum_{n=0}^{\infty} (2^n - 1) = \infty$
    - $1 + 2 + 4 + 8 = 15$

What if $n = 1$?
- If the capacity is size $1$, then:
    - Perform $1$ operation to increase capacity.
- If the capacity is size $2$, then:
    - Perform $2$ operations to increase capacity.
- If the capacity is size $4$, then:
    - Perform $4$ operations to increase capacity.

What is the new capacity?
- $8$, but the operations were:
    - $7$ to increase capacity.
- Dominating term is $\geq$ **sum** of all operations.

![Image](/dsa/dynamicarrays/DynamicArrays3.svg)

## Time Complexity

With time complexity, we **ignore** constants:
- **Linear**
    - $O(2n)$ becomes $O(n)$
- **Quadratic**
    - $O(2n^{2})$ becomes $O(n^{2})$
- We concern ourselves with **input** size.

What is **average** case time complexity?
- Average case **runtime** of an algorithm.
    - Denoted as $\Theta(n)$

What is **worst** case time complexity?
- Worst case **runtime** of an algorithm
    - Denoted as $O(n)$

### Operations

- **Read** Element.
    - $O(1)$
- **Insert** Element.
    - $\Theta(1)$
    - $O(n)$
- **Delete** Element.
    - $\Theta(1)$
    - $O(n)$