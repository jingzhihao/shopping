<template>
  <div>
    <div class="container">
      <div class="checkbox">
        <van-checkbox v-model="checked" @change="changeAll()" checked-color="#07c160">全选</van-checkbox>
      </div>
      <div class="total">
        <div>
          合计：
          <span v-if="checkeds.length>0">￥{{sum}}</span>
        </div>
        <div v-if="checkeds.length>0">请确认订单</div>
      </div>
      <van-button class="btn" type="primary" @click="del()">删除</van-button>
      <van-button class="btn" type="primary" @click="$go('/settlementPage')">结算</van-button>
    </div>
    
      <div class="goodsbox" v-for="item in shopList" :key="item.id">
        <div class="checkbox">
          <van-checkbox v-model="item.check" checked-color="#07c160"></van-checkbox>
        </div>
        <div class="img">
          <img :src="item.image_path" alt />
        </div>
        <div class="desc">
          <div class="title">{{item.name}}</div>
          <div class="price">￥{{item.mallPrice}}</div>
          <van-stepper class="stepper" v-model="item.count" @change="onChange(item)" />
        </div>
      </div>
    
  </div>
</template>

<script>

export default {
  data() {
    return {
       checkeds: [1],
      checked: false,
      shopList:{}
    };
  },
  components: {
    
  },
  methods: {
     del() {
      this.$store.state.shopList.map(item => {
        if (item.check) {
          console.log(item);
          this.$api.deleteShop(item.cid).then(res => {
            console.log(res);
          });
        }
      });
      this.$toast("删除完毕");
      this.getCardData();
    },
    changeAll() {
      this.$store.commit("editshopList", this.checked);
    },
    getCard() {
      this.$api.getCard().then(res => {
        if (res.code === 200) {
          this.shopList = res.shopList;
        }
      });
    },
    // 修改商品数量
    onChange(val) {
      this.$api
        .editCart(val.count, val.cid, val.mallPrice)
        .then(res => console.log(res));
    }
  },
  mounted() {
     this.getCard();
  },
  watch: {},
  computed: {
     shopList() {
      this.$store.state.shopList;
    },
    sum() {
      return this.$store.getters.getSum;
    }
  }
};
</script>

<style scoped lang='scss'>
.container{
  margin: 10px auto;
}
</style>