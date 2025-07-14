---
title: 'Destructor'
date: 'July 12, 2025'
category: 'PHP 7'
---

# __destruct

Called when the object is destructed.
- Script is stopped or exited.

Creating this function automatically calls it at the end of a script.
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
        function __construct($name, $price) {
            $this->name = $name;
            $this->price = $price;
        }

        // Destructor
        function __destruct() {
            echo "The car is {$this->name} with a price of {$this->price}";
        }
    }

    $lexus = new Car("Lexus", 1000);
?>
</body>

</html>
```