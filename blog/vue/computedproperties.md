---
title: 'Vue Computed Properties'
date: 'July 11, 2025'
category: 'Vue'
---

# Vue Computed Properties

What are computed properties?
- Like data properties, but depend on other properties.
- Like methods, but do not accept input arguments.
- Updated automatically when a dependency changes.
    - Methods are called on when something happens, like event handling.
- Used when outputting something that depends on something else.

## Computed Properties are Dynamic

It changes depending on the value of one or more data properties.
- Reserved name is 'computed'.

## Computed Property 'yes' or 'no'

You can add a True or False feedback when the checkbox gets checked.

```html
<input type="checkbox" v-model="chbxVal"> {{ chvxVal }}

data() {
    return {
        chbxVal: false
    }
}
```

A more intuitive answer to a checkbox is Yes or No, not True or False.

```html
<input type="checkbox" v-model="chbxVal"> {{ isImportant }}

data() {
    return {
        chbxVal: false
    }
},
computed: {
    isImportant() {
        if (this.chbxVal) {
            return 'yes'
        }
        else {
            return 'no'
        }
    }
}
```

## Computed Properties vs. Methods

Both written as functions, but:
- Methods run when called from HTML.
    - Computed properties automatically update from a dependency change.
- Computed properties are used the same way we use data properties, but are dynamic.

