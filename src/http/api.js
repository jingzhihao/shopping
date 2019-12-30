import service from "./index"

export default {
    //首页的所有数据
    getRecommend() {
        return service.req('/recommend')
    },
    //首页的请求
    getSearch(value, page = 1) {
        return service.req('/search', {
            value,
            page
        })
    },
    //验证码
    getCode() {
        return service.req('/verify')
    },
    //注册
    getRegister({ nickname, password, verify }) {
        return service.req('/register', {
            nickname,
            password,
            verify,
        })
    },
    //登录
    getLogin({ nickname, password, verify }) {
        return service.req('/login', {
            nickname,
            password,
            verify
        })
    }

}