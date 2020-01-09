<template>
  <div>
    <div class="show">
      <router-view />
      <van-tabbar route>
      <van-tabbar-item replace to="/" icon="wap-home">首页</van-tabbar-item>
      <van-tabbar-item replace to="/classify" icon="wap-nav">分类</van-tabbar-item>
      <van-tabbar-item replace to="/shoppingCart" icon="shopping-cart" :info="this.$store.state.shoppingNum.length">购物车</van-tabbar-item>
      <van-tabbar-item replace to="/my" icon="manager">我的</van-tabbar-item>
    </van-tabbar>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //name: ""
      num:0
    };
  },
  components: {},
  methods: {
    
  },
  mounted() {
    // if(localStorage.name){
    //     this.name = this.localStorage.getItem("name")
    // }
    //计算数量

  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>