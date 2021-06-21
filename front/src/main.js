import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from '../routes/index.js'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false
Vue.use(VueRouter)
new Vue({
  render: h => h(App),
  vuetify,
  router
}).$mount('#app')
