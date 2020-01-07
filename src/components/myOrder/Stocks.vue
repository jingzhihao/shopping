<template>
  <div class="cont">
    <br/>
    <div>订单编号：{{order_id}}</div>
    <div v-for="item in order_list" :key="item.id">
      <div class="font">
        <div>
          <img class="img" :src="item.image_path" />
        </div>
        <div>{{item.name}}</div>
        <div class="font_t">
          <div>￥{{item.present_price}}</div>
          <div class="font_count">×{{item.count}}</div>
        </div>
      </div>
    </div>

    <div class="fwt">
      <div></div>
      <div>
        <div class="fnt">订单生成时间：{{add_time}}</div>
        <div class="fnt">收货地址：{{address}}</div>
        <div class="fnt">
          共计：{{sum}}件商品
          <span>合计：{{mallPrice}}</span>
        </div>
      </div>
    </div>
    <br/>
  </div>
</template>

<script>
export default {
  props: {
    order_list: {
      type: Array,
      default: () => []
    },
    address: {
      type: String,
      default: ""
    },
    add_time: {
      type: String,
      default: ""
    },
    order_id: {
      type: String,
      default: ""
    },
    mallPrice: {
      type: Number,
      default: ""
    }
  },
  data() {
    return {};
  },
  components: {},
  methods: {},
  mounted() {
    //console.log(this.order_list.count);
    //console.log(this.address);
  },
  watch: {},
  computed: {
    sum() {
      let add = 0;
      this.order_list.map(item => {
        add += item.count;
      });
      return add;
    }
  }
};
</script>

<style scoped lang='scss'>
.cont{
  width: 94%;
  margin: 0 auto;
  font-size: 16px;
  color: rgb(95, 94, 94);
}
.font {
 
  margin: 10px auto;
  display: flex;
  justify-content: space-between;
}
.img {
  width: 22.333vw;
  height: 22.333vw;
}
.fwt {
  //border: 1px solid red;
  text-align: right;
}
.font_t{
  text-align: right;
}
.font_count{
  font-size: 12px;
}
</style>