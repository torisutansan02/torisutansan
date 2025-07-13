---
title: 'Add Array Items'
date: 'July 12, 2025'
category: 'PHP 7'
---

# Add Array Item

For indexed arrays:
- Use the bracket syntax.

For associative arrays:
- Use brackets for the key, and assign value with the = operator.

```php
<?php

$fruits = ['Apple', 'Orange', 'Banana'];
$fruits[] = "Cherry";

$vegetables = [
    "Kale" => 12,
    "Spinach" => 6
];
$vegetables["Broccoli"] = 3;

?>
```

## Add Multiple Array Items

For indexed arrays:
- Use the array_push() function.
For associative arrays:
- Use the += operator.

```php
<?php

$fruits = ["Apple"];
array_push($fruits, "Banana", "Cherry");

$vegetables = [
    "Kale" => 12
];
$vegetables += [
    "Spinach" => 5,
    "Broccoli" => 6
];

?>
```