---
title: 'PHP Escape Characters'
date: 'July 12, 2025'
category: 'PHP 7'
---

# Escape Characters

You can escape characters using $\$.

```html
<!DOCTYPE html>
<html>

<body>
    <?php
        $desc = "Tristan is a \"king\", type shit.";
        echo $desc;
    ?>
</body>

</html>
```

## Other Escape Characters

Here is a list:

```
\' - Single Quote.
\" - Double Quote.
\$ - PHP Variables.
\n - New Line.
\r - Carriage Return.
\t - Tab.
\f - Form Feed.
\ooo - Octal Value.
\xhh - Hex Value.
```