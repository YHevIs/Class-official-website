import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'
import echarts from 'echarts'

import ElementUI from 'element-ui'	//手动变红
import '../node_modules/element-ui/lib/theme-chalk/index.css'	//手动变红

Vue.use(VueAxios, axios)
Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.$echarts = echarts




window.vm = new Vue({
    router,
    render: h => h(App),


}).$mount('#app')