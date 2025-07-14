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
<!DOCTYPE html>
<html>

<head>
    <title> Tristan's Vue Project </title>
    <style>
    </style>
</head>

<body>
    <div id="app">
        <input type="range" min="0" max="100" step="1" v-model="rangeVal">
        <p> {{ rangeVal }} </p>
    </div>

    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>

    <script>
        const app = Vue.createApp({
            data() {
                return {
                    rangeVal: 70
                }
            },
            watch: {
                rangeVal(val) {
                    if (val > 30 && val < 60) {
                        this.rangeVal = 30;
                    }
                }
            }
        })
        app.mount('#app')
    </script>
</body>

</html>
```

## Watcher With New and Old Values

New and old property value automatically available as input arguments to watcher methods.

```html
<!DOCTYPE html>
<html>

<head>
    <title> Tristan's Vue Project </title>
    <style>
        #app > div {
            width: 10rem;
            height: 10rem;
            background-color: lightgreen;
        }
    </style>
</head>

<body>
    <div id="app">
        <div @click="update"></div>
        <p> {{ xDiff }} </p>
    </div>

    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>

    <script>
        const app = Vue.createApp({
            data() {
                return {
                    xPos: 0,
                    xDiff: 0
                }
            },
            watch: {
                xPos(newVal, oldVal) {
                    this.xDiff = newVal - oldVal
                }
            },
            methods: {
                update(event) {
                    this.xPos = event.offsetX
                }
            }
        })
        app.mount('#app')
    </script>
</body>

</html>
```

We can use these values to give feedback to the user the exact moment the input goes from invalid to valid.

```html
<!DOCTYPE html>
<html>

<head>
    <title> Tristan's Vue Project </title>
    <style>
        .valid {
            color: green;
        }

        .invalid {
            color: red;
        }
    </style>
</head>

<body>
    <div id="app">
        <label>
            <input type="email" v-model="address">
        </label>
        <p :class="addClass">{{ feedback }}</p>
    </div>

    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>

    <script>
        const app = Vue.createApp({
            data() {
                return {
                    address: '',
                    feedback: '',
                    addClass: 'invalid'
                }
            },
            watch: {
                address(newV, oldV) {
                    if (!newV.includes('@')) {
                        this.feedback = 'Bad email!';
                        this.addClass = 'invalid';
                    }
                    else {
                        this.feedback = 'Good!';
                        this.addClass = 'valid';
                    }
                }
            }
        })
        app.mount('#app')
    </script>
</body>

</html>
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
