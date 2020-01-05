<template>
  <div>
    <global-top>
      <div slot="title">我的收藏</div>
    </global-top>
    <div v-if="this.arr.length === 0" class="font">暂无数据</div>   
    <!--有数据时展示--> 
    <div v-else-if="this.arr.length > 0">
        <collection v-for="(item,index) in arr" :list="item" :key="index"></collection>
    </div>
  </div>
</template>
<script>
import collection from "../../components/shoppingCar/Collection"
export default {
  data() {
    return {
      arr: []
    };
  },
  components: {
    collection
  },
  methods: {
    
    //查询收藏
    getCollection() {
      this.$api.getCollection().then(res => {
        this.arr = res.data.list;
      });
    },
    

  },
  mounted() {
    this.getCollection();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.font{
  width: 80%;
  margin: 40px auto;
  text-align: center;

}
</style>
