---
title: 'Subtree of Another Tree'
date: 'March 19, 2025'
category: 'Trees'
---

# Subtree of Another Tree

You have two binary trees $root$ and $subroot$, return $True$ if there is a $subtree$ of $root$ that has the same structure and node values as $subRoot$, $False$ otherwise.

![Image](/trees/subtreeOfAnotherTree/SubtreeOfAnotherTree1.png)

## How to Solve?

Use $Postorder$ $DFS$. Notice how every time you search, you have to first see if the node you are looking at in $root$ matches the $root$ node in $subRoot$.

### Tree

Which sounds kind of confusing. But if you remove the nodes $1$ and $3$ from the $1st$ example, doesn't it just become the same tree?

Wouldn't the difference between this problem and the same tree problem be that a $subtree$ of $root$ can be the same tree as $subRoot$ for us?

What if we just created a helper function for the same tree and when called for $root$ and $subRoot$, returns $True$ for our main function if it is the same tree?

- Otherwise, we keep calling to see if there is a potential subtree on either the $left$ or $right$ subtrees of $root$.

- Where the same tree function checks if searching the $subtree$ finds a tree that is the same tree as the $subroot$ tree.

Try using recursion and $Preorder$ $DFS$ to see if you can get the answer. If not, I will include an illustration below to demonstrate the algorithm.

![Image](/trees/subtreeOfAnotherTree/SubtreeOfAnotherTree2.png)

### Helpful Hints

- The same tree helper function is the solution to the same tree problem.
    - Solving Same Tree makes this problem easier.
- Remember you are recursively searching the left or right $subtrees$ to see if they have a tree that is equal to $subRoot$, returning $True$ if that is the case.

### Tree Solution
```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isSubtree(self, root: Optional[TreeNode], subRoot: Optional[TreeNode]) -> bool:
        # An empty subRoot is a subtree of root
        if not subRoot:
            return True
        
        # An empty root is not a subtree of subRoot
        if not root:
            return False
        
        # Check if they are the same tree
        # Return True if they are
        if self.isSameTree(root, subRoot):
            return True
        
        # Preorder DFS
        # Check if left or right subtrees of root
        # Are equal to the subRoot
        return (self.isSubtree(root.left, subRoot) or
                self.isSubtree(root.right, subRoot))


    # Same Tree Helper Function
    def isSameTree(self, root, subRoot):
        # Two empty trees are the same tree
        if not root and not subRoot:
            return True
        
        # If one tree is empty, they are not the same tree
        if not root or not subRoot:
            return False
        
        # If the values at the node are not equal
        # Then return False
        if root.val != subRoot.val:
            return False
        
        # Preorder DFS
        return (self.isSameTree(root.left, subRoot.left) and 
                self.isSameTree(root.right, subRoot.right))