import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import App from './App.vue'
import './quasar'

import router from './router'


import VueSocketIO from 'vue-socket.io';
Vue.use(new VueSocketIO({
  connection: 'http://localhost:3000'
}));



Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
