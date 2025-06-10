---
title: 'Same Tree'
date: 'March 19, 2025'
category: 'Trees'
---

# Same Tree

You are given two binary trees $p$ and $q$ and must return $True$ if they are the same tree.

All nodes have the same value, and they are structurally identical.

![Image](/sameTree/SameTree1.png)

## How to Solve?

Take a look at the three examples.

The first examples is true because the $root$ nodes of both trees have nodes which have a value of $2$ and $3$ for their $left$ and $right$ branches respectively.

The second example is not true because the $1st$ tree has a $left$ branch whose value is $2$ and the $2nd$ tree has a $right$ branch whose value is $3$ for its node.

The third example is not true because the $1st$ tree has $left$ and $right$ branches with values $2$ and $3$ respectively. The $2nd$ tree has $left$ and $right$ branches with values $2$ and $4$ respectively.

### Tree

Can an empty tree be the same tree as an empty tree?

- Yes.

Can either be an empty tree and the other one not be an empty tree?

- No.

What algorithm should I use to solve this problem?

- $Preorder$ $DFS$.

Why?

- Look at the root of both trees? Do their values match?
- Then look at the $left$ subtree.
    - Keeping traversing through the $left$ subtree.
- Then go backwards and look at the $right$ subtree.
    - Keep traversing through the $right$ subtree.

Try to find out the solution through this algorithm. I will include a visual below to help navigate to figuring out if a tree is the same.

![Image](/sameTree/SameTree2.png)

### Helpful Hints

- Two empty trees are the same tree.
- One empty tree means they are not the same tree.
- Check if the value is the same at the node.
    - If not, return False

### Tree Solution
```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isSameTree(self, p: Optional[TreeNode], q: Optional[TreeNode]) -> bool:
        # Are both not trees?
        if not p and not q:
            return True
        
        # Is one not a tree?
        if not p or not q:
            return False

        # Are the values at the node the same?
        if p.val != q.val:
            return False

        # Preorder DFS
        return (self.isSameTree(p.left, q.left) and self.isSameTree(p.right, q.right))