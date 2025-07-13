---
title: 'Create Arrays'
date: 'July 12, 2025'
category: 'PHP 7'
---

# Create Array

Use the array() function.
- Or use [] brackets.

```php
<?php

$foods = array('Tomato', 'Apple', 'Banana');
$foods = ['Tomato', 'Apple', 'Banana'];

?>
```

## Multiple lines

Line breaks do not matter when separating elements.

```php
<?php

$foods = [
    "Banana",
    "Apple",
    "Squash"
];

?>
```

## Trailing Comma

Does not matter.
- Still parses correctly.

```php
<?php

$foods = [
    "Apple",
    "Banana",
    "Squash",
];

?>
```

## Array Keys

Indexed arrays have indexes as keys by default.
- Associative arrays have names as keys.

```php
<?php

$foods = [
    "Apple" => 12,
    "Banana" => 10,
    "Tomato" => "Tasty"
];

?>
```

## Declare Empty Array

You can declare an empty array and add items later.

```php
<?php

$foods = [];
// Try adding items

?>
```

Same with associative arrays.

## Mixing Array Keys

You can have arrays with both indexed and named keys.

```php
<?php

$foods = [];
$foods[0] = "apples";
$foods["fruit"] = "cherries";

?>
```