<template>
  <div class="modal-content">
    <div class="modal-box">
      <div class="modal-header">
        <h5>GAME OWER</h5>
      </div>
      <div class="modal-body">Do you want to start a new game?</div>
      <div class="modal-footer">
        <button class="btn btn-blue" @click="newGame()">Yes, Start New Game</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    methods:{
        newGame(){
             this.$store.dispatch("startNewGame");
        }
    }
};
</script>

<style scoped>
.modal-content {
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  text-align: left;
}
.modal-box {
  width: 500px;
  background-color: #ffff;
  margin: 0 auto;
  transition: all 0.2s ease-in-out;
  border-radius: 0.3rem;
  margin-top: 80px;
}
.modal-header {
  border-bottom: 1px solid #dee2e6;
  padding: 1rem;
  text-align: left;
}
.modal-header h5 {
  line-height: 1.5;
  margin: 0;
}
.modal-body {
  padding: 1rem;
}
.modal-footer {
  border-top: 1px solid #dee2e6;
  padding: 1rem;
}
.btn {
  
  display: inline-block;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.btn-blue{
    background-color: #0062cc;
  border-color: #0062cc;
  color:#fff;
}
</style>