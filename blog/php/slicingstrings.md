---
title: 'PHP Slicing Strings'
date: 'July 12, 2025'
category: 'PHP 7'
---

# Slicing Strings

You can slice strings in PHP.

## Slicing

Return a range of characters using the substr() function.
- Three parameters:
  - The variable.
  - The start index.
  - The range.

```html
<!DOCTYPE html>
<html>

<body>
    <?php
        $name = "Tristan Cai is a Software Engineer";
        echo substr($name, 3, 5);
    ?>
</body>

</html>
```

## Slice to the End

You can leave out the length parameter to slice to the end.

```html
<!DOCTYPE html>
<html>

<body>
    <?php
        $name = "Tristan is a Software Engineer";
        echo substr($name, 4);
    ?>
</body>

</html>
```

## Slicing From the End

You can use a negative index to slice from the end.
- Last index is -1.

```html
<!DOCTYPE html>
<html>

<body>
    <?php
        $desc = "Tristan is a Software Engineer";
        echo substr($desc, -4, 5);
    ?>
</body>

</html>
```

## Negative Length

You can use a negative length to omit characters.
- Starting from the end.

```html
<!DOCTYPE html>
<html>

<body>
    <?php
        $desc = "Tristan is an awesome person!";
        echo substr($desc, 2, -3);
    ?>
</body>

</html>
```