---
title: 'PHP If'
date: 'July 12, 2025'
category: 'PHP 7'
---

# If

Conditional statement used to perform different actions based on different conditions.

## Conditional Statements

There are 4 conditional statements:
- if
  - One condition is true.
- if-else
  - If one condition is true, else other condition.
- if-elseif-else
  - If one condition or multiple is true, else other condition.
- switch
  - Selects one of many blocks to be executed.

## The If Statement

Executes if one condition is true.

```html
<!DOCTYPE html>
<html>

<body>
<?php
    if (5 > 3) {
        echo "5 is greater than 3";
    }
?>
</body>

</html>
```

We can use variables in if statements.

```html
<!DOCTYPE html>
<html>

<body>
<?php
    $x = 12;

    if ($t < 15) {
        echo "12 is less than 15";
    }
?>
</body>

</html>
```