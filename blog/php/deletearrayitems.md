---
title: 'Delete Array Items'
date: 'July 12, 2025'
category: 'PHP 7'
---

# Delete Array Items

You can use the array_splice() function.
- array_splice(variable, start, length)

```php
<?php

$cars = ['Lexus', 'Toyota', 'Honda'];
array_splice($cars, 1, 1);

?>
```

It automatically reindexes the array.

## unset()

Also deletes existing array items.
- But does not re-arrange indexes.

```php
<?php

$cars = ['Honda', 'Toyota', 'Chevy'];
unset($cars[0]);

?>
```

## Remove Multiple Array Items

Same idea.
- Except unset() takes multiple arguments.

```php
<?php

$cars = ['Honda', 'Toyota', 'Chevy'];
array_splice($cars, 0, 2);

$foods = ['Pizza', 'Pasta', 'Burger'];
unset($foods[0], $foods[1]);

?>
```

## Remove Item From an Associative Array

Use the unset() function.
- Specify the key of the item to delete.


```php
<?php

$cars = [
    "Honda" => 1000,
    "Toyota" => 1200,
    "Lexus" => 1400
];
unset($cars["Honda"]);

?>
```

## array_diff()

You can also use the array_diff() function.
- array_diff(variable, values)
- Takes the values, not keys as parameters.

```php
<?php

$cars = [
    "Toyota" => 1000,
    "Honda" => 1200,
    "Lexus" => 1400
];
array_diff($cars, [1000, 1200]);

?>
```

## Remove Last Item

Use array_pop().

```php
<?php

$cars = ["Honda", "Toyota", "Chevy"];
array_pop($cars);

?>
```

## Remove First Item

Use array_shift().

```php
<?php

$cars = ["Honda", "Toyota", "Chevy"];
array_shift($cars);

?>
```