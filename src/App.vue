<template>

  <div>
    <h1 id="title">Title JQuery change color</h1>
    <br>
    <button @click="showMessage('Hello world!')">Show Hello</button>

    <button @click="increment"> + </button> <span>{{ count }}</span> <button @click="decrement"> - </button>
  </div>
</template>

<script>
import MainView from '@/views'
import { provide } from 'vue';
import mixins_1 from "@/mixins/mixin_1";
import mixins_2 from "@/mixins/mixin_2";
import ext1 from "@/extends/ext1"
export default {
  name: 'App',
  mixins: [mixins_1, mixins_2],
  extends: ext1,
  components: {
    MainView
  },
  // setup(props) {
  //   provide("logged-in", false);
  //   provide("show-alert", (message) => {
  //     alert(message);
  //   });
  // }
  methods: {
    changeColor() {
      $("#title").css('color', 'red')
    }
  },

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
