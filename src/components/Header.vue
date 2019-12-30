<template>
  <div class="header">
    <div v-bind:class="{nav: isNav,navBlack: isNavBlack}">
      <ul>
        <li>
          <router-link to="./">home</router-link>
        </li>
        <li>
          <router-link to="address">address</router-link>
        </li>
        <li>
          <a>导航2</a>
        </li>
        <li>
          <a>导航3</a>
        </li>
        <li>
          <a>导航4</a>
        </li>
      </ul>

    </div>
    <div class="banner">
      <h1>班级官网</h1>
      <p>副标题</p>
    </div>
  </div>
</template>

<script>
import RebootHeader from "./RebootHeader";
export default {
  name: "nav-header",
  RebootHeader,

  data: function() {
    const vm = window.vm;
    return {
      vm:vm,
      isNav: true,
      isNavBlack: false,
      lang:'zh-CN',
    };
  },

  mounted() {
    window.addEventListener("scroll", this.navTres);
  },
  methods: {
    navTres() {
      var scrollTop = document.documentElement.scrollTop;
      if (scrollTop > 600) {
        var _this = this;
        window.console.log(_this);
        _this.isNavBlack = true;
      }
      if (scrollTop <= 600) {
        _this = this;
        _this.isNavBlack = false;
      }
    },
    changLang(){
      alert(this.lang)
    }
  }
};
</script>
<style>
a {
  text-decoration: none;
}

.nav {
  height: 75px;
  background: rgba(0, 0, 0, 0);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  color: #fff;
  transition: 0.35 ease;
  z-index: 999;
}
.nav ul {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  font-size: 14px;
  padding: 0 8.5%;
}
li {
  list-style-type: none;
  margin: 0 10px;
}
.header {
  height: 600px;
  background: #000;
  border-radius: 0 0 3% 3%;
  box-shadow: 0 5px 4px -4px black;
  position: relative;
  top: 0px;
  animation: banner_1 1s ease;
}
.banner {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.banner h1 {
  margin-bottom: 50px;
}
.banner p {
  margin-bottom: 100px;
}
.banner h1{
  color:white;
  text-shadow: 
  0 1px hsl(0,0%,85%),
  0 2px hsl(0,0%,80%),
  0 3px hsl(0,0%,75%),
  0 4px hsl(0,0%,70%),
  0 5px hsl(0,0%,65%),
  0 5px 10 black;
  
}
.navBlack {
  background: #000;
  animation: nav_1 .3s ease;
  border-radius: 0 0 3% 3%;
}
@keyframes banner_1 {
  0% {
    top: -600px;
  }
  65% {
    top: 0px;
  }
  80% {
    top: -20px;
  }
  90% {
    top: 10px;
  }
  95% {
    top: -10px;
  }
  100% {
    top: 0px;
  }
}
@keyframes nav_1 {
  0%{
    background: none;
  }
  100%{
    background: #000;
  }
}
</style>>