---
title: 'Vue CSS Binding'
date: 'July 11, 2025'
category: 'Vue'
---

# CSS Binding

V-Bind allows us to modify style and class attributes.

However, CSS can be changed dynamically with Vue.

## Inline Styling

Use v-bind:style.

```html
<input type="range" v-model="opacityVal">
<div v-bind:style="{ backgroundColor: 'rgba(120, 32, 12, '+opacityVal+')' }">
    Drag range input.
</div>
```

## Assign a Class

User v-bind:class to assign classes to HTML tags.

```html
<div v-for="(img, index) in images">
    <img
        v-bind:src="img.url"
        v-on:click="select(index)"
        v-bind:class="{ selClass: img.sel }"
    >
</div>
```

## Other Ways to Assign Styles and Classes

- Vue merges class and v-bind:class
- Objects containing one or more classes are assigned with v-bind:class="{}"
- camelCase for inline-styling is preferred for v-bind:style
- CSS classes can be assigned with arrays / array notation / syntax.

## Vue Merging Class and V-Bind:Class

Vue can merge both the classes for us.

```html
<div class="impClass" v-bind:class="{yelClass: isYellow}">
    Belongs to two classes.
</div>
```

## Assign More Than One Class

Use a comma to separate and assign multiple classes.

```html
<div v-bind:class="{yelClass: isYellow, impClass: isImportant}">
    Tag belongs to 'yelClass' and 'impClass'.
</div>
```

## Camel Case and Kebab Case

- Can use both for v-bind:style
    - Though camelCase is preferred.

```html
<div v-bind:style="{ backgroundColor: 'lightpink', 'font-weight': 'bolder' }">
    Pink background and bolder font.
</div>

Differences between camelCase and kebab-case:
- camelCase:
    - First word and first character not capitalized.
    - Proceeding words and first characters are capitalized.
- kebab-case:
    - Words separated by dashes.
```

## Array Syntax with v-bind:class

Use array syntax to add multiple classes.
- Use both classes that depend on a Vue property and classes that do not depend on a Vue property.

```html
<div v-bind:class="[{ impClass: isImportant }, 'yelClass']">
    Div tag belongs to one or two classes depending on the isImportant property.
</div>
```

