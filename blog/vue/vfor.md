---
title: 'V-For'
date: 'July 10, 2025'
category: 'Vue'
---

# V-For Directive

You can use V-For as an attribute in an HTML element.
- Refers to the array inside the Vue instance.
- Elements created will automatically update with array changes.

## List Rendering

Several HTML elements are created with a for-loop.

```html
<!DOCTYPE html>
<html>

<head>
    <title> Tristan's Vue Project </title>
    <style>
    </style>
</head>

<body>
    <h1> V-For to create li-tags </h1>

    <div id="app">
        <ol>
            <li v-for="food in foods">
                {{ food }}
            </li>
        </ol>
    </div>

    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>

    <script>
        const app = Vue.createApp({
            data () {
                return {
                    foods: [
                        'Burrito',
                        'Hamburger',
                        'Salad',
                        'Pizza',
                        'Germaine'
                    ]
                }
            }
        })
        app.mount('#app')
    </script>
</body>

</html>
```

## Looping Through an Array

Looping through an array to display different images.

```html
<!DOCTYPE html>
<html>

<head>
    <title> Tristan's Vue Project </title>
    <style>
    </style>
</head>

<body>
    <h1> V-For looping through an array </h1>

    <div id="app">
        <img v-for="food in foods" v-bind:src="food">
    </div>

    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>

    <script>
        const app = Vue.createApp({
            data() {
                return {
                    foods: [
                        'https://placehold.co/64x64',
                        'https://placehold.co/64x64',
                        'https://placehold.co/64x64',
                        'https://placehold.co/64x64',
                        'https://placehold.co/64x64'
                    ]
                }
            }
        })
        app.mount('#app')
    </script>
</body>

</html>
```

## Looping Through Array of Objects

Looping through an array of objects and displaying properties.

```html
<!DOCTYPE html>
<html>

<head>
    <title> Tristan's Vue Project </title>
    <style>
        #app {
            width: 20rem;
            height: fit-content;
            background-color: lightpink;
        }

        #app > figure {
            justify-content: center;
            text-align: center;
            background-color: lightgreen
        }
    </style>
</head>

<body>
    <h1> V-For to Create Images and Text</h1>

    <div id="app">
        <figure v-for="food in foods">
            <img v-bind:src="food.url">
            <figcaption> {{ food.name }} </figcaption>
        </figure>
    </div>

    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>

    <script>
        const app = Vue.createApp({
            data() {
                return {
                    foods: [
                        { name: 'Burrito', url: 'https://placehold.co/64x64' },
                        { name: 'Pizza', url: 'https://placehold.co/64x64' },
                        { name: 'Pasta', url: 'https://placehold.co/64x64' },
                        { name: 'Spaghetti', url: 'https://placehold.co/64x64' },
                        { name: 'Hamburger', url: 'https://placehold.co/64x64' }
                    ]
                }
            }
        })
        app.mount('#app')
    </script>
</body>

</html>
```

## Getting the Index

You can get the index and value with v-for.
- (Array Element, Index).

```html
<!DOCTYPE html>
<html>

<head>
    <title> Tristan's Vue Project </title>
    <style>
    </style>
</head>

<body>
    <h1> Get Array Index with V-For </h1>

    <div id="app">
        <p v-for="(food, index) in foods">
            {{index}}: {{food}}
            <br>
        </p>
    </div>

    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>

    <script>
        const app = Vue.createApp({
            data() {
                return {
                    foods: [
                        'Burrito',
                        'Pizza',
                        'Salad',
                        'Tacos',
                        'Enchiladas'
                    ]
                }
            }
        })
        app.mount('#app')
    </script>
</body>

</html>
```

It is also possible to display the element index, and information from the array element.
- If array elements are objects.

```html
<!DOCTYPE html>
<html>

<head>
    <title> Tristan's Vue Project </title>
    <style>
    </style>
</head>

<body>
    <h1> Array Index and Objects with V-For </h1>

    <div id="app">
        <p v-for="(food, index) in foods">
            {{index}}: {{food.name}}, url: {{food.url}}
        </p>
    </div>

    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>

    <script>
        const app = Vue.createApp({
            data() {
                return {
                    foods: [
                        { name: 'Burrito', url: 'burrito.svg' },
                        { name: 'Pizza', url: 'pizza.svg' },
                        { name: 'Tacos', url: 'tacos.svg' }
                    ]
                }
            }
        })
        app.mount('#app')
    </script>
</body>

</html>
```