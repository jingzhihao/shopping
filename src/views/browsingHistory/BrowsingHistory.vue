<template>
  <div>
    <global-top>
      <div slot="title">浏览历史</div>
    </global-top>

     <div v-if="this.browsing.length === 0" class="font">暂无数据</div>
    <!--有数据时展示-->
    <div v-else-if="this.browsing.length > 0">
      <!-- <collection v-for="(item,index) in arr" :list="item" :key="index"></collection> -->
      <div v-for="(item,index) in browsing" :key="index">
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
export default {
  data() {
    return {
      browsing:[]
    };
  },
  components: {},
  methods: {},
  mounted() {
    this.browsing = this.$store.state.browsing
    console.log(this.browsing);
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