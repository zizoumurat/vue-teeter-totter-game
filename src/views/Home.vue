<template >
  <div class="home" @keyup.enter="send">
    <Header />
    <game-box />
    <modal v-show="gameOverStatus"/>
  </div>
</template>

<script>
import {  mapGetters } from "vuex";

// @ is an alias to /src
import Header from "@/components/Header.vue";
import GameBox from "@/components/GameBox.vue";
import Modal from "@/components/Modal";

export default {
  name: "home",
  computed: {
    ...mapGetters(["gameOverStatus"])
  },
  components: {
    Header,
    GameBox,
    Modal
  }
};
</script>
<style scoped>
.home {
  height: 100%;
}
</style>

