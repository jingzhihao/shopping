<template>
  <div>
    <global-top>
      <div slot="back"></div>
      <div slot="title">会员中心</div>
    </global-top>
    <div class="font">
      <div class="name">
        <div class="fout">
          <img src="../../assets/img/my.png" />
        </div>
        <div class="fnt">欢迎你:{{this.name}}</div>
        <div @click="dele()" v-if="this.name !== ''">退出登录</div>
        <div @click="login()" v-else-if="this.name === ''">登录/注册</div>
      </div>
    </div>
    <mybox></mybox>
    <mytop></mytop>
  </div>
</template>

<script>

import mybox from "../../components/my/Mybox";
import mytop from "../../components/my/Mytop";
export default {
  data() {
    return {
      name:''
    };
  },
  components: {
    mybox,
    mytop
  },
  methods: {
    dele(){
     localStorage.name = this.name = ''
    //  this.$api.loginOut().then(res => {
    //    console.log(res);
    //  })
    },
    login(){
      this.$router.push('/login')
    }
  },
  mounted() {

    if(localStorage.name){
    this.name = localStorage.getItem("name")
}
},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.font {
  height: 200px;
  background: rgb(227, 12, 123);
  display: flex;
  justify-content: center;
  align-items: center;
}
.name {
  width: 52.867vw;
  height: 43.333vw;
  //border: 1px solid black;
  text-align: center;
  line-height: center;
  color: beige;
  .fout {
    height: 90px;
  }
  img {
    width: 80px;
    height: 80px;
  }
  .fnt {
    height: 40px;
    font-weight: 700;
    font-size: 20px;
  }
}
</style>