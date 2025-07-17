---
title: 'Balanced Binary Tree'
date: 'March 18, 2025'
category: 'Trees'
---

# Balanced Binary Tree

You are given a binary tree $root$ and you must determine if it is height-balanced or not. An empty tree is height-balanced.

![Image](/trees/balancedBinaryTree/BalancedBinaryTree1.svg)

## How To Solve?

Look at the $leaf$ nodes and then look at their $parent$ node.

### Tree

You want to proceed to look at the $leftmost$ nodes.

In the $first$ example, notice how the parent node of $4$ and $5$ is $2$ whose height totals to $1$ here.

The node $3$ obviously has a height of $0$ since it has no $child$ or $leaf$ nodes. The children of $1$ is $2$ and $3$, where the difference in heights between the 2 nodes is $1 - 0 = 1$ for $1$'s node.

However, you must take the absolute value of the difference because $4$ and $5$ can be $3$'s children.

- This is because a balanced tree is a binary tree where the $depth$ or $height$ of two $subtrees$ does not differ by more than $1$, as was the case.

Try to solve the question intuitively. Start from the $leftmost$ leaf node. Find the heights of the $parent$ nodes up until the $root$ node. Then, determine if it is a balanced tree.

- If the $abs(L - R) > 1$, it is not balanced.

To verify your examples, use the visual I will add below to help:

![Image](/trees/balancedBinaryTree/BalancedBinaryTree2.svg)

### Helpful Hints
- Use $postorder$ $DFS$.
    - left-right-node traversal.
- Use a pair:
    - $[Bool, Height]$

### Tree Solution
```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isBalanced(self, root: Optional[TreeNode]) -> bool:
        # Postorder DFS
        def dfs(root):
            # Check if the node is null
            if not root:
                return [True, 0]
            
            # Postorder DFS
            L = dfs(root.left)
            R = dfs(root.right)

            # Is it balanced?
            # Both L and R are balanced
            # Height of subtrees <= 1
            B = L[0] and R[0] and (abs(L[1] - R[1]) <= 1)
            # What is the height of the current node?
            H = 1 + max(L[1], R[1])

            # Return the result
            return [B, H]
        
        # Return the DFS function call
        # But only return the boolean value
        return dfs(root)[0]