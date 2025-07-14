---
title: 'Sorting Arrays'
date: 'July 12, 2025'
category: 'PHP 7'
---

# Sorting Arrays

Arrays can be sorted in alphabetical or numerical order.
- Ascending or descending.

Below are a couple of functions for you to try:

```

sort()
Ascending order.

rsort()
Descending order.

asort()
Ascending order, by value.

ksort()
Ascending order, by key.

arsort()
Descending order, by value.

krsort()
Descending order, by key.
```

Here is an example of its usage:
- sort(variable)

```php
<?php
    $cars = ["Honda", "Toyota", "Chevy"];
    sort($cars);
?>
```