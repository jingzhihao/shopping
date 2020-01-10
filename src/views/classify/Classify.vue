<template>
  <div>
    <global-top>
      <div slot="back"></div>
      <div slot="title">商品分类</div>
    </global-top>
    <div style="display: flex">
      <div style="flex: 3">
        <van-sidebar v-model="activeKey" @change="onChange">
          <van-sidebar-item
            v-for="(item,index) in arr"
            :key="index"
            :title="item.mallCategoryName"
          />
        </van-sidebar>
      </div>
      <!--左侧导航-->
      <div style="flex: 7">
        <van-tabs v-model="active" :ellipsis="false" @click="add">
          <van-tab
            v-for="(item,index) in list"
            :key="index"
            :title="item.mallSubName"
            :name="item.mallSubId"
          >
            <div class="box" v-for="(item,index) in list1" :key="index" @click="$go(item.id)">
              <div class="box-1">
                <img :src="item.image_path" alt />
              </div>
              <div class="box-2">
                <div class="box4">{{item.name}}</div>
                <div class="box-3">
                  ￥{{item.present_price}}
                  <del class="price">￥{{item.orl_price}}</del>
                </div>
              </div>
            </div>
          </van-tab>
        </van-tabs>
        <br />
        <br />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Classification",
  components: {},
  props: {},
  data() {
    return {
      list: [],
      arr: [],
      activeKey: 0,
      ruleForm: "",
      active: 0,
      list1: []
    };
  },
  methods: {
    vsid(val) {},
    //标签栏的数据
    add(name) {
      //console.log(name);
      this.$api
        .category(name)
        .then(res => {
          this.list1 = res.dataList;
        })
        .catch(err => {
          console.log(err);
        });
    },
    getData() {
      this.$api
        .getRecommend()
        .then(res => {
          //获取侧边栏的数据
          this.arr = res.data.category;
          //详细获取侧边栏的下标
          this.list = res.data.category[0].bxMallSubDto;
          //进行判断，返回值code=200的时候
          if (res.code === 200) {
            //默认为第一项
            this.onChange(0);
          }
          if (this.$route.query.id > 0) {
            //获取到的下标小于0是，侧边栏的下边为1所以要减去1
            this.activeKey = this.$route.query.id - 1;
            //
            this.list = this.arr[this.activeKey].bxMallSubDto;
            //实时更新右侧数据
            this.onChange(this.activeKey);
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    onChange(index) {
      //console.log(index);
      //每次
      this.active = 0;
      this.list = this.arr[index].bxMallSubDto;
      //获取具体分类的下标
      this.ruleForm = this.arr[index].bxMallSubDto[0].mallSubId;
      // console.log(this.ruleForm);
      this.add(this.ruleForm);
    }
  },
  mounted() {
    this.getData();
  },
  created() {},
  filters: {},
  computed: {},
  watch: {},
  directives: {}
};
</script>

<style scoped lang="scss">
.box {
  width: 275px;
  height: 130px;
  display: flex;
  border-bottom: 1px solid #f8f2f2;
  color: red;
  margin-left: 10px;
}
.box-1 > img {
  width: 100px;
  height: 90px;
}
.box-1 {
  height: 100px;
  display: flex;
  margin-top: 10px;
  align-items: center;
  border: 1px solid #f8f2f2;
}
.box-3 {
  margin-top: 30px;
  .price {
    font-size: 12px;
    color: black;
    margin-left: 5px;
  }
}
.box4 {
  margin-top: 7px;
}
.box-2 {
  margin-left: 15px;
}
.top-2 {
  width: 275px;
  background: white;
}
</style>