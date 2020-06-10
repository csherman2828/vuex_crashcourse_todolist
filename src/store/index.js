import Vuex from 'vuex';
import Vue from 'vue';
import todoList from './modules/todoList';

// Load vuex
Vue.use(Vuex);

// Create Store
export default new Vuex.Store({
  modules: {
    todoList
  }
});
