---
title: 'GLOBALS'
date: 'July 12, 2025'
category: 'PHP 7'
---

# GLOBALS

```
$GLOBALS is an array that contains all global variables.
```

Accessible from any scope.
- Outermost scope are automatically global.
- Define them as global with the global keyword or refer to them with:

```
$GLOBALS
```

```php
<?php

$x = 30;

function test() {
    echo $GLOBALS['x'];
}

test();

?>
```

Defining it within a function.

```php
<?php

$x = 30;

function test() {
    global $x;
    echo $x;
}

test();

?>
```

## Create Global Variables

In the outermost scope, global variables are created without syntax.
- But you can create a global variable within a function.

```php
<?php

function test() {
    $GLOBALS['x'] = 25;
}

test();

echo $GLOBALS['x'];
echo $x;

?>
```