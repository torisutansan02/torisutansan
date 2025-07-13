---
title: 'Break'
date: 'July 12, 2025'
category: 'PHP 7'
---

# break

You can use the break keyword to jump out of loops.

```php
<?php
for ($i = 0; $i < 10; $i++) {
    echo $i;
    if ($i == 5) break;
}
?>
```