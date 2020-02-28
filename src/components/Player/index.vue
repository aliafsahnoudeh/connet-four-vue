<template>
  <div class="player-container" :style="objectStyle">
    {{ name }}
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Player",
  props: {
    name: {
      default: "",
      type: String
    },
    type: {
      default: "",
      type: String
    },
    selectedColor: {
      default: "",
      type: String
    }
  },
  data() {
    return {
      color: "blue"
    };
  },
  mounted() {
    this.setColor(this.turn);
  },
  computed: {
    ...mapGetters("turn", ["turn"]),
    objectStyle() {
      return {
        color: this.color
      };
    }
  },
  watch: {
    turn(value) {
      this.setColor(value);
    }
  },
  methods: {
    setColor(type) {
      if (type === this.type) {
        //TODO set selected color
        this.color = this.selectedColor;
      } else {
        this.color = "gray";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>
