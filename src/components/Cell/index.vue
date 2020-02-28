<template>
  <button @click="onClick" class="cell-container" :style="objectStyle"></button>
</template>

<script>
import PlayGroundService from "../../services/playground.service";

export default {
  name: "Cell",
  props: {
    hIndex: {
      default: 0,
      type: Number
    },
    vIndex: {
      default: 0,
      type: Number
    },
    color: {
      default: "white",
      type: String
    }
  },
  computed: {
    objectStyle() {
      return {
        backgroundColor: this.color
      };
    }
  },
  methods: {
    onClick() {
      PlayGroundService.choose(this.hIndex);
    }
  }
};
</script>

<style lang="scss" scoped>
//TODO styles in seprate file
.cell-container {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border: none;
  outline: none;
  cursor: pointer;
}
</style>
