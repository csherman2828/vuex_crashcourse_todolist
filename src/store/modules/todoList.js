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
  ]
};

// Getters Object
const getters = {
  getTodoList: (state) => state.todoList
};

// Actions Object
const actions = {};

// Mutations Object
const mutations = {};

// Export all of these
export default {
  state, getters, actions, mutations
}
