# VUEX README

Today, let's explore concepts of Vuex by initializing and implementing a store. This repository has all the necessary files that you will need. Your job is to fill in the gaps with code. The readme should serve as your walkthrough but please reach out to me if you get stuck or have a question!

# Part 0: Set Up

First, familiarize yourself with the `package.json`. Some Key points:

- [ ]  We have a script called `serve` this will serve our application at localhost:8080.
- [ ]  within the **"dependencies"** section you will notice that we included `vuex` and `axios` . You **do not** need to use axios, you can use fetch if you are more comfortable, but either will be used to make calls to our API.
- [ ]  run the command `npm i` to install the dependencies.

# Part 1: OVERVIEW

Please expand the `src` folder. You will notice that we have the following structure:

**components (folder):**

**AddTodo.vue**

This will have an input box and a submit button that will send a post request to our todo's API

**Todos.vue**

This is where all of our Todos will be rendered.

---

**store (folder):**

**modules (folder)**

**todos.js**

this our todos module. It contains state and methods pertaining todos that will be a part of our greater store.

**Index.js**

Where we will initialize our vuex store.

---

**App.vue**

this represents the top most parent for the application

---

**main.js**

where our vue application instance is being initialized

# Part 2: Initializing VUEX

Start in `src/store/index.js`. We are going to initialize vuex and create a store with a reference to our modules. 

- [ ]  I've already included the imports in line 1-3 to save you time.

```jsx
import Vuex from 'vuex';
import Vue from 'vue';
import todos from './modules/todos';
```

- [ ]  begin by telling `Vue` to load the plugin `Vuex`. Simply, we can do this by typing in:

```jsx
Vue.use(Vuex)
```

- [ ]  Next we need to create a new `store`. We'll also need to export this out so that we can include it upon initializing our Vue application. to do this, type the following:

```jsx
 export default new Vuex.Store({
		modules: {
				todos
		}
})
```

- [ ]  Now navigate to  `src/main.js`. We need to now include our store when our Vue application mounts. To begin, import store from our store directory.

```jsx
import store from './store';
```

- [ ]  Next, in our instance of a new vue, application we need to include our store

```jsx
new Vue({
	store,
  render: h => h(App),
}).$mount('#app')
```

At this point, your Vuex application now has a store. Keep these notes handy if you ever need to add a Vuex store to your application at a later point in time!

# Part 3: Building Todos module

A store is a bit more complex than a box that we put stuff in. A store is a consolidation of different modules that should be in charge of different areas of your application's overall state. 

For simplicity's sake,  We are only going to focus on just a todos module that handles getting a list of todos and posting a new to do to the API.

- [ ]  navigate to `src/store/modules/todos.js`. You will find a template. Here is a summary of **state**, **actions**, **mutations**, **getters**
    - [ ]  **state:** Just like the `data` property in our components this is where we are storing the state.
        - [ ]  Definite a property within this object called `todos` we will assign it to the response of our request.
    - [ ]  **getters:** These functions are responsible for bringing state to the components from the store.
        - [ ]  Within this object, let's define a method called `allTodos` and assign it an anonymous function. that returns the todos property of our state object.
    - [ ]  **mutations:** mutations are specific instructions to affect state in the form of anonymous functions. **They should be called by actions**. they take two parameters: state parameter, followed by the payload.
        - [ ]  Define a mutation called `setTodos` it should take in two parameters stat and todo data. it should set the todos property of state equal to the response array of todos
        - [ ]  Definite another mutation called `addTodo` it should also take two parameters state & the new todo. it should unshift the new todo into the state.todo array.
    - [ ]  **actions:** Actions do things. Quite straight forward right? we will create two asynchronous functions called `fetchTodos` & `postTodo` . When actions are created, they take in an object within the object is a function called `commit` and so we need to destructure it. We use this commit function to call our mutations so that we can change state.
        - [ ]  `fetchTodos` should look like this:

        ```jsx
        async fetchTodos({ commit }) {
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
            commit('setTodos', response.data)
          }
        ```

        - [ ]  `postTodo` will look like this:

        ```jsx
        //again we are destructuring the commit function for our mutation, and also passing a title parameter. We will get into this more later.
        //the post request should be an object that includes the title of the todo and an additional property completed: set to false.
        async addTodo({ commit }, title) {
            const response = await axios.post('https://jsonplaceholder.typicode.com/todos', { title, completed: false});
            commit('addTodo', response.data)
          }
        ```

# Part 4: Integrate into the Todos components

Now we need to integrate the todos module into the relevant components. This is what creates that connection between the store and our components. 

- [ ]  First, navigate to `src/components/Todos.vue` destructure and import mapActions & mapGetters from vuex like so:

```jsx
<script>
import { mapGetters, mapActions } from 'vuex';
name: 'Todos'
</script>
```

- [ ]  the fetchTodos is going to be a method we will need to call upon for this component, so let's definite it using the following syntax:

```jsx
methods: {
    ...mapActions(['fetchTodos'])
  },
```

- [ ]  next, we need to add a computed: property to our component which will track changes in our state and call the getter function

```jsx
computed: mapGetters(['allTodos']),
```

- [ ]  Finally let's call our fetchTodos that we defined in our methods to run when the component is created.

```jsx
created() {
    this.fetchTodos();
}
```

# Part 5: Integrate the addTodo component

