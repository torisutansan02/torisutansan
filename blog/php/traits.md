---
title: 'Traits'
date: 'July 13, 2025'
category: 'PHP 7'
---

# What are Traits?

PHP supports single inheritance:
- A child class can inherit from one single parent.

What if a class needs to inherit multiple behavior?
- Traits solves this.

Used to declare methods used in multiple classes.
- Has methods and abstract methods used in multiple classes.
- Methods can have any access modifier.
  - Public.
  - Protected.
  - Private.

How to use:
- trait keyword followed by trait name.
- use keyword followed by trait name.

```html
<!DOCTYPE html>
<html>

<body>
<?php
    trait warning {
        public function unauthorized() {
            return "User is unauthorized!";
        }
    }

    class User {
        use warning;
    }

    $user = new User();
    echo $user->unauthorized();
?>
</body>

</html>
```

## Multiple Traits

You can use multiple traits in a class.

```html
<!DOCTYPE html>
<html>

<body>
<?php
    trait warning {
        public function unauthorized() {
            return "User is unauthorized!";
        }
    }

    trait suspicious {
        public function detect() {
            return "A suspicious user...";
        }
    }

    class User1 {
        use warning;
    }

    class User2 {
        use warning, suspicious;
    }

    $user1 = new User1();
    echo $user1->unauthorized();
    echo "<br>";

    $user2 = new User2();
    echo $user2->unauthorized();
    echo "<br>";
    echo $user2->detect();
?>
</body>

</html>
```