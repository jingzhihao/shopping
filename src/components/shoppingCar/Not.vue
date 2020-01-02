<template>
  <div>
    <div class="font">
      <div>亲你还没有登录哦！</div>
      <div>
        <van-button type="danger" to="/login">请登录</van-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
.font {
  width: 50%;
  height: 300px;
  margin: 0 auto;
  line-height: 100px;
  text-align: center;
}
</style>