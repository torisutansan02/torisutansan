---
title: "Switch Statements"
date: 'July 12, 2025'
category: 'PHP 7'
---

# Switch Statements

Performs different actions based on different conditions.

How does it work?
- Expression is evaluated once.
- Value of the expression is compared with the value of each case.
- When there is a match, block of code is executed.
- The break keyword breaks out of switch block.
- The default code block is executed if there is no match.

```html
<!DOCTYPE html>
<html>

<body>
<?php
    $bestNumber = 3;

    switch ($bestNumber) {
        case "5":
            echo "5";
            break;
        case "4":
            echo "4";
            break;
        case "3":
            echo "3";
            break;
        default:
            echo "Couldn't find";
    }
?>
</body>

</html>
```

## Break Keyword

Used to break out of switch block.
- Stops the execution of code.
- Last block does not need a break.

## Default Keyword

If no match is found, default code block executes.

```html
<!DOCTYPE html>
<html>

<body>
<?php
    $x = 10;
    switch ($x) {
        case "5":
            echo "5";
            break;
        case "6":
            echo "6";
            break;
        default:
            echo "Not found!";
    }
?>
</body>

</html>
```

## Common Code Blocks

You can have multiple cases use the same code block.

```html
<!DOCTYPE html>
<html>

<body>
<?php
    $x = 2;
    switch ($x) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            echo "Number is between 1 and 6";
            break;
        case 7:
            echo "Number is 7";
            break;
        default:
            echo "Number not found!";
    }
?>
</body>

</html>
```