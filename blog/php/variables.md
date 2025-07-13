---
title: 'PH Variables'
date: 'July 12, 2025'
category: 'PHP 7'
---

# PHP Variables

They are containers storing information
- Date types and values.

## Declaring Variables

Starts with a \$ sign, followed by =, then the variable name.

```html
<!DOCTYPE html>
<html>

<body>
    <?php
        $x = 5;
        $y = "John";
        echo $y . ", Age: " . $x;
    ?>
</body>

</html>
```

- \$x holds an integer 5.
- \$y holds a string "John".
  - Use quotation marks for strings.
  
Variables are containers for holding data.

## Naming Conventions

You can use a short name like \$x or \$y.
- Or descriptive: \$age, \$date, \$category.
  
Some rules:
- Starts with a \$ sign.
- Must start with a letter or underscore.
  - No number or special character.
- Contains alpha-numeric characters and underscores.
- They are case-sensitive.