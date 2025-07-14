---
title: 'Iterables'
date: 'July 13, 2025'
category: 'PHP 7'
---

# What is an Iterable?

Any value which can be looped in a foreach() loop.
- Iterable pseudotype introducted in PHP 7.1.
  - Used as a data type for function arguments and function return values.

## Using Iterables

Used as a data type of a function argument or as the return type.

```html
<!DOCTYPE html>
<html>

<body>
<?php
    function test(iterable $foods) {
        foreach($foods as $food) {
            echo $food;
        }
    }

    $foods = [
        "Banana",
        "Potato",
        "Tomato"
    ];

    test($foods);
?>
</body>

</html>
```

Returning an iterable.

```html
<!DOCTYPE html>
<html>

<body>
<?php
    function getFoods():iterable {
        return ["Squash", "Potato", "Tomato"];
    }

    $foods = getFoods();
    foreach($foods as $food) {
        echo $food;
    }
?>
</body>

</html>
```

## Creating Iterables

Arrays
- All arrays are iterables.
- Can be used as an argument of a function that requires an iterable.

Iterators
- Objects implement the Iterator interface that can be used as an argument of a function.
  - Requires an iterable.
- Contains a list of items and provides methods to loop through.
  - Keeps a pointer to one of the elements in a list.
  - Must have a key which can be used.

Iterators have these methods:
- current()
  - Returns element that the pointer is pointint to.
  - Any data type.
- key()
  - Returns key associated with the current element.
  - Can be an integer, float, boolean, or string.
- next()
  - Moves the pointer to the next element.
- rewind()
  - Moves pointer to the first element.
- valid()
  - If internal pointer not pointing to any element:
    - Returns false.
    - Returns true otherwise.

```html
<!DOCTYPE html>
<html>

<body>
<?php
// Create an Iterator
class MyIterator implements Iterator {
  private $items = [];
  private $pointer = 0;

  public function __construct($items) {
    // array_values() makes sure that the keys are numbers
    $this->items = array_values($items);
  }

  public function current() {
    return $this->items[$this->pointer];
  }

  public function key() {
    return $this->pointer;
  }

  public function next() {
    $this->pointer++;
  }

  public function rewind() {
    $this->pointer = 0;
  }

  public function valid() {
    // count() indicates how many items are in the list
    return $this->pointer < count($this->items);
  }
}

// A function that uses iterables
function printIterable(iterable $myIterable) {
  foreach($myIterable as $item) {
    echo $item;
  }
}

// Use the iterator as an iterable
$iterator = new MyIterator(["a", "b", "c"]);
printIterable($iterator);
?>
</body>

</html>
```