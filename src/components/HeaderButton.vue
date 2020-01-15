<template>
  <div class="header-bton">
    <div></div>
    <router-link class="main" to="login">
      Sign in
    </router-link>
    <div></div>
  </div>
</template>

<script>
export default {
  name: 'header-button',

}
</script>

<style>
.header-bton > .main{
  height: 50px;
  width: 120px;
  border-radius: 40px ;
  background: #fff;
  box-shadow: 0 8px 5px -5px rgba(0,0,0,.3);
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: -25px;
  left: calc(50% - 60px);
  font-size: 14px;
  animation: headerButton 1s ease;
}
@keyframes headerButton{
  0%{
    opacity: 0;
    top:0
  }
  100%{
    top:-25px;
    opacity: 1;
  }
}
</style>
