<template>
  <div class="header-bton">
    <router-link class="main" to="login">
      Sign in
    </router-link>
    <el-button @click="drawer = true" type="primary" class="main">
      About
    </el-button>
    <el-drawer title="关于" :visible.sync="drawer" :with-header="false">
      <h2>关于</h2>
    </el-drawer>
  </div>
</template>

<script>
export default {
  name: "header-button",
  data(){
    return {
      drawer: false,
    }
  }
};
</script>

<style>
.header-bton {
  display: flex;
}
.header-bton > .main {
  height: 50px;
  width: 120px;
  border-radius: 40px;
  background: #fff;
  box-shadow: 0 8px 5px -5px rgba(0, 0, 0, 0.3);
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: -25px;
  left: calc(50% - 150px);
  font-size: 14px;
  animation: headerButton 1s ease;
  margin: 0 10px;
  border:solid #fff 1px;
  transition: .35s ease;
}
.header-bton > .el-button{
  background: rgba(0,0,0,.4);
  color: #fff;
}
.header-bton > .el-button:hover{
  background: rgba(0,0,0,.8);
  color: #9f9f9f;
}
.header-bton > .main:focus{
  background: rgba(0,0,0,.4);
  color: #fff;
  border:solid #fff 1px;
}
.header-bton > .main:hover{
  background: rgba(0,0,0,.4);
  color: #fff;
  border:solid #fff 1px;
}
.header-bton .el-drawer{
  background:#000;
  padding: 20px 10px;
}
@keyframes headerButton {
  0% {
    opacity: 0;
    top: 0;
  }
  100% {
    top: -25px;
    opacity: 1;
  }
}
</style>
