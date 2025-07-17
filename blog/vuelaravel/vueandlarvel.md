---
title: 'Vue3 and Laravel12 App'
date: 'July 13, 2025'
category: 'Vue3 and Laravel12'
---

# Overview

This project was made to test my skills in Vue and Laravel.

## How to Setup Vue + Laravel

Install PHP and Composer.

TODO: Explain how to install PHP and Composer.

Run the following commands:

```
This creates the project. For me, it was a macro counter.
composer create-project --prefer-dist laravel/laravel macro-counter

This changes directories to the project.
cd macro-counter

This creates the files .env.example and .env
cp .env.example .env

This is the artisan key command to generate a key.
php artisan key:generate
```

Afterwards, update the .env files
DB_DATABASE=mydatabase
DB_USERNAME=root
DB_PASSWORD=

Then, run these commands.

```
Migrate the database with the artisan migrate command.
php artisan migrate

Install node modules.
npm install

Install the most recent version of Vue and its additional dependencies.
npm install vue@latest vue-router@latest @vitejs/plugin-vue
```

Afterwards, configure Vite for Vue.
- $vite.config.js$
```js
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/js/app.js'],
            refresh: true,
        }),
        vue()
    ]
})
```

Create a Vue App Entry Point.
- $resources/js/app.js$

```js
import { createApp } from 'vue';
import App from './components/App.vue';
import router from './router';

create(App).use(router).mount('#app');
```

Create a simple Vue Component


```js
<template>
    <div>
        <h1> Hello, world! </h1>
    </div>
</template>

<script setup>
</script>

<style scoped>
</style>
```

Install the Vue Router.

```
npm install vue-router@latest
```

Create a router file.
- $resources/js/router/index.js$

```js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';

const routes = [
    { path: '/', component: Home }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;
```

Create a Home Vue component.
- $resources/js/components/Home.vue$

```js
<template>
    <div>
        <h1> Testing home page! </h1>
    </div>
</template>
```

Then update the Blade template.

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> Tristan's Vue + Laravel Project </title>
    @vite(['resources.js/app.js'])
</head>

<body>
    <div id="app"></div>
</body>

</html>
```

Compile assets with Vite and run the Laravel server.

```
npm run dev
php artisan serve
```

Additional libraries I've installed for this project:
```
npm install @tailwindcss/postcss
npm install @tailwindcss/vite
npm install autoprefixer
npm install axios
npm install concurrently
npm install laravel-vite-plugin
npm install postcss
npm install tailwindcss
npm install vite
```

## Database Setup

Create a new migration

```
php artisan make:migration create_macros_table
```

Edit the DB Schema

```php
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('tasks', function (Blueprint $table)) {
            $table->id();
            $table->string('title');
            $table->timestamps();
            $table->integer('protein')->default(0);
            $table->integer('carbs')->default(0);
            $table->integer('fat')->default(0);
        }
    }

    public function down(): void
    {
        Schema::dropIfExists('tasks');
    }
}

?>
```

Then proceed to run all migrations.
- Applies all migrations to your database.

```
php artisan migrate
```

How to rollback the last migration?

```
php artisan migrate:rollback
```

How to create a database seeder?
- Used to insert dummy data into database.

```
php artisan make:seeder TaskSeeder
php artisan db:seed --class=TaskSeeder
```

Then create a model.

```
php artisan make:model Task
```

Then create a controller.

```
php artisan make:controller TaskController
```

If you want CRUD methods scaffolded:

```
php artisan make:controller TaskController --resource
```

Then list all routes

```
php artisan route:list
```

TLDR Laravel Dev Workflow:

```
composer create-project laravel/laravel macro-counter
cd macro-counter
php artisan serve

For creating model and migration
php artisan make:model Task -m
php artisan migrate

php artisan make:controller TaskController --resource
php artisan route:list

php artisan make:seeder TaskSeeder
php artisan db:seed --class=TaskSeeder
```

### Task Model

Edit the Task Model.
- $app/Models/Task.php$

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Task extends Model {
    // Model Properties
    protected $fillable = ['title', 'protein', 'carbs', 'fat'];
}

?>
```

### Task Controller

Edit the Task Controller.
```php
<?php

namespace App\Http\Controllers;

use App\Http\Controller\Controller;
use Illuminate\Http\Request;
use App\Models\Task;

class TaskController extends Controller {
    // Read all entries
    public function read() {
        return Task::all();
    }

    // Read one entry
    public function readOne() {
        $task = Task::find($id);
        if (!$task) {
            return response()->json(['error' => 'Task not found'], 404);
        }
    }

    // Create one entry
    public function create(Request $request) {
        $validated = $request->validate({
            'title' => 'required|string|max:10',
            'protein' => 'required|integer|min:0|max:1000',
            'carbs' => 'required|integer|min:0|max:1000',
            'fat' => 'required|integer|min:0|max:1000',
        });

        return Task::create($validated);
    }

    // Update one entry
    public function update(Request $request, $id) {
        $task = Task::find($id);
        if (!$task) {
            return response()->json(['error'] => ['Task not found'], 404);
        }

        $validated = $request->validate([
            'title' => 'required|string|max:10',
            'protein' => 'required|integer|min:0|max:1000',
            'carbs' => 'required|integer|min:0|max:1000',
            'fat' => 'required|integer|min:0|max:1000',
        ]);
    }

    // Delete one entry
    public function delete($id) {
        $task = Task::find($id);
        if (!$task) {
            return response()->json(['error'] => ['Task not found'], 404);
        }

        $task->delete();
        return response()->json(['message' => 'Task deleted']);
    }
}
?>
```

### Routes

Go to your routes file.
- $routes/api.php$

```php
<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TaskController;

Route::get('/tasks', [TaskController::class, 'read']);
Route::get('/tasks/{id}', [TaskController::class, 'readOne']);
Route::post('/tasks', [TaskController::class, 'create']);
Route::put('/tasks/{id}', [TaskController::class, 'update']);
Route::delete('/tasks/{id}', [TaskController::class, 'delete']);

?>
```

Your backend is now setup to work with the frontend.

## Frontend Setup

Create a folder called components with three files:
- $resources/js/components$
    - $Home.vue$
    - $App.vue$
    - $Tasks.vue$

All three Vue files should have the following code:
- Single File Components (SFCs).

```html
<template>
</template>

<script setup>
</script>

<style scoped>
</style>
```

Afterwards, go to the file:
- $resources/js/app.js$

Add the following code:

```js
import { createApp } from 'vue';
import App from './components/App.vue';
import router from './router';

// Create Vue Instance
const app = createApp(App);

app.use(router);

// Vue Wrapper
app.mount('#app');
```

Afterwards, we should set up our routing paths:
- $/$
    - Home page.
- $/tasks$
    - Task page.

We must edit the file in:
- $resources/js/router/index.js$

```js
import { createRouter, createWebHistory } from 'vue-router';

import Home from '../components/Home.vue';
import Tasks from '../components/Tasks.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/tasks', component: Tasks }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
```

Our router is now set up correctly for the app.

Let's alter our App component to now use display the routers.
- $resources/js/components/App.vue$

```html
<template>
    <div>
        <router-link to = "/"> Home </router-link>
        <router-link to = "/tasks"> Tasks </router-link>
    </div>
    <div>
        <router-view></router-view>
    </div>
</template>

<style scoped>
</style>
```

We can also alter our simple Home component too.
- $resource/js/components/Home.vue$

```html
<template>
    <div>
        <h1> Home Page </h1>
        <p> This project demonstrates my skills in Vue.js and Laravel. </p>
    </div>
</template>
```

Afterwards, let's focus on building the Tasks component.
- This one is a bit more difficult and requires knowledge in Vue3.
- I'll start by building the script.

```html
<template>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import axios from 'axios'

const tasks = ref([])
const forms = ref({
    title: '',
    protein: 0,
    carbs: 0,
    fat: 0
})
const isEditing = ref(false)
const editingId = ref(null)
</script>

<style scoped>
</style>
```

$ref$ is used to allow data values to be reactive.
- You initialize the variables.


The computed property contains all computed properties that are declared on the Vue instance.
- Properties are read-only.
    - Can define a computed property as an object with both a get and set function.

$onMounted$ is a lifecycle hook that executes a callback function after a component has been mounted to the DOM.
- Component's template has been rendered and inserted into the parent's DOM.
    - You can interact with the DOM.
    - Perform side effects.
    - Limit DOM-related code to the client.

Let's move on to the view logic for front-end interactions to the controller
- Using Axios.

```html
<template>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import axios from 'axios'

const tasks = ref([])
const forms = ref({
    title: '',
    protein: 0,
    carbs: 0,
    fat: 0
})
const isEditing = ref(false)
const editingId = ref(null)

const fetchTasks = async () => {
    try {
        const res = await axios.get('/api/tasks')
        tasks.value = res.data
    } catch (err) {
        console.log('Fetch failed', err)
    }
}

const getTaskById = async(id) => {
    try {
        const res = await axios.get(`/api/tasks/${id}`)
        console.log('Single task:', res.data)
        return res.data
    } catch (err) {
        console.log('Get single task failed', err)
    }
}

const addTask = async () => {
    try {
        // Editing form
        if (isEditing.value) {
            await axios.put(`/api/tasks/${editingId.value}`, form.value)
        } 
        // Creating new form
        else {
            await axios.post('/api/tasks', form.value)
        }

        // Reset Form
        form.value = {
            title: '',
            protein: 0,
            carbs: 0,
            fat: 0
        }
        isEditing.value = false
        editingId.value = null

        // Reload tasks
        await fetchTasks()
    } catch (err) {
        console.log('Submit Failed', err)
    }
}

const editTask = (task) => {
    isEditing.value = true
    editingId.value = task.id
    form.value = {
        title: task.title,
        protein: task.protein,
        carbs: task.carbs,
        fat: task.fat
    }
}

const deleteTask = async (id) => {
    try {
        await axios.delete(`/api/tasks/${id}`)
        
        // Reload tasks
        await fetchTasks()
    } catch (err) {
        console.error('Delete failed', err)
    }
}
</script>

<style scoped>
</style>
```

Axios works by sending HTTP requests to the server.
- Remember the controller?
- GET, POST, PUT, DELETE.

What does async and await do?
- Async indicates that the function will handle asynchronous operations and return a Promise.
    - A Promise is an object that represnets the eventual completion or failure of an asynchronous operation.
- Await is used to pause the execution of a function until a Promise is resolved or rejected.
    - The asynchronous operation must complete.

What are try-catch blocks?
- Provides a mechanism for handling errors.
    - The catch block gives us information about the error.

Finally, let's add the last part of the code.
- The computed function will return the unwritten tasks and the calculates macros.

```html
<template>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import axios from 'axios'

const tasks = ref([])
const forms = ref({
    title: '',
    protein: 0,
    carbs: 0,
    fat: 0
})
const isEditing = ref(false)
const editingId = ref(null)

const fetchTasks = async () => {
    try {
        const res = await axios.get('/api/tasks')
        tasks.value = res.data
    } catch (err) {
        console.log('Fetch failed', err)
    }
}

const getTaskById = async(id) => {
    try {
        const res = await axios.get(`/api/tasks/${id}`)
        console.log('Single task:', res.data)
        return res.data
    } catch (err) {
        console.log('Get single task failed', err)
    }
}

const addTask = async () => {
    try {
        // Editing form
        if (isEditing.value) {
            await axios.put(`/api/tasks/${editingId.value}`, form.value)
        } 
        // Creating new form
        else {
            await axios.post('/api/tasks', form.value)
        }

        // Reset Form
        form.value = {
            title: '',
            protein: 0,
            carbs: 0,
            fat: 0
        }
        isEditing.value = false
        editingId.value = null

        // Reload tasks
        await fetchTasks()
    } catch (err) {
        console.log('Submit Failed', err)
    }
}

const editTask = async (id) => {
  try {
    await axios.put(`/api/tasks/${id}`, form.value)

    // Reset form
    form.value = {
      title: '',
      protein: 0,
      carbs: 0,
      fat: 0
    }

    // Reload Tasks
    await fetchTasks()
  } catch (err) {
    console.error('Update task failed', err)
  }
}

const deleteTask = async (id) => {
    try {
        await axios.delete(`/api/tasks/${id}`)
        
        // Reload tasks
        await fetchTasks()
    } catch (err) {
        console.error('Delete failed', err)
    }
}

const calculateMacros = computed(() => {
    return tasks.value.map(task =>
        const total = task.protein + task.carbs + task.fat
        const proteinCount = total * 0.45
        const carbCount = total * 0.35
        cont fatCount = total * 0.20

        return {
            ...task,
            macros: {
                protein: proteinCount.toFixed(1),
                carbs: carbCount.toFixed(1),
                fat: fatCount.toFixed(1)
            }
        }
    )
})

onMounted(() => {
    fetchTasks()
})
</script>

<style scoped>
</style>
```

What does the map function do?
- It creates a new array without modifying the original array.
    - Contains the elements of the original array.

Essentially, calculatedMacros returns the new array with unaffected values.
- It also returns an object macros:
    - protein.
    - carbs.
    - fat.

With the script set up, we can now edit the template.

```html
<template>
    <div>
        <h1> Laravel 12 + Vue 3 Tasks </h1>

        <!-- Form to submit task-->
        <form v-on:submit.prevent="addTask">
            <p>
                <input v-model="form.title">
            </p>
            <p>
                <input v-model.number="form.protein">
            </p>
            <p>
                <input v-model.number="form.carbs">
            </p>
            <p>
                <input v-model.number="form.fat">
            </p>
            <button type="submit"> Add Macros </button>
        </form>
    </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import axios from 'axios'

const tasks = ref([])
const forms = ref({
    title: '',
    protein: 0,
    carbs: 0,
    fat: 0
})
const isEditing = ref(false)
const editingId = ref(null)

const fetchTasks = async () => {
    try {
        const res = await axios.get('/api/tasks')
        tasks.value = res.data
    } catch (err) {
        console.log('Fetch failed', err)
    }
}

const getTaskById = async(id) => {
    try {
        const res = await axios.get(`/api/tasks/${id}`)
        console.log('Single task:', res.data)
        return res.data
    } catch (err) {
        console.log('Get single task failed', err)
    }
}

const addTask = async () => {
    try {
        // Editing form
        if (isEditing.value) {
            await axios.put(`/api/tasks/${editingId.value}`, form.value)
        } 
        // Creating new form
        else {
            await axios.post('/api/tasks', form.value)
        }

        // Reset Form
        form.value = {
            title: '',
            protein: 0,
            carbs: 0,
            fat: 0
        }
        isEditing.value = false
        editingId.value = null

        // Reload tasks
        await fetchTasks()
    } catch (err) {
        console.log('Submit Failed', err)
    }
}

const editTask = async (id) => {
  try {
    await axios.put(`/api/tasks/${id}`, form.value)

    // Reset form
    form.value = {
      title: '',
      protein: 0,
      carbs: 0,
      fat: 0
    }

    // Reload Tasks
    await fetchTasks()
  } catch (err) {
    console.error('Update task failed', err)
  }
}

const deleteTask = async (id) => {
    try {
        await axios.delete(`/api/tasks/${id}`)
        
        // Reload tasks
        await fetchTasks()
    } catch (err) {
        console.error('Delete failed', err)
    }
}

const calculateMacros = computed(() => {
    return tasks.value.map(task =>
        const total = task.protein + task.carbs + task.fat
        const proteinCount = total * 0.45
        const carbCount = total * 0.35
        cont fatCount = total * 0.20

        return {
            ...task,
            macros: {
                protein: proteinCount.toFixed(1),
                carbs: carbCount.toFixed(1),
                fat: fatCount.toFixed(1)
            }
        }
    )
})

onMounted(() => {
    fetchTasks()
})
</script>

<style scoped>
</style>
```

I created a basic form to add a task.

What is v-model?
- Two-way binding.
    - You interact with the input, the input and the Vue instance changes.
- v-model.number allows us to input only numbers.

What is v-on:submit?
- Calls the function in "".
    - But prevents the page from refreshing with .prevent

Let's move on to creating the table for fetching the task entries.

```html
<template>
    <div>
        <h1> Laravel 12 + Vue 3 Tasks </h1>

        <!-- Form to submit task-->
        <form v-on:submit.prevent="addTask">
            <p>
                <input v-model="form.title">
            </p>
            <p>
                <input v-model.number="form.protein">
            </p>
            <p>
                <input v-model.number="form.carbs">
            </p>
            <p>
                <input v-model.number="form.fat">
            </p>
            <button type="submit"> Add Macros </button>
        </form>

        <div v-for="task in calculateMacros" :key="task.id">
            <table>
                <thead>
                    <tr>
                        <th> Name </th>
                        <th> Protein </th>
                        <th> Carbs </th>
                        <th> Fats </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td> {{ task.title }} </td>
                        <td> {{ task.protein }} </td>
                        <td> {{ task.carbs }} </td>
                        <td> {{ task.fat }} </td>
                    </tr>
                    <tr>
                        <td> Ideal: </td>
                        <td> {{ task.macros.protein }} </td>
                        <td> {{ task.macros.carbs }} </td>
                        <td> {{ task.macros.fat }} </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import axios from 'axios'

const tasks = ref([])
const forms = ref({
    title: '',
    protein: 0,
    carbs: 0,
    fat: 0
})
const isEditing = ref(false)
const editingId = ref(null)

const fetchTasks = async () => {
    try {
        const res = await axios.get('/api/tasks')
        tasks.value = res.data
    } catch (err) {
        console.log('Fetch failed', err)
    }
}

const getTaskById = async(id) => {
    try {
        const res = await axios.get(`/api/tasks/${id}`)
        console.log('Single task:', res.data)
        return res.data
    } catch (err) {
        console.log('Get single task failed', err)
    }
}

const addTask = async () => {
    try {
        // Editing form
        if (isEditing.value) {
            await axios.put(`/api/tasks/${editingId.value}`, form.value)
        } 
        // Creating new form
        else {
            await axios.post('/api/tasks', form.value)
        }

        // Reset Form
        form.value = {
            title: '',
            protein: 0,
            carbs: 0,
            fat: 0
        }
        isEditing.value = false
        editingId.value = null

        // Reload tasks
        await fetchTasks()
    } catch (err) {
        console.log('Submit Failed', err)
    }
}

const editTask = async (id) => {
  try {
    await axios.put(`/api/tasks/${id}`, form.value)

    // Reset form
    form.value = {
      title: '',
      protein: 0,
      carbs: 0,
      fat: 0
    }

    // Reload Tasks
    await fetchTasks()
  } catch (err) {
    console.error('Update task failed', err)
  }
}

const deleteTask = async (id) => {
    try {
        await axios.delete(`/api/tasks/${id}`)
        
        // Reload tasks
        await fetchTasks()
    } catch (err) {
        console.error('Delete failed', err)
    }
}

const calculateMacros = computed(() => {
    return tasks.value.map(task =>
        const total = task.protein + task.carbs + task.fat
        const proteinCount = total * 0.45
        const carbCount = total * 0.35
        cont fatCount = total * 0.20

        return {
            ...task,
            macros: {
                protein: proteinCount.toFixed(1),
                carbs: carbCount.toFixed(1),
                fat: fatCount.toFixed(1)
            }
        }
    )
})

onMounted(() => {
    fetchTasks()
})
</script>

<style scoped>
</style>
```

We have now populated the tables with the fetched data.

What is v-for?
- It iterates through each row and we can use the entries in the rows to populate the tables.

What is :key?
- The key uniquely identifies each element created in v-for.

Now, let's finalize the project by adding buttons for updating and deleting entries.

```html
<template>
    <div>
        <h1> Laravel 12 + Vue 3 Tasks </h1>

        <!-- Form to submit task-->
        <form v-on:submit.prevent="addTask">
            <p>
                <input v-model="form.title">
            </p>
            <p>
                <input v-model.number="form.protein">
            </p>
            <p>
                <input v-model.number="form.carbs">
            </p>
            <p>
                <input v-model.number="form.fat">
            </p>
            <button type="submit"> Add Macros </button>
        </form>

        <div v-for="task in calculateMacros" :key="task.id">
            <table>
                <thead>
                    <tr>
                        <th> Name </th>
                        <th> Protein </th>
                        <th> Carbs </th>
                        <th> Fats </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td> {{ task.title }} </td>
                        <td> {{ task.protein }} </td>
                        <td> {{ task.carbs }} </td>
                        <td> {{ task.fat }} </td>
                    </tr>
                    <tr>
                        <td> Ideal: </td>
                        <td> {{ task.macros.protein }} </td>
                        <td> {{ task.macros.carbs }} </td>
                        <td> {{ task.macros.fat }} </td>
                    </tr>
                </tbody>
            </table>
            <button v-on:click="deleteTask(task.id)"> Delete </button>
            <button v-on:click="editTask(task.id)"> Edit </button>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import axios from 'axios'

const tasks = ref([])
const forms = ref({
    title: '',
    protein: 0,
    carbs: 0,
    fat: 0
})
const isEditing = ref(false)
const editingId = ref(null)

const fetchTasks = async () => {
    try {
        const res = await axios.get('/api/tasks')
        tasks.value = res.data
    } catch (err) {
        console.log('Fetch failed', err)
    }
}

const getTaskById = async(id) => {
    try {
        const res = await axios.get(`/api/tasks/${id}`)
        console.log('Single task:', res.data)
        return res.data
    } catch (err) {
        console.log('Get single task failed', err)
    }
}

const addTask = async () => {
    try {
        // Editing form
        if (isEditing.value) {
            await axios.put(`/api/tasks/${editingId.value}`, form.value)
        } 
        // Creating new form
        else {
            await axios.post('/api/tasks', form.value)
        }

        // Reset Form
        form.value = {
            title: '',
            protein: 0,
            carbs: 0,
            fat: 0
        }
        isEditing.value = false
        editingId.value = null

        // Reload tasks
        await fetchTasks()
    } catch (err) {
        console.log('Submit Failed', err)
    }
}

const editTask = async (id) => {
  try {
    await axios.put(`/api/tasks/${id}`, form.value)

    // Reset form
    form.value = {
      title: '',
      protein: 0,
      carbs: 0,
      fat: 0
    }

    // Reload Tasks
    await fetchTasks()
  } catch (err) {
    console.error('Update task failed', err)
  }
}

const deleteTask = async (id) => {
    try {
        await axios.delete(`/api/tasks/${id}`)
        
        // Reload tasks
        await fetchTasks()
    } catch (err) {
        console.error('Delete failed', err)
    }
}

const calculateMacros = computed(() => {
    return tasks.value.map(task =>
        const total = task.protein + task.carbs + task.fat
        const proteinCount = total * 0.45
        const carbCount = total * 0.35
        cont fatCount = total * 0.20

        return {
            ...task,
            macros: {
                protein: proteinCount.toFixed(1),
                carbs: carbCount.toFixed(1),
                fat: fatCount.toFixed(1)
            }
        }
    )
})

onMounted(() => {
    fetchTasks()
})
</script>

<style scoped>
</style>
```

What does v-on do?
- Handles events.
    - In this case, it is a click event.
    - It called the deleteTask() and updateTask() functions when a click event occurs.