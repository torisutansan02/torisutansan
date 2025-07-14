---
title: 'Inheritance'
date: 'July 13, 2025'
category: 'PHP 7'
---

# What is Inheritance?

A class derives from another class.
- Inherits all public and protected properties and methods.
- It has its own properties and methods.
- Uses the extend keyword.

```html
<!DOCTYPE html>
<html>

<body>
<?php
    class Car {
        // Properties
        public $name;
        public $price;
        public $desc;

        // Constructor
        public function __construct($name, $price, $desc) {
            $this->name = $name;
            $this->price = $price;
            $this->desc = $desc;
        }

        // Methods
        public function intro() {
            echo "My favorite car is a {$this->name}, it costs {$this->price}. Description: {$this->desc}";
        }
    }

    class Lexus extends Car {
        public function message() {
            echo "State of the art Lexus!";
        }
    }

    $lexus = new Lexus("Lexus", 1000, "Awesome Car!");
    $lexus->message();
    $lexus->intro();
?>
</body>

</html>
```

## Inheritance and Protected Access

Protected properties and methods can be accessed within a class and their derivatives.

```html
<!DOCTYPE html>
<html>

<body>
<?php
    class Car {
        // Properties
        public $name;
        public $price;
        public $desc;

        // Constructor
        public function __construct($name, $price, $desc) {
            $this->name = $name;
            $this->price = $price;
            $this->desc = $desc;
        }

        // Methods
        protected function intro() {
            echo "Can only access in derivative classes!";
        }
    }

    class Lexus extends Car {
        public function message() {
            $this->intro();
            echo "<br>";
            echo "An amazing car!";
        }
    }

    $lexus = new Lexus("Lexus", 1000, "Awesome Car");
    $lexus->message();
?>
</body>

</html>
```