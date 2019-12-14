<template>
  <div class="teeter-box">
    <div class="tetter" >
      <shape
        v-for="(item,index) in leftShapes"
        :key="'leftShape-'+index"
        :object="item"
        :isPaused="isPaused"
      />
      <shape v-for="(item,index) in rightShapes" :key="'rightShape-'+index" :object="item" />
    </div>
    <div class="floor" :style="{'transform':'rotate('+this.pain+'deg)'}"></div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Shape from "./Shape";
export default {
  components: {
    Shape
  },
  computed: {
    ...mapState(["leftShapes", "rightShapes", "isPaused", "pain"])
  },
  created() {}
};
</script>

<style>
.teeter-box {
  position: absolute;
  bottom: 120px;
  top: 0;
  left: 0%;
  right: 0%;
}
.tetter {
  height: 100%;
}
.floor {
  width: 100%;
  height: 10px;
  background-color: #cc4125;
  position: absolute;
  bottom: 0;
  left: 0;
  transition: transform 0.2s ease-in-out;
}
</style>