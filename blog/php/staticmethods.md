---
title: 'Static Methods'
date: 'July 12, 2025'
category: 'PHP 7'
---

# What are Static Methods?

Can be called directly.
- Without creating an instance of the class.
- Use the double colon in between the class name and method name.

```html
<!DOCTYPE html>
<html>

<body>
<?php
    class Hello {
        public static function hi() {
            return "Hi, Tristan!";
        }
    }

    echo Hello::hi();
?>
</body>

</html>
```

## More on Static Methods

Classes can have static and non-static methods.
- Static method can be accessed from a method in the same class.
    - Use the self keyword.

```html
<!DOCTYPE html>
<html>

<body>
<?php
    class Hello {
        public static function hi() {
            echo "Hi, Tristan!";
        }

        public function __construct() {
            self::hi();
        }
    }

    new Hello();
?>
</body>

</html>
```

Static methods can be called from methods in other classes.
- The static method should be public.

```html
<!DOCTYPE html>
<html>

<body>
<?php
    class A {
        public static function msg1() {
            echo "Hi, Tristan!";
        }
    }

    class B {
        public function message() {
            A::msg1();
        }
    }

    $tristan = new B();
    echo $tristan->message();
?>
</body>

</html>
```

You can use the parent keyword inside a child class.
- Static methods can be public or protected.

```html
<!DOCTYPE html>
<html>

<body>
<?php
    class domain {
        protected static function tristanWebsite() {
            return "<a href='https://torisutan.org'>Website</a>";
        }
    }

    class torisutan extends domain {
        public $webName;

        public function __construct() {
            $this->webName = parent::tristanWebsite();
        }
    }

    $website = new torisutan;
    echo $website->webName;
?>
</body>

</html>
```