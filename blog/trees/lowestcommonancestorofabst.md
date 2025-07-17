---
title: 'Lowest Common Ancestor of a BST'
date: 'March 19, 2025'
category: 'Trees'
---

# Lowest Common Ancestor of a BST

You are given a $BST$ $root$ and must return the lowest common ancestor $(LCA)$ of $p$ and $q$, which represent nodes in the tree.

- The $ancestor$ is a node who has both $p$ and $q$ as descendents.

![Image](/trees/lowestCommonAncestorOfABST/LowestCommonAncestorOfABST1.svg)

## How to Solve?

This problem is relatively easy given it's a binary search tree. Notice how the nodes on the $left$ are smaller than the nodes on the $right$, does this hint at something?

### Tree

Well, that intuition basically leads us to the solution.

What if we set a current pointer to the $root$, what should we evaluate?

Is the current pointer $greater$ than the value of both the $p$ and $q$ nodes?

- What do you think we should do?
    - Obviously, we should traverse left. Since the left values are smaller than the right values.

Is the current pointer $less$ than the value of both the $p$ and $q$ nodes?

- Obviously, we should search to the right.

If we picked $p = 2$ and $q = 4$, and the current pointer is at $5$, this means that the $ancestor$ is at least in the $left$ subtree.

So now current pointer is $1$ if we traverse left. Now notice how $p = 2$ and $q = 4$, but the current pointer is less than both.

- What should we do?
    - Traverse right.

The current pointer is at $3$, and $p = 2$ and $q = 4$ now. But notice how $cur > p$ and $cur < q$, what should we do?

- I think we found an ancestor. It's lowest ancestor.

This is the intuition behind the algorithm. Try using the logic to solve the problem yourself. If you need help, I have created an illustration below demonstrating the algorithm.

![Image](/trees/lowestCommonAncestorOfABST/LowestCommonAncestorOfABST2.svg)

### Tree Solution
```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':
        # Set cur to the root node
        cur = root

        # Cur will find it's ancestor
        while cur:
            # Check if cur's value is greater than p and q
            if cur.val > p.val and cur.val > q.val:
                # Search left
                cur = cur.left
            # Check if cur's value is less than p and q
            elif cur.val < p.val and cur.val < q.val:
                # Search right
                cur = cur.right
            # Else we found our lowest common ancestor
            else:
                return cur