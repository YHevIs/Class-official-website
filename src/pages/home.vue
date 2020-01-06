<template>
  <div class="home">
    <nav-header></nav-header>
    <header-button></header-button>
    <article class="aboutClass">
      <div class="aboutClass-bord">
        <h2>About Class</h2>
        <p>
          Decoration15(1) is a united, enterprising class full of ambition and
          competitive spirit. In daily life, we are positive, unassertive, and
          individual and stick to our dreams. Our class is made up of 49 small
          units. We believe that with a dedicated teacher and diligent students,
          our class would be a happy, humorous family. We believe that
          Decoration15(1) would be better in the future.
        </p>
      </div>
    </article>
    <inauguration></inauguration>
    <div class="body-main_1">
      <time-list></time-list>
      <message-board></message-board>
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
import messageBoard from "./../components/MessageBoard";
import inauguration from "./../components/Inauguration";
export default {
  name: "home",
  components: {
    navHeader,
    headerButton,
    timeList,
    vFooter,
    messageBoard,
    inauguration
  },
  mounted() {
    window.addEventListener("scroll", this.rollingLoading);
  },
  methods: {
    rollingLoading() {
      var scrollTop = document.documentElement.scrollTop;
      window.console.log(scrollTop);
      if (scrollTop > 600) {
        var _this = this;
        document.getElementsByClassName("aboutClass").className = 'aboutClassInit'
        window.removeEventListener("scroll", _this.rollingLoading);
      }
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  color: #fff;
}
/* mac页面卡顿兼容，同等于： */
/* .home {
  background: repeating-linear-gradient(60deg,rgba(0, 0, 0, 0.78),rgba(0, 0, 0, 0.78) 150px,rgba(0, 0, 0, 0.8) 0,rgba(0, 0, 0, 0.8) 300px);
  background-attachment: fixed;
} */
.home:before {
  content: "";
  position: fixed;
  z-index: -1;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: repeating-linear-gradient(
    60deg,
    rgba(0, 0, 0, 0.78),
    rgba(0, 0, 0, 0.78) 150px,
    rgba(0, 0, 0, 0.8) 0,
    rgba(0, 0, 0, 0.8) 300px
  );
  background-size: cover;
}
.body-main_1 {
  display: flex;
  padding: 20px 8.5% 0;
  border-top: solid 1px rgba(255, 255, 255, 0.1);
}
h2 {
  margin: 20px 0 30px;
}
.aboutClass {
  padding: 0 8.5%;
  opacity: 0;
  margin-top: 10px;
  /* transition: .35s ease; */
  animation: aboutClassInit 0.5s forwards;

}
@keyframes aboutClassInit {
  100% {
    opacity: 1;
    margin-top: 0;
  }
}
@keyframes body-main_1-1 {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.aboutClass p {
  font-size: 0.8em;
  font-weight: 400;
  line-height: 1.6em;
  margin: -15px 0 15px;
}
.aboutClass-bord {
  background: rgb(85, 85, 85);
  color: #fff;
  border: none;
  position: relative;
  font-size: 1.6em;
  padding: 10px 30px;
  /* cursor:pointer; */
  transition: 800ms ease all;
  outline: none;
  border-radius: 3px;
  margin-bottom: 20px;
}
.aboutClass-bord:hover {
  background: rgba(255, 255, 255, 0.103);
  border-radius: 0 0 8px 8px;
}
.aboutClass-bord:before,
.aboutClass:after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  height: 2px;
  width: 0;
  background: rgb(204, 221, 231);
  transition: 400ms ease all;
}
.aboutClass-bord:after {
  right: inherit;
  top: inherit;
  left: 0;
  bottom: 0;
}
.aboutClass-bord:hover:before,
.aboutClass:hover:after {
  width: 100%;
  transition: 800ms ease all;
}



@media  screen and (max-width: 500px) {
  .body-main_1{
    flex-direction: column;
  }
  .aboutClass p{
    font-size: 15px;
  }
}
</style>
