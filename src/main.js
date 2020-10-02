import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Login from '@/components/Login.vue'
import CvLista from '@/components/CvLista.vue'
import LaddaCv from '@/components/LaddaCv.vue'
import axios from 'axios'

Vue.use(VueRouter)
Vue.use(Axios)

const routes = [{
  path: '/',
  component: Login
},
{
  path: '/cvlista',
  component: CvLista
},
{
  path: '/laddaupp',
  component: LaddaCv
}


]

const router = new VueRouter({
  routes
})

Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
