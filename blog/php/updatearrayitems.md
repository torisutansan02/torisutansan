---
title: 'Update Array Items'
date: 'July 12, 2025'
category: 'PHP 7'
---

# Update Array Items

Index number for indexed arrays.
- Key names for associated arrays.

## Update Array Items in a ForEach Loop

Use a reference character.

```php
<?php
$oldArr = [1, 2, 3, 4];
foreach ($oldArr as &$val) {
    $val += 2;
}
unset($val);

var_dump($oldArr);
?>
```

Why unset()?
- The val variable will remain as a reference to the last array item.