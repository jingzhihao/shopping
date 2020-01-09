<template>
  <div>
    <global-top>
      <div slot="title">我的收藏</div>
    </global-top>
    <div v-if="this.arr.length === 0" class="font">暂无数据</div>
    <!--有数据时展示-->
    <div v-else-if="this.arr.length > 0">
      <!-- <collection v-for="(item,index) in arr" :list="item" :key="index"></collection> -->
      <div v-for="(item,index) in arr" :key="index">
        <div class="box" >
          <div @click="$go(item.cid)">
            <img :src="item.image_path" />
          </div>
          <div>
            <div class="title van-ellipsis">{{item.name}}</div>
            <div class="price">￥{{item.present_price}}</div>
          </div>
          <div class="close">
            <van-icon @click="dele(item)" name="cross" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import collection from "../../components/shoppingCar/Collection";
export default {
  data() {
    return {
      arr: []
    };
  },
  components: {
    collection
  },
  methods: {
    //查询收藏
    getCollection() {
      this.$api
        .getCollection(1)
        .then(res => {
          //console.log(res);
          if (res.code === 200) {
            this.arr = res.data.list;
            console.log(this.arr);
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
     //删除收藏 cancelCollection 取消收藏单个商品        参数：  id:商品的cid
    dele(val) {
      console.log(val);
       this.$api.cancelCollection(val.cid).then(res => {
         //再次调用刷新页面
         //console.log(res);
         this.$toast(res.msg);
         this.getCollection();
       });
    },
  },
  mounted() {
    this.getCollection();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.font {
  width: 80%;
  margin: 40px auto;
  text-align: center;
}
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
