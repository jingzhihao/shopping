<template>
  <div>
    <global-top>
      <div slot="title">个人资料</div>
    </global-top>

    <div>github</div>
    <van-divider />
    <div style="display: flex; justify-content:space-around">
      <div style="margin: 20px 0">头像</div>
      <div class="images">
        <img :src="arr.avatar" alt />
      </div>
    </div>
    <van-divider />
    <div>
      <van-field v-model="arr.username" label="用户名" />
    </div>
    <van-divider />
    <div>
      <van-field v-model="arr.nickname" label="昵称" />
    </div>
    <van-divider />
    <div>
      <van-field v-model="arr.gender" label="性别" />
    </div>
    <van-divider />
    <div>
      <van-field v-model="text" label="邮箱" placeholder="请输入邮箱" />
    </div>
    <van-divider />
    <div @click="open">
      <div>{{arr.year}}年{{arr.month}}月{{arr.day}}日</div>
    </div>
    <div v-if="flag">
      <van-datetime-picker
        v-model="currentDate"
        type="date"
        :min-date="minDate"
        :max-date="maxDate"
        @cancel="cancel"
        @confirm="confirm(currentDate)"
      />
    </div>
    <van-divider />
    <div>
      <van-button type="primary" block @click="save">保存</van-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: {},
      text: "",
      flag: false,
      minDate: new Date(1970, 1, 1),
      maxDate: new Date(2025, 10, 1),
      currentDate: ""
    };
  },
  components: {},
  methods: {
    // 个人资料请求
    user() {
      this.$api
        .user()
        .then(res => {
          this.arr = res.userInfo;
          console.log(this.arr);
          this.currentDate = new Date(
            this.arr.year,
            this.arr.month - 1,
            this.arr.day
          );
        })
        .catch(err => {});
    },
    //修改
    save() {
      let obj = {
        gender: this.arr.gender,
        email: this.text,
        year: this.arr.year,
        month: this.arr.month,
        day: this.arr.day,
        id: this.arr._id,
        nickname: this.arr.nickname,
      };
      this.$api
        .saveUser(obj)
        .then(res => {
          console.log(res);
          if (res.code === 200) {
            this.$toast("修改成功");
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    //打开时间选择
    open() {
      this.flag = true;
    },
    //打开时间选择去之后点击取消按钮
    cancel() {
      this.flag = false;
    },
    //打开时间选择器之后选择好点击确定
    confirm(val) {
      this.arr.year = this.$dayjs(val).format("YYYY");
      this.arr.month = this.$dayjs(val).format("MM");
      this.arr.day = this.$dayjs(val).format("DD");
      this.flag = false;
    }
  },
  mounted() {
    this.user();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.images {
  width: 260px;
  height: 60px;
  img {
    width: 50px;
    height: 50px;
    //justify-content: space-around;
  }
}
</style>