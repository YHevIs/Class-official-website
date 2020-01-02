<template>
  <div class="home">
    <nav-header></nav-header>
    <header-button></header-button>
    <div class="body-main_1">
      <time-list></time-list>
      <about-us></about-us>
    </div>

    <v-footer></v-footer>
    <div></div>
  </div>
</template>

<script>
import navHeader from "./../components/Header";
import headerButton from "./../components/HeaderButton";
import vFooter from "./../components/Footer";
import timeList from "./../components/TimeList";
import aboutUs from "./../components/AboutUs";
export default {
  name: "home",
  components: {
    navHeader,
    headerButton,
    timeList,
    vFooter,
    aboutUs
  },
  mounted() {
    // alert('提示：该页面仅兼容IE10以上页面')
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  color: #fff;
}
.home {
  height: 15000px;
  background: rgba(0, 0, 0, 0.8);
}
.body-main_1 {
  display: flex;
  padding: 0 8.5%;
}
h2 {
  margin: 20px 0 30px;
}
@keyframes body-main_1-1 {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>