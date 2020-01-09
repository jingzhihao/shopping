<template>
  <div>
    <global-top>
      <div slot="title">个人资料</div>
    </global-top>
    <div>GitHub</div>
     <van-list v-model="loading">
      <van-cell>
        <div>头像</div>
        <div>
          
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
          昵称
          <input type="text" />
        </div>
      </van-cell>
      <van-cell>
        <div>
          性别
          <input type="text" />
        </div>
      </van-cell>
      <van-cell>
        <div>
          邮箱
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
    return {
      loading:''
    };
  },
  components: {},
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>

input {
  background: none;
  outline: none;
  border: none;
}
</style>