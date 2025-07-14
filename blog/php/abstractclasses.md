---
title: 'Abstract Classes'
date: 'July 12, 2025'
category: 'PHP 7'
---

# What are Abstract Classes and Methods?

When a parent class has a named method.
- But need its child class(es) to fill out tasks.

An abstract class contains at least one abstract method.
- A method that is declared, but not implemented.

When inheriting from a abstract class:
- Child class method must have the same name.
- Same or less restricted access.
- If protected: then either protected or public.
- The type and number of required arguments are the same.
- May have optional arguments.

Rules:
- Child class method defined with the same name and it redeclared the parent abstract method.
- Must be defined with the same or less restricted access modifier.
- Required arguments must be the same. Child class may have optional arguments.

```html
<!DOCTYPE html>
<html>

<body>
<?php
    abstract class Food {
        // Properties
        public $name;

        // Constructor
        public function __construct($name) {
            $this->name = $name;
        }

        // Methods
        abstract public function intro(): string;
    }

    class Pizza extends Food {
        public function intro(): string {
            return "$this->name is awesome!";
        }
    }

    class Pasta extends Food {
        public function intro(): string {
            return "$this->name is awesome!";
        }
    }

    class Taco extends Food {
        public function intro(): string {
            return "$this->name is awesome!";
        }
    }

    $pizza = new Pizza("Pizza");
    echo $pizza->intro();
    echo "<br>";

    $pasta = new Pasta("Pasta");
    echo $pasta->intro();
    echo "<br>";

    $taco = new Taco("Taco");
    echo $taco->intro();
    echo "<br>";
?>
</body>

</html>
```

## Abstract Method as an Argument

An example:

```html
<!DOCTYPE html>
<html>

<body>
<?php
    abstract class Car {
        // Abstract Method
        abstract protected function carMake($name);
    }

    class Make extends Car {
        public function carMake($name) {
            if ($name == "Lexus") {
                $prefix = "Expensive";
            }
            elseif ($name == "Honda") {
                $prefix = "Slow";
            }
            else {
                $prefix = "Affordable";
            }

            return "{$prefix} {$name}";
        }
    }

    $car = new Make;
    echo $car->carMake("Lexus");
    echo "<br>";
    echo $car->carMake("Honda");
?>
</body>

</html>
```

Example where the abstract method has an argument.
- Child class has one additional argument.

```html
<!DOCTYPE html>
<html>

<body>
<?php
    abstract class Car {
        // Abstract Method
        abstract protected function carMake($name);
    }

    class Make extends Car {
        public function carMake($name, $separator = ", ") {
            if ($name == "Lexus") {
                $prefix = "2017";
            }
            elseif ($name == "Honda") {
                $prefix = "2022";
            }
            else {
                $prefix = "2023";
            }
            return "{$prefix} {$separator} {$name}";
        }
    }

    $car = new Make;
    echo $car->carMake("Honda");
    echo "<br>";
    echo $car->carMake("Toyota");
?>
</body>

</html>
```