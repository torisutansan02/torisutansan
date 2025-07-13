---
title: 'Arrays'
date: 'July 12, 2025'
category: 'PHP 7'
---

# Arrays

Store multiple values in one variable.

```html
<!DOCTYPE html>
<html>

<body>
    <pre>
<?php
        $foods = array('Pizza', "Taco", 'Quiche');

        var_dump($foods);
?>
    </pre>
</body>

</html>
```

## What is an Array?

A special variable that holds many values under a single name.
- You can refer to an index number or name to access an element.

## Array Types

- Indexed Arrays.
  - Numeric index.
- Associative Arrays.
  - Named keys.
- Multidimensional Arrays.
  - Containing one or more arrays.

## Array Items

Can be any data type.
- Strings and numbers are most common.
- Can be objects, functions, or other arrays.

```html
<!DOCTYPE html>
<html>

<body>
<?php
    function test() {
        echo "Print Message";
    }

    $exArr = array(5, "String", ["Pizza", "Taco"], test);

    $exArr[3]();
    print($exArr[2]);
?>
</body>

</html>
```

## Array Functions

They are useful:
- count()
  - Counts array items.

```php
<?php

$games = array('Fortnite', 'Omori', 'Elden Ring');

echo count($games);

?>
```