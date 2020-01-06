<template>
  <div>
    <global-top>
      <div slot="title">评价详情</div>
    </global-top>
    <div class="header">
      <img :src="item.image" alt />
      <div>
        <van-rate v-model="item.rate" />
      </div>
      <div class="comment_time">{{item.comment_time}}</div>
    </div>
    <div class="content">评论内容：{{item.content}}</div>
    <div class="good-box">
      <img :src="good.image_path" alt />
      <div class="good-name">名称{{good.name}}</div>
      <div @click="$addShop(good.id)" class="shopping-cart">
        <van-icon name="shopping-cart" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>