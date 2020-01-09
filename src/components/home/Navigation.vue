<template>
  <div class="fot">
    <span>商品推荐</span>
    <betterScroll>
      <div class="fdt">
        <div class="fot_t" v-for="(item,index) in recommend" :key="index">
          <img :src="item.image" />
          <div class="goodsName">{{item.goodsName}}</div>
          <div class="mallPrice">
            ￥{{item.mallPrice}}
            <span
              style="text-decoration:line-through; font-size: 12px;"
            >￥{{item.price}}</span>
          </div>
          <div class="cart">
            <div class="icon"><van-icon name="shopping-cart" @click="addCar(item.goodsId)"/></div>
            <div class="details" @click="$go(item.goodsId)">查看详情</div>
          </div>
        </div>
      </div>
    </betterScroll>
  </div>
</template>
<script>
import betterScroll from "../../components/solt/BetterScroll";
export default {
  props: {
    recommend: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {};
  },
  components: { betterScroll },
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
  },
  mounted() {
   
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.fot {
  color: #333333;
  background: rgb(243, 241, 241);
  span {
    font-size: 5.267vw;
    margin: 11px;
  }
  .fdt {
    width: 2111px;
    overflow: hidden;
    margin: 2px;
    display: flex;
    flex-wrap: nowrap;
  }
  .fot_t {
    //border: 1px solid red;
    padding: 2px;
   div{
     //border: 1px solid red;
     width: 115px;
     margin: 0 auto;
   }
  }
  img {
    margin: 2px;
    width: 31vw;
    height: 32vw;
  }
  .goodsName {
    width: 29.667vw;
    font-size: 14px;
    white-space: nowrap; /*一行显示*/
    overflow: hidden; /*超出部分隐藏*/
    text-overflow: ellipsis; /*用...代替超出部分*/
  }
  .cart{
    border-radius: 10px;
    height: 30px;
    color: rgb(245, 245, 245);
    display: flex;
  }
  .details{
    flex: 6.5;
    font-size: 14px;
    text-align: center;
    line-height: 30px;
    background: rgb(255,76,56)
  }
  .icon{
    text-align: center;
    line-height: 30px;
    flex: 3.5;
    background: rgb(254,202,58)
  }
}
</style>