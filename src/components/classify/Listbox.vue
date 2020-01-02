<template>
  <div>
    <div v-for="item in arr" :key="item.id">
      <div class="foot" @click="$go(item.id)">
        <img :src="item.image" class="img" />
        <div class="fwt">
          <div>{{item.name}}</div><br>
          <div class="fnt">
            ￥{{item.present_price}}
            <span
              style="text-decoration:line-through; font-size: 12px; color: rgb(78, 78, 78)"
            >￥{{item.orl_price}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    arr: {
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
.foot {
  height: 100px;
  //border: 1px solid red;
  margin: 10px;
  display: flex;
  font-size: 15px;
  color: red;
  .fwt{
      margin: 5px;
  }
  .fnt{
      font-weight: bold;
  }
}
.img {
  width: 23.667vw;
  height: 23.333vw;
}
</style>