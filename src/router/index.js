import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/common/Common.vue'

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





        ]
    },




]

const router = new VueRouter({
    routes
})

export default router