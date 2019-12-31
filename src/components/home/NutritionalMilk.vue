<template>
  <div class="fot">
    <div v-for="(item,index) in floor" :key="index">
      <img class="img" :src="item.image" v-if="index === 0" />
      <img class="img_t" :src="item.image" v-else-if="index !== 0" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    floor: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {};
  },
  components: {},
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
//border: 1px solid red;
.img {
  width: 50%;
  height: 49.333vw;
  //border: 1px solid red;
  float: left;
}
.img_t {
   width: 50%;
  height: 25.6vw;
  float: left;
}
</style>