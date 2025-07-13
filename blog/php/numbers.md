---
title: 'PHP Numbers'
date: 'July 12, 2025'
category: 'PHP 7'
---

# PHP Numbers

Like integers, floats, and number strings.

## Types

- Integer.
- Float
- Number Strings.

PHP has additional data types for numbers:
- Infinity.
- NaN.

```html
<!DOCTYPE html>
<html>

<body>
    <?php
        $a = 5;
        $b = 3.14;
        $c = "25";

        var_dump($a);
        echo "<br>";
        var_dump($b);
        echo "<br>";
        var_dump($c);
        echo "<br>";
    ?>
</body>

</html>
```

## PHP Integers

Any positive or negative number without a decimal.
- 32 bit systems.
- 64 bit systems.

If it exceeds the value in the bit systems, it stores as a float.

If an operand is a float in an expression, the stored result is a float.

Rules for integers:
- At least one digit.
- No decimal point.
- Positive or negative.
- Decimal (base 10), hexadecimal (base 16), octal (base 8), binary (base 2).

Predefined constants:
- PHP_INT_MAX
  - Largest integer supported.
- PHP_INT_MIN
  - Smallest integer supported.
- PHP_INT_SIZE
  - Size of an integer in bytes.

Functions to check if a variable is an integer:
- is_int();
- is_integer();
- is_long;

```html
<!DOCTYPE html>
<html>

<body>
    <?php
        $x = 73;
        var_dump(is_int($x));

        $x = 73.5;
        var_dump(is_int($x));
    ?>
</body>

</html>
```

## PHP Floats

A decimal point or a number in exponential form.
- Maximum precision of 14 digits.
- Max value of 1.7976931348623E+308.

Predefined constants:
- PHP_FLOAT_MAX
  - Largest representable floating point number.
- PHP_FLOAT_MIN
  - Smallest representable floating point number.
- PHP_FLOAT_DIG
  - Number of decimal digits that can be rounded into a float and back without precision loss.
- PHP_FLOAT_EPSILON
  - Smallest representable positive number x, so that x + 1.0 != 1.0.

Functions to check if a variable is a float:
- is_float();
- is_double();

```html
<!DOCTYPE html>
<html>

<body>
    <?php
        $x = 7.32;
        var_dump(is_float($x));
    ?>
</body>

</html>
```

## PHP Infinity

A number larger than PHP_FLOAT_MAX is infinite.

How to check for an infinite number:
- is_finite();
- is_infinite();

```html
<!DOCTYPE html>
<html>

<body>
    <?php
        $x = 1.9e411;
        var_dump($x);
    ?>
</body>

</html>
```

## PHP NaN

NaN stands for Not a Number.
- Used for impossible mathematical operations.

How to check if a number is NaN:
- is_nan();

```html
<!DOCTYPE html>
<html>

<body>
    <?php
        $x = acos(8);
        var_dump($x);
    ?>
</body>

</html>
```

## PHP Numerical Strings

You can use the is_numeric() function to find out if a variable is numeric.
- Hexadecimal values are not numeric strings.

```html
<!DOCTYPE html>
<html>

<body>
    <?php
        $x = 5000;
        var_dump(is_numeric($x));

        $x = "5000";
        var_dump(is_numeric($x));

        $x = "60.1" + 100;
        var_dump(is_numeric($x));

        $x = "Hello";
        var_dump(is_numeric($x));
    ?>
</body>

</html>
```

## PHP Casting Strings and Floats to Integers

You can use functions to cast variables to different data types:
- (int)
- (integer)
- intval()

```html
<!DOCTYPE html>
<html>

<body>
    <?php
        // Float to Int
        $x = 63.21;
        $int_cast = (int)$x;
        echo $int_cast;

        echo "<br>";

        // String to Int
        $x = "23.21";
        $int_cast = (int)$x;
        echo $int_cast;

        echo "<br>";
    ?>
</body>

</html>
```