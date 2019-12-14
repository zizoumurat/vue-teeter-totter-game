<template>
  <div class="teeter-box">
    <div class="tetter" :style="{'transform':'rotate('+this.pain+'deg)'}">
      <shape
        v-for="(item,index) in leftShapes"
        :key="'leftShape-'+index"
        :object="item"
        :isPaused="isPaused"
      />
      <shape v-for="(item,index) in rightShapes" :key="'rightShape-'+index" :object="item" />
    </div>
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
  border-bottom: 10px solid #cc4125;
  height: 100%;
  transition: transform 0.2s ease-in-out;
}
.floor{
  width:100%;
  height: 10px;
  background-color: #cc4125;
  position:absolute;
  bottom:0;
  left:0;
}
</style>