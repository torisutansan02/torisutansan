---
title: 'V-On'
date: 'July 10, 2025'
category: 'Vue'
---

# V-On Directive

Event handling in Vue:
- Which events to listen to.
- What happens after event occurs.

## onclick

Performs an action when an element is clicked.

```html
<!DOCTYPE html>
<html>

<head>
    <title> Tristan's Vue Project </title>
    <style>
        #app {
            border: solid black 1px;
            padding: 1rem;
        }

        #app > button {
            display: block;
            width: fit-content;
            height: fit-content;
        }

        #switch {
            position: relative;
        }

        #switch > div {
            background-color: lightpink;
            width: 2rem;
            height: 2rem;
            margin: 2rem;
            border-radius: 2rem;
        }
    </style>
</head>

<body>
    <h1> Tristan's Switch </h1>

    <div id="app">
        <button v-on:click="switchOn = !switchOn"> Tristan's Switch </button>
        <div id="switch">
            <div v-show="switchOn"></div>
        </div>
    </div>

    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>

    <script>
        const app = Vue.createApp({
            data() {
                return {
                    switchOn: false
                }
            }
        })
        app.mount('#app')
    </script>
</body>

</html>
```

## oninput

Performs an action when an element receives input, like a keystroke.

```html
<!DOCTYPE html>
<html>

<head>
    <title> Tristan's Vue Project </title>
    <style>
        #app {
            border: solid black 1px;
        }
    </style>
</head>

<body>
    <h1> oninput </h1>

    <div id="app">
        <input type="text" v-on:input="strokeCount++" placeholder="Start typing..">
        <p> {{ "Typing events occured: " + strokeCount }} </p>
    </div>

    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>

    <script>
        const app = Vue.createApp({
            data() {
                return {
                    strokeCount: 0
                }
            }
        })
        app.mount('#app')
    </script>
</body>

</html>
```

## mousemove

Performs an action when the mouse pointer moves over an element.

```html
<!DOCTYPE html>
<html>

<head>
    <title> Tristan's Vue Project </title>
    <style>
        #app {
            border-radius: 1px solid black;
        }
        #app > div {
            background-color: lightpink;
            width: 20rem;
            height: 10rem;
        }
    </style>
</head>

<body>
    <h1> mousemove </h1>

    <div id="app">
        <div v-on:mousemove="movementVal=Math.floor(Math.random()*360)"></div>
        <p> {{movementVal}} </p>
    </div>

    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>

    <script>
        const app = Vue.createApp({
            data() {
                return {
                    movementVal: 50
                }
            }
        })
        app.mount('#app')
    </script>
</body>

</html>
```

## Using V-On in a V-For Loop

You can use V-On in a V-For Loop.

Items of the array are available for each iteration inside the v-on value.

```html
<!DOCTYPE html>
<html>

<head>
    <title> Tristan's Vue Project </title>
    <style>
        #app {
            width: 20rem;
            height: 10rem;
        }

        #app > p {
            float: right;
        }

        #app li:hover {
            cursor: pointer;
        }
    </style>
</head>

<body>
    <h1> V-On in a V-For Loop </h1>

    <div id="app">
        <p> {{ textDesc }} </p>
        <ul>
            <li v-for="i in items" v-on:click="textDesc = i.desc">
                {{ i.name }}
            </li>
        </ul>
    </div>

    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>

    <script>
        const app = Vue.createApp({
            data() {
                return {
                    textDesc: '',
                    items: [
                        {name: "Tristan", desc: "Software Engineer"},
                        {name: "Mark", desc: "Accountant"},
                        {name: "Joe", desc: "President"}
                    ]
                }
            }
        })
        app.mount('#app')
    </script>
</body>

</html>
```

## V-On Shorthand

The shorthand for V-On is '@'

```html
<!DOCTYPE html>
<html>

<head>
    <title> Tristan's Vue Project </title>
    <style>
        #app {
            width: 15rem;
            height: 10rem;
        }

        #app > p {
            float: right;
        }
    </style>
</head>

<body>
    <h1> V-On Shorthand </h1>

    <div id="app">
        <p> {{ textDesc }} </p>

        <ul>
            <li v-for="i in items" @:click="textDesc = i.desc">
                {{ i.name }}
            </li>
        </ul>
    </div>

    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>

    <script>
        const app = Vue.createApp({
            data() {
                return {
                    textDesc: '',
                    items: [
                        { name: 'Tristan', desc: 'SWE' },
                        { name: 'Joseph', desc: 'Accountant' },
                        { name: 'Peter', desc: 'Doctor' }
                    ]
                }
            }
        })
        app.mount('#app')
    </script>
</body>

</html>
```