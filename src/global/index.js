import Vue from 'vue'
import city from '../js/city'
//全局跳转方法
Vue.prototype.$go = function(val) {
    if (val.indexOf("/") !== -1) {
        this.$router.push(val)
    } else {
        this.$router.push({ path: "commodityDetails", query: { id: val } });
    }
}
Vue.prototype.$city = city

import Top from '../components/GlobalTop'
Vue.component('globalTop', Top)