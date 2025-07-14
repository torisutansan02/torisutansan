---
title: 'Classes and Objects'
date: 'July 12, 2025'
category: 'PHP 7'
---

# Classes and Objects

A class is a template for objects.
- Objects are instances of classes.

## OOP

We have a class.
- Classes have different properties.
  - These properties are variables.
- Objects are creaates.
  - They inherit properties and behaviors from classes.
  - But each object has different values for properties.

## Define a Class

Classes are defined with the class keyword followed by its name.
- Then wrap it with curly braces.
- This is where the properties and methods go.
- Properties and functions are called methods.

## Define Objects

Classes need objects.
- Objects have all properties and methods defined in the class.
  - With different property values.
  - Use the new keyword to create objects.

```html
<!DOCTYPE html>
<html>

<body>
<?php
    class Food {
        // Properties
        public $name;
        public $price;
        public $desc;

        // Methods
        function set_name($name) {
            $this->name = $name;
        }

        function get_name() {
            return $this->name;
        }

        function set_price($price) {
            $this->price = $price;
        }

        function get_price() {
            return $this->price;
        }

        function set_desc($desc) {
            $this->desc = $desc;
        }

        function get_desc() {
            return $this->desc;
        }
    }

    $pancake = new Food();
    $hamburger = new Food();
    
    $pancake->set_name("Pancake");
    $pancake->set_price(12);
    $pancake->set_desc("Tasty treat!");

    $hamburger->set_name("Hamburger");
    $hamburger->set_price(15);
    $hamburger->set_desc("Yum!");

    echo $pancake->get_name();
    echo "<br>";
    echo $pancake->get_price();
    echo "<br>";
    echo $pancake->get_desc();
    echo "<br>";

    echo "<br>";
    echo $hamburger->get_name();
    echo "<br>";
    echo $hamburger->get_price();
    echo "<br>";
    echo $hamburger->get_desc();
    echo "<br>";
?>
</body>

</html>
```

## The $this Keyword

Refers to the current object.
- Only available inside methods.

You can change properties inside classes
- And outside.

```html
<!DOCTYPE html>
<html>

<body>
<?php
    class Food {
        // Properties
        public $name;

        // Methods
        function set_name($name) {
            $this->name = $name;
        }
    }

    $apple = new Food();
    $apple->set_name("Apple");

    echo $apple->name;
    
    $apple->name = "Banana";

    echo $apple->name;
?>
</body>

</html>

## instanceof

You can use the instanceof keyword to determine if an object belongs to a class.

```html
<!DOCTYPE html>
<html>

<body>
<?php
    class Food {
        // Properties
        public $name;

        // Methods
        function set_name($name) {
            $this->name = $name;
        }
    }

    $apple = new Food();
    $apple->set_name("Apple");

    var_dump($apple instanceof Food);
?>
</body>

</html>
```