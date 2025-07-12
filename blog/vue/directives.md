---
title: 'Vue Directives'
date: 'July 9, 2025'
category: 'Vue'
---

# Vue Directives

Below are the different Vue directives.

- v-bind
    - Connects an attribute in an HTML tag to a data variable inside the Vue instance.
- v-if
    - Creates HTML tags on a condition. Directives v-else-if and v-else are also used.
- v-show
    - On a condition, specifies if a HTML element should be visible.
- v-for
    - Creates a list of tags based on an array in the Vue instance using a for-loop.
- v-on
    - Connects an event on an HTML tag to a JS expression or Vue instance method. We can define specific page reaction using event-modifiers.

### Webpage Code

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <style>
        #app {
            width: 20rem;
            height: 10rem;
            padding: 5rem;
            background-color: lightgreen;
        }
        .blue-BG {
            width: fit-content;
            padding: 5rem;
            background-color: lightblue;
        }
    </style>
</head>

<body>
    <div id="app">
        <div v-bind:class="vueClass"> Test </div>
    </div>

    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>

    <script>
        const app = Vue.createApp({
            data() {
                return {
                    vueClass: "blue-BG"
                }
            }
        })
        app.mount('#app')
    </script>
</body>

</html>
```