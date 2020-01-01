<template>
  <div>
    <global-top>
      <div slot="title">城市列表</div>
    </global-top>
    <van-index-bar>
      <div v-for="item in Object.keys(city)" :key="item.id">
        <van-index-anchor :index="item" />
        <van-cell v-for="desc in city[item]" :key="desc.id" :title="desc.name" @click="Select(desc)" />
      </div>
    </van-index-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      city: {}
    };
  },
  props: {},
  components: {},
  methods: {
    getCities() {
      this.city = this.$city.data.cities;
    },
    Select(desc){
      this.$router.go(-1)
      localStorage.setItem('city',desc.name)
    }
  },
  mounted() {
    this.getCities();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.van-index-bar__index {
  height: 20px;
  color: skyblue;
}
</style>