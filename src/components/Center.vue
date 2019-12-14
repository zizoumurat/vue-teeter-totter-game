<template>
  <div class="center-box">
    <div class="center"></div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.center-box {
  left: 0;
  right: 0;
  position: absolute;
  bottom: 0;
}
.center {
  width: 0;
  height: 0;
  margin: 0 auto;
  border-style: solid;
  border-width: 0 80px 120px 80px;
  border-color: transparent transparent #666 transparent;
}
</style>