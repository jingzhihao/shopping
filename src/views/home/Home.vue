<template>
  <div class="home">
    <vertical>
      <div>
        <!--刷新-->
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
          <!-- 吸顶 -->
          <van-sticky>
            <van-search v-model="input" placeholder="请输入搜索关键词" show-action shape="round">
              <div slot="action">搜索</div>
            </van-search>
          </van-sticky>
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
          <div class="fnt">
            <div class="fwt">1F</div>
            <div class="font">{{this.floorName.floor1}}</div>
          </div>
          <leisureGoods class="hotProduct" :floor="arr.floor1"></leisureGoods>
          <!--新鲜水果-->
          <div class="fnt">
            <div class="fwt">2F</div>
            <div class="font">{{this.floorName.floor2}}</div>
          </div>
          <freshFruit class="hotProduct" :floor="arr.floor2"></freshFruit>
          <!--营养奶品-->
          <div class="fnt">
            <div class="fwt">3F</div>
            <div class="font">{{this.floorName.floor3}}</div>
          </div>
          <nutritionalMilk class="hotProduct" :floor="arr.floor3"></nutritionalMilk>
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
import slideshow from "../../components/home/GoodsShuffling";
import recommend from "../../components/home/GoodsRecommendation";
import navigation from "../../components/home/Navigation";
import leisureGoods from "../../components/home/LeisureGoods";
import nutritionalMilk from "../../components/home/NutritionalMilk";
import freshFruit from "../../components/home/FreshFruit";
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
    nutritionalMilk,
    freshFruit,
    hotProduct,
    vertical
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

//休闲
.fnt {
  width: 23.667vw;
  //border: 1px solid red;
  display: flex;
  margin: 0 auto;
  .fwt {
    background: red;
    width: 20px;
    height: 20px;
    border-radius: 20px;
    font-size: 13px;
    color: rgb(247, 247, 247);
    text-align: center;
    line-height: 20px;
  }
  .font {
    font-size: 14px;
    color: rgb(201, 5, 5);
  }
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