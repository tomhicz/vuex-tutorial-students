<template>
  <div>
    <h3>Add Todo</h3>
    <div class="add">
    </div>
  </div>
</template>

<script>

export default {
  name: "AddTodo",
  data: () => {
  },
  methods: {

  }
}
</script>

<style scoped>
form {
  display: flex;
}

input[type="text"] {
  flex: 10;
  padding: 10px;
  border: 1px solid #41b883;
  outline: 0;
}

input[type="submit"] {
  flex: 2;
  background-color: #41b883;
  color: #fff;
  border: 1px solid #41b883;
  cursor: pointer;
}
</style>