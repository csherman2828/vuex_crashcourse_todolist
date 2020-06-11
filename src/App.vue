<template>
  <div id="App">
    <AddTodoForm/>
    <TodoList/>
  </div>
</template>

<script>
import TodoList from './components/TodoList.vue';
import AddTodoForm from './components/AddTodoForm.vue';

export default {
  name: 'App',
  components: {
    AddTodoForm,
    TodoList
  }
}
</script>

<style>
  body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    background: #e8f7f0;
  }
  #App {
    max-width: 1100px;
    margin: auto;
    overflow: auto;
    padding: 0 2rem;
  }
</style>
