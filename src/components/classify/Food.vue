<template>
  <div>
    <!-- 顶部 -->
    <van-tabs v-model="$parent.dataname" @change="getDetail">
      <van-tab
        v-for="item in category"
        :key="item.id"
        :title="item.mallSubName"
        :name="item.mallSubId"
      ></van-tab>
    </van-tabs>
    <vertical>
      <listbox :arr="this.arr"></listbox>
    </vertical>
  </div>
</template>

<script>
import vertical from "../../components/solt/Vertical";
import listbox from "../../components/classify/Listbox";
export default {
  props: {
    category: {
      type: Array,
      default: () => []
    },
    dataname: {
      type: String,
      default: ""
    },
  },
  data() {
    return {    
      arr: []
    };
  },
  components: {
    vertical,
    listbox
  },
  methods: {
    // 获取每项列表
    getDetail(name, title) {
      console.log(name);
      this.$api.category(name).then(res => {
        if (res.code === 200) {
          this.arr = res.dataList;
          console.log(this.arr);
        }
      });
    }
  },
  mounted() {
    this.getDetail();
  },
  watch: {
    //监听dataid的变化进行异步获取
    dataid(val) {
      this.getDetail(val, "");
    },
  },
  computed: {}
};
</script>

<style scoped lang='scss'>
.wrapper {
  height: 80vh;
  overflow: hidden;
}
</style>