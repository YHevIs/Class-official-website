import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'
import echarts from 'echarts'


Vue.use(VueAxios, axios)

Vue.config.productionTip = false
Vue.prototype.$echarts = echarts




window.vm = new Vue({
    router,
    render: h => h(App),


}).$mount('#app')