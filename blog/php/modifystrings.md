---
title: 'PHP Modify Strings'
date: 'July 12, 2025'
category: 'PHP 7'
---

# Modifying PHP Strings

There are built-in functions to modify strings.

## Upper Case

Use the strtoupper() function.

```html
<!DOCTYPE html>
<html>

<body>
    <?php
        $name = "Tristan";
        echo strtoupper($name);
    ?>
</body>

</html>
```

## Lower Case

Use the strtolower() function.

```html
<!DOCTYPE html>
<html>

<body>
    <?php
        $name = "TRISTAN";
        echo strtolower($name);
    ?>
</body>

</html>
```

## Replace String

Use the str_replace() to replace some characters in a string with another string.
- 3 Parameters.
  - The string to be replaced.
  - The string replacing.
  - The variable name.

```html
<!DOCTYPE html>
<html>

<body>
    <?php
        $name = "Tristan's awesome!";
        echo str_replace("Tristan", "Joseph", $name);
    ?>
</body>

</html>
```