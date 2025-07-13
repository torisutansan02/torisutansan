---
title: 'Access Array Items'
date: 'July 12, 2025'
category: 'PHP 7'
---

# Access Array Item

Refer to the index for indexed arrays.
- Name for associative arrays.

```php
<?php

$foods = ['Tomato', 'Banana', 'Apple'];
echo $foods[1];

$vegetables = [
    "Spinach" => 12,
    "Kale" => 4,
    "Broccoli" => 6
];

echo $vegetables["Spinach"];

?>
```

## Double or Single Quotes

Does not matter when accessing an array.

```php
<?php

$vegetables = [
    "Spinach" => 12,
    "Kale" => 3,
    "Asparagus" => 5
];

echo $vegetables["Kale"];
echo $vegetables["Asparagus"];

?>
```

## Execute a Function Item

Array items can be any data type.
- Including functions.
- Execute a function by array index followed by parentheses.
- Key name for an associative array.

```php
<?php

function test() {
    echo "Test Function";
}

$oldArr = ["String", 1, test];

$oldArr[2]();

$newArr = [
    "string" => "Hi",
    "int" => 1,
    "func" => test
];

$newArr["func"]();

?>
```

# Looping Through Arrays

You can use a foreach loop.

```html
<!DOCTYPE html>
<html>

<body>
<?php
    $nums = [1, 2, 3, 4];

    foreach ($nums as $num) {
        echo "$num <br>";
    }

    $foods = [
        "Squash" => 12,
        "Banana" => 1,
        "Tomato" => 5
    ];

    foreach ($foods as $key=>$val) {
        echo "$key: $val <br>";
    }
?>
</body>

</html>
```