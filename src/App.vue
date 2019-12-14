<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  methods: {
    ...mapMutations({
      togglePause: "PauseToggle",
    }),
  },
  mounted() {
    var element = this;
    window.addEventListener("keypress", function(e) {
      if (e.keyCode == 32) {
        element.togglePause();
      }
      
    });
  },
  created(){
    this.$store.dispatch("startNewGame");
  }
};
</script>

<style>
body {
  margin: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
