---
title: 'PHP Constants'
date: 'July 12, 2025'
category: 'PHP 7'
---

# PHP Constants

Defining constants means they cannot be changed.
- Is an identifier (name) for a simple value.
- Starts with a letter or underscore. (No $ sign before).
- Case-sensitive.

## Creating a Constant

Use the define() function:
- define(name, value);

```html
<!DOCTYPE html>
<html>

<body>
<?php
    define("GREETING", "Hi, my name is Tristan!");
    echo GREETING;
?>
</body>

</html>
```

## const

You can create a constant using the const keyword.

```html
<!DOCTYPE html>
<html>

<body>
<?php
    const MYNAME = "Tristan";
    echo MYNAME;
?>
</body>

</html>
```

Differences between const and define().
- const cannot be created inside a block scope.
  - Like if.
- define() can be created inside a block scope. 

## Constant Arrays

You can create a constant array with the define() function.

```html
<!DOCTYPE html>
<html>

<body>
<?php
    define("foods", [
        "Pizza",
        "Pasta",
        "Turkey"
    ]);
    echo foods[0];
?>
</body>

</html>
```

## Constants Are Global

They can be used anywhere in the script.

```html
<!DOCTYPE html>
<html>

<body>
<?php
    const TRISTAN = "Tristan is a SWE!";

    function myFunction() {
        echo TRISTAN;
    }
    myFunction();
?>
</body>

</html>
```