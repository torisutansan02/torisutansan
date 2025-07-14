---
title: 'V-Model Directive'
date: 'July 11, 2025'
category: 'Vue'
---

# V-Model Directive

Connects with all types of input elements.
- Creates a link between input value and a data value in the Vue instance.
- Changing the input changes the data.
    - It also changes the input (two-way binding).

## Two-Way Binding

Updates the Vue data instance, and updates the inputs.

```html
<!DOCTYPE html>
<html>

<head>
    <title> Tristan's Vue Project </title>
    <style>
    </style>
</head>

<body>
    <h1> Two Way Binding </h1>

    <div id="app">
        <input type="text" v-model="inpBox">
        <p> Value: {{ inpBox }} </p>
    </div>

    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>

    <script>
        const app = Vue.createApp({
            data() {
                return {
                    inpBox: 'Test'
                }
            }
        })
        app.mount('#app')
    </script>
</body>

</html>
```

Two-Way Binding Functionality:
- v-bind:value
    - Updates input element from Vue instance data.        
- v-bind:input
    - Updates Vue instance data from input.

v-model is simpler to use.

## Dynamic Checkbox

You can use checkboxes in labels.
- It can be used to reflect some status
    - Changes dynamically from True or False.
    - Uses v-model.

In summary:
- A boolean.
- A checkbox.
- Dynamic feedback text.

```html
<!DOCTYPE html>
<html>

<head>
    <title> Tristan's Vue Project </title>
    <style>
    </style>
</head>

<body>
    <h1> V-Model Checkbox </h1>
    
    <div id="app">
        <form>
            <p>
                Special Item?
                <label>
                    <input type="checkbox" v-model="special">
                    {{ special }}
                </label>
            </p>
        </form>
    </div>

    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>

    <script>
        const app = Vue.createApp({
            data() {
                return {
                    special: false
                }
            }
        })
        app.mount('#app')
    </script>
</body>

</html>
```

You can add dynamic features.

```html
<!DOCTYPE html>
<html>

<head>
    <title> Tristan's Vue Project </title>
    <style>
        .healthClass {
            width: fit-content;
            background-color: lightgreen;
        }
    </style>
</head>

<body>
    <h1> Dynamic Macro Counter </h1>

    <div id = "app">
        <form v-on:submit.prevent="addMacros">
            <p>
                What is your name? <br>
                <input type="text" required placeholder="Write name..." v-model="userName">
            </p>
            <p>
                Carb count? <br>
                <input type="number" required placeholder="Write count..." v-model="carbCount">
            </p>
            <p>
                Protein count? <br>
                <input type="number" required placeholder="Write count..." v-model="protCount">
            </p>
            <p>
                Fats count? <br>
                <input type="number" required placeholder="Write count..." v-model="fatsCount">
            </p>
            <p>
                Are you healthy <br>
                <label>
                    <input type="checkbox" v-model="isHealthy">
                    {{ isHealthy }}
                </label>
            </p>
            <button type="submit"> Add Macros </button>
        </form>

        <br>
        <hr>

        <div>
            <p> Macro Counter Users: </p>
            <ul>
                <li v-for="macro in macroList" v-bind:class="{ healthClass: macro.healthy }">
                    {{ macro.name }}
                    {{ macro.carb }}
                    {{ macro.prot }}
                    {{ macro.fats }}
                </li>
            </ul>
        </div>
    </div>

    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>

    <script>
        const app = Vue.createApp({
            // Properties
            data () {
                return {
                    userName: null,
                    carbCount: null,
                    protCount: null,
                    fatsCount: null,
                    isHealthy: false,
                    macroList: [
                        { name: "Tristan", carb: 5, prot: 5, fats: 5, healthy: true }
                    ]
                }
            },
            // Methods
            methods: {
                addMacros() {
                    let macro = {
                        name: this.userName,
                        carb: this.carbCount,
                        prot: this.protCount,
                        fats: this.fatsCount,
                        healthy: this.isHealthy
                    }
                    this.macroList.push(macro)
                    this.userName = null
                    this.carbCount = null
                    this.protCount = null
                    this.fatsCount = null
                    this.isHealthy = false
                }
            }
        })
        app.mount('#app')
    </script>
</body>

</html>
```

## Mark Banned Users

```html
<!DOCTYPE html>
<html>

<head>
    <title> Tristan's Vue Project </title>
    <style>
        .healthClass {
            background-color: lightgreen;
        }

        .banned {
            text-decoration: line-through;
            background-color: lightgray;
        }
    </style>
</head>

<body>
    <h1> Marking Banned Users </h1>

    <div id="app">
        <form v-on:submit.prevent="addMacro">
            <p>
                Your name? <br>
                <input type="text" required placeholder="Write name..." v-model="userName">
            </p>
            <p>
                Protein count? <br>
                <input type="number" required placeholder="Write count..." v-model="protCount">
            </p>
            <p>
                Carb count? <br>
                <input type="number" required placeholder="Write count..." v-model="carbCount">
            </p>
            <p>
                Fats count? <br>
                <input type="number" required placeholder="Write count..." v-model="fatsCount">
            </p>
            <p>
                <label>
                    Are you healthy?
                    <input type="checkbox" v-model="isHealthy">
                    {{ isHealthy }}
                </label>
            </p>
            <button type="submit"> Add Macros </button>
        </form>

        <br>
        <hr>

        <div>
            <p> Macros List: </p>
            <ul id="notBanned">
                <li
                    v-for="macro in macroList"
                    v-bind:class="{ healthClass: macro.healthy }"
                    v-on:click="macro.banned = !macro.banned"
                    v-show="!macro.banned"
                >
                    {{ macro.name }}, {{ macro.prot }}, {{ macro.carb }}, {{ macro.fats }}
                </li>
            </ul>
            <ul id="banned">
                <li
                    v-for="macro in macroList"
                    v-bind:class="{ healthClass: macro.healthy }"
                    v-on:click="macro.banned = !macro.banned"
                    v-show="macro.banned"
                >
                    {{ macro.name }}, {{ macro.prot }}, {{ macro.carb }}, {{ macro.fats }}
                </li>
            </ul>
        </div>
    </div>

    <script src="https://unpkg.com/vue@3/dist/global.vue.js"></script>

    <script>
        const app = Vue.createApp({
            data() {
                return {
                    userName: null,
                    protCount: null,
                    carbCount: null,
                    fatsCount: null,
                    isHealthy: false,
                    macroList: [
                        { name: "Tristan", prot: 5, carb: 5, fats: 5, healthy: true, banned: false }
                    ]
                }
            },
            methods: {
                addMacro() {
                    let macro = {
                        name: this.userName,
                        prot: this.protCount,
                        carb: this.carbCount,
                        fats: this.fatsCount,
                        healthy: this.isHealthy,
                        banned: false
                    }
                    this.macroList.push(macro)
                    this.userName = null
                    this.protCount = null
                    this.carbCount = null
                    this.fatsCount = null
                    this.isHealthy = false
                }
            }
        })
        app.mount('#app')
    </script>
</body>

</html>
```

## Use v-model to Make Form Dynamic

- TODO: Add Full Example