import Vue from 'vue'
import city from '../js/city'
import util from '../js/util'
//全局跳转方法
Vue.prototype.$go = function(val) {
    if (val.indexOf("/") !== -1) {
        this.$router.push(val)
    } else {
        this.$router.push({ path: "commodityDetails", query: { id: val } });
    }
}
Vue.prototype.$city = city
Vue.prototype.$util = util

import Top from '../components/solt/GlobalTop'
Vue.component('globalTop', Top)