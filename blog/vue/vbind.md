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
<!DOCTYPE html>
<html>

<head>
    <title> Tristan's Vue Project </title>
    <style>
        #app {
            width: 20rem;
            height: 10rem;
            padding: 5rem;
            background-color: lightgreen;
        }
        #app > p {
            padding: 2rem;
            background-color: lightpink;
        }
    </style>
</head>

<body>
    <h1> V-Bind Font-Size Example </h1>

    <div id="app">
        <p v-bind:style="{fontSize: size}">
            Tristan's world!
        </p>
    </div>

    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>

    <script>
        const app = Vue.createApp({
            data() {
                return {
                    size: '2rem'
                }
            }
        })
        app.mount('#app')
    </script>
</body>

</html>
```

Ability to separate the font size number value from the font size unit.

```html
<!DOCTYPE html>
<html>

<head>
    <title> Tristan's Vue Project </title>
    <style>
        #app {
            width: 20rem;
            height: 10rem;
            padding: 2rem;
            background-color: lightgreen;
        }

        #app > div {
            padding: 2rem;
            background-color: lightpink;
        }
    </style>
</head>

<body>
    <h1> Font Size + PX </h1>

    <div id="app">
        <div v-bind:style="{ fontSize: size + 'rem' }"> Tristan's Awesome! </div>
    </div>

    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
    
    <script>
        const app = Vue.createApp({
            data() {
                return {
                    size: '2'
                }
            }
        })
        app.mount('#app')
    </script>
</body>

</html>
```

Possibility to write CSS property with CSS syntax (kebab-case), not recommended.

```html
<!DOCTYPE html>
<html>

<head>
    <title> Tristan's Vue Project </title>
    <style>
        #app {
            width: 20rem;
            height: 10rem;
            padding: 5rem;
            background-color: lightpink;
        }

        #app > div {
            padding: 2rem;
            background-color: lightgreen;
        }
    </style>
</head>

<body>
    <h1> V-Bind Font Size </h1>

    <div id="app">
        <div v-bind:style="{ 'font-size': size}">
            Tristan's Cool~!
        </div>
    </div>

    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>

    <script>
        const app = Vue.createApp({
            data() {
                return {
                    size: '2rem'
                }
            }
        })
        app.mount('#app')
    </script>
</body>

</html>
```

Background color depends on the bgVal data property.

```html
<!DOCTYPE html>
<html>

<head>
    <title> Tristan's Vue Project </title>
    <style>
        #app > div {
            width: fit-content;
            padding: 2rem;
            border-radius: 1rem;
            border: 1px solid black;
            text-align: center;
        }
    </style>
</head>

<body>
    <h1> V-Bind Background Color </h1>

    <div id="app">
        <div v-bind:style="{ backgroundColor: color }">
            Light Pink Background Color
        </div>
    </div>

    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>

    <script>
        const app = Vue.createApp({
            data() {
                return {
                    color: 'lightpink'
                }
            }
        })
        app.mount('#app')
    </script>
</body>

</html>
```

Ternary operator for determining whether 'isRed' expression is True or False.

```html
<!DOCTYPE html>
<html>

<head>
    <title> Tristan's Vue Project </title>
    <style>
        #app > div {
            width: fit-content;
            padding: 2rem;
        }
    </style>
</head>

<body>
    <h1> V-Bind with Ternary Operator </h1>

    <div id="app">
        <button v-on:click="isRed = !isRed">
            Click
        </button>
        <div v-bind:style="{ backgroundColor: isRed ? 'lightcoral' : 'lightgreen' }">
            Changes color on a condition.
        </div>
    </div>

    <script src="https://unpkg.com/vue@3/dist/vue.global.js"> </script>

    <script>
        const app = Vue.createApp({
            data() {
                return {
                    isRed: false
                }
            }
        })
        app.mount('#app')
    </script>
</body>

</html>
```

## Bind Class

V-bind can be used to change the class attribute.
- Like a variable.

```html
<!DOCTYPE html>
<html>

<head>
    <title> Tristan's Vue Project </title>
    <style>
        .red {
            width: fit-content;
            padding: 2rem;
            border: 1px solid black;
            border-radius: 1rem;
            background-color: lightcoral;
        }
    </style>
</head>

<body>
    <h1> V-Bind to change class </h1>

    <div id="app">
        <div v-bind:class="redBG">
            Red Background
        </div>
    </div>

    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>

    <script>
        const app = Vue.createApp({
            data() {
                return {
                    redBG: 'red'
                }
            }
        })
        app.mount('#app')
    </script>
</body>

</html>
```

V-bind class can also be an object.
- Takes effect if it is set to true.

```html
<!DOCTYPE html>
<html>

<head>
    <title> Tristan's Vue Project </title>
    <style>
        .blue {
            width: fit-content;
            padding: 2rem;
            background-color: lightblue;
        }

        .blue:hover {
            opacity: 0.7;
        }
    </style>
</head>

<body>
    <h1> V-Bind Class True or False </h1>

    <div id="app">
        <div v-bind:class="{ blue: true }">
            Blue Background
        </div>
    </div>

    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>

    <script>
        const app = Vue.createApp({
            // Empty Vue Instance
        })
        app.mount('#app')
    </script>
</body>

</html>
```

The value of a V-bind object's class can be assigned depending on a Vue property.

```html
<!DOCTYPE html>
<html>

<head>
    <title> Tristan's Vue Project </title>
    <style>
        #app > button {
            cursor: pointer;
            background-color: gray;
        }
        
        #app > button:hover {
            background-color: lightgray;
        }

        #app > div {
            width: fit-content;
            padding: 2rem;
        }

        .red {
            background-color: lightcoral;
        }
    </style>
</head>

<body>
    <h1> V-Bind to Dynamically Change Class </h1>

    <div id="app">
        <button v-on:click="isRed = !isRed"> Click </button>
        <div v-bind:class="{ red: isRed }">
            Button changes background to red.
        </div>
    </div>

    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>

    <script>
        const app = Vue.createApp({
            data() {
                return {
                    isRed: false
                }
            }
        })
        app.mount('#app')
    </script>
</body>

</html>
```

## Shorthand

Shorthand for 'v-bind' is ':'

```html
<!DOCTYPE html>
<html>

<head>
    <title> Tristan's Vue Project </title>
    <style>
        #app > button {
            cursor: pointer;
            background-color: gray;
        }
        
        #app > button:hover {
            background-color: lightgray;
        }

        #app > div {
            width: fit-content;
            padding: 2rem;
        }

        .red {
            background-color: lightcoral;
        }
    </style>
</head>

<body>
    <h1> V-Bind Shorthand </h1>

    <div id="app">
        <button @click="isRed = !isRed"> Click </button>
        <div :class="{ red: isRed }">
            Button changes background to red.
        </div>
    </div>

    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>

    <script>
        const app = Vue.createApp({
            data() {
                return {
                    isRed: false
                }
            }
        })
        app.mount('#app')
    </script>
</body>

</html>
```