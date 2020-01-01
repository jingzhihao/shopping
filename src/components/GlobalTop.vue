<template>
  <div>
    <div class="container">
      <div class="back">
        <slot name="back">
          <van-icon name="arrow-left" @click="$router.go(-1)" />
        </slot>
      </div>
      <div class="title">
        <slot name="title"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {},
  components: {},
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.container {
  height: 6vh;
  width: 100%;
  background: white;
  border-bottom: 1px solid lightgray;
  position: relative;
  .back {
    position: absolute;
    left: 10px;
    top: 50%;
    margin-top: -8px;
  }
  .title {
    width: 80px;
    text-align: center;
    font-size: 16px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -8px;
    margin-left: -40px;
  }
}
</style>