---
title: 'While Loops'
date: 'July 12, 2025'
category: 'PHP 7'
---

# While Loops

Loops through a code block under a condition.

```html
<!DOCTYPE html>
<html>

<body>
<?php
    $i = 1;
    while ($i < 6) {
        echo "Test <br>";
        $i++;
    }
?>
</body>

</html>
```

Checks after each iteration if the condition is still true.
- Can be a counter, status of an operation
- A condition which evaluates to true or false.

## Alternative Syntax

Can be written with the endwhile statement.

```html
<!DOCTYPE html>
<html>

<body>
<?php
    $i = 1;
    while ($i < 10):
        echo $i;
        $i++;
    endwhile;
?>
</body>

</html>