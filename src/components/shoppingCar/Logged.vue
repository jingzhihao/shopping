<template>
  <div>
    <div class="container">
      <div class="checkbox">
        <van-checkbox v-model="checked" @click="changeAll()" checked-color="#07c160">全选</van-checkbox>
      </div>
      <div class="total">
        <div>
          合计：
          <span v-if="checkeds.length>0" class="sum">￥{{sum}}</span>
        </div>
        <div v-if="checkeds.length>0">请确认订单</div>
        <br />
        <div class="btn">
          <van-button type="danger" @click="del()">删除</van-button>
          <van-button type="danger" @click="settle()">去结算</van-button>
        </div>
      </div>
    </div>

    <div class="goodsbox" v-for="item in shopList" :key="item.id">
      <div class="checkbox">
        <van-checkbox v-model="item.check" @change="chooseOne()" checked-color="#07c160"></van-checkbox>
      </div>
      <div class="img">
        <img class="img_t" :src="item.image_path" alt />
      </div>
      <div class="desc">
        <div class="titel">{{item.name}}</div>
        <br />
        <div class="stepper">
          ￥{{item.mallPrice}}
          <van-stepper v-model="item.count" @change="onChange(item)" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    shopList: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      checkeds: [1],
      checked: false,

      carList: []
    };
  },
  components: {},
  methods: {
    //结算
    settle() {
      this.carList = this.shopList.filter(item => item.check);
      //console.log(this.shopList);
      console.log(this.carList);
      // '/settlementPage'
      this.$store.state.carList = this.carList;
      this.$router.push({
        name: "settlementPage"
      });
    },
    del() {
      //把选中的商品进行删除
      this.shopList.map(item => {
        if (item.check) {
          //console.log(item.cid);
          let id = item.cid;
          this.$api.deleteShop(item.cid).then(res => {
            //console.log(res);
            if (res.code === 200) {
              this.$toast("删除完毕");
              this.getCard();
            }
          });
        }
      });
    },
    //选中商品
    changeAll() {
      this.shopList.map(item => {
        item.check = !this.checked;
      });
    },
    chooseOne() {
      this.checked = this.shopList.every(item => {
        return item.check === true;
      });
    },
    // getCard() {
    //   this.$api.getCard().then(res => {
    //     //console.log(res);
    //     if (res.code === 200) {
    //       this.shopList = res.shopList;
    //       //console.log(this.shopList);
    //     }
    //   });
    // },
    // 修改商品数量
    onChange(val) {
      console.log(val);
      this.$api
        .editCart(val.count, val.cid, val.mallPrice)
        .then(res => console.log(res));
    }
  },
  mounted() {},
  watch: {},
  computed: {
    sum() {
      let add = 0;
      this.shopList.map(item => {
        if (item.check) {
          add += item.mallPrice * item.count;
        }
      });
      return add.toFixed(2);
    }
  }
};
</script>

<style scoped lang='scss'>
.container {
  width: 98%;
  height: 150px;
  margin: 10px auto;
  //border: 1px solid red;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.total {
  width: 150px;
}
.btn {
  display: flex;
  justify-content: space-around;
}
.sum {
  color: red;
  font-size: 21px;
}
.goodsbox {
  width: 98%;
  margin: 0 auto;
  height: 100px;
  display: flex;
  justify-content: center;
  align-content: center;
  color: rgb(247, 103, 103);
  //border: 1px solid red;
}
.img {
  .img_t {
    width: 23.333vw;
    height: 24.333vw;
  }
}
.checkbox {
  display: flex;
  //border: 1px solid red;
  justify-content: center;
  align-content: center;
}
.desc {
  margin: 0 10px;
  width: 69.333vw;
}
.stepper {
  display: flex;
  justify-content: space-between;
}
.titel {
  height: 30px;
}
</style>