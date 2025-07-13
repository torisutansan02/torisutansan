---
title: 'PHP Multiline Comments'
date: 'July 12, 2025'
category: 'PHP 7'
---

# PHP Multiline Comments

Starts with $/*$ and ends with $*/$.
- Anything in between ignored.

```html
<!DOCTYPE html>
<html>

<body>
    <?php
        /*
        This comment is awesome.
        Just like Tristan!
        */
        echo 'Hi, Tristan!';
    ?>
</body>

</html>
```

## Multiline to Ignore Code

Here is an example which prevents code from being executed.

```html
<!DOCTYPE html>
<html>

<body>
    <?php
        /*
        echo "Tristan's world!";
        echo "Very nice!";
        */
        echo "Hi, Tristan!";
    ?>
</body>

</html>
```

## Multiline in the Middle of Code

Here is an example of using a multiline comment to ignore code in the middle of a line.

```html
<!DOCTYPE html>
<html>

<body>
    <?php
        $x = 2 /* + 2 */ + 2;
        echo "2 + 2 = " . $x;
    ?>
</body>

</html>
```