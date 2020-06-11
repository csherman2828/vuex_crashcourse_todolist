/* eslint-disable */

import axios from 'axios';

// State Object
const state = {
  todoList: [
    {
      id: 1,
      title: "Todo 1",
      completed: false
    },
    {
      id: 2,
      title: "Todo 2",
      completed: true
    },
    {
      id: 3,
      title: "Todo 3",
      completed: false
    }
  ],
  nextId: 201
};

// Getters Object
const getters = {
  getTodoList: (state) => state.todoList
};

// Actions Object
const actions = {
  async fetchTodoList({ commit }) {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
    console.log(response.data);

    // commit the response to the store

    commit('setTodoList', response.data);
  },
  async addTodoItem({ commit }, title){
    // // commenting this out because json placeholder gives an error
    // axios.post('https://jsonplaceholder.typicode.com/todos', {title, completed: false})
    //   .then(response => commit('newTodoItem', response.data))
    //   .catch(error => console.log(error));

    commit('newTodoItem', {
      id: state.nextId++,
      title,
      completed: false
    });
  }

};

// Mutations Object
const mutations = {
  setTodoList: (state, todoList) => (state.todoList = todoList),
  newTodoItem: (state, newTodoItem) => (state.todoList.unshift(newTodoItem))
};

// Export all of these
export default {
  state, getters, actions, mutations
}
