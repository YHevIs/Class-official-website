<template>
  <div class="home">
    <nav-header></nav-header>
    <header-button></header-button>
    <article class="aboutClass">
      <div class="aboutClass-bord">
      <h2>About Class</h2>
      <p>
        Decoration15(1) is a united, enterprising class full of ambition and competitive spirit. In daily life, we are positive, unassertive, and individual and stick to our dreams. Our class is made up of 49 small units. We believe that with a dedicated teacher and diligent students, our class would be a happy, humorous family. We believe that Decoration15(1) would be better in the future.
      </p>
      </div>

    </article>
    <inauguration></inauguration>
    <div class="body-main_1">
      <time-list></time-list>
      <message-board></message-board>
    </div>
      <about-us></about-us>

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
import messageBoard from './../components/MessageBoard'
import inauguration from './../components/Inauguration'
export default {
  name: "home",
  components: {
    navHeader,
    headerButton,
    timeList,
    vFooter,
    aboutUs,
    messageBoard,
    inauguration
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
  height: 3000px;
  background: rgba(0, 0, 0, 0.8);
}
.body-main_1 {
  display: flex;
  padding: 0 8.5%;
}
h2 {
  margin: 20px 0 30px;
}
.aboutClass{
  padding: 0 8.5%;
}
@keyframes body-main_1-1 {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.aboutClass p{
    font-size: .8em;
    font-weight: 400;
    line-height: 1.6em;
    margin: -15px 0 15px;
}
.aboutClass-bord{
  background:rgb(85, 85, 85);
  color:#fff;
  border:none;
  position:relative;
  font-size:1.6em;
  padding:10px 30px;
  /* cursor:pointer; */
  transition:800ms ease all;
  outline:none;
  border-radius: 3px;
  margin-bottom: 20px;
}
.aboutClass-bord:hover{
  background:rgba(255, 255, 255, 0.103);
  border-radius: 0 0 8px 8px;
}
.aboutClass-bord:before,.aboutClass:after{
  content:'';
  position:absolute;
  top:0;
  right:0;
  height:2px;
  width:0;
  background: rgb(204, 221, 231);
  transition:400ms ease all;
}
.aboutClass-bord:after{
  right:inherit;
  top:inherit;
  left:0;
  bottom:0;
}
.aboutClass-bord:hover:before,.aboutClass:hover:after{
  width:100%;
  transition:800ms ease all;
}

</style>