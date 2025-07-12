---
title: 'Vue Watchers'
date: 'July 11, 2025'
category: 'Vue'
---

# Vue Watchers

What is a watcher?
- Method that watches a data property with the same name.
- Runs every time the data property value changes.
- Use if a certain data property value requires an action.

## Watcher Concept

It's reserved name is 'watcher'.

A watcher method is never called.
- Automically called when a property value changes.
- New property value is available as an input argument to the watcher method
    - As is the old value.

```html
<input type="range" v-model="rangeVal">
<p> {{ rangeVal }} </p>

const app = Vue.createApp({
    data() {
        rangeVal: 70
    },
    watch: {
        rangeVal(val) {
            if (val > 20 && val < 60) {
                if (val < 40) {
                    this.rangeVal = 20;
                }
                else {
                    this.rangeVal = 60;
                }
            }
        }
    }
})
```

## Watcher With New and Old Values

New and old property value automatically available as input arguments to watcher methods.

```html
<div v-on:click="updatePos"></div>
<p> {{ xDiff }} </p>

const app = Vue.createApp({
    data() {
        xPos: 0,
        xDiff: 0
    },
    watch: {
        xPos(newVal, oldVal) {
            this.xDiff = newVal - oldVal
        }
    },
    methods: {
        updatePos(event) {
            this.xPos = event.offsetX
        }
    }
})
```

We can use these values to give feedback to the user the exact moment the input goes from invalid to valid.

```html

```

## Watchers vs. Methods

Here are the differences between watches and methods:
- Methods are called from HTML.
- Methods called when an event happens.
- Methods automatically receive event object as input.
- Send other values we choose as input to a method.
- Watchers called when the watched data property value changes.
    - Happens automatically.
- We cannot send other values with a watcher as an input.

## Watchers vs. Computed Properties

They are both written as functions.

They are both called automatically when a dependency changes.
- Never called from HTML.

Some differences:
- Watchers depend on one property, the one they watch.
- Computed properties depend on many.
- Computed properties are used like data properties, they are dynamic.
- Watchers are not referred to from HTML.
