<template>
  <div class="login">
    <div>
      <h1><i class="el-icon-user-solid"></i>登陆</h1>
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="用户名：">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="密码：">
          <el-input type="password" v-model="form.password"></el-input>
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
import md5 from "js-md5";
import axios from "axios";
import Cookies from 'js-cookie'
// import instance from '../axios'
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
    // axios{
    //   url: '',
    //   data:{
    //     type: sss
    //   }
    //   beforeSend: function(request){
    //     request.setrequestheader('key', token)
    //   },
    //   success: v,

    // },
    //表单提交
    onSubmit() {
      let md5Password = md5(this.form.password);
      let data = {
        username: this.form.username,
        password: md5Password,
        securityPolicy: this.form.securityPolicy
      };
      axios
        .post(
          "http://localhost/Class-official-website/public/index.php/api/userLogin",
          data
        )
        .then(res => {
          switch (res.data) {
            case "error,no username":
              this.$notify.error({
                title: "登陆失败",
                message: "用户名不存在"
              });
              break;
            case "error,no password":
              this.$notify.error({
                title: "登陆失败",
                message: "密码错误"
              });
              break;
            case "error,securityPolicy":
              this.$notify.error({
                title: "登陆失败",
                message: "身份认证错误"
              });
              break;
          }
          if (res.data !== "error,no username" && res.data !== "error,no password" && res.data!=="error,securityPolicy"){
            Cookies.set('token',res.data);
            this.$router.push({path: '/'});
            this.$notify({
                title: "登陆成功",
                message: "身份认证成功,正在登陆...",
                type: 'success'
              });
          }
        })
        .catch(() => {
          this.$notify.error({
            title: "登陆失败",
            message: "服务端可能出现错误，请联系网站研发者"
          });
        });
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
