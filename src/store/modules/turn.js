import players from "../../types/players";

const state = {
  turn: players.PLAYER_A
};

const getters = {
  turn: state => {
    return state.turn;
  }
};

const actions = {
  async switchTurn({ commit, state }) {
    let player =
      state.turn === players.PLAYER_A ? players.PLAYER_B : players.PLAYER_A;
    commit("SET_TURN", player);
  }
};

const mutations = {
  SET_TURN(state, player) {
    state.turn = player;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
