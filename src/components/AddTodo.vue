<template>
  <div>
    <h3>Add Todo</h3>
    <div class="add">
      <form v-on:submit.prevent="submitTodo">
        <input v-model="newTodo" type="text" />
        <input type="submit" value="Add Todo" />
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "AddTodo",
  data: () => {
    return { newTodo: "" };
  },
  methods: {
    ...mapActions(["postTodo"]),
    //Changed from this submitTodo(: () =>) { to this:
    submitTodo() {
      // const val = this.$refs.inputRef.value;
      // console.log("hello");
      // console.log(this.newTodo);
      this.postTodo(this.newTodo);
    },
  },
};
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
