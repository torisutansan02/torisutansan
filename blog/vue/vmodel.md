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

- TODO: Add Full Example

Add a full example of the checkbox.

## Mark Found Items in Shopping List

- TODO: Add Full Example

## Use v-model to Make Form Dynamic

- TODO: Add Full Example