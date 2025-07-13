---
title: 'PHP Strings'
date: 'July 12, 2025'
category: 'PHP 7'
---

# PHP Strings

A sequence of characters.

```html
<!DOCTYPE html>
<html>

<body>
    <?php
        echo "Hello!";
        echo "Hello!";
    ?>
</body>

</html>
```

## Double or Single Quotes?

Double qutoed strings perform actions on special characters.

```html
<!DOCTYPE html>
<html>

<body>
    <?php
        $x = "Tristan";
        echo "Hello $x";
    ?>
</body>

</html>
```

Single quoted strings do not. Returns the string as written.

```html
<!DOCTYPE html>
<html>

<body>
    <?php
        $x = "Tristan";
        echo 'Hello $x';
    ?>
</body>

</html>
```