import VueRouter from 'vue-router'
import Home from './components/home.vue'

export default new VueRouter({
  routes: [
    { 
      name: 'home',
      path: '/',
      component: Home
    }
  ]
})