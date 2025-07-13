---
title: 'Functions'
date: 'July 12, 2025'
category: 'PHP 7'
---

# Functions

There are built-in functions or you can create custom ones.

## User-Defined Functions

- A function is a block statement that can be used repeatedly in a program.
- Will not execute automatically.
- Must be called to execute.

## Creating and Calling a Function

Use the keyword function followed by the function name.
- Call the function outside of the function.
- They are not case-sensitive.
- Use curly braces to define the code block.

```html
<!DOCTYPE html>
<html>

<body>
<?php
    function message() {
        echo "Hi, there!";
    }
    message();
?>
</body>

</html>
```

## Function Arguments

Functions can pass in parameters as arguments.
- You can add one or more.
- Separated by a comma.

```html
<!DOCTYPE html>
<html>

<body>
<?php
    function message($name, $year) {
        echo "$name: $year";
    }
    message("Tristan", 2002);
?>
</body>

</html>
```

## Default Argument Value

You can set a default parameter in a function.
- Passing an argument overrides the default parameter.

```html
<!DOCTYPE html>
<html>

<body>
<?php
    function area($width = 8, $height = 8) {
        return $width * $height;
    }

    print(area(16, 16));
    print "<br>";
    print(area());
?>
</body>

</html>
```

## Returning Values

You can use the return statement to return a value in a function.

```html
<!DOCTYPE html>
<html>

<body>
<?php
    function sum($x, $y) {
        $z = $x + $y;
        return $z;
    }

    print(sum(15, 3));
    print "<br>";
    print(sum(2, 5));
    print "<br>";
?>
</body>

</html>
```

## Pass Arguments by Reference

By default, functions pass arguments by value.
- The function does not change the value.

However, you can change the input value by reference.
- & operator.

```html
<!DOCTYPE html>
<html>

<body>
<?php
    function subtract(&$val) {
        $val -= 2;
        return $val;
    }
    $num = 2;
    print(subtract($num));
    echo $num;
?>
</body>

</html>
```

## Variable Number of Arguments

You can have an unknown amount of arguments in the function parameter.
- Known as a variadic function.
- Variadic function becomes an array.

```html
<!DOCTYPE html>
<html>

<body>
<?php
    function addNumbers(...$val) {
        $sumVal = 0;
        $len = count($val);
        for ($i = 0; $i < len; $i++) {
            $sumVal += $val[$i];
        }
        return $sumVal;
    }

    print(addNumbers(4, 2, 2, 1, 2, 3));
?>
</body>

</html>
```

You can have just one argument at variable length, it must be the last parameter.

```html
<!DOCTYPE html>
<html>

<body>
<?php
    function sumThree($three, ...$val) {
        $sumVal = 0;
        $len = count($val);

        for ($i = 0; $i < $len; $i++) {
            $sumVal += $val[$i] + $three;
        }
        
        return $sumVal;
    }

    echo(sumThree(3, 7, 17, 27));
?>
</body>

</html>
```

## PHP is Loosely Typed

We do not have to tell PHP what data type a variable is.
- You can do things like add a integer and string.
  - Not recommended.
- Type declarations added in PHP 7.
- use the strict declaration to throw a fatal error if a data type mismatches.

```php
<?php declare(strict_types=1);

function sum(int $a, int $b) {
    return $a + $b;
}
echo sum(5, "5");

?>
```

## Return Type Declarations

PHP allows us to use type declarations for the return statement.
- Enable the strict requirement.
- Use a : after the function and then write the type.

```php
<?php declare(strict_types=1);

function sum(float $a, float $b) : float {
    return $a + $b;
}

echo sum(5.2, 3.3);

?>
```

You can specify a different return type than the argument types.
- But ensure the return value is the correct type.

```php
<?php
function sum(int $a, int $b) : float {
    return (float)($a + $b);
}
echo(sum(5, 3));
?>
```