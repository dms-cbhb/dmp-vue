<template>
    <div class="bg">
      <div class="case">
        <h2>数据运营处理中心</h2>
        <div class="landing">
          <input type="text" placeholder="用户名" v-model="usercode" />
          <i class="el-icon-user-solid one"></i>
        </div>
        <div class="pass">
          <input type="password" placeholder="密码" v-model="password" />
          <i class="el-icon-lock two"></i>
        </div>
        <el-button type="success" @click="add">登录</el-button>
      </div>
    </div>
</template>

<script>
import { login } from "../../http/http.server";
import md5 from "js-md5";
export default {
  data() {
    return {
      usercode: "",
      password: ""
    };
  },
  methods: {
    add() {
      login({
        username: this.usercode,
        pass: md5(this.password)
      }).then(res => {
        console.log(res);
        if (res.data.state == 0) {
          alert("未找到用户");
          (this.usercode = ""), (this.password = "");
        } else {
          var obj = JSON.stringify(res.data);
          sessionStorage.setItem("uid", res.data.uid),
            sessionStorage.setItem("Authorization", res.data.token);
          localStorage.setItem("info", obj);
          this.$router.push("./SystemManagement");
        }
      });
    }
  }
};
</script>


<style lang="scss" scoped>

h2 {
  margin-top: 50px;
}
.case {
  height: 350px;
  width: 300px;
  position: absolute;
  right: 120px;
  top: 180px;
  background: #f1f1f1;
  border-radius: 8px;
  box-shadow: 0 0 3px #ccc;
}
.case input {
  margin-top: 20px;
  width: 250px;
  height: 30px;
  padding-left: 6px;
}
.case {
  text-align: center;
}
button {
  width: 256px;
  margin-top: 25px;
  letter-spacing: 10px;
}
.landing {
  position: relative;
}
.one {
  position: absolute;
  left: 84%;
  top: 52%;
}
.two {
  position: absolute;
  left: 84%;
  top: 52%;
}
.bg {
  width: 100%;
  height: 97vh;
  background: url("../../assets/bg.png") no-repeat;
  position: relative;
  background-size: 100% 100%;
 
}
</style>
