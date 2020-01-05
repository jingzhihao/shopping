<template>
  <div>
    <div class="fwt">
      <div to=""> 
        <van-icon name="gold-coin-o" size="30"/>
        <br>
        <span>待付款</span>
      </div>
      <div to="">
        <van-icon name="send-gift-o" size="30"/>
        <br>
        <span>待发货</span>
      </div>
      <div to="">
        <van-icon name="logistics" size="30"/>
        <br>
        <span>待收货</span>
      </div>
      <div @click="$go('/evaluationCenter')">
        <van-icon  name="records" size="30" />
        <br>
        <span>评价</span>
      </div>
      <div to="">
        <van-icon name="points" size="30"/>
        <br>
        <span>已完成</span>
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
.fwt{
    height: 80px;
    display: flex;
    color: rgb(114, 114, 114);
    justify-content: center;
    align-items: center;
    div{
        width: 25%;
        height: 70px;
        text-align: center;
        font-size: 14px
    }
}
</style>