---
title: 'Maximum Depth of Binary Tree'
date: 'March 18, 2025'
category: 'Trees'
---

# Maximum Depth of Binary Tree

You are given the $root$ of a binary tree and must return its maximum depth.

The maximum depth is defined by the number of nodes along its longest path from the $root$ node to the furthest $leaf$ node.

![Image](/maximumDepthOfBinaryTree/MaximumDepthOfBinaryTree1.png)

## How to Solve?

By simply looking at the tree, your intuition should be to count the number of nodes that has the longest path.

But how should we search the entire tree and find the path that has the maximum path?

### Tree

The way you can do this is by using depth first search $(dfs)$ to go along the path.

DFS works by searching from the $root$ node to the leftmost $leaf$ node.

- When it finds the leftmost $leaf$ node, it goes to the $right$ node. And checks if it has a $left$ child. Then goes $left$.

If prioritizes traveling $left$ and then if a $left$ child is not found, it then travels $right$.

Try using the above examples to $simulate$ the $DFS$ algorithm. For each level you add, increment $1$ to its depth.

- If you need assistance on utilizing $DFS$, I have created a visual below to demonstrate the algorithm.

- Ensure you store the maximum depth with $res$ and a $max$ function.

![Image](/maximumDepthOfBinaryTree/MaximumDepthOfBinaryTree2.png)

### Helpful Hints
-$res = 1 + max(left, right)$
    - Use recursion on the left and right nodes.
- What do you return if there is no nodes?

### Tree Solution
```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def maxDepth(self, root: Optional[TreeNode]) -> int:
        # Check if there is a tree
        if not root:
            return 0

        # Res should increment with DFS for every
        # Branch level and be the value of the path
        # That is the longest
        res = (1 + max(self.maxDepth(root.left), self.maxDepth(root.right)))
        
        # Return the longest path
        return res