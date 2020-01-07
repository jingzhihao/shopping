import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';
import api from "./http/api"
import dayjs from 'dayjs'
//引入公共的头部
import './global/'

Vue.use(Vant);
Vue.prototype.$api = api
Vue.prototype.$dayjs = dayjs
Vue.config.productionTip = false



new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')