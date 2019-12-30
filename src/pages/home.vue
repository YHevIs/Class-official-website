<template>
  <div class="home">
    <nav-header></nav-header>
    <header-button></header-button>
    <v-footer></v-footer>
  </div>
</template>

<script>
import navHeader from './../components/Header'
import headerButton from './../components/HeaderButton'
import vFooter from './../components/Footer'
export default {
  name: 'home',
  components:{
    navHeader,
    headerButton,
    vFooter
  }
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
    color: #fff;
  }
  .home{
    height: 15000px;
    background: #fff
  }
</style>