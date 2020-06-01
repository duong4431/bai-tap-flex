<template>
  <div id="app">
    <div>
      <mobile></mobile>
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import mobile from './components/mobile.vue'

export default {
  name: 'App',
  components: {
    mobile
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
