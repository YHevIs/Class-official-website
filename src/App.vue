<template>
  <div id="app">
    <transition>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {},

mounted() {
            window.addEventListener('scroll', this.navTres);
        },
        methods: {
          navTres() {
              // window.console.log(1);
            },
        }
};
</script>

<style >
  body{
    overflow: scroll;
  }
</style>