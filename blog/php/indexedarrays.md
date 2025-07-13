---
title: 'Indexed Arrays'
date: 'July 12, 2025'
category: 'PHP 7'
---

# Indexed Arrays

Each item has an index number.
- Starts from 0 to n - 1.

```php
<?php

$family = array('Dad', 'Mom', 'Sister');

var_dump($family);

?>
```

# Access Indexed Arrays

Refer to the index number.

```php
<?php

$family = array('Dad', 'Mom', 'Sister');

echo $family[1];

?>
```

## Change Value

Use the index number to change the value of an array item.

```php
<?php

$family = array('Mom', 'Dad', "Grandpa");

$family[2] = 'Sister';

var_dump($family);

?>
```

## Looping Through an Indexed Array

Use a foreach loop.

```html
<!DOCTYPE html>
<html>

<body>
<?php
    $family = array('Mom', 'Dad', 'Sister');
    foreach ($family as $member) {
        echo "$member <br>";
    }
?>
</body>

</html>
```

## Index Number

The key of an array is an indexed number.
- From $0$ to $n - 1$.
- New items appended increase the index by 1.
    - The highest existing index + 1.

```php
<?php

$family = array('Mom', 'Dad', 'Sister');
array_push($family, 'Grandpa');
var_dump($family);

?>
```