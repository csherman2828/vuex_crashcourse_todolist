<!--
  This is boilerplate to copy and paste when making a new Vue component instead
  of using snippets or keyboard shortcuts
-->

<template>
  <div id="TodoList">
    <h1>Todo List</h1>
    <div id="todoItems">
      <div
      class="todoItem"
      v-for="todo in getTodoList"
      v-bind:key="todo.id"
      >
        {{ todo.title }}
      </div>
    </div>
  </div>
</template>

<script>
  // import other components

  // Import Vuex Bits
  import { mapGetters } from 'vuex';


  // export component info object
  export default {
    // component name
    name: "TodoList",
    // nested components
    components: {},
    // props given with v-bind
    props: [],
    // component internal data
    data() { return{} },
    // add all functions for events and stuff
    methods: {},
    // computed for values mapped by Vuex
    computed: mapGetters(['getTodoList'])
  }
</script>

<style scoped>
  #todoItems {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
  }
  .todoItem{
    border: 1px solid #ccc;
    background: #41b883;
    padding: 1rem;
    border-radius: 5px;
    text-align: center;
    position: relative;
    cursor: pointer;
  }
</style>
