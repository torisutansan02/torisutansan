---
title: 'V-If'
date: 'July 10, 2025'
category: 'Vue'
---

# V-If Directive

Allows us to write an if-statement directly in an HTML element without plain JavaScript.
- Referred to as Conditional Rendering.

```html
<!DOCTYPE html>
<html>

<head>
    <title> Tristan's Vue Project </title>
    <style>
        #app {
            width: 20rem;
            height: 10rem;
            background-color: lightgreen;
        }

        #app > div {
            padding: 2rem;
        }
    </style>
</head>

<body>
    <h1> V-If and V-Else </h1>

    <div id="app">
        <p> {{ count }} </p>
        <div v-on:mousemove="color = Math.floor(Math.random()*360)"
             v-bind:style="{ backgroundColor: 'hsl('+color+', 60%, 60%)' }"
        >
            <button v-on:click="count++"> Click </button>
            <p v-if="count > 10"> DANGER ZONE </p>
            <p v-else-if="count > 3"> In Stock </p>
            <p v-else-if="count > 0"> Low in stock </p>
            <p v-else> Not in stock </p>
        </div>
    </div>

    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>

    <script>
        const app = Vue.createApp({
            data() {
                return {
                    count: 0,
                    color: 'lightgreen'
                }
            }
        })
        app.mount('#app')
    </script>
</body>

</html>
```

## Conditionals

A if-statement is either True or False.

What are comparison checks?
- '>', '<'.
    - Greater than, less than.
- '>=', '<='.
    - Greater or equal, less than or equal.
- '==', '!='.
    - Equal, not equal.

What are logical operators?
- '&&'.
    - Logical AND.
- '||'.
    - Logical OR.

## Conditional Rendering Directives

V-If.
- Evaluates as True or False.

V-Else-If.
- Succeeds V-If. Evaluates as True or False.

V-Else.
- Succeeds V-If and V-Else-If. Evaluates as True if the preceeding conditionals are evaluated as False.

## Return Value From a Function

Instead of using a comparison, use the True or False return value from a function.

V-If can be used to create other tags like div or img tags.

You can expand upon this with V-Else-If.

### Webpage Code

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <title> Tristan's Page </title>
    <style>
        #app {
            border: solid black 1px;
            width: fit-content;
            padding: 1rem;
            font-weight: bold;
            background-color: lightpink;
        }
        img {
            width: 100%;
        }
    </style>
</head>

<body>
    <h1> V-If, V-Else-If, V-Else </h1>

    <div id="app">
        <div v-if="msg.includes('pizza')">
            <p> Pizza </p>
        </div>
        <div v-else-if="msg.includes('burrito')">
            <p> Burrito </p>
        </div>
        <p v-else>
            No Pizza nor burrito
        </p>
    </div>

    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>

    <script>
        const app = Vue.createApp({
            data() {
                return {
                    msg: 'Pizza and burritos~!'
                }
            }
        })
        app.mount('#app')
    </script>
</body>

</html>
```