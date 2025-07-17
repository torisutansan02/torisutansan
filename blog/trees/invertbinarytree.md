---
title: 'Invert Binary Tree'
date: 'March 16, 2025'
category: 'Trees'
---

# Invert Binary Tree

You are given the $root$ of a binary tree and you must return its inverted version.

- $root = [1, 2, 3, 4, 5, 6, 7]$
- $Output: [1, 3, 2, 7, 6, 5, 4]$

![Image](/trees/invertBinaryTree/InvertedBinaryTree2.svg)

## How to Solve?

The best way to solve this problem is to simply look at the difference between the two trees.

Notice how the $node$ at the $left$ and the $node$ at the $right$ are swapped?

What does this imply?

### Tree

This implies that we are using a binary search solution.

Simply speaking, all we need to do is swap the root's left and root's right node.

We will recursively call the function on both the root's $right$ and the root's $left$ branches until we reach to the leaf nodes.

What if the root has no nodes?
- Then no need to swap, return $null$ as your result.

Below, I will create a visual diagram of how swapping will work.

![Image](/trees/invertBinaryTree/InvertBinaryTree.svg)

### Helpful Hints
- Make sure to use recursion on the root's left and right nodes.
- How do I swap two variables?
    - $x, y = y, x$

### Tree Solution
```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def invertTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
        # Check if there is no root
        if not root:
            # Then return null
            return None

        # Swap the left and right children
        root.left, root.right = root.right, root.left

        # Use recursion on the root's left and right nodes
        self.invertTree(root.left)
        self.invertTree(root.right)

        # Return the root
        return root