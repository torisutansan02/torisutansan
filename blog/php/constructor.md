---
title: 'Constructor'
date: 'July 12, 2025'
category: 'PHP 7'
---

# __construct

A construct allows us to initialize an object's properties upon creation.
- Automatically call this function when you create an object.
- Starts with two underscores.

```html
<!DOCTYPE html>
<html>

<body>
<?php
    class Car {
        // Properties
        public $name;
        public $price;

        // Constructor
        function __construct($name) {
            $this->name = $name;
            $this->price = $price;
        }

        // Methods
        function get_name() {
            return $this->name;
        }

        function get_price() {
            return $this->price;
        }
    }

    $lexus = new Car("Lexus", 12);

    echo $lexus->get_name();
    echo $lexus->get_price();
?>
</body>

</html>
```