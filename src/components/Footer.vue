<template>
  <div class="v-footer">
    <about-Us></about-Us>
  </div>
</template>

<script>
import aboutUs from './AboutUs'
export default {
  name: 'v-footer',
  components: {
    aboutUs,
  },
}
</script>

<style>
  .v-footer{
    background: black;
    margin-top: 20px;
  }
</style>
