<template>
  <div class="fot">
    <div class="arrow">
      <van-icon class="arrow_left" name="arrow-left" />
    </div>
    <div class="login">
      <div class="login_l">注册 &nbsp;/&nbsp;登录</div>
      <div class="group">
        <van-cell-group>
          <van-field v-model="from.nickname" placeholder="USERNAME" class="user" />
          <br />
          <van-field v-model="from.password" type="password" placeholder="PASSWORD" />
          <br />
          <van-field clearable label="手机号" placeholder="暂时不可用" />
          <van-field center clearable label="短信验证码" placeholder="暂时不可用">
            <van-button slot="button" size="small" type="primary">发送验证码</van-button>
          </van-field>
          <van-field v-model="from.verify" type="code" label="验证码" placeholder="请输入验证码" />
          <div class="img" @click="getCode()">
            <span>点击切换</span>
            <img src="api/verify" ref="captcha" />
          </div>
        </van-cell-group>
      </div>
      <div class="but">
        <van-button type="primary" @click="getLogin()">登录</van-button>&nbsp;
        <van-button type="danger" @click="getRegister()">注册</van-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      from: {
        nickname: "",
        password: "",
        verify: ""
      },
      code: ""
    };
  },
  components: {},
  methods: {
    //切换验证码
    getCode() {
      this.$refs.captcha.src = "api/verify?time=" + Date.now();
    },
    //登录发送请求
    getLogin() {
      console.log(this.from);
      let data = {
        nickname: this.from.nickname,
        password: this.from.password,
        verify: this.from.verify
      };
      this.$api
        .getLogin(data)
        .then(res => {
          if (res.code === 200) {
            console.log("登录成功");
            localStorage.setItem("name",this.from.nickname)
            //this.$router.push("")
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    //注册
    getRegister() {
      //console.log(this.from);
      let data = {
        nickname: this.from.nickname,
        password: this.from.password,
        verify: this.from.verify
      };
      this.$api
        .getRegister(data)
        .then(res => {
          if (res.code === 200) {
            console.log("注册成功");
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.fot {
  height: 600px;
  background-image: url("../../assets/img/login.png");
}
.arrow {
  width: 9.667vw;
  height: 9.667vw;
  background: rgb(71, 71, 71);
  border-radius: 50%;
  margin: 7px;
  .arrow_left {
    color: rgb(253, 253, 253);
    margin: 2.333vw 2.333vw 0;
  }
}
.login {
  width: 90%;
  height: 450px;
  margin: 26.333vw auto;
  background: rgb(253, 253, 253);
  box-shadow: 0 0 12px rgb(5, 5, 5);
  .login_l {
    width: 92%;
    font-size: 20px;
    //font-family: 宋体;
    font-weight: 500;
    margin: 0 auto;
    position: relative;
    top: 10px;
  }
  .group {
    margin: 20px;
  }
  .user {
    border-bottom: 1px solid rgb(128, 127, 127);
  }
  .but {
    margin: 0.533vw 32px 0;
  }
  .img {
    width: 58%;
    margin: 0 auto;
  }
}
</style>