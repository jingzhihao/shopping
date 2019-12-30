<template>
  <div class="fot">
    <span>商品推荐</span>
    <betterScroll>
      <div class="fdt">
        <div class="fot_t" v-for="(item,index) in recommend" :key="index">
          <img :src="item.image" />
          <div class="goodsName">{{item.goodsName}}</div>
          <div>
            ￥{{item.mallPrice}}
            <span
              style="text-decoration:line-through; font-size: 12px;"
            >￥{{item.price}}</span>
          </div>
          <div class="cart">
            <van-icon name="shopping-cart-o" />
          </div>
        </div>
      </div>
    </betterScroll>
  </div>
</template>

<script>
import betterScroll from "../../components/BetterScroll";
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
  methods: {},
  mounted() {},
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
    width: 2000px;
    overflow: hidden;
    margin: 2px;
    display: flex;
    flex-wrap: nowrap;
  }
  .fot_t {
    border: 1px solid red;
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
  .cart {
    border: 1px solid red;
    width: 50px;
    height: 50px;
  }
}
</style>