import actions from "../actions/counter";
import getters from "../getters/counter";
import { ADD_VALUE } from "../types";

export default {
  actions,
  getters,
  state: {
    count: 0
  },
  mutations: {
    [ADD_VALUE](state, value) {
      state.count += value;
    }
  }
};
