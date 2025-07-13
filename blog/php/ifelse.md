---
title: 'If-Else'
date: 'July 12, 2025'
category: 'PHP 7'
---

# If-Else Statements

Executes some code if a condition is true.
- Executed other code if the condition is false.

```html
<!DOCTYPE html>
<html>

<body>
<?php
    $x = date("H");

    if ($x > "20") {
        echo "Have a good day!";
    }
    else {
        echo "Have a good night!";
    }
?>
</body>

</html>
```

# If-ElseIf-Else Statements

Executes different codes on more than 2 conditions.

```html
<!DOCTYPE html>
<html>

<body>
<?php
    $x = rand(1, 10);
    $y = rand(1, 10);
    $z = rand(1, 10);

    if ($x > $y) {
        echo "x is greater than y";
    }
    elseif ($y > $z) {
        echo "y is greater than z";
    }
    else {
        echo "Too lazy...";
    }
?>
</body>

</html>
```