---
title: 'Vue Methods'
date: 'July 10, 2025'
category: 'Vue'
---

# Vue Methods

They are functions that belong to the Vue instance under the 'methods' property.
- Great with event handling (v-on).
- Multipurpose.

## Vue 'Methods' Property

Previously used 'data' property, where we can store values.
- Methods can store functions belonging to the Vue instance.
- Idea: the this keyword refers to a data property from inside a method.

The v-on directive is used with a click event. The 'writeMsg' method is called and the text is changed.

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

        #app > div {
            padding: 2rem;
            background-color: lightgreen;
        }
    </style>
</head>

<body>
    <h1> Running a method </h1>

    <div id="app">
        <p> Click on the box </p>
        <div v-on:click="writeMsg">
            {{ text }}
        </div>
    </div>

    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>

    <script>
        const app = Vue.createApp({
            data() {
                return {
                    text: ''
                }
            },
            methods: {
                writeMsg() {
                    this.text = 'Tristan is awesome!'
                }
            }
        })
        app.mount('#app')
    </script>
</body>

</html>
```


## Calling a Method with the Event Object

The event object is passed with the method by default when an event occurs where a method is called.
- Target object, event type, mouse position.

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

        #app > div {
            background-color: lightgreen;
        }
    </style>
</head>

<body>
    <h1> Mouse Pointer Event Object </h1>

    <div id="app">
        <div v-on:mousemove="mousePos">
            <p> xPos: {{xPos}} </p>
            <p> yPos: {{yPos}} </p>
        </div>
    </div>

    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>

    <script>
        const app = Vue.createApp({
            data() {
                return {
                    xPos: 0,
                    yPos: 0
                }
            },
            methods: {
                mousePos(event) {
                    this.xPos = event.offsetX
                    this.yPos = event.offsetY
                }
            }
        })
        app.mount('#app')
    </script>
</body>

</html>
```

We can change the background color with this example.
- Based on the x-direction.
- Add v-bind to change the background-color.

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
        
        #app > div {
            background-color: lightgreen;
        }
    </style>
</head>

<body>
    <h1> Mouse Pointer Event Object </h1>

    <div id="app">
        <div v-on:mousemove="mousePos"
             v-bind:style="{ backgroundColor: 'hsl('+xPos+', 80%, 80%)' }"
        >
            <p> xPos: {{xPos}} </p>
            <p> yPos: {{yPos}} </p>
        </div>
    </div>

    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>

    <script>
        const app = Vue.createApp({
            data() {
                return {
                    xPos: 0,
                    yPos: 0
                }
            },
            methods: {
                mousePos(event) {
                    this.xPos = event.offsetX
                    this.yPos = event.offsetY
                }
            }
        })
        app.mount('#app')
    </script>
</body>

</html>
```

The below example uses the textarea tag to make it look like we are writing a book.
- Listens to 'input' event which occurs during changes.
- Event object is sent with the method by default.
- 'Text' property is updated by the 'writeText' method.
- Span element is set up to show the 'text' value with doubly curly braces.

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

        #app > div {
            width: 10rem;
            overflow-x: auto;
        }
    </style>
</head>

<body>
    <h1> Write Text Event </h1>

    <div id="app">
        <textarea v-on:input="writeText" rows="5" cols="20" placeholder="Write text..."></textarea>
        <div>
            <p> {{ text }} </p>
        </div>
    </div>

    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>

    <script>
        const app = Vue.createApp({
            data() {
                return {
                    text: ''
                }
            },
            methods: {
                writeText(event) {
                    this.text = event.target.value
                }
            }
        })
        app.mount('#app')
    </script>
</body>

</html>
```

## Passing Arguments

We can pass arguments with a method when an event occurs.
- Add different buttons with parameter(s).
- Same method for different buttons, call the method with different numbers.

```html
<!DOCTYPE html>
<html>

<head>
    <title> Tristan's Vue Project </title>
    <style>

    </style>
</head>

<body>
    <h1> Passing Arguments with Methods </h1>

    <div id="app">
        <p> {{ slices }} </p>
        <p> Press any three buttons </p>
        <button v-on:click="addSlices(3)"> +3 </button>
        <button v-on:click="addSlices(8)"> +8 </button>
        <button v-on:click="addSlices(-3)"> -3 </button>
    </div>

    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>

    <script>
        const app = Vue.createApp({
            data() {
                return {
                    slices: 0
                }
            },
            methods: {
                addSlices(number) {
                    this.slices += number
                }
            }
        })
        app.mount('#app')
    </script>
</body>

</html>
```

## Passing both an Argument and the Event Object

You can pass both the event object and another argument.
- $event reserved name.

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

        #app > div {
            padding: 2rem;
            background-color: lightpink;
        }
    </style>
</head>

<body>
    <h1> Passing an Argument and Event Object with Method </h1>

    <div id="app">
        <div id="icon" v-on:click="msgDisplay($event, 'Hello, ')">
            Click Me
        </div>
        <p> {{ message }} </p>
    </div>

    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>

    <script>
        const app = Vue.createApp({
            data() {
                return {
                    message: ''
                }
            },
            methods: {
                msgDisplay(event, msg) {
                    this.message = msg
                    this.message += event.target.id
                }
            }
        })
        app.mount('#app')
    </script>
</body>

</html>
```

## Passing Arguments and Event Objects with Methods

This is a more expansive example.

```html
<!DOCTYPE html>
<html>

<head>
    <title> Tristan's Vue Project </title>
    <style>
    </style>
</head>

<body>
    <h1> Difficult Example </h1>

    <div id="app">
        <div id="pizzas">
            <button v-on:click="addItems($event, 1)"> +1 </button>
        </div>
        <div id="tacos">
            <button v-on:click="addItems($event, 3)"> +3 </button>
        </div>
        <div id="squashes">
            <button v-on:click="addItems($event, 5)"> +5 </button>
        </div>
        <p> 
            Pizza(s): {{ pizzas }}, Tacos: {{ tacos }}, Squashe(s): {{ squashes }}
        </p>
    </div>

    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>

    <script>
        const app = Vue.createApp({
            data() {
                return {
                    pizzas: 0,
                    tacos: 0,
                    squashes: 0
                }
            },
            methods: {
                addItems(e, number) {
                    if (e.target.parentElement.id === "pizzas") {
                        this.pizzas += number;
                    }
                    else if (e.target.parentElement.id === "tacos") {
                        this.tacos += number;
                    }
                    else {
                        this.squashes += number;
                    }
                }
            }
        })
        app.mount('#app')
    </script>
</body>

</html>
```