<template>
  <div>
    <global-top>
      <div slot="title">发布评价</div>
    </global-top>
    <div class="font">
      <div class="font_t">
        <img class="img" :src="arr.image_path" />
      </div>
      <div class="font_s">
        <div class="fwt_t">商品评分</div>
        <div>
          <van-rate v-model="fromName.value" color="#ee0a24" void-icon="star" />
        </div>
      </div>
    </div>
    <div class="fwt">
      <van-field
        v-model="fromName.message"
        rows="2"
        type="textarea"
        maxlength="50"
        placeholder="请输入留言"
        show-word-limit
      />
    </div>
    <div class="cked">
      <van-checkbox v-model="fromName.checked">匿名评价</van-checkbox>
    </div>
    <div class="but">
      <van-button type="primary" size="large" @click="comment()">提交评价</van-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: {},
      fromName: {
        value: 5,
        message: "",
        checked: false
      }
    };
  },
  components: {},
  methods: {
    comment(){
        //console.log(this.fromName);
        let obj ={
          id:this.arr.cid,
          rate:this.fromName.value,
          content:this.fromName.message,
          anonymous:this.fromName.checked,
          _id:this.arr._id,
          order_id:this.arr.order_id,
          image:[]
        }
        this.$api.comment(obj).then(res => {
          console.log(res);
        })
    },
  },
  mounted() {
    this.arr = this.$route.query.arr;
    console.log(this.arr);
  },
  watch: {
    // message(va) {
    //   console.log(va);
    // }
  },
  computed: {}
};
</script>

<style scoped lang='scss'>
.font {
  width: 90%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.font_t {
  width: 15%;
}
.fwt_t {
  height: 40px;
}
.fwt {
  height: 230px;
}
.img {
  width: 100px;
  height: 100px;
}
.cked {
  width: 90%;
  margin: 10px auto;
  height: 30px;
}
</style>