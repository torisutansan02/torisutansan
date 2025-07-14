---
title: 'Class Constants'
date: 'July 12, 2025'
category: 'PHP 7'
---

# Class Constants

Used to define constant data within a class.
- Declared inside a class with a const keyword.
- Cannot be changed.
- Case-sensitive. Recommended to use all uppercase.
- Can access a constant from outside the class name.

```html
<!DOCTYPE html>
<html>

<body>
<?php
    class Hello {
        const HELLO = "HI THERE!";

        public function helloThere() {
            echo self::HELLO;
        }
    }

    $hello = new Hello();
    $hello->helloThere();
?>
</body>

</html>
```