---
title: 'If Operators'
date: 'July 12, 2025'
category: 'PHP 7'
---

# PHP If Operators

Used to compare two values.

## Comparison Operators

If statements have conditions that compare two values.

```html
<!DOCTYPE html>
<html>

<body>
<?php
    $x = 15;
    if ($x == 15) {
        echo "Nice!";
    }
?>
</body>

</html>
```

## Logical Operators

Used to check more than one condition.

```html
<!DOCTYPE html>
<html>

<body>
<?php
    $x = 15;
    $y = 12;
    $z = 10;

    if ($x > $y && $y > $z) {
        echo "Awesome!";
    }
?>
</body>

</html>
```