<template>
  <div class="container">
    <div @click="$go('/city')" class="city">
      <span>{{city}}</span>
      <van-icon name="arrow-down" />
    </div>
    <van-search
      class="search"
      v-model="value"
      placeholder="请输入搜索关键词"
      show-action
      shape="round"
      @search="onSearch"
      background="none"
    >
      <div slot="action">搜索</div>
    </van-search>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      value: "",
      city: ""
    };
  },
  components: {},
  methods: {
    onSearch(){},
    getcity() {
      if (localStorage.getItem("city")) {
        //console.log(localStorage.getItem("city"));
        this.city = localStorage.getItem("city");
      } else {
        this, (city = "未获取");
      }
    }
  },
  mounted() {
    this.getcity();
  },
  watch: {},
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
  width: 60px;
  display: flex;
  font-size: 14px;
  line-height: 34px;
  height: 34px;
  margin-left: 10px;
  .van-icon {
    line-height: 34px;
  }
}
.search {
  width: 300px;
}
</style>