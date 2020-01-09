<template>
  <div>
    <div class="box" @click="check(item)">
      <div>
        <img :src="list.image_path" />
      </div>
      <div>
        <div class="title van-ellipsis">{{list.name}}</div>
        <div class="price">￥{{list.present_price}}</div>
      </div>
      <div class="close">
        <van-icon @click="dele(item)" name="cross" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    list: {
      type: Object,
      default: () => {}
    },
    keyword: {
      type: String,
      default: ""
    }
  },
  components: {},
  methods: {
    //删除收藏 cancelCollection 取消收藏单个商品        参数：  id:商品的cid
    dele(it) {
      this.$api.cancelCollection(it.cid).then(res => {
        //再次调用刷新页面
        this.getCollection();
      });
    },
    //查看
    check(item) {
      if (!this.$store.state.keywords.includes(this.keyword)) {
        this.$store.commit("pushKeywords", this.keyword);
      }
      this.$router.push({ name: "commodityDetails", query: { id: item } });
    }
  },
  mounted() {
    //console.log(this.list);
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.box {
  height: 100px;
  display: flex;
  padding: 0 20px;
  border-bottom: 0.1px solid rgb(243, 243, 243);
}
img {
  height: 80px;
  padding: 10px;
}
.title {
  width: 220px;
  margin-top: 30px;
  font-size: 14px;
}
.price {
  margin-top: 10px;
  color: red;
  font-weight: 800;
  font-size: 14px;
  span {
    text-decoration: line-through;
    color: gray;
    font-weight: normal;
  }
}
.close {
  height: 5px;
  margin: 16.333vw 0;
}
</style>