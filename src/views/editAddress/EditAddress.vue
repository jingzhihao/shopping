<template>
  <div>
    <global-top>
      <div slot="title">编辑地址</div>
    </global-top>
    <!--编辑地址-->
    <van-address-edit
      :area-list="area"
      :address-info="list"
      show-postal
      show-delete
      show-set-default
      show-search-result
      @save="onSave"
      @delete="onDelete"
    />
  </div>
</template>

<script>
import area from "../../js/area.js";
export default {
  data() {
    return {
      list: {},
      area: area,
      searchResult: []
    };
  },
  components: {},
  methods: {
    onSave(content) {
      //console.log(content._id);
      //console.log(content.id);
      // if(this.$route.query.item){
      //    content.id = item._id
      // }
      //console.log(content);
      let args = {
        name: content.name,
        tel: content.tel,
        province: content.province,
        city: content.city,
        county: content.county,
        addressDetail: content.addressDetail,
        areaCode: content.areaCode,
        address:
          content.province +
          content.city +
          content.county +
          content.addressDetail,
        isDefault: content.isDefault,
        id: content._id ? content._id : ""
      };

      this.$api
        .postAddress(args)
        .then(res => {
          //console.log(res);
          if (res.code === 200) {
            //  if(content.isDefault){
            //       this.$api.setDefaultAddress(content.id).then(res => {
            //         if(res.code === 200){
            //            this.$toast('设置默认地址成功')
            //            //console.log('设置默认地址成功');
            //         }
            //       })
            //  }
            //console.log('地址增加成功');
            if (args.id === "") {
              this.$toast("地址新增成功");
            }else{
              this.$toast("地址编辑成功");
            }
          } else {
            //console.log('地址添加失败');
            this.$toast("地址编辑失败");
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    onDelete(content) {
      //console.log(content._id);
      this.$api
        .deleteAddress(content._id)
        .then(res => {
          //console.log(res);
          if (res.code === 200) {
            //console.log('删除成功');
            this.$toast("删除成功");
          } else {
            //console.log('删除失败');
            this.$toast("删除失败");
          }
        })
        .catch(err => {
          console.log("删除异常");
        });
    }
  },
  mounted() {
    this.list = this.$route.query.item;
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>
