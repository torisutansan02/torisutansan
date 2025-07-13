---
title: 'Nested If'
date: 'July 12, 2025'
category: 'PHP 7'
---

# Nested If

You can have if statements within if statements.

```html
<!DOCTYPE html>
<html>

<body>
<?php
    $x = 15;
    if ($x > 10) {
        echo "Greater than 10";
        if ($x > 20) {
            echo "Greater than 20";
        }
        else {
            echo "Less than 20";
        }
    }
?>
</body>

</html>
```