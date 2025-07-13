---
title: 'PHP Variables Scope'
date: 'July 12, 2025'
category: 'PHP 7'
---

# PHP Variables Scope

PHP variables can be declared anywhere in a script.
- Global.
- Local.
- Static.

## Global and Local Scope

Variables in the outermost layer of a file outside of functions are global.
- Can only be accessed on the outermost layer.

```html
<!DOCTYPE html>
<html>

<body>
    <?php
        $x = 5;

        function localFunction() {
            // Will not print x
            echo "<p> Variable x: $x </p>";
        }
        localFunction();

        // Will print x
        echo "<p> Variable x: $x";
    ?>
</body>

</html>
```

Variables within a function are in the local scope.
- Will not be accessible outside of the function.

```html
<!DOCTYPE html>
<html>

<body>
    <?php
        function localFunction() {
            $x = 5;
            // Will print x
            echo "<p> Variable x: $x </p>";
        }
        localFunction();
        
        // Will not print x
        echo "<p> Variable x: $x </p>";
    ?>
</body>

</html>
```

You can have local variables with the same name in different functions.
- They are only recognized in the functions they are declared in.

## PHP Global Keyword

The global keyword is used to access a global variable within the local scope.
- Use before variables.

```html
<!DOCTYPE html>
<html>

<body>
    <?php
        $x = 3;

        function localFunction() {
            global $x;
            $x = $x + $x;
        }
        localFunction();

        echo $x;
    ?>
</body>

</html>
```

Global variables are stored in an array called \$GLOBALS[index].
- Holds the name of the variable.
- Accessible from within functions.
  - To update global variables directly.
  
```html
<!DOCTYPE html>
<html>

<body>
    <?php
        $x = 3;
        $y = 5;

        function localFunction() {
            $GLOBALS['x'] = $GLOBALS['y'] + $GLOBALS['x'];
        }
        localFunction();

        echo $x
    ?>
</body>

</html>
```

## PHP Static Keyword

The static keyword allows us to keep local variables.
- By default , they are deleted.

```html
<!DOCTYPE html>
<html>

<body>
    <?php
        function localFunction() {
            static $x = 5;
            echo $x;
            $x++;
        }
        localFunction();
        echo "<br>";
        localFunction();
        echo "<br>";
        localFunction();
        echo "<br>";
    ?>
</body>

</html>
```

The variable will contain the information it contained from the last function call.
- The variable is still local to the function.