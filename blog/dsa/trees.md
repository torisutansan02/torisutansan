---
title: 'Trees'
date: 'April 12, 2025'
category: 'DSA'
---

# Trees

Below, I will include the most common operations and the implementation of binary trees and binary search trees (BST).

[Trees](https://github.com/torisutansan02/Implementing-Data-Structures-and-Algorithms/tree/main/Trees)

## Visual Cheat Sheet

The cheat sheet will be based on four levels of difficulty.

- Levels of Difficulty:
    - (1) Traversals. DFS and BFS.
        - Fundamental search algorithms.
    - (2) Binary Tree Properties.
        - Fundamental properties of binary trees.
    - (3) Binary Search Trees and Properties.
        - Fundamental properties of BSTs.
    - (4) Advanced Tree Operations.
        - Necessary to solve $most$ LeetCode problems.

### Traversals

Below are the operations for basic tree traversals.

Some are easier than others.

- Order to learn:
    - Depth First Search (DFS).
        - Inorder.
        - Preorder.
        - Postorder.
    - Breadth First Search (BFS).
        - Level Order.
        - Zig Zag Level Order.

Zig Zag level order is particularly difficult.

Pay attention to each level and use a boolean like $LTR$ or $RTL$ for $left-to-right$ or $right-to-left$ traversal.

![Traversals](/dsa/trees/Traversals.png)

- inorder() implementation.

```python
def inorder(self, root):
    if not root:
        return []
    
    return self.inorder(root.left) + [root.val] + self.inorder(root.right)
```

- preorder() implementation.

```python
def preorder(self, root):
    if not root:
        return []

    return [root.val] + self.preorder(root.left) + self.preorder(root.right)
```

- postorder() implementation.

```python
def postorder(self, root):
    if not root:
        return []
    
    return self.postorder(root.left) + self.postorder(root.right) + [root.val]
```

- bfs() implementation.

```python
def bfs(self, root):
    if not root:
        return []

    res = []
    q = deque(root)

    while queue:
        node = q.popleft()
        res.append(node.val)

        if node.left:
            q.append(node.left)
        if node.right:
            q.append(node.right)
    
    return res
```

- zigzag() implementation.

```python
def zigzag(self, root):
    if not root:
        return []

    q = deque(root)
    res = []

    LTR = True
    RTL = False

    while queue:
        level = deque()
        
        for i in range(len(q)):
            node = q.popleft()

            if LTR:
                level.append(node.val)
            elif RTL:
                level.appendleft(node.val)

            if node.left:
                q.append(node.left)
            if node.right:
                q.append(node.right)
        
        res.append(list(level))
        LTR, RTL = RTL, LTR
    
    return res
```

### Binary Tree Properties

There are many different Binary Tree (BT) properties common in tree problems.

You should familiarize yourself with some.

- Common Patterns:
    - Height of a tree.
    - Is it balanced?
    - Least Common Ancestor (LCA).
    - Counting nodes in a tree.
    - Counting leaves in a tree.
    - Are two trees the same?
    - Is a tree a subtree of a tree?

![BT Properties](/dsa/trees/BinaryTreeProperties.png)

- height() implementation.

```python
def height(self, root):
    if not root:
        return 0

    return 1 + max(self.height(root.left), self.height(root.right))
```

- isBalanced() implementation.

```python
def isBalanced(self, root):
    def dfs(root):
        if not root:
            return [True, 0]

        L = dfs(root.left)
        R = dfs(root.right)

        b = L[0] and R[0] and (abs(L[1] - R[1]) <= 1)
        h = 1 + max(L[1], R[1])

        return [b, h]

    return dfs(root)[0]
```

- lcaBT() implementation.

```python
def lcaBT(self, root, p, q):
    if not root or root == p or root == q:
        return root
    
    L = self.lcaBT(root.left, p, q)
    R = self.lcaBT(root.right, p, q)

    if L and R:
        return root
    
    return L or R
```

- countNodes() implementation.

```python
def countNodes(self, root):
    if not root:
        return 0
    
    return 1 + self.countNodes(root.left) + self.countNodes(root.right)
```

- countLeaves() implementation.

```python
def countLeaves(self, root):
    if not root:
        return 0

    if not root.left and not root.right:
        return 1

    return self.countLeaves(root.left) + self.countLeaves(root.right)
```

- isSameTree() implementation.

```python
def isSameTree(self, p, q):
    if not p and not q:
        return True
    
    if not p or not q:
        return False

    if p.val != q.val:
        return False
    
    return self.isSameTree(p.left, q.left) and self.isSameTree(p.right, q.right)
```

- isSubtree() implementation.

```python
def isSubtree(self, root, subRoot):
    if not root:
        return False
    
    if self.isSameTree(root, subRoot):
        return True

    return self.isSubTree(self.left, subRoot) or self.isSubTree(self.right, subRoot)
```

### Binary Search Trees (BST)

Binary Search Trees are a bit more complicated than Binary Trees.

- Properties:
    - $All$ values to the $left$ of the $root$ are $<=$ to the root.
    - $All$ values to the $right$ of the $root$ are $>=$ to the root.

What should you practice?

- In my opinion:
    - Insertion.
    - Deletion.
    - Searching.
    - LCA.

![BST Properties](/dsa/trees/BinarySearchTrees.png)

- insert() implementation.

```python
def insert(self, root, val):
    if not root:
        return TreeNode(val)
    
    if val < root.val:
        root.left = self.insert(root.left, val)
    else:
        root.right = self.insert(root.right, val)
    
    return root
```

- remove() implementation.

```python
def remove(self, root, val):
    if not root:
        return None
    
    if val < root.val:
        root.left = self.remove(root.left, val)
    elif val > root.val:
        root.right = self.remove(root.right, val)
    else:
        if not root.left:
            return root.right
        if not root.right:
            return root.right
        
        curr = root.right
        while curr.left:
            curr = curr.left
        root.val = curr.val
        root.right = self.remove(root.right, curr.val)
    
    return root
```

- search() implementation.

```python
def search(self, root, val):
    if not root or root.val == val:
        return root
    
    if val < root.val:
        return self.search(root.left, val)
    else:
        return self.search(root.right, val)
```

- lcaBST() implementation.

```python
def lcaBST(self, root, p, q):
    if not root:
        return None

    if p.val < root.val and q.val < root.val:
        return self.lcaBST(root.left, p, q)
    elif p.val > root.val and q.val > root.val:
        return self.lcaBST(root.right, p, q)
    
    return root
```

### Advanced Tree Operations

These operations are quite advanced.

Do the following:
- Invert a tree.
- Find the binary tree paths.
- Serialize a tree.
    - Turn it into a string.
- Deserialize a tree.
    - Turn it back into a tree.

![Advanced Trees](/dsa/trees/AdvancedTrees.png)

- invertTree() implementation.

```python
def invertTree(self, root):
    if not root:
        return none
    
    root.left, root.right = self.invertTree(root.right), self.invertTree(root.left)
    return roon
```

- binaryTreePaths() implementation.

```python
def binaryTreePaths(self, root):
    paths = []
    
    def dfs(node, path):
        if not node:
            return

        if not node.left and not node.right:
            paths.append(path + str(node.val))
        else:
            dfs(node.left, path + str(node.val) + "->")
            dfs(node.right, path + str(node.val) + "->")
    
    dfs(root, "")

    return paths
```

- serialize() implementation.

```python
def serialize(self, root):
    if not root:
        return ""

    res = []
    q = deque([root])

    while q:
        node = q.popleft()

        if node:
            res.append(str(node.val))
            q.append(root.left)
            q.append(root.right)
        else:
            q.append("null")
    
    return ", ".join(res)
```

- deserialize() implementation.

```python
def deserialize(self, data):
    if not data:
        return None
    
    nodes = data.split(', ')
    root = TreeNode(int(nodes[0]))
    q = deque([root])
    i = 1

    while q:
        node = q.popleft()

        if nodes[i] != "null":
            node.left = TreeNode(int(nodes[i]))
            q.append(node.left)
        i += 1

        if nodes[i] != "null":
            node.right = TreeNode(int(nodes[i]))
            q.append(node.right)
        i += 1
    
    return root
```