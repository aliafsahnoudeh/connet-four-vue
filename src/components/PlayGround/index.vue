<template>
  <div class="playground-container" :style="objectStyle">
    <Cell
      v-for="(cell, index) in cells"
      :key="index"
      :hIndex="cell.hIndex"
      :vIndex="cell.vIndex"
      :color="cell.color"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Cell from "@/components/Cell";
import config from "../../config";

export default {
  name: "PlayGround",
  components: {
    Cell
  },
  mounted() {
    this.initiate();
  },
  data() {
    return {
      objectStyle: {
        "grid-template-columns": `repeat(${config.COLUMNS_COUNT}, 1fr)`,
        "grid-template-rows": `repeat(${config.ROWS_COUNT}, 1fr)`
      }
    };
  },
  methods: {
    ...mapActions("playground", ["initiate"])
  },
  computed: {
    ...mapGetters("playground", ["cells"])
  }
};
</script>

<style lang="scss" scoped>
@import "../../styles/variables.scss";

.playground-container {
  margin-top: 3em;
  display: grid;
  background-color: $playgroundColor;
  width: 80%;
  justify-self: center;
  justify-items: center;
  grid-row-gap: 5px;
}
</style>
