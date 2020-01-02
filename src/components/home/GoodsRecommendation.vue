<template>
 <div class="category">
    <div v-for="(item, index) in category" :key="index" @click="onSech(item.mallCategoryId)">
        <img class="image" :src="item.image"/>
        <div class="mallCategoryName">{{item.mallCategoryName}}</div>
      </div>
 </div>
</template>

<script>
 export default {
   props: {
    category: {
      type: Array,
      default: () => []
    }
  },
   data () {
     return {

     }
   },
   components: {

   },
   methods: {
      onSech(val){
          //this.$router.push({name:classify,query: { id: val }})
          console.log(val);
      }
   },
   mounted() {

   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
.category {
  display: flex;
  justify-content: space-around;
  align-items: center;
    width: 70px;
    height: 70px;
    //border: 1px solid red;
    background: rgb(243, 241, 241);
  }
.image{
    width: 60px;
    height: 58px;
    border-radius: 4.333vw;
    margin: 0 5px;
  }
  .mallCategoryName{
    font-size: 14px;
    margin: -0.667vw 6px;
  }
</style>