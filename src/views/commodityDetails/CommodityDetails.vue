<template>
  <div>
    <div class="box">
      <div class="arrow" @click="$router.go(-1)">
        <van-icon class="arrow_left" name="arrow-left" />
      </div>
      <div class="lunbo">
        <van-swipe :autoplay="3000" indicator-color="#666">
          <van-swipe-item>
            <img class="image" :src="arr.image" width="350px" height="300px" />
          </van-swipe-item>
          <van-swipe-item>
            <img class="image" :src="arr.image_path" width="350px" height="300px" />
          </van-swipe-item>
        </van-swipe>
      </div>
      <div class="titles">
        <div class="title">{{arr.name}}</div>
        <div class="money">￥{{arr.orl_price}}</div>
      </div>
      <div class="freight">
        <div class="freight-one">运费：{{arr.__v}}</div>
        <div class="freight-one">剩余：{{arr.amount}}</div>
        <div class="freight-two">
          收藏:
          <van-icon name="like-o" class="xin" />
        </div>
      </div>
      <div class="desc">
        <div>
          <van-icon name="shop-o" />有赞的店
        </div>
        <div>进入店铺</div>
      </div>
      <van-tabs v-model="active">
        <van-tab title="商品详情">
          <div v-html="arr.detail"></div>
        </van-tab>
        <van-tab title="用户评论" class="des">暂无评论</van-tab>
      </van-tabs>
    </div>
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" @click="onClickIcon" />
      <van-goods-action-icon icon="cart-o" text="购物车" @click="onClickIcon" />
      <van-goods-action-button type="warning" text="加入购物车" @click="addCar(arr.id)" />
      <van-goods-action-button type="danger" text="立即购买" @click="onClickButton" />
    </van-goods-action>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: {},
      active: 0,
      onClickIcon() {
        Toast("点击图标");
      },
      onClickButton() {
        Toast("点击按钮");
      }
    };
  },
  components: {},
  methods: {
    //加入购物车
    addCar(va) {
      //console.log(va);
      this.$api
        .addShop(va)
        .then(res => {
          if (res.code === 200) {
            console.log("加入购物车成功");
          } else {
            console.log("加入购物车失败");
          }
          //console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },

    getGoodOne() {
      this.$api
        .getGoodOne(this.$route.query.id)
        .then(res => {
          //console.log(res);
          this.arr = res.goods.goodsOne;
          console.log(this.arr);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getGoodOne();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.arrow {
  width: 9.667vw;
  height: 9.667vw;
  background: rgb(71, 71, 71);
  border-radius: 50%;
  margin: 7px;
  .arrow_left {
    color: rgb(253, 253, 253);
    margin: 2.333vw 2.333vw 0;
  }
}
.lunbo {
  width: 360px;
  height: 300px;
  margin: 0 auto;
}
.titles {
  width: 360px;
  margin: 0 auto;
  font-size: 16px;
  .title {
    height: 30px;
  }
  .money {
    height: 30px;
    font-size: 15px;
    color: red;
  }
}
.freight {
  width: 360px;
  height: 30px;
  display: flex;
  margin: 0 auto;
  font-size: 15px;
  color: #666;
  justify-content: space-between; /* 水平平均分布 //设置或检索弹性盒子元素在主轴（横轴）方向上的对齐方式。 */
  align-items: center;
}
.desc {
  margin: 15px 0;
  padding: 10px;
  display: flex;
  justify-content: space-around;
  border-top: 1px solid #e6e6e6;
  border-bottom: 1px solid #e6e6e6;
}
.van-icon-shop-o {
  width: 20px;
  height: 18px;
}
.des {
  text-align: center;
}
</style>