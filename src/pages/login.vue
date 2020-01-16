<template>
  <div class="login">
    <div>
      <h1><i class="el-icon-user-solid"></i>登陆</h1>
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="用户名：">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="密码：">
          <el-input v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item label="认证：">
          <el-select v-model="form.securityPolicy" placeholder="我班校区位于">
            <el-option label="环城北路" value="huanchengbeilu"></el-option>
            <el-option label="天目山路" value="tianmushanlu"></el-option>
            <el-option label="学源街" value="xueyuanjie"></el-option>
            <el-option label="文泽路" value="wenzelu"></el-option>
            <el-option label="黄山路" value="huangshanlu"></el-option>
            <el-option label="朱方路" value="zhufanglu"></el-option>
            <el-option label="白云路" value="baiyunlu"></el-option>
            <el-option label="西一环路" value="xiyihuanlu"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">登陆</el-button>
          <router-link to="./">返回首页</router-link>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  components: {},
  data() {
    return {
      form: {
        username: "",
        password: "",
        securityPolicy: ""
      }
    };
  },
  methods: {
    //表单提交
    onSubmit() {
      console.log("submit!");
    }
  }
};
</script>
<style scoped>
html {
  min-height: 100%;
}
.login {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.8) !important;
  padding: 30px;
}
.login > div {
  width: 400px;
  background: rgba(0, 0, 0, 0.5);
  padding: 20px;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
}
.login label {
  color: #fff !important;
}
.el-button--primary {
  background: rgba(0, 0, 0, 0.8) !important;
  border-color: #fff !important;
}
h1 {
  color: #fff;
  margin-bottom: 20px;
  font-size: 28px;
}
.login .router-link-active {
  padding: 12px 20px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background: rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  margin: 0 30px;
}
.login .el-form {
  width: 90%;
}
</style>
