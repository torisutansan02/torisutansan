---
title: 'Diameter of Binary Tree'
date: 'March 18, 2025'
category: 'Trees'
---

# Diameter of Binary Tree

You are given the $root$ of a binary tree and you must return the length of its diameter.

Its diameter is the length of the longest path.

The length of a path is represented by the number of edges in between two nodes.

![Image](/trees/diameterOfBinaryTree/DiameterOfBinaryTree1.png)

## How To Solve?

It's wise to look at the $leaf$ nodes first. From there, you can work upwards to see if it creates the longest path.

This intuition helps lead us to the solution.

### Tree

Notice how you simply looking at the leaf nodes tells us something about its $parent$ node.

The $parent$ node with an $edge$ to a $leaf$ node means that its diameter is at least $1$ up until that point?

If we take a look at the $1st$ example, we can process $4$ and $5$ first. They both have a length of $0$ which is helpful.

Then we look at $2$ and it takes the $max$ of both the lengths of $4$ and $5$ which is $0$ then it increments $1$ to get its length.

Afterwards, we process $3$ which has a length of $0$, and we have only one node left.

We then look at the $root$ and add $(2 + left + right)$ which is $(2 + node(2) + node(3)) = 3$ which is our result.

Try using the example trees above or create ones, including ones where traversing through the $root$ does not give the $max$ path.

- I will include a graphic below to help illustrate this algorithm, which is $postorder$ traversal.
    - $left-right-root$ traversal.

![Image](/trees/diameterOfBinaryTree/DiameterOfBinaryTree2.png)


### Helpful Hints
- Return $-1$ if $not$ root.
    - Node doesn't exist.
- How to get the max if we found a path?
    - $res[0] = max(res[0], 2 + left + right)$

### Tree Solution
```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def diameterOfBinaryTree(self, root: Optional[TreeNode]) -> int:
        # Set the res to an array with 0
        res = [0]

        # Create a dfs function
        def dfs(root):
            # Does a node not exist?
            if not root:
                return -1
            
            # Postorder DFS
            L = dfs(root.left)
            R = dfs(root.right)

            # Get the maximum height
            res[0] = max(res[0], 2 + L + R)

            # Increment the path by 1
            return 1 + max(L, R)

        # Call DFS on root
        dfs(root)

        return res[0]