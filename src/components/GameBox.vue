<template>
  <div class="game-box">
    <teeter-totter/>
    <center />
  </div>
</template>

<script>
import Center from "./Center";
import TeeterTotter from "./TeeterTotter";
export default {
  components: {
    Center,
    TeeterTotter
  }
};
</script>

<style>
.game-box {
  width: 1000px;
  margin: 0 auto;
  height: 100%;
  position: relative;
  overflow: hidden;
}
</style>