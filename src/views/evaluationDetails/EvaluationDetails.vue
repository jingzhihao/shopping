<template>
 <div>
    <div class="arrow">
      <van-icon class="arrow_left" name="arrow-left" />
    </div>
    <div v-for="(item,index) in arr" :key="index">
        
    </div>
 </div>
</template>

<script>
 export default {
   data () {
     return {
        //id:'',
        arr:{}
     }
   },
   components: {

   },
   methods: {
      getGoodOne(){
          this.$api.getGoodOne(this.$route.query.id).then(res => {
            //console.log(res);
            this.arr = res.data
          }).catch(err => {
            console.log(err);
          })
      }
   },
   mounted() {
     this.getGoodOne()
     //this.id = this.$route.query.id;
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
.arrow {
  width: 9.667vw;
  height: 9.667vw;
  background: rgb(71, 71, 71);
  border-radius: 50%;
  margin: 7px;
  .arrow_left {
    color: rgb(253, 253, 253);
    margin: 2.333vw 2.333vw 0;
  }
}
</style>