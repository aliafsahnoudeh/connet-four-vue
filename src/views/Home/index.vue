<template>
  <div class="home">
    <Header />
    <PlayGround />
    <ModalResult />
  </div>
</template>

<script>
import Header from "@/components/Header";
import PlayGround from "@/components/PlayGround";
import ModalResult from "@/components/ModalResult";

export default {
  name: "Home",
  components: {
    Header,
    PlayGround,
    ModalResult
  }
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>
