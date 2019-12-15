<template>
  <div class="teeter-box">
    <div class="tetter">
     
      <shape v-for="(item) in activeShapes" :key="item.id" :object="item" :isPaused="isPaused" />
  
  
      <div class="floor" :style="{'transform':'rotate('+this.pain+'deg)','transition': 'transform ' +Math.abs(pain)*0.1+'s ease-in-out'}">
        <shape v-for="(item,index) in leftShapes" :key="'leftShape-'+index" :object="item" />
        <shape v-for="(item,index) in rightShapes" :key="'rightShape-'+index" :object="item" />
      </div>
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
  methods: {},
  computed: {
    ...mapState([
      "leftShapes",
      "rightShapes",
      "activeShapes",
      "isPaused",
      "pain"
    ]),
    getId() {
      return newDate().getDate();
    }
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
  width: 1000px;
  height: 10px;
  background-color: #cc4125;
  position: absolute;
  bottom: 0;
  left: 0;
  transition: transform 0.4s ease-in-out;

}
</style>