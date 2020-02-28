import initAvailables from "../constants/initAvailables";
import initCells from "../constants/initCells";

import PlayGroundService from "../../../src/services/playground.service";

describe("PlayGroundService", () => {
  it("should inite currectly cells", async () => {
    const result = await PlayGroundService.initiate();
    expect(result.cells).toEqual(initCells);
  });

  it("should inite currectly available cells", async () => {
    const result = await PlayGroundService.initiate();
    expect(result.availables).toEqual(initAvailables);
  });
});
