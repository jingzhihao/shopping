<template>
  <div>
    <global-top>
      <div slot="back"></div>
      <div slot="title">购物车</div>
    </global-top>
    <div>
      <div v-if="this.name === ''">
        <not></not>
      </div>
      <div v-else-if="this.name !== ''">
        <logged :shopList="this.shopList"></logged>
      </div>
    </div>
  </div>
</template>

<script>
import not from "../../components/shoppingCar/Not";
import logged from "../../components/shoppingCar/Logged";
export default {
  data() {
    return {
      name: '',
      shopList:[]
    };
  },
  components: {
    not,
    logged
  },
  methods: {
    getCard() {
      this.$api.getCard().then(res => {
        //console.log(res);
        if (res.code === 200) {
          this.shopList = res.shopList;
          //console.log(this.shopList);
          this.$store.state.shoppingNum = this.shopList;
        }
      });
    },
  },
  mounted() {
    this.getCard();
    if (localStorage.name) {
      this.name = localStorage.getItem("name");
    }
    //console.log(this.$store.state.shoppingNum);
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>