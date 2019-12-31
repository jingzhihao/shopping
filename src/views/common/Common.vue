<template>
  <div>
    <div class="show">
      <router-view />
      <van-tabbar route>
      <van-tabbar-item replace to="/" icon="wap-home">首页</van-tabbar-item>
      <van-tabbar-item replace to="/classify" icon="wap-nav">分类</van-tabbar-item>
      <van-tabbar-item replace to="/shoppingCart" icon="shopping-cart">购物车</van-tabbar-item>
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
    };
  },
  components: {},
  methods: {
    
  },
  mounted() {
    // if(localStorage.name){
    //     this.name = this.localStorage.getItem("name")
    // }
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>