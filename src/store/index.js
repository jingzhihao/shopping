import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        keywords: [],
        browseList: [],
        city: '',
        currentCity: '',
        nickname: '',
        shopList: [],
        address: ''
    },
    mutations: {
        pushKeywords(state, data) {
            state.keywords.push(data)
        },
        pushBrowseList(state, data) {
            state.browseList.push(data)
        },
        editshopList(state, data) {
            state.shopList.map(item => item.check = data)
        },

    },
    getters: {
        getSum: state => { //通过方法访问
            let add = 0;
            state.shopList.map(item => {
                if (item.check) {
                    add += item.mallPrice * item.count;
                }
            });
            return add.toFixed(2);
        }
    },
    actions: {},
    modules: {}
})