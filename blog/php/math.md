---
title: 'PHP Math'
date: 'July 12, 2025'
category: 'PHP 7'
---

# PHP Math

PHP comes with a set of math functions.

## pi()

Returns the value of pi.

```html
<!DOCTYPE html>
<html>

<body>
<?php
    echo(pi());
?>
</body>

</html>
```

## min() and max()

Finds the min and max in a list of arguments.

```html
<!DOCTYPE html>
<html>

<body>
<?php
    echo(min(0, 2, 1, 100));
    echo(min(-2, -100, -3, -1));
?>
</body>

</html>
```

## abs()

Finds the absolute value of a number.

```html
<!DOCTYPE html>
<html>

<body>
<?php
    echo(abs(-6.2));
?>
</body>

</html>
```

## sqrt()

Finds the square root of a number.

```html
<!DOCTYPE html>
<html>

<body>
<?php
    echo(sqrt(16));
?>
</body>

</html>
```

## round()

Rounds a floating-point number to its nearest integer.

```html
<!DOCTYPE html>
<html>

<body>
<?php
    echo(round(0.3));
    echo(round(0.8));
?>
</body>

</html>
```

## rand()

Generates a random number.

```html
<!DOCTYPE html>
<html>

<body>
<?php
    echo(rand(10, 100));
?>
</body>

</html>
```

You can provide a min and max value with the parameters:
- rand(min, max);

