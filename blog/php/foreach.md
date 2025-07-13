---
title: 'ForEach Loop'
date: 'July 12, 2025'
category: 'PHP 7'
---

# ForEach Loop

Simply loops through an array of items.
- ($array as $value)

```html
<!DOCTYPE html>
<html>

<body>
<?php
    $foods = array('Pizza', 'Pasta', 'Burger');

    foreach ($foods as $food) {
        echo "$food <br>";
    }
?>
</body>

</html>
```

## Keys and Values

An indexed array has keys starting from $0$ to $n - 1$.

An associative array involves the user to assign keys and values themselves.

```html
<!DOCTYPE html>
<html>

<body>
<?php
    $foods = array("Pizza"=>"12", "Pasta"=>"15", "Burger"=>"10");

    foreach ($foods as $food=>$price) {
        echo "$food: $price <br>";
    }
?>
</body>

</html>
```

## ForEach on Objects

The foreach loop can be used to loop through properties of an object.

```html
<!DOCTYPE html>
<html>

<body>
<?php
    class Food {
        public $name;
        public $price;
        public $desc;

        public function __construct($name, $price, $desc) {
            $this->name = $name;
            $this->price = $price;
            $this->desc = $desc;
        }
    }

    $myFood = new Food("Pizza", 12, "A tasty treat!");
    foreach($myFood as $key=>$value) {
        echo "$key: $value <br>";
    }
?>
</body>

</html>
```

## ForEach ByRef

Any changes done to an array will not affect the array value, unless:
- You use the reference & character.
- The array item is assigned by reference.

```html
<!DOCTYPE html>
<html>

<body>
    <pre>
<?php
        $foods = array('Pizza', 'Hot Dog', 'Taco');

        foreach ($foods as &$food) {
            if ($food == "Hot Dog") $food = "Hamburger";
        }

        var_dump($foods);
?>
    </pre>
</body>

</html>
```

## Alternative Syntax

You can use endforeach to end the foreach statement.

```html
<!DOCTYPE html>
<html>

<body>
<?php
    $games = array('Fortnite', 'Minecraft', 'Roblox');

    foreach ($games as $game):
        echo "$game <br>";
    endforeach;
?>
</body>

</html>
```