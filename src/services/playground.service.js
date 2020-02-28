import CellModel from "../types/cellModel";
import config from "../config";
import cellColors from "../types/cellColors";
import store from "../store";
import WinnerService from "./winner.service";

const PlayGroundService = {
  initiate: async function() {
    const cells = [];
    let availables = [];
    for (let j = config.ROWS_COUNT - 1; j >= 0; j--) {
      for (let i = 0; i < config.COLUMNS_COUNT; i++) {
        cells.push(new CellModel(i, j, cellColors.EMPTY));
        if (j === 0) availables.push(new CellModel(i, j, cellColors.EMPTY));
      }
    }
    return { cells, availables };
  },
  choose: async function(hIndex) {
    if (!store.getters["winner/winner"]) {
      const firstCellInColumn = await this.getTheFirstEmptyInColumn(hIndex);
      if (firstCellInColumn) {
        const turn = store.getters["turn/turn"];
        await store.dispatch("playground/fill", {
          hIndex: firstCellInColumn.hIndex,
          vIndex: firstCellInColumn.vIndex,
          turn
        });
        await store.dispatch("turn/switchTurn");
        this.updateAvailableCells();
      }
    }
    WinnerService.detectTheWinner();
  },
  updateAvailableCells: async function() {
    const availableCells = [];
    const cells = store.getters["playground/cells"];
    for (let i = 0; i < config.COLUMNS_COUNT; i++) {
      for (let j = 0; j < config.ROWS_COUNT; j++) {
        let index = cells.findIndex(
          cell => cell.hIndex === i && cell.vIndex === j
        );
        if (cells[index].color === cellColors.EMPTY) {
          availableCells.push(cells[index]);
          break;
        }
      }
    }
    await store.dispatch("playground/setAvailables", availableCells);
  },
  getTheFirstEmptyInColumn: async function(hIndex) {
    const availables = store.getters["playground/availables"];
    let index = availables.findIndex(
      cell => cell.hIndex === hIndex && cell.color === cellColors.EMPTY
    );
    return availables[index];
  }
};

export default PlayGroundService;
