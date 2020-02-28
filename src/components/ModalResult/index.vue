<template>
  <div class="modal" v-show="winner !== null && showModal">
    <div class="modal-content">
      <span class="text">The winner is: {{ winner }}</span>
      <span class="close" @click="closeModal">&times;</span>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters("winner", ["winner"]),
    ...mapGetters("modal", ["showModal"])
  },
  methods: {
    ...mapActions("modal", ["setShowModal"]),
    closeModal() {
      this.setShowModal(false);
    }
  }
};
</script>

<style lang="scss">
@import "./style.scss";
</style>
