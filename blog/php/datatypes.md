---
title: 'PHP Data Types'
date: 'July 12, 2025'
category: 'PHP 7'
---

# PHP Data Types

Has several data types:
- String.
- Integer.
- Float (Or Double).
- Boolean.
- Array.
- Object.
- NULL.
- Resource.

## Getting a Data Type

You can get the data type and value using var_dump().

```html
<!DOCTYPE html>
<html>

<body>
    <?php
        $x = 3;
        var_dump($x);
    ?>
</body>

</html>
```

## PHP String

A sequence of characters denoted in quotes.
- "Hello world."

```html
<!DOCTYPE html>
<html>

<body>
    <?php
        $name = "Tristan";
        $desc = "Software Engineer";

        var_dump($name);
        echo "<br>";
        var_dump($desc);
    ?>
</body>

</html>
```

## PHP Integer

Non-decimal number between $-2^(31)$ and $2^(31) - 1$.
- Integer must have at least one digit.
- Not have a decimal point.
- Must be positive or negative.
- Specified in:
  - Decimal (base 10).
  - Hexadecimal (base 16).
  - Octal (base 8).
  - Binary (base 2).

```html
<!DOCTYPE html>
<html>

<body>
    <?php
        $x = 5000;
        var_dump($x);
    ?>
</body>

</html>
```

## PHP Float

Floating point numbers are numbers with a decimal point or in exponential form.

```html
<!DOCTYPE html>
<html>

<body>
    <?php
        $x = 10.23;
        var_dump($x);
    ?>
</body>

</html>
```

## PHP Boolean

Represents a True or False state.
- Used in conditional testing.

```html
<!DOCTYPE html>
<html>

<body>
    <?php
        $x = true;
        var_dump($x);
    ?>
</body>

</html>
```

## PHP Array

Stores multiple values in one single variable.

```html
<!DOCTYPE html>
<html>

<body>
    <?php
        $food = array("Pizza", "Sandwiches", "Spaghetti");
        var_dump($food);
    ?>
</body>

</html>
```

## PHP Object

Objects are an instance of a class.
- A class is a template for objects.

Objects inherit properties and behaviors from a class.
- But different objects have different values for properties.

```html
<!DOCTYPE html>
<html>

<body>
    <?php
        class Food {
            public $item;
            public $cost;
            public $desc;

            public function __construct($item, $cost, $desc) {
                $this->item = $item;
                $this->cost = $cost;
                $this->desc = $desc;
            }

            public function foodDesc() {
                return $this->item . ": " . $this->cost . ", " . $this->desc;
            }
        }

        $myFood = new Food("Pizza", 12, "A tasty treat!");
        var_dump($myFood);
        print("<br>");
        print($myFood->foodDesc());
    ?>
</body>

</html>
```

## PHP NULL Value

Has one value:
- NULL.

This means it has no value assigned to it.
- A variable created without a value is automatically assigned to NULL.
- Variables emptied by setting it to NULL.

```html
<!DOCTYPE html>
<html>

<body>
    <?php
        $x = "Hi Tristan!";
        $x = null;

        var_dump($x);
    ?>
</body>

</html>
```

## Changing Data Types

You can change data types of a variable by reassigning its value.

```html
<!DOCTYPE html>
<html>

<body>
    <?php
        $x = 2;
        var_dump($x);

        $x = "Tristan";
        var_dump($x);
    ?>
</body>

</html>
```

You can use casting to change the data type of a variable without changing its value.

```html
<!DOCTYPE html>
<html>

<body>
    <?php
        $x = 7.7;
        $x = (string)$x;

        var_dump($x);
    ?>
</body>

</html>
```

## PHP Resource

Not an actual data type.
- Stores a reference to functions and resources external to PHP.
- Like a database call.