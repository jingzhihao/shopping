<template>
  <div>
    <global-top>
      <div slot="title">浏览历史</div>
    </global-top>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
  methods: {},
  mounted() {
    console.log(this.$store.state.browsing);
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>