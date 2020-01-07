<template>
  <div>
    <global-top>
      <div slot="title">地址列表</div>
    </global-top>
    <!--地址列表-->

    <div class="font" v-if="this.arr.length === 0">
      暂无数据，请添加收货地址
      <van-address-list @add="onAdd" />
    </div>
    <div v-else-if="this.arr.length > 0">
      <van-address-list
        v-model="chosenAddressId"
        :list="arr"
        default-tag-text="默认"
        @add="onAdd"
        @edit="onEdit"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chosenAddressId: '1',
      arr: []
    };
  },
  components: {},
  methods: {
    //获取用户的地址
    getAdd() {
      this.$api
        .getAddress()
        .then(res => {
          this.arr = res.address;
           //console.log(this.arr);
           this.arr.map((item,index) => {
               item.id = (index+1).toString()
             //console.log(index);
           })
        })
        .catch(err => {
          console.log(err);
        });
    },
    onAdd() {
      //console.log(321);
     this.$router.push('/editAddress')
    },

    onEdit(item) {
      //console.log(item);
      this.$router.push({name:'editAddress',query:{item:item}})
    
    }
  },
  mounted() {
    this.getAdd();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.font {
  width: 80%;
  text-align: center;
  margin: 10px auto;
}
</style>