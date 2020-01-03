<template>
  <div>
    <global-top>
      <div slot="back"></div>
      <div slot="title">商品分类</div>
    </global-top>
    <div class="main">
      <!-- 左侧导航栏 -->
      <van-sidebar v-model="mallCategoryId" class="left">
        <van-sidebar-item
          v-for="item in arr"
          @click="change(item)"
          :key="item.id"
          :title="item.mallCategoryName"
        />
      </van-sidebar>
      <!-- 右侧内容 -->
      <div class="right">
        <food :category="data" :dataname="dataname"></food>
      </div>
    </div>
  </div>
</template>

<script>
import food from "../../components/classify/Food";
export default {
  data() {
    return {
      arr: [],
      mallCategoryId: 0,
      data: [],
      dataname: ""
    };
  },
  props: {},
  components: {
    food
  },
  methods: {
    //获取一、二级分类的数据（包括id）
    getData() {
      this.$api.getRecommend().then(res => {
        if (res.code == 200) {
          // 加载一级分类
          this.arr = res.data.category;
          //console.log(this.arr);
          //加载二级分类的列表
          this.data = res.data.category[this.mallCategoryId].bxMallSubDto;
          //console.log(this.data);
          this.dataname = res.data.category[this.mallCategoryId].bxMallSubDto[0].mallSubId;
          console.log('name:'+this.dataname);
        }
      });
    },
    change(item) {
      //点击导航修改mallCategoryId
      this.mallCategoryId = item.mallCategoryId;
    }
  },
  mounted() {
    //this.getData();
    //this.mallCategoryId = this.$route.query.id
    if (this.$route.query.id) {
      this.mallCategoryId = this.$route.query.id;
      this.getData();
    } else {
      this.getData();
    }
  },
  watch: {
    //监听mallCategoryId，修改时进行异步获取
    mallCategoryId(val) {
      this.getData();
    }
  },
  computed: {}
};
</script>

<style scoped lang='scss'>
.main {
  display: flex;
  height: 86vh;
  .right {
    width: 78%;
  }
}
.left {
  height: 100%;
  width: 22%;
  background: #fafafa;
  .van-sidebar-item {
    padding: 10px;
  }
}
</style>