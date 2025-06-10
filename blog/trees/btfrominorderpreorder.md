---
title: 'Binary Tree From Inorder and Preorder Traversal'
date: 'June 9th, 2025'
category: 'Trees'
---

# Binary Tree From Inorder and Preorder Traversal

You are given two $arrays$ for preorder and inorder traversal.

You must return its $binary$ tree.

![Image](/btFromInorderPreorder/BTFromInorderPreorder1.png)

## How to Solve

Notice how the first index in preorder contains the root node.

This gives a hint to solve the problem.

This will help give us the intuition for building the recursive solution to the answer.

### Tree

Set a $middle$ pointer to the first index which is the $root$ node.

Find the root node in the inorder $array$ that is given.

From there, can you see that the entire $left$ subtree is left of the middle?

Can you also see that the entire $right$ subtree is right of the middle?

Below, I will include a diagram that builds the tree.
- Hint: Use DFS.

![Image](/btFromInorderPreorder/BTFromInorderPreorder2.png)

### Helpful Hints

- Remember to validate the tree with preorder and inorder traversal.
- The problem uses DFS.
    - Preorder DFS (Root, Left, Right).

### Tree Solution
```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def buildTree(self, preorder: List[int], inorder: List[int]) -> Optional[TreeNode]:
        # Preorder or inorder is empty
        if not preorder or not inorder:
            return None
        
        # Assign the root to the 1st index of preorder
        root = TreeNode(preorder[0])
        # Find the middle index of the root in inorder
        mid = inorder.index(preorder[0])
        # Left Preorder, Left Inorder
        root.left = self.buildTree(preorder[1:mid+1], inorder[:mid])
        # Right Preorder, Right Inorder
        root.right = self.buildTree(preorder[mid+1:], inorder[mid+1:])

        return root
```