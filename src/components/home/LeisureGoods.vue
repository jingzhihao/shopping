<template>
  <div>
    <div class="fot">
      <div class="fnt">
        <div class="fwt">{{flo}}</div>
        <div class="font">{{title}}</div>
      </div>
      <div class="box">
        <div v-for="item in floor" :key="item.id" class="desc" @click="$go(item.goodsId)">
          <img :src="item.image"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    floor: {
      type: Array,
      default: () => []
    },
    title: {
      type: String,
      default: ""
    },
    flo: {
      type: String,
      default: ""
    }
  },
  data() {
    return {};
  },
  components: {},
  methods: {},
  mounted() {
    
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
//border: 1px solid red;

.box {
  width: 100%;
  height: 300px;
  .desc:nth-child(1) {
    height: 200px !important;
  }
  .desc {
    width: 50%;
    height: 100px;
    //background: blue;
    float: left;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
//休闲
.fnt {
  width: 23.667vw;
  //border: 1px solid red;
  display: flex;
  margin: 0 auto;
  .fwt {
    background: red;
    width: 20px;
    height: 20px;
    border-radius: 20px;
    font-size: 13px;
    color: rgb(247, 247, 247);
    text-align: center;
    line-height: 20px;
  }
   .font {
     font-size: 14px;
     color: rgb(201, 5, 5);
  }
}
</style>