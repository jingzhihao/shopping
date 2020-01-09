<template>
  <div>
    <global-top>
      <div slot="title">我的订单</div>
    </global-top>

    <div class="font">
      <van-tabs v-model="activeName" :ellipsis="false">
        <van-tab title="全部"  name="a">对不起，此功能未开发</van-tab>
        <van-tab title="待支付" name="b">对不起，此功能未开发</van-tab>
        <van-tab title="待发货" name="c">对不起，此功能未开发</van-tab>
        <van-tab title="待收货" name="d">对不起，此功能未开发</van-tab>
        <van-tab title="已完成" name="e">
          <div v-for="item in arr" :key="item.id">
            <stocks
              :order_list="item.order_list"
              :address="item.address"
              :add_time="item.add_time"
              :mallPrice="item.mallPrice"
              :order_id="item.order_id"
            ></stocks>
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import stocks from "../../components/myOrder/Stocks";
export default {
  data() {
    return {
      activeName: "e",
      arr: []
    };
  },
  components: {
    stocks
  },
  methods: {
    getOrderNum() {
      this.$api.getMyOrder().then(res => {
        this.arr = res.list;
        //console.log(res);
      });
    }
  },
  mounted() {
    this.getOrderNum();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>