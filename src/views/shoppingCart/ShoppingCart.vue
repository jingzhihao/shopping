<template>
  <div>
    <global-top>
      <div slot="title">购物车</div>
    </global-top>
    <div>
      <div v-if="this.name === ''">
        <not></not>
      </div>
      <div v-else-if="this.name !== ''">
        <logged ></logged>
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
      name: ''
    };
  },
  components: {
    not,
    logged
  },
  methods: {},
  mounted() {
    if (localStorage.name) {
      this.name = localStorage.getItem("name");
    }
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>