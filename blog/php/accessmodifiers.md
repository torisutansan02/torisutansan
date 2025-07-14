---
title: 'Access Modifiers'
date: 'July 13, 2025'
category: 'PHP 7'
---

# Access Modifiers

Properties and methods have access modifiers.
- Control where they can be accessed.

The three access modifiers:
- public.
  - Can be accessed everywhere.
- protected.
  - Property or method can be accessed within the classes and their derivatives.
- private.
  - Property or method can be accessed within the class.

```html
<!DOCTYPE html>
<html>

<body>
<?php
    class Car {
        // Properties
        public $name;
        protected $price;
        private $desc;

        // Methods
        function set_name($name) {
            $this->name = $name;
        }

        protected function set_price($price) {
            $this->price = $price;
        }

        private function set_desc($desc) {
            $this->desc = $desc;
        }
    }

    $lexus = new Car();

    // Allowed
    $lexus->name = "Lexus";
    
    // Not allowed
    $lexus->price = 1000;
    $lexus->desc = "Nice car!";

    // Allowed
    $lexus->set_name("Lexus");

    // Not allowed
    $lexus->set_price(1000);
    $lexus->set_desc("Nice car!");
?>
</body>

</html>
```