---
title: 'Do While'
date: 'July 12, 2025'
category: 'PHP 7'
---

# Do While

Loops through a block of code once guaranteed.
- Then continues if the condition is true.

```html
<!DOCTYPE html>
<html>

<body>
<?php
    $i = 1;
    do {
        echo $i;
        $i++;
    } while ($i < 10);
?>
</body>

</html>
```

Small alteration to prove it runs at least once.

```html
<!DOCTYPE html>
<html>

<body>
<?php
    $i = 12;
    do {
        echo $i;
        $i++;
    } while ($i < 10);
?>
</body>

</html>
```