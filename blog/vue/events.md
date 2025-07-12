---
title: 'Vue Events'
date: 'July 10, 2025'
category: 'Vue'
---

# Vue Events

Event handling is done with the v-on directive.
- HTML elements set up to run a section of code.

Events are easy to use and responsive in Vue.
- Methods are code that can be set up to run when an event happens.

V-On modifiers describe how to react to an event.

## What are Events?

What are some things you may need?
- A button.
- V-On on a button tag.
    - Listens to click event.
- Code to increment slices of pizza.
- A property or variable to store number of pizza slices.
- Double curly braces to show number of pizza slices.

```html
<div id="app">
    <p> {{ "Pizza Slices:" + count }} </p>
    <button v-on:click="count++"> Add Slices </button>
</div>

<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>

<script>
    const app = Vue.createApp({
        data() {
            return {
                count: 0
            }
        }
    })
    app.mount('#app')
</script>
```

The count of pizza slices is automatically incremented.

## Events

There are a multitude of events:
- Click.
- Mouseover.
- Mouseout.
- Keydown.
- Input.

## V-On

The V-On directive allows us to create response pages.
- Works by telling the browser what event to listen to.
- What to do when an event occurs.

## Methods

You can create more complex code for when an event occurs.
- Refer to this method from an HTML attribute.

## Event Modifiers

Modify an event so it happens only once after a page is reloaded.
- Or prevent a form from being submitted.

```html
<!DOCTYPE html>
<html>

<head>
    <title> Tristan's Vue Project </title>
    <style>
        #app {
            border: solid black 1px;
            width: fit-content;
            height: fit-content;
        }
    </style>
</head>

<body>
    <h1> Count Slices of Pizza </h1>

    <div id="app">
        <p> {{ "Slices of Pizza: " + count }} </p>
        <button v-on:click="count++"> Add Pizza Slice </button>
        <button v-on:click="count--"> Remove Pizza Slice </button>
    </div>

    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>

    <script>
        const app = Vue.createApp({
            data() {
                return {
                    count: 0
                }
            }
        })
        app.mount('#app')
    </script>
</body>

</html>
```