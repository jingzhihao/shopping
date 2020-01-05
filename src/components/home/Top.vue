<template>
  <div class="container">
    <div @click="$go('/city')" class="city">
      <span class="city_t">{{city}}</span>
      <van-icon name="arrow-down" />
    </div>
    <van-search
      class="search"
      v-model="value"
      placeholder="请输入搜索关键词"
      shape="round"
      @search="onSearch"
      background="none"
    >
    </van-search>
  </div>
</template>

<script>
export default {
  props: {
    arr:{
      type:Object,
      default: () => {}
    }
  },
  data() {
    return {
      value: "",
      city: "定位中.."
    };
  },
  components: {},
  methods: {
    onSearch(val) {
      console.log(val);
    },
    getcity() {
      if (localStorage.getItem("city")) {
        //console.log(localStorage.getItem("city"));
        this.city = localStorage.getItem("city");
      } else {
        this, (city = "未获取");
      }
    },
    postCity() {
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
        _this.city = data.addressComponent.city;
        //console.log(JSON.parse(JSON.stringify(data.addressComponent)));
      }
      //解析定位错误信息
      function onError(data) {
        document.getElementById("status").innerHTML = "定位失败";
        document.getElementById("result").innerHTML =
          "失败原因排查信息:" + data.message;
      }
    }
  },
  mounted() {
    this.postCity();
    console.log(this.arr);
  },
  watch: {
    value(val){
        console.log(val);
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
  line-height: 34px;
  height: 34px;
  margin-left: 10px;
  .van-icon {
    line-height: 34px;
  }
  .city_t {
    font-size: 14px;
  }
}

</style>