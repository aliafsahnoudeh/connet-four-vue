import Cell from "@/components/Cell/index.vue";

import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";

import playground from "../../../src/store/modules/playground";
import turn from "../../../src/store/modules/turn";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("Cell.vue", () => {
  const store = new Vuex.Store({
    modules: {
      playground,
      turn
    }
  });

  it(`should have a button element`, async () => {
    const wrapper = shallowMount(Cell, { store, localVue });
    expect(wrapper.find("button").isVisible()).toBe(true);
  });

  it(`should have an element with class of cell-container`, async () => {
    const wrapper = shallowMount(Cell, { store, localVue });
    expect(wrapper.find(".cell-container").isVisible()).toBe(true);
  });
});
