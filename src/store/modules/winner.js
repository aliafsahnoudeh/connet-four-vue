const state = {
  winner: null
};

const getters = {
  winner: state => {
    return state.winner;
  }
};

const actions = {
  async setWinner({ commit }, winner) {
    commit("SET_WINNER", winner);
  }
};

const mutations = {
  SET_WINNER(state, winner) {
    state.winner = winner;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
