<template >
  <div class="home" @keyup.enter="send">
    <Header />
    <game-box />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import GameBox from "@/components/GameBox.vue";

export default {
  name: "home",
  components: {
    Header,
    GameBox
  }
  
};
</script>
<style scoped>
.home {
  height: 100%;
}
</style>

