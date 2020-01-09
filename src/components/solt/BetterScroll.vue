<template>
  <div class="core-container">
    <div class="wrapperX" ref="wrapperX">
        <slot class="height"></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  props: {},
  data() {
    return {};
  },
  components: {},
  methods: {
    init() {
      this.bs = new BScroll(".wrapperX", {
        scrollX: true,
        click: false,
        probeType: 3 // listening scroll hook
      });
    }
  },
  mounted() {
    this.init();
  },
  beforeDestroy() {},
  watch: {},
  computed: {}
};
</script>

<style lang='scss'>
</style>