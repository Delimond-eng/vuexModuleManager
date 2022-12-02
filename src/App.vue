<template>
  <post-component />
</template>

<script>
import AutoIncrement from './components/auto_increment_component'
import HelloWorld from './components/HelloWorld.vue'
import PostComponent from './components/posts_component.vue'

export default {
  name: 'App',

  components: {
    AutoIncrement,
    PostComponent,
    HelloWorld
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
