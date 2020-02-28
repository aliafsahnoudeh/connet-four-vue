import Vue from "vue";
import Vuex from "vuex";
import turn from "./modules/turn";
import playground from "./modules/playground";
import winner from "./modules/winner";
import modal from "./modules/modal";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: { turn, playground, winner, modal }
});
