---
title: 'Multidimensial Arrays'
date: 'July 12, 2025'
category: 'PHP 7'
---

# Multidimensional Arrays

Arrays inside arrays.
- That's really it.

```html
<!DOCTYPE html>
<html>

<body>
<?php
    $cars = [
        ["Toyota", 1000],
        ["Honda", 1200],
        ["Lexus", 1400]
    ];

    for ($r = 0; $r < 3; $r++) {
        echo "Row number $r";

        echo "<ul>";
        for ($c = 0; $c < 2; $c++) {
            echo "<li>" . $cars[$r][$c] . "</li>";
        }
        echo "</ul>";
    }
?>
</body>

</html>
```