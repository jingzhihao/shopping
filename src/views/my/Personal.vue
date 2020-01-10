<template>
  <div>
    <global-top>
      <div slot="title">个人资料</div>
    </global-top>
    <div>GitHub</div>
    <van-list >
      <van-cell>
        <div>头像</div>
        <div></div>
      </van-cell>
      <van-cell>
        <div>
          用户名
          <input type="text" :placeholder="arr.nickname" />
        </div>
      </van-cell>
      <van-cell>
        <div>
          昵称
          <input type="text" :placeholder="arr.username" />
        </div>
      </van-cell>
      <van-cell>
        <div>
          性别
          <input type="text" :placeholder="arr.gender" />
        </div>
      </van-cell>
      <van-cell>
        <div>
          邮箱
          <input type="text" :placeholder="arr.username" />
        </div>
      </van-cell>
      <van-cell>
        <div>出生年月</div>
        {{arr.year}}
      </van-cell>
    </van-list>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: "",
      arr: {}
    };
  },
  components: {},
  methods: {
    saveUser() {
      this.$api.saveUser().then(res => {});
    },
    getUser() {
      this.$api.user().then(res => {
        //console.log(res.userInfo);
        this.arr = res.userInfo;
        console.log(this.arr);
      });
    }
  },
  mounted() {
    this.getUser();
  },
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