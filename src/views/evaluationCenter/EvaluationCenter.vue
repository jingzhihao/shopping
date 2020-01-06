<template>
  <div>
    <global-top>
      <div slot="title">评价中心</div>
    </global-top>

    <div class="nav">
      <van-tabs v-model="active" @click="change">
        <van-tab name="tobe" title="待评价">
          <div class="main" v-if="list.length>0">
            <evaluate-box v-for="item in list" :key="item.id" :item="item" />
          </div>
          <div v-if="list.length===0">暂无数据</div>
        </van-tab>
        <van-tab name="done" title="已评价">
          <div class="main" v-if="arr.length>0">
            <div v-for="item in arr" :key="item.id">
              <div class="image">
                <img :src="item.image_path" alt />
              </div>
              <div class="name">{{item.name}}</div>
              <div class="btn">
                <div class="noComment" v-if="isComment===false" @click="tobes">评价晒图</div>
                <div class="isComment" v-else @click="dones">查看评价</div>
              </div>
            </div>
          </div>
          <div v-if="arr.length===0">暂无数据</div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      arr: []
    };
  },
  components: {},
  methods: {
    dones() {
      this.$router.push({ name: "evaluationDetails", query: { id: this._id } });
    },
    getTobeEvaluated() {
      this.$api.tobeEvaluated().then(res => {
        if (res.code === 200) {
          this.list = res.data.list;
          console.log(this.tobeList);
        }
      });
    },
    getAlreadyEvaluated() {
      this.$api.alreadyEvaluated().then(res => {
        this.arr = res.data.list;
        console.log(this.doneList);
      });
    }
  },
  mounted() {
    this.getTobeEvaluated();
    this.getAlreadyEvaluated();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>