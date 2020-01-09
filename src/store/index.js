import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        //定位
        city: '定位中..',
        //购物车
        shoppingNum: [],

        addId: '',
        addRess: {},
        carList: [],
        list: [],
        //搜索历史
        history: [],
        //浏览历史
        browsing: []
    },
    mutations: {

    },
    getters: {

    },
    actions: {},
    modules: {}
})