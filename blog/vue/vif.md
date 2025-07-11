---
title: 'V-If'
date: 'July 10, 2025'
category: 'Vue'
---

# V-If Directive

Allows us to write an if-statement directly in an HTML element without plain JavaScript.
- Referred to as Conditional Rendering.

```html
<p v-if="hasApples">
    Tristan has apples.
</p>

<p v-else>
    Tristan does not have apples.
</p>
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

```html
<p v-if="apples > 0">
    Tristan has apples.
</p>

<p v-else>
    Tristan does not have apples.
</p>
```

## Conditional Rendering Directives

V-If.
- Evaluates as True or False.

V-Else-If.
- Succeeds V-If. Evaluates as True or False.

V-Else.
- Succeeds V-If and V-Else-If. Evaluates as True if the preceeding conditionals are evaluated as False.

```html
<p v-if="apples > 3">
    Tristan has apples!
</p>

<p v-else-if="apples > 0">
    Apples running low!
</p>

<p v-else>
    Tristan has no apples!
</p>
```

## Return Value From a Function

Instead of using a comparison, use the True or False return value from a function.

```html
<div id="app">
    <p v-if="msg.includes('pizza')">
        The message includes the word 'pizza'.
    </p>
    <p v-else>
        The message does not include the word 'pizza'.
    </p>
</div>

<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>

<script>
    const app = Vue.createApp({
        data() {
            return {
                msg: "I like tacos and pizza!"
            }
        }
    })
    app.mount('#app')
</script>
```

V-If can be used to create other tags like div or img tags.

```html
<div id="app">
    <div v-if="msg.includes('pizza')">
        <p> Message contains 'pizza'. </p>
        <img src="pizza.svg">
    </div>
    <div v-else>
        Message does not contain 'pizza'.
    </div>
</div>

<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>

<script>
    const app = Vue.createApp({
        data() {
            return {
                msg: 'I like pizza!'
            }
        }
    })
    app.mount('#app')
</script>
```

You can expand upon this with V-Else-If.

```html
<div id="app">
    <div v-if="msg.includes('pizza')">
        <p> Pizza </p>
        <img src="pizza.svg">
    </div>
    <div v-else-if="msg.includes('tomatoes')">
        <p> Tomatoes </p>
        <img src="tomatoes.svg">
    </div>
    <div v-else>
        No pizza or tomatoes
    </div>
</div>

<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>

<script>
    const app = Vue.createApp({
        data() {
            return {
                msg: 'Pizza and tomatoes~!'
            }
        }
    })
    app.mount('#app')
</script>
```

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