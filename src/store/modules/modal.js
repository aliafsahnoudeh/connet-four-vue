const state = {
  showModal: false
};

const getters = {
  showModal: state => {
    return state.showModal;
  }
};

const actions = {
  async setShowModal({ commit }, showModal) {
    commit("SET_SHOW_MODAL", showModal);
  }
};

const mutations = {
  SET_SHOW_MODAL(state, showModal) {
    state.showModal = showModal;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
