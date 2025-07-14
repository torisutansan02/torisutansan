---
title: 'Static Properties'
date: 'July 13, 2025'
category: 'PHP 7'
---

# What are Static Properties?

Can be accessed from a method in the same class with the self keyword.
- And a double colon.

```html
<!DOCTYPE html>
<html>

<body>
<?php
    class Euler {
        public static $value = 2.71828;

        public function value() {
            return self::$value;
        }
    }

    $euler = new Euler();
    echo $euler->value();
?>
</body>

</html>
```

We can use the parent keyword to call a static property from a child class.

```html
<!DOCTYPE html>
<html>

<body>
<?php
    class Euler {
        public static $value = 2.71828;
    }

    class Calculate extends Euler {
        public function value() {
            return parent::$value;
        }
    }

    echo Calculate::$value;

    $euler = new Calculate();
    echo $euler->value();
?>
</body>

</html>
```