<template>
  <div class="header-bton">
    <div></div>
    <div class="main">
      登陆
    </div>
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
  height: 70px;
  width: 120px;
  border-radius: 40px ;
  background: #fff;
  box-shadow: 0 8px 5px -5px rgba(0,0,0,.3);
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: -35px;
  left: calc(50% - 60px);
  font-size: 14px;
}
</style>
