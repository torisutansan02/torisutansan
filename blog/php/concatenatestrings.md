---
title: 'Concatenate Strings'
date: 'July 12, 2025'
category: 'PHP 7'
---

# Concatenating Strings

You can concatenate strings in PHP.

```html
<!DOCTYPE html>
<html>

<body>
    <?php
        $firstName = "Tristan";
        $lastName = "Cai";

        $fullName = $firstName . $lastName;
        echo $fullName;
    ?>
</body>

</html>
```

You can add additional characters.

```html
<!DOCTYPE html>
<html>

<body>
    <?php
        $firstName = "Tristan";
        $lastName = "Cai";

        $fullName = $firstName . " " . $lastName;
        echo $fullName;
    ?>
</body>

</html>
```

Double quotes make this easier!
```html
<!DOCTYPE html>
<html>

<body>
    <?php
        $firstName = "Tristan";
        $lastName = "Cai";

        $fullName = "$firstName $lastName";
        echo $fullName;
    ?>
</body>

</html>
```