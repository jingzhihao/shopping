<template>
  <div>
    <div class="show">
      <router-view />
      <van-tabbar  v-model="$route.path" >
        <van-tabbar-item name="/" to='/' icon="wap-home">商城</van-tabbar-item>
        <van-tabbar-item name="/classify" to="/classify" icon="wap-nav">分类</van-tabbar-item>
        <van-tabbar-item name="/shoppingCart" to="shoppingCart" icon="shopping-cart">购物车</van-tabbar-item>
        <van-tabbar-item name="/my" to="/my" icon="friends">我的</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: ""
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