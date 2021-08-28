import Vuex from 'vuex';
import Vue from 'vue';
import todos from './modules/todos';

Vue.use(Vuex);

//Create a store and export it so it can be accessed.
export default new Vuex.Store({
  modules: {
    todos
  }
});
