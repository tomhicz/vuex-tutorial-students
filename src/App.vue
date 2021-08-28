<template>
  <div id="app">
    <div class="container">
      <AddTodo/>
      <Todos/>
    </div>
  </div>
</template>

<script>
import AddTodo from './components/AddTodo.vue'
import Todos from './components/Todos.vue'

export default {
  name: 'App',
  components: {
    Todos,
    AddTodo
  }
}
</script>

<style>
body {
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  line-height: 1.6;
  background-color: #e8f7f0;
}
.container {
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}
</style>
