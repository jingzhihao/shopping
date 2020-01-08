<template>
  <div>
    <global-top>
      <div slot="title">评价详情</div>
    </global-top>
    <div class="header">
      <img class="imga" src="../../assets/img/my.png" alt />
      <div>
        <div class="name">{{this.name}}</div>
        <div>
          <van-rate v-model="arr.rate" />
        </div>
      </div>
      <div class="comment_time">{{arr.comment_time}}</div>
    </div>
    <div class="content">评论内容：{{arr.content}}</div>
    <div class="good-box">
      <div>
        <img :src="list.image_path" />
      </div>
      <div class="good-name">名称{{list.name}}</div>
      <div @click="addShop(list.id)" class="shopping-cart">
        <van-icon name="shopping-cart" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: {},
      list: {},
      name: ""
    };
  },
  components: {},
  methods: {
    evaluateOne() {
      this.$api.evaluateOne(this.$route.query.id).then(res => {
        this.arr = res.evaluateOne;
        this.list = this.arr.goods[0];
        console.log(this.arr);
      });
    },
    addShop(va) {
       this.$api
        .addShop(va)
        .then(res => {
          if (res.code === 200) {
            console.log("加入购物车成功");
          } else {
            console.log("加入购物车失败");
          }
          //console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.evaluateOne();
    if (localStorage.name) {
      this.name = localStorage.getItem("name");
    }
    //console.log(this.$route.query.id);
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.header {
  height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .imga {
    width: 40px;
    height: 40px;
  }
  .comment_time {
    font-size: 14px;
  }
  .name {
    height: 30px;
  }
}
.content{
  width: 95%;
  margin: 5px auto;
}
.good-box {
  width: 98%;
  margin: 10px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    width: 70px;
    height: 70px;
  }
  .good-name{
    width: 200px;
    font-size: 16px;
  }
  .shopping-cart{
    width: 30px;
    //border: 1px solid red;
    background: rgb(218, 196, 196);
    text-align: center;
    color: red;
    line-height: 30px;
    border-radius: 50%
  }
}
</style>