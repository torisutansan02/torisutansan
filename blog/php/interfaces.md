---
title: 'Interfaces'
date: 'July 12, 2025'
category: 'PHP 7'
---

# What are Interfaces?

Allows us to specify what methods a class should implement.
- One or more classes using the same interface is polymorphism.
- Declared with the interface keyword.

## Interfaces vs. Abstract Classes

Similar to abstract classes. Differences are:
- Interfaces cannot have properties, abstract classes can.
- Methods must be public.
  - Abstract methods can be public or protected.
- Methods in an interface are abstract.
  - Cannot be implemented in code and abstract keyword is unnecessary.
- Classes can implement an interface while inheriting from another class.

## Using Interfaces

- Use the implements keyword
  - Must implement all of the interface's methods.

```html
<!DOCTYPE html>
<html>

<body>
<?php
    interface Animal {
        public function makeSound();
    }

    class Cat implements Animal {
        public function makeSound() {
            return "Meow!";
        }
    }

    class Dog implements Animal {
        public function makeSound() {
            return "Woof!";
        }
    }

    class Bird implements Animal {
        public function makeSound() {
            return "Chirp!";
        }
    }

    $cat = new Cat();
    echo $cat->makeSound();

    $dog = new Dog();
    echo $dog->makeSound();

    $bird = new Bird();
    echo $bird->makeSound();
?>
</body>

</html>
```

The above example uses polymorphism.
- One abstract class or interface is used by multiple classes.

Let's use a loop to simplify the code and make it more readable.

```html
<!DOCTYPE html>
<html>

<body>
<?php
    interface Animal {
        public function makeSound();
    }

    class Cat implements Animal {
        public function makeSound() {
            return "Meow!";
        }
    }

    class Dog implements Animal {
        public function makeSound() {
            return "Woof!";
        }
    }

    class Bird implements Animal {
        public function makeSound() {
            return "Chirp!";
        }
    }

    $cat = new Cat();
    $dog = new Dog();
    $bird = new Bird();

    $animals = [
        $cat,
        $dog,
        $bird
    ];

    foreach ($animals as $animal) {
        echo $animal->makeSound();
    }
?>
</body>

</html>
```