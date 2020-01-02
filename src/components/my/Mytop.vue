<template>
  <div>
    <div class="font">
      <div class="fwt">
        <van-icon name="comment-o" size="25"/><div class="left">全部订单</div>
        <div class="right"><van-icon name="arrow" /></div>
      </div>
      <div class="fwt">
        <van-icon name="points" size="25"/><div class="left">收藏商品</div>
        <div class="right"><van-icon name="arrow" /></div>
      </div>
      <div class="fwt">
        <van-icon name="aim" size="25"/><div class="left">地址管理</div>
        <div class="right"><van-icon name="arrow" /></div>
      </div>
      <div class="fwt">
        <van-icon name="send-gift-o" size="25"/><div class="left">最近浏览</div>
        <div class="right"><van-icon name="arrow" /></div>
      </div>
      

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.font {
  width: 90%;
  height: 200px;
  //border: 1px solid red;
  margin: 0 auto;
}
.fwt{
    display: flex;
    height: 40px;
    //border: 1px solid red;
    //font-size: 16px;
    color: rgb(114, 114, 114);
    .left{
        flex:9;
        margin: 0 10px;
        //line-height:50px;
    }
    .right{
        flex:1
    }
}
</style>