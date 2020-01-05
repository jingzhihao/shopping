<template>
  <div>
    <global-top>
      <div slot="title">个人资料</div>
    </global-top>
     <van-list v-model="loading" @load="onLoad">
      <van-cell>
        <div>头像</div>
        <div>
          <img src alt />
        </div>
      </van-cell>
      <van-cell>
        <div>
          用户名
          <input type="text" />
        </div>
      </van-cell>
      <van-cell>
        <div>
          用户名
          <input type="text" />
        </div>
      </van-cell>
      <van-cell>
        <div>
          用户名
          <input type="text" />
        </div>
      </van-cell>
      <van-cell>
        <div>
          用户名
          <input type="text" />
        </div>
      </van-cell>
      <van-cell>
        <div>出生年月</div>
      </van-cell>
    </van-list>
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
/deep/ .van-cell__value {
  padding: 0;
  display: flex;
}
input {
  background: none;
  outline: none;
  border: none;
}
</style>