import Vue from 'vue'
import VueRouter from 'vue-router'
import Common from '../views/common/Common.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/home',
        redirect: '/',
    },
    {
        path: '/',
        component: Common,
        children: [{
                path: '',
                name: 'home',
                component: () =>
                    import ('../views/home/Home.vue')
            },

            //分类
            {
                path: '/classify',
                name: 'classify',
                component: () =>
                    import ('../views/classify/Classify.vue')
            },
            //商品详情
            {
                path: '/commodityDetails',
                name: 'commodityDetails',
                component: () =>
                    import ('../views/commodityDetails/CommodityDetails.vue')
            },
            //地址列表
            {
                path: '/addressList',
                name: 'addressList',
                component: () =>
                    import ('../views/addressList/AddressList.vue')
            },
            //编辑地址
            {
                path: '/editAddress',
                name: 'editAddress',
                component: () =>
                    import ('../views/editAddress/EditAddress.vue')
            },
            //收藏页
            {
                path: '/collection',
                name: 'collection',
                component: () =>
                    import ('../views/collection/Collection.vue')
            },
            //浏览历史
            {
                path: '/browsingHistory',
                name: 'browsingHistory',
                component: () =>
                    import ('../views/browsingHistory/BrowsingHistory.vue')
            },
            //评价详情
            {
                path: '/evaluationDetails',
                name: 'evaluationDetails',
                component: () =>
                    import ('../views/evaluationDetails/EvaluationDetails.vue')
            },
            //发布评价
            {
                path: '/postEvaluation',
                name: 'postEvaluation',
                component: () =>
                    import ('../views/postEvaluation/PostEvaluation.vue')
            },
            //评价中心
            {
                path: '/evaluationCenter',
                name: 'evaluationCenter',
                component: () =>
                    import ('../views/evaluationCenter/EvaluationCenter.vue')
            },
            //我的订单
            {
                path: '/myOrder',
                name: 'myOrder',
                component: () =>
                    import ('../views/myOrder/MyOrder.vue')
            },
            //结算页面
            {
                path: '/settlementPage',
                name: 'settlementPage',
                component: () =>
                    import ('../views/settlementPage/SettlementPage.vue')
            },
            //登录注册
            {
                path: '/login',
                name: 'login',
                component: () =>
                    import ('../views/login/Login.vue')
            },
            //我的
            {
                path: '/my',
                name: 'my',
                component: () =>
                    import ('../views/my/My.vue')
            },
            //购物车
            {
                path: '/shoppingCart',
                name: 'shoppingCart',
                component: () =>
                    import ('../views/shoppingCart/ShoppingCart.vue')
            },
            //城市
            {
                path: '/city',
                name: 'city',
                component: () =>
                    import ('../views/city/City.vue')
            },
        ]
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router