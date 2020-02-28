import PlayGround from "@/components/PlayGround/index.vue";
import Cell from "@/components/Cell/index.vue";

import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";

import playground from "../../../src/store/modules/playground";
import turn from "../../../src/store/modules/turn";

import config from "../../../src/config";
import cellColors from "../../../src/types/cellColors";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("PlayGround.vue", () => {
  const store = new Vuex.Store({
    modules: {
      playground,
      turn
    }
  });

  it(`should have ${config.COLUMNS_COUNT *
    config.ROWS_COUNT} Cell component`, async () => {
    const wrapper = shallowMount(PlayGround, { store, localVue });

    //TODO prevent static waiting
    setTimeout(() => {
      expect(wrapper.findAll(Cell).length).toBe(
        parseInt(config.COLUMNS_COUNT * config.ROWS_COUNT)
      );
    }, 2000);
  });

  it(`should have empty cells on start`, async () => {
    const wrapper = shallowMount(PlayGround, { store, localVue });
    setTimeout(() => {
      for (let i = 1; i < wrapper.findAll(Cell).length; i++) {
        expect(
          wrapper
            .findAll(Cell)
            .at(i)
            .attributes("style")
        ).toBe(`background-color: ${cellColors.EMPTY};`);
      }
    }, 2000);
  });
});
