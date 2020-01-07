<template>
  <div>
    <div>
      <global-top>
        <div slot="title">订单结算</div>
      </global-top>
    </div>
    <div class="location">
      <div class="location-o">
        <van-icon name="location-o" size="30" />
      </div>
      <div>
        <div class="tel_name">
          <div>收货人:{{arr.name}}</div>
          <div>电话:{{arr.tel}}</div>
        </div>
        <br />
        <div class="address">收货地址:{{arr.address}}</div>

        <div class="address_t">(收货不便时，可以选择免费代收服务)</div>
      </div>
      <div class="location-o">
        <van-icon name="arrow" />
      </div>
    </div>
    <div>
      <img class="img" src="../../assets/img/caitiao.png" />
    </div>
    <div class="goodsbox" v-for="item in carList" :key="item.id">
      <div class="img">
        <img class="img_t" :src="item.image_path" alt />
      </div>
      <div class="desc">
        <div class="titel">{{item.name}}</div>
        <br />
        <div class="stepper">
          <div class="stepper_mallPrice">￥{{item.mallPrice}}</div>
          <div>×{{item.count}}</div>
        </div>
      </div>
    </div>

    <div class="total">
      <div class="btn">
        合计：
        <span class="sum">￥{{sum}}</span>
      </div>

      <div class="btn">
        <van-button type="danger" @click="onSubmit()">提交订单</van-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: false,
      arr: {},
      carList: []
    };
  },
  components: {},
  methods: {
    //生成订单
    onSubmit() {
      let obj = {
        //收货地址
        address: this.arr.address,
        //电话
        tel: this.arr.tel,
        // 所有商品的id
        orderId: this.ids,
        // 总价格
        totalPrice: this.sum,
        // 用来判断是购物车结算还是直接购买
        idDirect: false,
        // 商品数量
        count: this.count
      };
      console.log(obj);
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
          //console.log(this.arr);
        }
      });
    }
  },
  mounted() {
    this.getDefaultAddress();
    this.carList = this.$route.query.carList;
    //console.log(this.carList);
  },
  watch: {},
  computed: {
    ids() {
      let ids = [];
      this.carList.map(item => {
          ids.push(item.cid);
      });
      return ids;
    },
    count() {
      return this.carList[0].count
    },
    sum() {
      let sum = 0;
      this.carList.map(item => {
          sum += item.mallPrice * item.count;
      });
      return sum.toFixed(2);
    }
  }
};
</script>

<style scoped lang='scss'>
.goodsbox {
  width: 90%;
  margin: 0 auto;
  height: 110px;
  display: flex;
  justify-content: center;
  align-content: center;
  //border: 1px solid red;
}
.img {
  .img_t {
    width: 27.333vw;
    height: 25.333vw;
  }
}
.desc {
  width: 63.333vw;
  margin: 4.333vw auto;
}
.stepper {
  display: flex;
  justify-content: space-between;
}
.titel {
  height: 4.667vw;
  font-size: 14px;
  color: red;
  font-weight: 500;
}
.stepper_mallPrice {
  font-weight: 700;
  color: red;
}
.total {
  position: fixed;
  bottom: 0;
  display: flex;
}
.sum {
  color: rgb(187, 76, 76);
}
.location {
  height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.tel_name {
  display: flex;
  justify-content: space-between;
}
.address {
  font-size: 16px;
}
.address_t {
  color: rgb(196, 150, 0);
  font-size: 14px;
}
</style>