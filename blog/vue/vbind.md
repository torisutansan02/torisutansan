---
title: 'V-Bind'
date: 'July 9, 2025'
category: 'Vue'
---

# V-Bind Directive

Lets us bind an HTML attribute to data in the Vue instance.
- Allows us to change the attribute dynamically.

```html
<div v-bind:[attribute]="[Vue data]"></div>
```

## CSS Binding

V-bind can be used for in-line styling and modifying classes dynamically.
- Use the style attribute.

```html
<div v-bind:style="{ fontSize: size }">
    Tristan
</div>
```

Ability to separate the font size number value from the font size unit.

```html
<div v-bind:style="{ fontSize: size + 'px' }">
    Tristan
</div>
```

Possibility to write CSS property with CSS syntax (kebab-case), not recommended.

```html
<div v-bind:style="{ 'font-size': size + 'px' }">
    Tristan
</div>
```

Background color depends on the bgVal data property.

```html
<div v-bind:style="{ backgroundColor: 'hsl('+bgVal+', 60%, 60%)' }">
    Tristan but cool background color
</div>
```

Ternary operator for determining whether 'isRed' expression is True or False.

```html
<div v-bind:style="{ backgroundColor: isRed ? 'red': 'blue' }">
    Red or Blue
</div>
```

## Bind Class

V-bind can be used to change the class attribute.
- Like a variable.

```html
<div v-bind:class="className">
    Class
</div>
```

V-bind class can also be an object.
- Takes effect if it is set to true.

```html
<div v-bind:class="{ myClass: true }">
    Conditionally changes background color.
</div>
```

The value of a V-bind object's class can be assigned depending on a Vue property.

```html
<div v-bind:class= "{ myClass: isRed }">
    Class conditionally set to change background color.
</div>
```

## Shorthand

Shorthand for 'v-bind' is ':'

```html
<div :class="{ redClass: isRed }">
    Class conditionally set to change background color.
</div>
```