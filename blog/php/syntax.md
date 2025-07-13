---
title: 'PHP Syntax'
date: 'July 12, 2025'
category: 'PHP 7'
---

# Basic Syntax

Can be placed anywhere in a document.
- Script starts with $<?php$ and ends with $?>$
- Extension is .php
- Contains HTML tags, and some scripting code.
- PHP statements end with a ;

```html
<!DOCTYPE html>
<html>

<body>
    <h1> Tristan's PHP Page! </h1>

    <?php
        echo "Hello world!";
    ?>
</body>

</html>
```

## Case Sensitivity

Keywords, classes, functions, and user-defined functions are not case sensitive.
- But variables are.

```html
<!DOCTYPE html>
<html>

<body>
    <?php
        ECHO "Hello world!<br>";
        Echo "Hello world!<br>";
        echo "Hello world!<br>";
    ?>
</body>

</html>
```

Below represents the case-sensitivity of variables.

```html
<!DOCTYPE html>
<html>

<body>
    <?php
        $color = "blue";
        echo "My car is " . $color . "<br>";
        echo "My house is " . $cOlOr . "<br>";
        echo "My truck is " . $Color . "<br>";
    ?>
</body>

</html>
```