<template>
  <div>
    <h2>Vue Transition demo</h2>
    <button @click="showMess = !showMess">Show/Hide Content</button>
    <transition name="mess">
      <div class="message" v-show="showMess">
        <span>Đăng ký thành công!</span>
      </div>
    </transition>
  </div>  
</template>
<script>
export default {
  data(){
    return {
      showMess:false
    }
  }
}
</script>
<style scoped>
.message{
  position:fixed;
  right:10px;
  bottom:10px;
  padding:20px;
  background-color:rgba(10, 136, 31, 0.6);
  border:1px solid rgba(0,0,0,0.1);
  border-radius:3px;
  color:white;
}
.mess-leave-to,
.mess-enter{
  opacity:0;
}
.mess-leave,
.mess-enter-to{
  opacity:1;
}
.mess-leave-active,
.mess-enter-active{
  transition:opacity 0.5s;
}
</style>