<template>
  <div
    class="shape"
    :class="object.class"
    :style="{'width':object.width+'px','height':object.height+'px','left':object.left+'px','bottom':object.bottom+'%','border-width':'0px '+object.width+'px '+object.width+'px '+object.width/2+'px'}"
  >{{object.weight}}</div>
</template>

<script>
import { mapMutations, mapState, mapGetters } from "vuex";
export default {
  props: ["object", "isPaused"],
  computed: {
    ...mapState(["maxWidth"])
  },
  methods: {
    ...mapGetters(["pain", "gameOverStatus"]),
    moveBottoms() {
      var self = this;
      if (this.object.bottom > 0) {
        if (!this.isPaused) {
          this.object.bottom--;
        }
        this.intervalid1 = setTimeout(
          function() {
            this.moveBottoms();
          }.bind(this),
          50
        );
      } else {
        this.$store.dispatch("activeShapeMoveToLeft");
        this.pain();
        if (!this.gameOverStatus()) {
          this.$store.dispatch("addShapeToRight");
          this.pain();
          this.$store.dispatch("addShapeToActive");
        } else {
          console.log("game finished");
        }
      }
    },
    moveLeft() {
      if (!this.isPaused && this.object.bottom > 0 && this.object.left - 10 > 0)
        this.object.left -= 10;
    },
    moveRight() {
      if (
        !this.isPaused &&
        this.object.bottom > 0 &&
        this.object.left + this.object.width + 10 <
          Math.floor(this.maxWidth / 2)
      )
        this.object.left += 10;
    }
  },
  created() {
    if (this.object.isNewItem) {
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
  }
};
</script>

<style>
.shape {
  position: absolute;
  text-align: center;
  color: #fff;
  transition: transform 0.2s ease-in-out;
  line-height: 100%;
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