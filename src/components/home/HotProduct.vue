<template>
  <div>
    <div class="tout">
      热销商品
    </div>
    <div class="hot">
      <div v-for="(item,index) in hotGoods" :key="index" class="hot_t" @click="$go(item.goodsId)">
        <div class="text">
          <img :src="item.image"/>
        </div>
        <div class="text_hont">
          <div class="text_name">{{item.name}}</div>
          <div class="text_price">
            <div class="text_p">￥{{item.mallPrice}}</div>
            <div
              style="text-decoration:line-through; font-size: 12px; color: rgb(78, 78, 78)"
            >￥{{item.price}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    hotGoods: {
      type: Array,
      default: () => []
    }
  },
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
.hot {
  display: flex;
  flex-wrap: wrap;
  width: 375px;
  background: rgb(243, 241, 241);
}
.hot_t {
  width: 50%;
  height: 210px;
  img {
    width: 100%;
    height: 160px;
  }
}
.text_hont {
  width: 44.667vw;
  //border: 1px solid red;
  text-align: center;
  line-height: 20px;
  color: rgb(255, 64, 64);
}
.text_name {
  font-size: 14px;
  white-space: nowrap; /*一行显示*/
  overflow: hidden; /*超出部分隐藏*/
  text-overflow: ellipsis; /*用...代替超出部分*/
}
.text_price {
  display: flex;
  justify-content: center;
  .text_p {
    width: 50px;
    color: red;
    font-weight: 500;
  }
}
.tout{
  width: 99%;
  text-align: center;
  line-height:20px;
  color: rgb(201, 5, 5);
  font-size: 18px;
}
</style>