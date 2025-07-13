---
title: 'Continue'
date: 'July 12, 2025'
category: 'PHP 7'
---

# continue

You can use the continue keyword to move on to the next iteration of a loop.

```php
<?php
for ($i = 0; $i < 10; $i++) {
    if ($i == 5) continue;
    echo $i;
}
?>
```