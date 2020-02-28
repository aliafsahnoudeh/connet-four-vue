<template>
  <div class="header-container">
    <Player
      name="Player A"
      :type="players.PLAYER_A"
      :selectedColor="cellColors.PLAYER_A"
    />
    <img src="../../assets/reset.png" @click="handleClick" />
    <Player
      name="Player B"
      :type="players.PLAYER_B"
      :selectedColor="cellColors.PLAYER_B"
    />
  </div>
</template>

<script>
import Player from "@/components/Player";
import players from "@/types/players";
import cellColors from "../../types/cellColors";
import ResetService from "../../services/reset.service";

export default {
  name: "Header",
  components: {
    Player
  },
  data() {
    return {
      players,
      cellColors
    };
  },
  methods: {
    handleClick() {
      ResetService.reset();
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>
