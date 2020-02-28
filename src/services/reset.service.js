import store from "../store";
import players from "../types/players";

const ResetService = {
  reset: async function() {
    store.dispatch("winner/setWinner", false);
    const turn = await store.getters["turn/turn"];
    if (turn !== players.PLAYER_A) {
      store.dispatch("turn/switchTurn");
    }
    store.dispatch("playground/initiate", false);
  }
};

export default ResetService;
