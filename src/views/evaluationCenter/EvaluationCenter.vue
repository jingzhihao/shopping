<template>
  <div>
    <global-top>
      <div slot="title">评价中心</div>
    </global-top>
    <div>
      <img class="img" src="../../assets/img/evaluate.png" />
    </div>
    <div class="font">
      <van-tabs v-model="active">
        <van-tab name="tobe" title="待评价">
          <div class="main" v-if="list.length>0">
            <div class="fwt">
              <div v-for="item in list" :key="item.id">
                <div class="fot">
                  <div class="fot_t">
                    <img class="imga" :src="item.image_path" />
                  </div>
                  <div class="fot_s">
                    <div>{{item.name}}</div>
                    <br />
                    <div class="btn">
                      <div class="noComment" @click="tobe(item)">
                        <van-icon name="more" />评价晒图
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-if="list.length===0">暂无数据</div>
        </van-tab>
        <van-tab name="done" title="已评价">
          <div v-if="arr.length>0">
            <div class="fwt">
              <div v-for="item in arr" :key="item.id">
                <div class="fot">
                  <div class="fot_t">
                    <img class="imga" :src="item.goods[0].image_path" />
                  </div>
                  <div class="fot_s">
                    <div>{{item.goods[0].name}}</div>
                    <br />
                    <div class="btn" @click="check(item._id)">
                      <div class="noComment">
                        <van-icon name="more" />查看评价
                      </div>
                    </div>
                  </div>
                </div>
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
      active: 1,
      list: [],
      arr: []
    };
  },
  components: {},
  methods: {
    //评价
    tobe(va) {
      //console.log(va);
      this.$router.push({ name: "postEvaluation", query: { arr: va } });
    },
    //查看评价
    check(va) {
      this.$router.push({ name: "evaluationDetails", query: { id: va } });
    },

    //待评价
    getTobeEvaluated() {
      this.$api.tobeEvaluated(1).then(res => {
        if (res.code === 200) {
          this.list = res.data.list;
          //console.log(this.list);
        }
      });
    },

    //已评价
    getAlreadyEvaluated() {
      this.$api.alreadyEvaluated(1).then(res => {
        this.arr = res.data.list;
        console.log(this.arr);
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
.img {
  width: 100%;
  height: 190px;
}
.font {
  width: 90%;
  margin: -20px auto;
  border-radius: 10px;
  //border: 1px solid red;
  //height: 600px;
}
.image {
  width: 100px;
  height: 100px;
}
.main {
  width: 98%;
  margin: 0 auto;
  display: flex;
}
.fwt {
  width: 90%;
  margin: 0 auto;
}
.fot {
  display: flex;
}
.fot_t {
  width: 40%;
  //border: 1px solid red;
}
.fot_s {
  width: 60%;
  font-size: 14px;
}
.imga {
  width: 24.667vw;
  height: 23.667vw;
}
.noComment {
  width: 90px;
  border-radius: 20px;
  color: rgb(233, 43, 43);
  border: 1px solid red;
  text-align: center;
  line-height: 25px;
}
.btn {
  margin-left: 110px;
}
</style>