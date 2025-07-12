---
title: 'Event Modifiers'
date: 'July 11, 2025'
category: 'Vue'
---

# Event Modifiers

Modify how events trigger the running of methods.
- Helps handle events.

Used with the V-On directive.
- Prevent default submit behavior of HTML forms.
    - v-on:submit.prevent
- Ensures an event runs once after page is loaded
    - v-on:click.once
- Specifies keyboard key to use as an event to run a method.
    - v-on:keyup.enter

## How to Modify the V-On Directive

Used to define how to react on an event.

```html
<button v-on:click="createAlert"> Create Alert </button>
```

Add a modifier to click once
- When page reloads.

```html
<button v-on:click.once="createAlert"> Create Alert </button>
```

```html
<!DOCTYPE html>
<html>

<head>
    <title> Tristan's Vue Project </title>
    <style>
    </style>
</head>

<body>
    <h1> Create Alert Once </h1>

    <div id="app">
        <button v-on:click.once="createAlert">
            ALERT
        </button>
    </div>

    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>

    <script>
        const app = Vue.createApp({
            data() {
                // None
            },
            methods: {
                createAlert() {
                    alert("YOU'VE BEEN HACKED BY TRISTAN!")
                }
            }
        })
        app.mount('#app')
    </script>
</body>

</html>
```

## Different V-On Modifiers

Event modifiers used for:
- Keyboard events.
- Mouse clicks.
- Combination.
- .once used for both.

## Keyboard Key Event Modifiers

- Three keyboard event types:
    - keydown
    - keypress
    - keyup

- What key to listen to after key event:
    - .space
    - .enter
    - .w
    - .up
    - etc.

```html
<!DOCTYPE html>
<html>

<head>
    <title> Tristan's Vue Project </title>
    <style>
    </style>
</head>

<body>
    <h1> Keyboard Key Value Event Modifier </h1>

    <div id="app">
        <input type="text" v-on:keydown="getKey">
        <p> {{ key }} </p>
    </div>

    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>

    <script>
        const app = Vue.createApp({
            data() {
                return {
                    key: ''
                }
            },
            methods: {
                getKey(e) {
                    this.key = e.key
                }
            }
        })
        app.mount('#app')
    </script>
</body>

</html>
```

- You can use a combination of system key modifiers for events.
    - .alt
    - .ctrl
    - .shift
    - .meta

.meta represents the Windows key or command key on Apple.

- .[Vue key alias]
    - .enter
    - .tab
    - .delete
    - .esc
    - .space
    - .up
    - .down
    - .left
    - .right

- .[letter of choice]
    - Specifies letter
    - .t

- .[system modifier key]
    - .alt
    - .ctrl
    - .shift
    - .meta
    - Can be used in combination with other keys, or mouse clicks.

```html
<!DOCTYPE html>
<html>

<head>
    <title> Tristan's Vue Project </title>
    <style>
    </style>
</head>

<body>
    <h1> 'T' Key Event Modifier </h1>

    <div id="app">
        <textarea cols="20" rows="10" v-on:keydown.t="createAlert" placeholder="Write text..."></textarea>
    </div>

    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>

    <script>
        const app = Vue.createApp({
            data() {
                // None
            },
            methods: {
                createAlert(e) {
                    alert("You pressed the 'T' key!")
                }
            }
        })
        app.mount('#app')
    </script>
</body>

</html>
```

## Combine Keyboard Event Modifiers

Used in combination with each other.
    - Two or more things happen simultaneously.

```html
<!DOCTYPE html>
<html>

<head>
    <title> Tristan's Vue Project </title>
    <style>
    </style>
</head>

<body>
    <h1> Key Combination Event Modifier </h1>

    <div id="app">
        <textarea cols="20" rows="10" v-on:keydown.ctrl.s="createAlert" placeholder="Write text..."></textarea>
    </div>

    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>

    <script>
        const app = Vue.createApp({
            data() {
                // None
            },
            methods: {
                createAlert(e) {
                    alert("'Ctrl' + 'S'")
                }
            }
        })
        app.mount('#app')
    </script>
</body>

</html>
```

## Mouse Button Modifiers

Three mouse button modifiers:
- .left
- .center
- .right

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
            width: fit-content;
            padding: 2rem;
            cursor: pointer;
            background-color: lightgreen;
        }
    </style>
</head>

<body>
    <h1> Right Mouse Event Modifier </h1>

    <div id="app">
        <button v-on:click.right="changeColor" v-bind:style="{ backgroundColor: bgColor }">
            Click Here!
        </button>
    </div>

    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>

    <script>
        const app = Vue.createApp({
            data() {
                return {
                    bgColor: 'lightgreen'
                }
            },
            methods: {
                changeColor(e) {
                    this.bgColor = 'lightpink'
                }
            }
        })
        app.mount('#app')
    </script>
</body>

</html>
```

You can combine mouse button events with system modifiers.

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
            width: fit-content;
            padding: 2rem;
            cursor: pointer;
            background-color: lightgreen;
        }
    </style>
</head>

<body>
    <h1> Multiple Events Modifier </h1>

    <div id="app">
        <button v-on:click.right.ctrl="changeColor" v-bind:style="{ backgroundColor: bgColor }">
            Click Here!
        </button>
    </div>

    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>

    <script>
        const app = Vue.createApp({
            data() {
                return {
                    bgColor: 'lightgreen'
                }
            },
            methods: {
                changeColor(e) {
                    this.bgColor = 'lightpink'
                }
            }
        })
        app.mount('#app')
    </script>
</body>

</html>
```

You can prevent a modifier.
- .prevent

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
            width: fit-content;
            padding: 2rem;
            cursor: pointer;
            background-color: lightgreen;
        }
    </style>
</head>

<body>
    <h1> Prevent Event Modifier </h1>

    <div id="app">
        <button v-on:click.right.prevent="changeColor" v-bind:style="{ backgroundColor: bgColor }">
            Click Here!
        </button>
    </div>

    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>

    <script>
        const app = Vue.createApp({
            data() {
                return {
                    bgColor: 'lightgreen'
                }
            },
            methods: {
                changeColor(e) {
                    this.bgColor = 'lightpink'
                }
            }
        })
        app.mount('#app')
    </script>
</body>

</html>
```

The .prevent modifier is easier to use than event.preventDefault().

You can also use modifiers like the left button click in combination with other modifiers.
- Like shift.

## Left Click + Shift

This is another example using left click.

```html
<!DOCTYPE html>
<html>

<head>
    <title> Tristan's Vue Project </title>
    <style>
    </style>
</head>

<body>
    <h1> Left Click + Shift </h1>

    <div id="app">
        <img v-on:click.left.shift="changeImg" v-bind:src="imgUrl">
    </div>

    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>

    <script>
        const app = Vue.createApp({
            data() {
                return {
                    imgUrlIndex: 0,
                    imgUrl: 'https://placehold.co/64x64',
                    images: [
                        'https://placehold.co/60x60',
                        'https://placehold.co/62x62',
                        'https://placehold.co/61x61'
                    ]
                }
            },
            methods: {
                changeImg() {
                    this.imgUrlIndex++;
                    if (this.ImgUrlIndex >= 3) {
                        this.imgUrlIndex = 0
                    }
                    this.imgUrl = this.images[this.imgUrlIndex]
                }
            }
        })
        app.mount('#app')
    </script>
</body>

</html>
```