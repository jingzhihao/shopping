<template>
  <div class="home">
    <vertical>
      <div>
        <!--刷新-->
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
          <!-- 吸顶 -->
          <top></top>
          <!--轮播图-->
          <slideshow class="slideshow" :slides="arr.slides"></slideshow>
          <!--导航-->
          <recommend class="recommend" :category="arr.category"></recommend>
          <div class="tood">
            <img
              src="http://images.baixingliangfan.cn/advertesPicture/20180404/20180404085441_850.gif"
            />
          </div>
          <!--商品推荐-->
          <navigation class="commodity" :recommend="arr.recommend"></navigation>
          <!--休闲商品-->
          <leisureGoods class="hotProduct" :title="floorName.floor1" flo="1F" :floor="arr.floor1"></leisureGoods>
          <!--新鲜水果-->
          <leisureGoods class="hotProduct" :title="floorName.floor2" flo="2F" :floor="arr.floor2"></leisureGoods>
          <!--营养奶品-->
          <leisureGoods class="hotProduct" :title="floorName.floor3" flo="3F" :floor="arr.floor3"></leisureGoods>
          <!--热销商品-->
          <div class="tout">
            热销商品
          </div>
          <hotProduct class="hotGoods" :hotGoods="arr.hotGoods"></hotProduct>
        </van-pull-refresh>
      </div>
    </vertical>
  </div>
</template>

<script>
import top from "../../components/home/Top";
import slideshow from "../../components/home/GoodsShuffling";
import recommend from "../../components/home/GoodsRecommendation";
import navigation from "../../components/home/Navigation";
import leisureGoods from "../../components/home/LeisureGoods";
import hotProduct from "../../components/home/HotProduct";
import vertical from "../../components/Vertical";
export default {
  data() {
    return {
      input: "",
      arr: {},
      isLoading: false,
      floorName:{}
    };
  },
  components: {
    slideshow,
    recommend,
    navigation,
    leisureGoods,
    hotProduct,
    vertical,
    top
  },
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
          this.floorName = res.data.floorName
          console.log(this.floorName);
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
  margin:2.8vw 1.8vw 0;
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
  width: 99%;
  height: 62.333vw;
  //border: 1px solid red;
  background: rgb(243, 241, 241);
  margin: 10px auto;
}
//休闲食品
.hotProduct {
  width: 100%;
  height: 77.333vw;
  background: rgb(243, 241, 241);
  margin: 10px auto;
}


.tout{
  width: 99%;
  text-align: center;
  line-height:20px;
  color: rgb(201, 5, 5);
}
.hotGoods{
  width: 99%;
  //height: 1000px;
  margin: 10px auto;
}
</style>