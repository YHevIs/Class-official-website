import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/home'
import Address from './pages/address'
Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/address',
            name: 'address',
            component: Address
        }
    ]
})