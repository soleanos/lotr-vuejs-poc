import Vue from 'vue'
import App from './App.vue'
import VueMaterial from 'vue-material'
import { MdButton, MdContent, MdTabs } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import VueRouter from 'vue-router'
import Home from '@/components/home.vue'
import Team from '@/components/team.vue'

Vue.use(MdButton)
Vue.use(MdContent)
Vue.use(MdTabs)
Vue.use(VueRouter)
Vue.use(VueMaterial)

Vue.config.productionTip = false

const routes = [
  { path: '/', name: 'home', component: Home} ,
  { path: '/equipe', name: 'equipe', component: Team }
]

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes 
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
