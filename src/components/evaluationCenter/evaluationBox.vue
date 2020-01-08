<template>
  <div class="fwt">
    <div v-for="item in list" :key="item.id">
      <div class="fot">
        <div class="fot_t">
          <img class="imga" :src="item.image_path" />
        </div>
        <div class="fot_s">
          <div>{{item.name}}</div>
          <br/>
          <div class="btn">
            <div class="noComment" @click="tobe(item)"><van-icon name="more" />评价晒图</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {};
  },
  components: {},
  methods: {
      //评价
      tobe(va){
        //console.log(va);
        this.$router.push({name:'postEvaluation',query:{arr:va}})
      }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
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
.img {
  width: 24.667vw;
  height: 23.667vw;
}
.noComment{
    width: 90px;
    border-radius: 20px;
    color: rgb(233, 43, 43);
    border: 1px solid red;
    text-align: center;
    line-height: 25px;
}
.btn{
    margin-left: 110px;
}
</style>