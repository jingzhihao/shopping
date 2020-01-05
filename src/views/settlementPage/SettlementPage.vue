<template>
  <div>
    <div>
      <global-top>
      <div slot="title">结算</div>
    </global-top>
    </div>
    <div>
      <van-card
        v-for="item in arr"
        :key="item.id"
        :num="item.count"
        :price="item.present_price.toFixed(2)"
        :title="item.name"
        :thumb="item.image_path"
      />
    </div>
    <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit">
      <van-checkbox v-model="checked">全选</van-checkbox>
      <span slot="tip">
        <span>修改地址</span>
      </span>
    </van-submit-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr:{}
    };
  },
  components: {},
  methods: {
    //生成订单
    onSubmit() {
      let obj = {
        // 收货地址
        //address: this.defaultAddress.addressDetail,
        // 电话
        //tel: this.defaultAddress.tel,
        // 所有商品的id
        orderId: this.ids,
        // 总价格
        totalPrice: this.sum,
        // 用来判断是购物车结算还是直接购买
        idDirect: '0',
        // 商品数量
        count: this.count
      };
      this.$api.placeOrder(obj).then(res => {
        if (res.code === 200) {
          console.log(res);
        }
      });
    },
     getDefaultAddress() {
      this.$api.getDefaultAddress().then(res => {
        if (res.code === 200) {
          this.arr = res.defaultAdd;
          console.log(res);
        }
      });
    }
  },
  mounted() {
    this.getDefaultAddress()
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>