<template>
  <div class="container">
    <div @click="$go('/city')" class="city">
      <span class="city_t">{{this.$store.state.city}}</span>
      <van-icon name="arrow-down" />
    </div>
    <div class="search">
      <van-search
        placeholder="请输入搜索关键词"
        show-action
        shape="round"
        @focus="showPopup"
        @search="onSearch"
        @input="onSearch"
        is-link
        v-model="value"
      >
        <div slot="action" v-if="this.show === false">搜索</div>
        <div slot="action" v-else-if="this.show === true" @click="clickquxiao">取消</div>
      </van-search>

      <van-popup :overlay="overlay" v-model="show" position="left" :style="{ height: '88%' }">
        <div class="history">搜索历史{{this.history}}</div>
        <div class="neirong">
          <div class="neirong-one" v-for="(item,index) in arr" :key="index" @click="$go(item.id)">
            <div class="img">
              <div class="img-one">
                <img :src="item.image" width="58px" height="50px" />
              </div>
            </div>
            <div class="comtent">
              <div class="comtent-one">{{item.name}}</div>
              <div class="comtent-two">
                <div class="sale-four">￥{{item.orl_price}}</div>
                <div class="sale-five">￥{{item.present_price}}</div>
              </div>
            </div>
          </div>
        </div>
      </van-popup>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      value: "",
      show: false,
      arr: [],
      overlay: false,
      history: []
    };
  },
  components: {},
  methods: {
    //
    //
    onSearch() {
      //console.log(this.value);
      this.$api
        .getSearch({
          value: this.value,
          page: 1
        })
        .then(res => {
          console.log(res);
          this.arr = res.data.list;
          console.log(this.history);
         this.history.push(this.value)
          console.log(this.history);
          localStorage.setItem('history',this.history)
        })
        .catch(err => {});
    },
    //获取焦点事情
    showPopup() {
      this.show = true;
    },
    clickquxiao() {
      this.show = false;
    },
    postCity() {
      if (this.$store.state.city === "定位中..") {
        let _this = this;
        var map = new AMap.Map("container", {
          resizeEnable: true
        });
        AMap.plugin("AMap.Geolocation", function() {
          var geolocation = new AMap.Geolocation({
            enableHighAccuracy: true, //是否使用高精度定位，默认:true
            timeout: 10000, //超过10秒后停止定位，默认：5s
            buttonPosition: "RB", //定位按钮的停靠位置
            buttonOffset: new AMap.Pixel(10, 20), //定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
            zoomToAccuracy: true //定位成功后是否自动调整地图视野到定位点
          });
          map.addControl(geolocation);
          geolocation.getCurrentPosition();
          AMap.event.addListener(geolocation, "complete", onComplete);
          AMap.event.addListener(geolocation, "err", onError);
        });
        //解析定位结果
        function onComplete(data) {
          _this.$store.state.city = data.addressComponent.city;
          //console.log(JSON.parse(JSON.stringify(data.addressComponent)));
          // console.log(_this.$store.state.city);
        }
        //解析定位错误信息
        function onError(data) {
          document.getElementById("status").innerHTML = "定位失败";
          document.getElementById("result").innerHTML =
            "失败原因排查信息:" + data.message;
        }
      }
    }
  },
  mounted() {
    this.postCity();
    //console.log(this.$store.state.history);
 
   let str = localStorage.getItem("history");
   this.history.push(str)
   console.log(this.history);
    // console.log(this.history);
    //this.onSearch()
    //console.log(this.arr);
  },
  watch: {
    value(val) {
      //   //console.log(val);
      if (val !== "") {
        this.show = true;
        //this.onSearch()
      } else {
        this.show = false;
      }
      //this.arr = this.arr.filter(item => {
      // return JSON.stringify(item).includes(val);
      //});
    }
  },
  computed: {}
};
</script>

<style scoped lang='scss'>
.container {
  display: flex;
  width: 100%;
  height: 34px;
  padding: 8px 0;
  background: #f2f2f2;
}
.city {
  width: 80px;
  display: flex;
  font-size: 14px;
  line-height: 14.067vw;
  height: 34px;
  margin-left: 10px;
  .van-icon {
    line-height: 14.067vw;
  }
  .city_t {
    font-size: 14px;
  }
}
.search {
  width: 275px;
  height: 50px;
}
.neirong {
  width: 375px;
}
.neirong-one {
  width: 375px;
  height: 60px;
  line-height: 40px;
  font-size: 14px;
  display: flex;
  .img {
    width: 100px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .comtent {
    width: 275px;
    height: 60px;
    .comtent-one {
      width: 275px;
      height: 30px;
      line-height: 30px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 15px;
    }
    .comtent-two {
      width: 275px;
      height: 30px;
      display: flex;
    }
  }
}
.img-one {
  width: 50px;
  height: 50px;
}
.sale-four {
  font-size: 15px;
  color: red;
  line-height: 30px;
}
.sale-five {
  font-size: 13px;
  color: #666;
  line-height: 30px;
  text-decoration: line-through;
}
.history{
  border: 1px solid red;
  margin: 10px auto;
}
</style>