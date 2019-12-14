<template>
  <div
    class="shape"
    :class="object.class"
    :style="{'width':object.width+'px','height':object.height+'px','left':object.left+'%','bottom':object.bottom+'%','border-width':'0px '+object.width+'px '+object.width+'px '+object.width/2+'px'}"
  >{{object.weight}}</div>
</template>

<script>
import { mapMutations, mapState, mapGetters } from "vuex";
export default {
  props: ["object", "isPaused"],
  methods: {
    ...mapGetters({
      gameOver: "gameOverStatus"
    }),
    moveBottoms() {
      if (this.object.bottom > 0) {
        if (!this.isPaused) this.object.bottom--;
        setTimeout(this.moveBottoms, 50);
      } else if (this.object.isLeftItem) {
        if (!this.gameOver()) {
          this.$store.commit("addShapeToRight");
          this.$store.commit("addShapeToLeft");
        } else {
          if(this.gameOver())
          {
            alert("Oyun Biti")
          }
        }
      }
    },
    moveLeft() {
      if (!this.isPaused && this.object.bottom > 0) this.object.left -= 1;
    },
    moveRight() {
      if (!this.isPaused && this.object.bottom > 0) this.object.left += 1;
    }
  },
  mounted() {
    this.moveBottoms();
    var element = this;
    window.addEventListener("keydown", function(e) {
      if (e.keyCode == 37) {
        element.moveLeft();
      }
       if (e.keyCode == 39) {
        element.moveRight();
      }
    });
  }
};
</script>

<style>
.shape {
  position: absolute;
  text-align: center;
  color: #fff;
  transition: transform 0.2s ease-in-out;
}
.circle {
  border-radius: 50%;
  background-color: #cfe2f3;
}
.triangle {
  width: 0 !important;
  height: 0 !important;
  border-style: solid;
  border-color: transparent;
  border-bottom-color: #ff9900;
  border-top-width: 0 !important;
}
.rectangle {
  background-color: #6aa84f;
}
</style>