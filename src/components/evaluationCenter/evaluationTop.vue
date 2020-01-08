<template>
  <div>
    
  </div>
</template>

<script>
export default {
  props: {
    arr: {
      type: Array,
      default: () => []
    },
    goods: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {};
  },
  components: {},
  methods: {
      
  },
  mounted() {
      console.log(this.arr);
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>