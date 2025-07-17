---
title: 'Binary Tree Level Order Traversal'
date: 'March 30, 2025'
category: 'Trees'
---

# Binary Tree Level Order Traversal

You are given the $root$ of a binary tree and you must return the level order traversal of its nodes values.

- Left to right, level by level.

![Image](/trees/binaryTreeLevelOrderTraversal/BinaryTreeLevelOrderTraversal1.svg)

## How to Solve?

It is intuitive to understand how to solve this problem. We start by going $left$ to $right$ and $up$ to $down$, like reading.

### Tree

Imagine you are reading a book and the tree is a page in the book.

The top line is going to read $3$. Then the next line is going to read $9, 20$ stemming from $3$.

Imagine $9$ had children $3$ and $5$. Then you read $3, 5, 15, 7$

Breadth first search is really like reading a book.

However, implementing its algorithm is quite difficult. You want to use a $queue$ which appends elements and removes them following a $FIFO$ or first-in-first-out approach.

Below, I will include an illustration demonstrating how to use $BFS$ and a $queue$ to solve this problem.

![Image](/trees/binaryTreeLevelOrderTraversal/BinaryTreeLevelOrderTraversal2.svg)

### Tree Solution

```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        # Create a result array
        res = []

        # Create a queue
        q = deque()
        # Append the root node to the queue
        q.append(root)

        # Iterate through the queue until empty
        while q:
            # Create an array for its level
            level = []
            # What is the length of the queue?
            qLen = len(q)

            # Iterate through the length of the queue
            for i in range(qLen):
                # Pop the level's node
                node = q.popleft()

                # Get the node's children
                if node:
                    # Add the node's value to the current level
                    level.append(node.val)
                    # Append left child to queue
                    q.append(node.left)
                    # Append right child to queue
                    q.append(node.right)

            # Add level to the result array
            if level:
                res.append(level)
        
        # Return the result array
        return res
```