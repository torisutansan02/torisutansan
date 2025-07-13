---
title: "PHP Echo and Print"
date: "July 12, 2025"
category: "PHP 7"
---

# PHP Echo and Print Statements

They are the same, but:
- Echo has no return value.
  - Can take multiple parameters (rare).
  - Slightly faster.
- Print has a return value of 1.
  - Can be used in expressions.
  - Can take one parameter.
  - Slightly slower.

## PHP Echo

Used with or without parentheses.

```html
<!DOCTYPE html>
<html>

<body>
    <?php
        echo "Hello, world!";
        echo "<br>";
        echo("Hello, world!");
        echo("<br>");
    ?>
</body>

</html>
```

## Display Text

Text can display HTML markup.

```html
<!DOCTYPE html>
<html>

<body>
    <?php
        echo "<h2> Tristan's world! </h2>";
        echo "<p> Hello, world! </p>";
        echo "<p> Tristan lives as a hermit. </p>";
        echo "This ", "is ", "a ", " test"; 
    ?>
</body>

</html>
```

## Display Variables

You can output text and variables.

```html
<!DOCTYPE html>
<html>

<body>
    <?php
        $name = "Tristan";
        $desc = "is a Software Engineer";

        echo "<h1> $name </h1>";
        echo "<p> $name $desc</p>";
    ?>
</body>

</html>
```

## Single Quotes

You can use single quotes, but:
- Variables must be inserted with the . operation.

```html
<!DOCTYPE html>
<html>

<body>
    <?php
        $name = "Tristan";

        echo '<h2>' . $name . '</h2>';
    ?>
</body>

</html>
```

## PHP Print

Can also be used with or without parentheses.

```html
<!DOCTYPE html>
<html>

<body>
    <?php
        print "Hello!";
        print("Hello!");
    ?>
</body>

</html>
```

## Display Text

Print statements can contain HTML markup.

```html
<!DOCTYPE html>
<html>

<body>
    <?php
        print "<h1> Tristan </h1>";
        print "<p> Software Engineer </p>";
        print "<p> 2 YOE </p>";
    ?>
</body>

</html>
```

## Display Variables

Print statements can contain variables.

```html
<!DOCTYPE html>
<html>

<body>
    <?php
        $name = "Tristan";
        print "<h1> $name </h1>";
    ?>
</body>

</html>
```

## Single Quotes

Print statements using single quotes function the same as echo statements.

```html
<!DOCTYPE html>
<html>

<body>
    <?php
        $name = "Tristan";

        print '<h1>' . $name . '</h1>';
    ?>
</body>

</html>
```