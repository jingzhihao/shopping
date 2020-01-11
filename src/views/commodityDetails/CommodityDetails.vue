<template>
  <div>
    <div class="box">
      <div class="arrow" @click="$router.go(-1)">
        <van-icon class="arrow_left" name="arrow-left" />
      </div>
      <div class="lunbo">
        <van-swipe :autoplay="3000" indicator-color="#666">
          <van-swipe-item>
            <img :src="arr.image" width="350px" height="300px" />
          </van-swipe-item>
          <van-swipe-item>
            <img :src="arr.image_path" width="350px" height="300px" />
          </van-swipe-item>
        </van-swipe>
      </div>
      <div class="titles">
        <div class="title">{{arr.name}}</div>
        <div class="money">￥{{arr.present_price}}</div>
      </div>
      <div class="freight">
        <div class="freight-one">运费：{{arr.__v}}</div>
        <div class="freight-one">剩余：{{arr.amount}}</div>
        <div class="freight-two">
          收藏:
          <div v-if="this.flag === false" @click="collection(arr)">点击收藏</div>
          <div v-else @click="cancelCollection(arr.id)">取消收藏</div>
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
        <van-tab title="用户评论" class="des">
          <div v-if="list.length > 0">
            <div v-for="item in list" :key="item.id">
              <div class="header_te">
                <div class="header">
                  <img class="imga" src="../../assets/img/my.png" alt />
                  <div>
                    <div class="name">123</div>
                    <div>
                      <van-rate v-model="item.rate" />
                    </div>
                  </div>
                  <div class="comment_time">{{item.comment_time}}</div>
                </div>
                <div class="content">评论内容：{{item.content}}</div>
              </div>
            </div>
          </div>
          <div v-else>暂无评论</div>
        </van-tab>
      </van-tabs>
    </div>
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" @click="onClickIcon" />
      <van-goods-action-icon icon="cart-o" text="购物车" @click="$go('/shoppingCart')" />
      <van-goods-action-button type="warning" text="加入购物车" @click="addCar(arr.id)" />
      <van-goods-action-button type="danger" text="立即购买" @click="onClickButton(arr)" />
    </van-goods-action>
    <van-popup v-model="show" closeable position="bottom" :style="{ height: '40%' }">
      <div class="fwt">
        <div class="font">
          <div>
            <img :src="arr.image" width="100px" height="100px" />
          </div>
          <div class="font_title">
            <div>{{arr.name}}</div>
            <div class="font_orl_price">￥{{arr.orl_price}}</div>
          </div>
        </div>
        <div class="font_st">
          <div>购买数量</div>
          <div class>
            <van-stepper v-model="arr.count" />
          </div>
        </div>
        <div class="fwt_tt">
          共1000件
          <span class="font_s">每人限购50件</span>
        </div>
      </div>
      <van-goods-action-button class="onClick" type="danger" text="立即购买" @click="onClick(arr)" />
    </van-popup>
  </div>
</template>
<script>
export default {
  data() {
    return {
      flag: false,
      arr: {},
      active: 0,
      show: false,
      list: []
    };
  },
  components: {},
  methods: {
    //取消收藏
    cancelCollection(va) {
      console.log(va);
      this.$api.cancelCollection(va).then(res => {
        console.log(res);
        if (res.code === 200) {
          this.flag = false;
          this.$toast(res.msg);
        }
      });
    },
    //立即购买弹出层
    onClickButton(arr) {
      this.show = true;
      //console.log(arr);
    },
    //客服
    onClickIcon() {
      this.$toast("对不起，此功能暂未开发。敬请期待");
    },
    // 修改商品数量
    onChange(val) {
      console.log(val);
    },
    //立即购买
    onClick(va) {
      let carList = [va];
      carList.map(item => {
        item.idDirect = true;
        item.cid = item.id;
      });
      this.$store.state.carList = carList;
      this.$router.push({
        name: "settlementPage"
      });

      //this.$go("/settlementPage",va);
    },
    //点击收藏
    collection(va) {
      //console.log(va);
      this.$api.collection(va).then(res => {
        //console.log(res);
        if (res.code === 200) {
          this.$toast(res.msg);
          this.getisCollection(va);
        } else {
          this.$toast("收藏失败");
        }
      });
    },
    //查询此商品是否已收藏
    getisCollection() {
      this.$api.isCollection(this.arr.id).then(res => {
        //console.log(res);
        if (res.isCollection === 1) {
          this.flag = true;
        } else {
          this.flag = false;
        }
      });
    },
    //加入购物车
    addCar(va) {
      //console.log(localStorage.getItem("name"));
      if (localStorage.getItem("name") === null) {
        this.$toast("请登录");
      } else {
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
            //     console.log(err);
          });
      }
    },

    getGoodOne() {
      this.$api
        .getGoodOne(this.$route.query.id)
        .then(res => {
          //console.log(res);
          this.arr = res.goods.goodsOne;
          this.list = res.goods.comment;
          //console.log(res);
          this.getisCollection();
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getGoodOne();
  },
  beforeRouteLeave(to, from, next) {
    if (!this.$store.state.browsing.some(item => item.id === this.arr.id)) {
      this.$store.state.browsing.push(this.arr);
      //sessionStorage.setItem("historyy", JSON.stringify(this.details));
    }
    next();
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

.font {
  display: flex;
  justify-content: center;
  align-content: center;
}
.font_st {
  display: flex;
  justify-content: space-between;
  align-content: center;
}
.fwt {
  width: 95%;
  margin: 6.667vw auto;
}
.font_s {
  color: rgb(231, 75, 75);
  font-size: 14px;
}
.fwt_tt {
  font-size: 12px;
  color: rgb(104, 104, 104);
}
.font_title {
  margin: 7.667vw auto;
}
.font_orl_price {
  color: rgb(211, 73, 73);
}
.onClick {
  position: fixed;
  bottom: 0;
}
.header_te {
  height: 150px;
}
.header {
  display: flex;
  justify-content: space-around;
  align-items: center;
  .imga {
    width: 40px;
    height: 40px;
  }
  .comment_time {
    font-size: 14px;
  }
  .name {
    height: 30px;
  }
}
.content {
  width: 95%;
  margin: 5px auto;
}
</style>