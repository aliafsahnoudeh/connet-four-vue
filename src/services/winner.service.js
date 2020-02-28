import config from "../config";
import cellColors from "../types/cellColors";
import store from "../store";

const WinnerService = {
  detectTheWinner: async function() {
    const cells = store.getters["playground/cells"];
    for (let i = 0; i < config.COLUMNS_COUNT; i++) {
      for (let k = 0; k < config.ROWS_COUNT; k++) {
        const cell = cells.find(item => {
          return item.hIndex === i && item.vIndex === k;
        });
        if (cell.color !== cellColors.EMPTY) {
          if (
            //horizontally
            (await this.goDiagonally(cells, cell, 1, 0)) ||
            //vertically
            (await this.goDiagonally(cells, cell, 0, 1)) ||
            //up & right
            (await this.goDiagonally(cells, cell, 1, 1)) ||
            // up & left
            (await this.goDiagonally(cells, cell, -1, 1)) ||
            // down & right
            (await this.goDiagonally(cells, cell, 1, -1)) ||
            // down & left
            (await this.goDiagonally(cells, cell, -1, -1))
          ) {
            await store.dispatch("winner/setWinner");
            await store.dispatch("modal/setShowModal", true);
          }
        }
      }
    }
  },
  goDiagonally: async function(cells, cell, xMove, yMove) {
    let count = 1;
    let x = cell.hIndex + xMove;
    let y = cell.vIndex + yMove;
    while (x < config.COLUMNS_COUNT && y < config.ROWS_COUNT) {
      const nextCell = cells.find(item => {
        return (
          item &&
          item.hIndex === x &&
          item.vIndex === y &&
          item.color === cell.color
        );
      });
      if (nextCell) {
        count++;
        x = x + xMove;
        y = y + yMove;
        if (count >= config.WINNER_LIMIT) {
          return true;
        }
      } else return false;
    }
    return false;
  }
};

export default WinnerService;
