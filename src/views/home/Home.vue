<template>
  <div class="home">
    <div>
      <van-search v-model="input" placeholder="请输入搜索关键词" show-action shape="round">
        <div slot="action">搜索</div>
      </van-search>
    </div>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <!--轮播图-->
      <div class="slideshow">
        <slideshow :slides="arr.slides"></slideshow>
      </div>
      <!--导航-->
      <div class="recommend">
        <recommend :category="arr.category"></recommend>
      </div>
      <div class="tood">
        <img src="http://images.baixingliangfan.cn/advertesPicture/20180404/20180404085441_850.gif" />
      </div>
      <!--商品推荐-->
      <div class="commodity">
        <navigation :recommend="arr.recommend">
          
        </navigation>
      </div>
    </van-pull-refresh>
  </div>
</template>

<script>
import slideshow from "../../components/home/GoodsShuffling";
import recommend from "../../components/home/GoodsRecommendation";
import navigation from "../../components/home/Navigation";
export default {
  data() {
    return {
      input: "",
      arr: {},
      isLoading: false
    };
  },
  components: { slideshow, recommend, navigation },
  methods: {
    onRefresh() {
      setTimeout(() => {
        this.$toast("刷新成功");
        this.isLoading = false;
        this.count++;
      }, 500);
    },
    //获取首页数据
    getRecommend() {
      this.$api
        .getRecommend()
        .then(res => {
          this.arr = res.data;
          //this.$router.push({'/'})
          console.log(this.arr);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getRecommend();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
* {
  background: rgba(218, 218, 218, 0.87);
}
//轮播图
.slideshow {
  height: 200px;
  margin: -0.2vw 3px 0;
}

//导航
.recommend {
  width: 96%;
  height: 100px;
  background: rgb(243, 241, 241);
  box-shadow: 0 0 12px rgb(204, 204, 204);
  //border: 1px solid red;
  margin: 10px auto;
  border-radius: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
//
.tood {
  width: 98%;
  margin: 0 auto;
  img {
    width: 100%;
  }
}
//商品推荐
.commodity {
  width: 98%;
  height: 200px;
  //border: 1px solid red;
  background: rgb(243, 241, 241);
  margin: 10px auto;
}
</style>