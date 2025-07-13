---
title: 'Associative Arrays'
date: 'July 12, 2025'
category: 'PHP 7'
---

# Associative Arrays

Use named keys that you assign.

```php
<?php

$foods = ['Pizza'=>"12", 'Apple'=>'16', 'Banana'=>'12'];
var_dump($foods);

?>
```

## Access Associative Arrays

Refer to the key name.
- Access array item.

```php
<?php

$foods = ['Pizza'=>12, 'Apple'=>16, 'Banana'=>10];
echo $foods['Apple'];

?>
```

## Change Value

Use key name.

```php
<?php

$foods = ['Apple'=>12, 'Banana'=>6, 'Squash'=>3];
$foods['Squash'] = 5;
var_dump($foods);

?>
```

## Looping Through an Associative Array

```html
<!DOCTYPE html>
<html>

<body>
<?php
    $foods = ['Apple'=>12, 'Banana'=>6, 'Tomato'=>7];
    
    foreach ($foods as $key=>$val) {
        echo "$key: $val <br>";
    }
?>
</body>

</html>
```