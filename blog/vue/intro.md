---
title: 'Vue.js Intro'
date: 'July 9, 2025'
category: 'Vue'
---

# Vue Intro

Vue is a front-end JavaScript framework. You can add it with a HTML $script$ tag.

Vue extends HTML attributes with $Directives$, and binds data to HTML with $Expressions$.

## Why Learn Vue?

- Why Vue?
    - Simply and easy.
    - Handles simple and complex projects.
    - Growing popularity and open-source community.
    - Vue takes care of the connection between HTML and JavaScript.
    - Template-based syntax, two-way data binding, centralized state management.

### The Options API

- Two Options:
    - Options API.
    - Composition API.

The concepts are the same for both.

Options API is easier to understand and has a more recognizable structure.

### Start a webpage

- Basic HTML file.
- Add a $div$ tag with $id="app"$.
- Add a $script$ tag with a Vue link to handle Vue code.
- Add the Vue instance to the script tag.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Tristan's Vue Page</title>
  </head>
  <body>
    <div id="app">
      {{ msg }} <br />
      {{ 'Random Number: ' + Math.ceil(Math.random() * 3) }}
    </div>

    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
    <script>
      const app = Vue.createApp({
        data() {
          return {
            msg: "Hi Tristan!"
          };
        }
      });
      app.mount('#app');
    </script>
  </body>
</html>
```

### Text Interpolation

Text is taken from the Vue instance to show on a web page.

```html
<div id="app"> {{ message }} </div>
```

### JavaScript in Text Interpolation

You can use JavaScript expressions in double curly braces.

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
  </style>
</head>

<body>
  <h1> JavaScript in Text Interpolation </h1>
  
  <div id="app">
    {{ message }}
  </div>

  <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>

  <script>
    const app = Vue.createApp({
      data() {
        return {
          message: 'Hello world!'
        }
      }
    })
    app.mount('#app')
  </script>
</body>

</html>
```