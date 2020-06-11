<!--
  This is boilerplate to copy and paste when making a new Vue component instead
  of using snippets or keyboard shortcuts
-->

<template>
  <div id="AddTodoForm">
    <h3>Add Todo</h3>
    <form id="addTodoForm" @submit="onSubmit">
      <input type="text" v-model="title" placeholder="Add Todo..."/>
      <input type="submit" value="Submit">
    </form>
  </div>
</template>

<script>
  // import other components

  // import Vuex bits
  import { mapActions } from 'vuex';

  // export component info object
  export default {
    // component name
    name: "AddTodoForm",
    // nested components
    components: {},
    // props given with v-bind
    props: [],
    // component internal data
    data() {
      return{
        title: ''
      }
    },
    // add all functions for events and stuff
    methods: {
      ...mapActions(['addTodoItem']),
      onSubmit(e){
        e.preventDefault();
        console.log
        this.addTodoItem(this.title);
        this.title = '';
      }
    }
  }
</script>

<style scoped>
  form{
    display: flex;
  }
  input[type="text"]{
    flex: 10;
    padding: 10px;
    border: 1px solid #41b883;
    outline: 0;
  }
  input[type="submit"]{
    flex:2;
    background: #41b883;
    color: #fff;
    border: 1px #41b883 solid;
    cursor: pointer;
  }
</style>
