<template>
  <div>
    <div class="">商品分类</div>
    <div class="srot">
      <div>
        <van-sidebar v-model="activeKey" @change="onChange">
          <van-sidebar-item title="标签名1" />
          <van-sidebar-item title="标签名2" />
          <van-sidebar-item title="标签名3" />
        </van-sidebar>
      </div>
      <div>
        <van-tabs>
          <van-tab title="标签 1">内容 1</van-tab>
          <van-tab title="标签 2">内容 2</van-tab>
          <van-tab title="标签 3">内容 3</van-tab>
          <van-tab title="标签 4">内容 4</van-tab>
        </van-tabs>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeKey: 0,
      
    };
  },
  components: {},
  methods: {
    onChange(index) {
      Notify({ type: "primary", message: index });
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.srot{
  display: flex;
}
</style>