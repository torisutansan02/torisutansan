---
title: 'For Loop'
date: 'July 12, 2025'
category: 'PHP 7'
---

# For Loop

Loops through a code block a specified number of times.
- First expression sets a counter.
- Second expression evaluates before each iteration.
  - Must be true for code block to be executed.
- Third expression evaluates after each iteration.
  - Does some sort of operation.

```html
<!DOCTYPE html>
<html>

<body>
<?php
    for ($i = 0; $i < 10; $i++) {
        echo "$i <br>";
    }
?>
</body>

</html>
```