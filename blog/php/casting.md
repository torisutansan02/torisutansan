---
title: 'PHP Casting'
date: 'July 12, 2025'
category: 'PHP 7'
---

# PHP Casting

You can change a variable from one data type to another.

## Change Date Type

Below are some of the ways you can cast variables:
- (string)
- (int)
- (float)
- (bool)
- (array)
- (object)
- (unset)

## Cast to String

Use the (string) statement.

```html
<!DOCTYPE html>
<html>

<body>
    <?php
        $a = 7;
        $b = 3.23;
        $c = "Hi";
        $d = false;
        $e = NULL;

        $a = (string)$a;
        $b = (string)$b;
        $c = (string)$c;
        $d = (string)$d;
        $e = (string)$e;
        
        // Verifying Casting
        var_dump($a);
        var_dump($b);
        var_dump($c);
        var_dump($d);
        var_dump($e);
    ?>
</body>

</html>
```

## Cast to Integer

Use the (int) statement.

```html
<!DOCTYPE html>
<html>

<body>
    <?php
        $a = 2;
        $b = 3.21;
        $c = "My light,";
        $d = "My tunnel";
        $e = "Siberian";
        $f = "true";
        $g = NULL;

        $a = (int)$a;
        $b = (int)$b;
        $c = (int)$c;
        $d = (int)$d;
        $e = (int)$e;
        $f = (int)$e;
        $g = (int)$g;

        // Verify Casting
        var_dump($a);
        var_dump($b);
        var_dump($c);
        var_dump($d);
        var_dump($e);
        var_dump($f);
        var_dump($g);
    ?>
</body>

</html>
```

## Cast to Float

Use the (float) statement.

```html
<!DOCTYPE html>
<html>

<body>
    <?php
        $a = 3;
        $b = 5.32;
        $c = "String";
        $d = false;
        $e = NULL;

        $a = (float)$a;
        $b = (float)$b;
        $c = (float)$c;
        $d = (float)$d;
        $e = (float)$e;

        // Verifying Casts
        var_dump($a);
        var_dump($b);
        var_dump($c);
        var_dump($d);
        var_dump($e);
    ?>
</body>

</html>
```

## Cast to Boolean

Use the (bool) statement.

```html
<!DOCTYPE html>
<html>

<body>
    <?php
        $a = 0;
        $b = 1.0;
        $c = "String";
        $d = false;
        $e = NULL;

        $a = (bool)$a;
        $b = (bool)$b;
        $c = (bool)$c;
        $d = (bool)$d;
        $e = (bool)$e;

        // Verifying Casts
        var_dump($a);
        var_dump($b);
        var_dump($c);
        var_dump($d);
        var_dump($e);
    ?>
</body>

</html>
```

## Cast to Array

Use the (array) statement.

```html
<!DOCTYPE html>
<html>

<body>
    <?php
        $a = 5;
        $b = 3.21;
        $c = "String";
        $d = true;
        $e = NULL;

        $a = (array)$a;
        $b = (array)$b;
        $c = (array)$c;
        $d = (array)$d;
        $e = (array)$e;

        // Verifying Casts
        var_dump($a);
        var_dump($b);
        var_dump($c);
        var_dump($d);
        var_dump($e);
    ?>
</body>

</html>
```

Data types converts into an indexed array with one element.
- NULL values convert to an empty array object.
- Objects convert into associative arrays.
  - Property names become keys and property values become values.

```html
<!DOCTYPE html>
<html>

<body>
    <pre>
        <?php
            class Food {
                public $name;
                public $price;
                public $desc;

                public function __construct($name, $price, $desc) {
                    $this->name = $name;
                    $this->price = $price;
                    $this->desc = $desc;
                }

                public function foodDesc() {
                    return $this->name . ": $" . $this->price . ", Description: " . $this->desc;
                }
            }

            $myFood = new Food("Pizza", 12, "A tasty treat!");
            print($myFood->foodDesc());
            print("<br>");
            var_dump($myFood);
        ?>
    </pre>
</body>

</html>
```

## Cast to Object

Use the (object) statement.

```html
<!DOCTYPE html>
<html>

<body>
    <?php
        $a = 3;
        $b = 3.21;
        $c = "String";
        $d = false;
        $e = NULL;

        $a = (object)$a;
        $b = (object)$b;
        $c = (object)$c;
        $d = (object)$d;
        $e = (object)$e;

        // Verifying Casts
        var_dump($a);
        var_dump($b);
        var_dump($c);
        var_dump($d);
        var_dump($e);
    ?>
</body>

</html>
```

Most data types converst into an object with one property "scalar"
- With a corresponding value.

NULL values converts to an empty object.

Indexed arrays converts into objects with the index number as a property name and the value as a property value.

Associative arrays converts objects with keys as property names and values as property values.

```html
<!DOCTYPE html>
<html>

<body>
    <pre>
<?php
        $a = array("Tristan", "SWE", "Awesome");
        $b = array("Tristan"=>"22", "Joseph"=>"33", "Denice"=>"24");

        $a = (object)$a;
        $b = (object)$b;

        // Verifying Casts
        var_dump($a);
        var_dump($b);
?>
    </pre>
</body>

</html>
```

## Cast to NULL

Use the (unset) statement.

```html
<!DOCTYPE html>
<html>

<body>
    <pre>
<?php
        $a = 3;
        $b = 2.32;
        $c = "String";
        $d = false;
        $e = NULL;

        $a = (unset)$a;
        $b = (unset)$b;
        $c = (unset)$c;
        $d = (unset)$d;
        $e = (unset)$e;

        // Verifying Casts
        var_dump($a);
        var_dump($b);
        var_dump($c);
        var_dump($d);
        var_dump($e);
?>
    </pre>
</body>

</html>
```