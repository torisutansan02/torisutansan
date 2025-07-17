---
title: 'Static Arrays'
date: 'July 16, 2025'
category: 'DSA'
---

# Static Arrays

Arrays must have an allocated size and type.
- Particularly true for statically typed languages.
    - Not true for dynamically typed languages.
- Size of the array cannot change.

## Array Read

You can read an array from its $index$ which represents its position:
- Denoted as $i$
- $i = 0$
    - The $0-th$ index or first index.

```python
# Array with 3 values
arr = [1, 2, 3]

# Index 0 (first index)
i = 0
print(arr[i])
```

![Image](/dsa/staticarrays/StaticArrays1.svg)

Accessing an array index's value is instant.
- It is mapped to an address in memory.
- We refer to this as $O(1)$ time complexity.

## Traversal

It is possible to read through all values in an array.
- Do this with either a $for$ or $while$ loop.

```python
arr = [1, 2, 3]

# For Loop
for i in range(len(arr)):
    print(arr[i])

# While Loop
i = 0
while i < len(arr):
    print(arr[i])
    i += 1
```

Traversal through an array requires us to access every index.
- The index is size $n$ which is its length.
    - The time complexity, therefore, is $O(n)$

What is $O(n)$ time complexity?
- Linear growth.
    - $n$ is variable in length.

## Deletion

It is also possible to $delete$ from an array.
- With caveats:
    - Overwriting ($soft$ $detete$).

### Deleting from the End

In $statically$ types languages:
- Arrays are filled with 0s.
    - Or $-1$, $null$
    - Denotes an empty index.

We can also decrease the length by 1.

```python
# Array and its length
arr = [7, 8, 9]
n = len(arr)

def removeLast(arr, n):
    # Array is at least size 1
    if n > 0:
        # Overwrite and decrement length
        arr[n - 1] = 0
        n -= 1
    
    return arr

print(removeLast(arr, n))
```

![Image](/dsa/staticarrays/StaticArrays2.svg)

### Deleting at Index

Requires us to follow the contiguous structure of an array.
- Declare an index $i$
- Start from $i + 1$
- Shift elements $1$ position to the $left$
- Mark last $index$ as $0$
    - Decrement $length$

```python
# Array, index, and length
arr = [7, 8, 9]
i = 1
n = len(arr)

def removeMid(arr, i, n):
    for index in range(i + 1, n):
        # Shift previous index with current index
        arr[index - 1] = arr[index]
    
    # Set last element to 0
    arr[n - 1] = 0
    # Decrease length
    n -= 1

    return arr

print(removeMid(arr, i, n))
```

![Image](/dsa/staticarrays/StaticArrays3.svg)

## Insertion

Requires us to $allocate$ more space to the array.
- Increase the $capacity$ of the array.

### Insertion at End

The next open position which will be at the $length$
- The length is noted by $n$

The length is the number of elements in the array:
- The capacity is the $max$ number of elements an array can hold.

```python
import random

# Array, length, value to be inserted, capacity
arr = [7, 8, 9]
n = 3
val = random.randint(1, 10)
capacity = 3

def insertLast(arr, n, val, capacity):
    # The length must be less than the capacity.
    if n < capacity:
        arr[n] = val
    else:
        # Double the capacity capacity
        print("Increasing Capacity")
        for i in range(capacity, capacity * 2):
            arr.append(0)
        capacity *= 2
        arr[n] = val
    
    # Increment length
    n += 1
    return arr, n, capacity

arr, n, capacity = insertLast(arr, n, val, capacity)
print(arr)

val = random.randint(1, 10)
arr, n, capacity = insertLast(arr, n, val, capacity)
print(arr)
```

![Image](/dsa/staticarrays/StaticArrays4.svg)

### Inserting at Index

We need to shift all values from the right of index $i$ to:
- Insert the value at the index in the array.

```python
import random

# Array, Index, Length, value to be inserted
arr = [7, 8, 9]
i = 1
n = 3
val = random.randint(1, 10)

def insertMid(arr, i, n, val):
    # Shift elements to the right of i
    for index in range(n - 1, i - 1, -1):
        arr[index + 1] = arr[index]

    # Insert value at index
    arr[i] = val

    return arr

print(insertMid(arr, i, n, val))
```

![Image](/dsa/staticarrays/StaticArrays5.svg)

## Time Complexity

The time complexity for the algorithms:
- Read an element:
    - $O(1)$
- Traversal:
    - $O(n)$
- Insertion / Deletion at end:
    - $O(1)$
- Insertion / Deletion in middle:
    - $O(n)$