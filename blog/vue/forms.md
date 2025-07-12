---
title: 'Vue Forms'
date: 'July 11, 2025'
category: 'Vue'
---

# Vue Forms

Extra functionality with responsiveness and validation.
- Uses v-model.

## First Vue Form

You can use the form, input, and button tags.

Instructions:
- Add HTML form elements.
- Create Vue Instance.
    - Item Name, number, shopping list.
    - Use v-model to connect inputs.
- Call method to add item to shopping list.
    - Prevent default browser refresh on submit.
- Create method to add item to shopping list.
    - Clears the form.
- Use v-for to show automatically updated shopping list.


### Webpage Code

```html
<!DOCTYPE html>
<html>

<head>
    <title> Tristan's Vue Project </title>
    <style>
        #app {
            width: 20rem;
            height: 10rem;
            border: 1px solid black;
        }
    </style>
</head>

<body>
    <h1> Vue Forms: Macro Counter </h1>

    <div id="app">
        <form v-on:submit.prevent="addMacros">
            <p>
                Protein:
                <input type="number" required placeholder="Enter protein..." v-model="protCount">
            </p>
            <p>
                Carbs:
                <input type="number" required placeholder="Enter carbs..." v-model="carbCount">
            </p>
            <p>
                Fats:
                <input type="number" required placeholder="Enter fats..." v-model="fatsCount">
            </p>
            <p>
                Enter Description:
                <input type="text" placeholder="Enter optional description..." v-model="desc">
            </p>
            <button type="submit"> Add Entry </button>
        </form>

        <div>
            <p> Entries: </p>
            <div v-for="macros in macrosList">
                <ul>
                    <li> {{ macros.protCount }}, {{ macros.carbCount }}, {{ macros.fatsCount }} </li>
                </ul>
                {{ macros.desc }}
            </div>
        </div>
    </div>

    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>

    <script>
        const app = Vue.createApp({
            data() {
                return {
                    protCount: null,
                    carbCount: null,
                    fatsCount: null,
                    desc: null,
                    macrosList: [
                        { protCount: 3, carbCount: 5, fatsCount: 5, desc: "Low Macros" }
                    ]
                }
            },
            methods: {
                addMacros() {
                    let macros = {
                        protCount: this.protCount,
                        carbCount: this.carbCount,
                        fatsCount: this.fatsCount,
                        desc: this.desc
                    }
                    this.macrosList.push(macros)
                    this.protCount = null
                    this.carbCount = null
                    this.fatsCount = null
                    this.desc = null
                }
            }
        })
        app.mount('#app')
    </script>
</body>

</html>
```