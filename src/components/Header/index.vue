<template>
  <div class="header-container">
    <Player
      name="Player A"
      :type="players.PLAYER_A"
      :selectedColor="cellColors.PLAYER_A"
    />
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
  }
};
</script>

<style lang="scss" scoped>
//TODO styles in seprate file
.header-container {
  display: grid;
  width: 100%;
  grid-template-columns: 50% 50%;
  img {
    justify-self: center;
  }
}
</style>
