import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './app.vue'
import router from './router'

Vue.use(VueRouter)
Vue.use(VueResource)

new Vue({
    el: '#app',
    router: router,
    render: h => h(App),
    http: {
        root: '/proxy',
    }
})