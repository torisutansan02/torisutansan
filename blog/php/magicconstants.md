---
title: 'PHP Magic Constants'
date: 'July 12, 2025'
category: 'PHP 7'
---

# PHP Magic Constants

Nine predefined constants that change values depending on where they are used.
- Called magic constants.

Written with double underscores at the start and end.
- Except for ClassName::class constant.

## List of Magic Constants

Here is a list of the magic constants:

```
__CLASS__ 

The class name inside a class.

__DIR__

The directory of the file.

__FILE__

The file name with the full path.

__FUNCTION__

The function name inside a function.

__LINE__

The line number. 

__METHOD__

The class and function name inside a function that belongs to a class.

__NAMESPACE__

The name of the namespace inside a namespace.

__TRAIT__

The trait name inside a trait.

ClassName::class

Name of the specified class and the name of any namespace.
```