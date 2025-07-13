---
title: 'PHP Comments'
date: 'July 12, 2025'
category: 'PHP 7'
---

# Comments

Not executed in the program.
- Used to take notes.
- Understand code.
- Leave out parts of code.

```html
<!DOCTYPE html>
<html>

<body>
    <?php
        // Single Line Comment

        # Also a single line comment

        /*
        Multi-line comment
        */
    ?>
</body>

</html>
```

The below example represents a single-line comment as an explanation.

```html
<!DOCTYPE html>
<html>

<body>
    <?php
        // Prints 'Hi Tristan!'
        echo 'Hi, Tristan!';
    ?>
</body>

</html>
```

The below example represents a comment on the same line as a executable code.

```html
<!DOCTYPE html>
<html>

<body>
    <?php
        echo 'Hi, Tristan!'; // Prints 'Hello, Tristan!'
    ?>
</body>

</html>
```

You can use single line comments to comment out code.
```html
<!DOCTYPE html>
<html>

<body>
    <?php
        // Comments out code
        // echo 'Hi, Tristan!';
    ?>
</body>

</html>
```