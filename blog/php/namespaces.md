---
title: 'Namespaces'
date: 'July 13, 2025'
category: 'PHP 7'
---

# What are Namespaces?

Solves two different problems:
- Allow for better organization by grouping classes that work together.
- Allow the same name to be used for more than one class.
- Declared at the beginning of a file with the namespace keyword.

```html
<?php
    namespace Html;
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
        public function message() {
            return "This {$this->name} costs {$this->price} with a description of {$this->desc}";
        }
    }
    
    $lexus = new Car("Lexus", 1000, "awesome car!");
?>

<!DOCTYPE html>
<html>

<body>
<?php
    echo $lexus->message();
?>
</body>

</html>
```

## Using Namespaces

Code that follows a namespace declartion:
- Operating inside the namespace.
- Classes belong to the namespace.
  - Instantiated without any qualifiers.
- To access outside a namespace, class needs to have the namespace attached.

Html.php:
```html
<?php
namespace Html;

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
    public function message() {
        echo "{$this->name} car costs {$this->price} with a description of: {$this->desc}";
    }
}
?>
```

index.php
```html
<?php
include "Html.php";

$lexus = new Html\Car("Lexus", 1000, "awesome car!");
?>

<html>

<body>
<?php
    $lexus->message();
?>
</body>

</html>
```

You can also declare namespace in both files.

Html.php
```html
<?php
namespace Html;

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
    public function message() {
        echo "{$this->name} car costs {$this->price} with a description of: {$this->desc}";
    }
}
?>
```

index.php
```html
<?php
namespace Html;
include "Html.php";

$lexus = new Car("Lexus", 1000, "awesome car!");
?>

<html>

<body>
<?php
    $lexus->message();
?>
</body>

</html>
```

## Namespace Alias

You can use an alias to make it easier to write.
- Namespace with an alias.
- Class with an alias.

```php
<?php
use Html as H;
?>
```

```php
<?php
use Html\Table as T;
?>
```