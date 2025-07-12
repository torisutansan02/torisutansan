---
title: 'V-Show'
date: 'July 10, 2025'
category: 'Vue'
---

# V-Show Directive

Determines whether an element is visible or not.
- Written in the HTML tag attribute.

## Conditional Visibility

Hides an element when a condition is False.
- display: none;

```html
<div v-show="isUser">
    Text to display if client is a user.
</div>
```

If the client is a user (True), display content.
- Else (False), do not display content.

```html
<!DOCTYPE html>
<html>

<head>
    <title> Tristan's Vue Project </title>
    <style>
        #app {
            width: 20rem;
            height: 20rem;
            padding: 5rem;
            border: 1px solid black;
            border-radius: 2rem;
        }

        #app > div {
            width: fit-content;
            background-color: lightgreen;
            text-align: center;
        }
    </style>
</head>

<body>
    <h1> V-Show Visibility </h1>

    <div id="app">
        <p> Click the button below to change status. </p>
        <button v-on:click="show = !show"> Click </button>
        <div v-show="show"> Show Div </div>
    </div>

    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>

    <script>
        const app = Vue.createApp({
            data() {
                return {
                    show: true
                }
            }
        })
        app.mount('#app')
    </script>
</body>

</html>
```

## V-Show vs. V-If

V-If renders an element based on a conditional.
- V-Show assumes an element is created, but does not show it.

It is better to use V-Show to switch visibility of an object.
- Faster response, better user experience.

Why use V-If then?
- Else-if or else conditionals.

V-Show keeps the content, V-If destroys the content.

### Webpage Code

```html
<!DOCTYPE html>
<html>

<head>
    <title> V-Show Vs. V-If </title>
    <style>
        #app {
            border: solid black 1px;
            width: fit-content;
            padding: 1rem;
        }
        #app div {
            padding: 1rem;
            margin: 1rem;
            display: inline-block;
            font-weight: bold;
            border: solid black 1px;
            background-color: lightgreen;
        }
        #app p {
            text-align: center;
            padding: 0.5rem;
            background-color: lightgreen;
        }
    </style>
</head>

<body>
    <h1> V-If vs. V-Show </h1>

    <div id="app">
        <p> Demonstrating V-Show vs. V-If </p>

        <div v-show="isUser">
            Is a user.
        </div>
        <div v-if="isUser">
            Is a user.
        </div>
    </div>

    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>

    <script>
        const app = Vue.createApp({
            data() {
                return {
                    isUser: true
                }
            }
        })
        app.mount('#app')
    </script>

</body>

</html>
```