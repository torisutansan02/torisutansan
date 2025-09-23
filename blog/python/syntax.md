---
title: 'Python Syntax'
date: 'September 22, 2025'
category: 'Python'
---

# How do we execute Python code?

You can execute Python code directly through a command line.

```python
>>> print("Hello world!")

Hello world!
```

Or you can create a Python file.
- Use the .py extension and run a command:

```
C:\Users\Tristan>python myfile.py
```

## Python Indentation

In Python, we use indentations for code blocks.

```python
if 5 > 2:
    print("5 is greater than 2")
```

You should not skip indentations as it will generate an error.
- The number of spaces is irrelevant, as long as it is indented.

```python
# One space
if 5 > 2:
 print("5 is greater than 2")

# One tab
if 5 > 2:
    print("5 is greater than 2")
```

However, you should use the same number of spaces in a code block.
- Else you will get an error.

## Python Variables

You can assign a value to a variable in Python.

```python
x = 2
y = "Hello, world!"

print(y)
```


## Comments

Python allows comments for documentation.
- Comments start with a #

```python
# This is a test comment
print("Hi Tristan!")
```

