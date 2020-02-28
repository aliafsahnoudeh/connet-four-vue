import PlayGroundService from "../../services/playground.service";
import cellColors from "../../types/cellColors";
import players from "../../types/players";

const state = {
  cells: [],
  availables: []
};

const getters = {
  cells: state => {
    return state.cells;
  },
  availables: state => {
    return state.availables;
  }
};

const actions = {
  async initiate({ commit }) {
    commit("INITIATE", await PlayGroundService.initiate());
  },
  async fill({ commit }, data) {
    commit("FILL", data);
  },
  async setAvailables({ commit }, availables) {
    commit("SET_AVAILABLES", availables);
  }
};

const mutations = {
  INITIATE(state, result) {
    state.cells = result.cells;
    state.availables = result.availables;
  },
  FILL(state, data) {
    let index = state.cells.findIndex(
      cell => cell.hIndex === data.hIndex && cell.vIndex === data.vIndex
    );
    //TODO refactor
    if (index > -1) {
      let color = "";
      if (data.turn === players.PLAYER_A) {
        color = cellColors.PLAYER_A;
      } else if (data.turn === players.PLAYER_B) {
        color = cellColors.PLAYER_B;
      }
      state.cells[index].color = color;
    }
  },
  SET_AVAILABLES(state, availables) {
    state.availables = availables;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
