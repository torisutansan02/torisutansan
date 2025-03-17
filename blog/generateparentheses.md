---
title: 'Generate Parentheses'
date: 'March 16, 2025'
---

# Generate Parentheses

You are given $n$ pairs of parentheses and must return all combinations of well-formed parentheses.

- $n = 3$
- $["((()))", "(()())", "(())()", "()(())", "()()()"]$

## How to Solve?

Every open parenthesis $"("$ needs to have a corresponding closing parenthesis $")"$.

- Meaning we cannot have more closed parentheses than open parentheses.

- And our total open and closed parentheses must also not exceed $n$.

What kind of solution does this hint at?

### Stack

We have to use a $stack$ as our data structure, but we should also recursively backtrack.

Since we are tracking how many open and closed parentheses we have, shouldn't we set them to a variable?

Below, I will set my variables. $res$ represents the array of strings of valid parentheses.

We will use a stack $s$ to append or pop from the stack. The variables $o$ represent $open$ and $c$ represents $closed$ parentheses.

- $s = []$
- $o = 0$
- $c = 0$
- $res = []$
- $o < n$
    - Max of $n$ open and closed parentheses.
- $c < o$
    - Closed parentheses must be less than open.

|   o   |   c   |
|   --- |   --- |
|   1   |   0   |

|   s       |
|   ---     |
|   $"("$   |

- First iteration:
    - $o = 1$
    - $c = 0$

|   o   |   c   |
|   --- |   --- |
|   2   |   0   |

|   s       |
|   ---     |
|   $"("$   |
|   $"("$   |

- Second iteration:
    - $o = 2$
    - $c = 0$

|   o   |   c   |
|   --- |   --- |
|   2   |   1   |

|   s       |
|   ---     |
|   $"("$   |
|   $"("$   |
|   $")"$   |

- Third iteration:
    - $o = 2$
    - $c = 1$

|   o   |   c   |
|   --- |   --- |
|   2   |   2   |

|   s       |
|   ---     |
|   $"("$   |
|   $"("$   |
|   $")"$   |
|   $")"$   |

- Fourth iteration:
    - $o = 2$
    - $c = 2$
        - $o == c == n$
- Valid Solution:
    - $res = ["(())"]$
- Backtrack!
    - We still need to use $s.pop()$

|   o   |   c   |
|   --- |   --- |
|   2   |   1   |

|   s       |
|   ---     |
|   $"("$   |
|   $"("$   |
|   $")"$   |

- Pop $")"$
    - Most recent recursive call.

|   o   |   c   |
|   --- |   --- |
|   2   |   0   |

|   s       |
|   ---     |
|   $"("$   |
|   $"("$   |

- Pop $")"$
    - Most recent recursive call.

|   o   |   c   |
|   --- |   --- |
|   1   |   0   |

|   s       |
|   ---     |
|   $"("$   |

- Pop $"("$
    - Most recent recursive call.
- But $wait$, we can't stop here. The second $if$ statement means we need to continue to make recursive calls.
- So we must continue by appending $")"$, because $c < o$

|   o   |   c   |
|   --- |   --- |
|   1   |   1   |

|   s       |
|   ---     |
|   $"("$   |
|   $")"$   |

- Fifth iteration:
    - $o = 1$
    - $c = 1$

|   o   |   c   |
|   --- |   --- |
|   2   |   1   |

|   s       |
|   ---     |
|   $"("$   |
|   $")"$   |
|   $"("$   |

- Fifth iteration:
    - $o = 2$
    - $c = 1$

|   o   |   c   |
|   --- |   --- |
|   2   |   2   |

|   s       |
|   ---     |
|   $"("$   |
|   $")"$   |
|   $")"$   |
|   $")"$   |

- Fifth iteration:
    - $o = 2$
    - $c = 2$
        - $o == c == n$
- Valid Solution:
    - $res = ["(())", "()()"]$

Therefore, you must return the result. We have all valid strings.

### Helpful Hints
- How to append to a stack?
    - $s.append()$
- How to pop from a stack?
    - $s.pop()$
- How do I visualize backtracking?
    - Through a decision tree.
        - Remember you can add either $"("$ or add $")"$ but make sure it follows the constraints.


### Stack Solution
```python
class Solution:
    def generateParenthesis(self, n: int) -> List[str]:
        # Set an empty stack
        s = []
        # Set the result list of strings
        res = []
        # Set o to 0
        o = 0
        # Set c to 0
        c = 0

        # Backtracking or DFS algorithm
        def dfs(o, c):
            # Check if o == c == n:
            if o == c == n:
                res.append("".join(s))
                return
            
            # If open is less than n
            if o < n:
                # Add "(" to the stack
                s.append("(")
                # Call DFS, add 1 to o
                dfs(o + 1, c)
                # After DFS executes, backtrack
                s.pop()
            
            # If closed is less than open
            if c < o:
                # Add ")" to the stack
                s.append(")")
                # Call DFS, add 1 to c
                dfs(o, c + 1)
                # After DFS executes, backtrack
                s.pop()

        
        # Call the DFS algorithm
        dfs(o, c)

        return res