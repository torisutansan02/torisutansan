---
title: 'Binary Tree Right Side View'
date: 'March 30, 2025'
category: 'Trees'
---

# Binary Tree Right Side View

You are given the $root$ of a binary tree, and you have to return $nodes$ that are on the $rightmost$ part of the tree.

- The nodes that if you were standing on the right side of the tree, you can point to.

![Image](/trees/binaryTreeRightSideView/BinaryTreeRightSideView1.svg)

## How To Solve?

Why not just start at the $root$ node then search right, adding the nodes to an $array$ or list.

### Tree

Think of the $root$ node and its depth. $Preorder$ traversal follows a $root-left-right$ pattern, so why not implement the opposite?

- Start at the $root$ node.
- Go to the $right$ node(s).
- Then go to the $left$ node(s).

Start at node 1, whose depth is 0.
- Add 1 to an empty $res$ array. 

Travel to node 3 whose depth is 1.
- Add 3 to $res$
    - Because $len(res) == depth$
    - $1 == 1$

Travel to node 2 whose depth is 1.
- But now $res = [1, 3]$
    - Don't add 2

Travel to node 5 whose depth is 2.
- Add 5 to $res$
    - Because $len(res) == depth$
    - $2 == 2$

Travel to node 4 whose depth is 2.
- But now $res = [1, 3, 5]$
    - Don't add 5

I will include a visual below to demonstrate the DFS algorithm.

![Image](/trees/binaryTreeRightSideView/BinaryTreeRightSideView2.svg)


### Tree Solution

```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def rightSideView(self, root: Optional[TreeNode]) -> List[int]:
        # Initialize a result array
        res = []

        # Reverse Preorder DFS (Node, Right, Left)
        def dfs(root, depth):
            # Base case
            if not root:
                return
            # Append the rightmost nodes only
            if depth == len(res):
                res.append(root.val)
            
            # Reverse Preorder DFS
            # Increment depth each level
            dfs(root.right, depth + 1)
            dfs(root.left, depth + 1)

        dfs(root, 0)

        return res