<template>
  <div>
    <global-top>
      <div slot="title">城市列表</div>
    </global-top>
    <!--实现搜索和热门城市的展示-->
    <div class="serch">
      <van-search placeholder="请输入搜索关键词" v-model="value" />
    </div>
    <div v-if="value ===''">
      <div class="hotcity">
        <p class="pcity">热门城市</p>
        <div class="hot">
          <div
            @click="select(item.name)"
            class="hotcitymodel"
            v-for="item in hotcity"
            :key="item.id"
          >{{item.name}}</div>
        </div>
      </div>
      <!--遍历城市列表-->
      <van-index-bar>
        <div v-for="item in Object.keys(city)" :key="item.id">
          <van-index-anchor :index="item" />
          <van-cell
            v-for="list in city[item]"
            :key="list.id"
            :title="list.name"
            @click="Select(list)"
          />
        </div>
      </van-index-bar>
    </div>
    <!-- 搜索后展示内容 -->
    <div class="serchs" v-else>
      <div class="serchcity" v-for="item in input" :key="item.id">{{item.name}}</div>
    </div>
  </div>
</template>

<script>
//import city from "../../js/city";
export default {
  data() {
    return {
      hotcity: [],
      city: {},
      newcity: "",
      arr: [],
      value: ""
    };
  },
  props: {},
  components: {},
  methods: {
    getCities() {
      //全部
      this.city = this.$city.data.cities;
      //热
      this.hotcity = this.$city.data.hotCities;

      Object.keys(this.city).map(item => {
        this.arr.push(...this.city[item]);
      });
    },
    Select(list) {
      this.$router.go(-1);
      this.$stors.state.city = this.$stors.list.name;
    }
  },
  mounted() {
    this.getCities();
  },
  watch: {},
  computed: {
    input() {
      return this.arr.filter(it => JSON.stringify(it).includes(this.value));
    }
  }
};
</script>

<style scoped lang='scss'>
.van-index-bar__index {
  height: 20px;
  color: skyblue;
}
.hotcity {
  .hot {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 98%;
    margin-bottom: 10px;
    background-color: white;
    text-align: center;
    line-height: 20px;
    .hotcitymodel {
      width: 80px;
      height: 20px;
      padding: 5px 10px;
      margin: 10px 0;
      border-radius: 5px;
      border: 1px solid darkgray;
    }
  }
}
.pcity {
  font-size: 16px;
  padding: 10px;
  color: rgb(243, 104, 104);
}
</style>