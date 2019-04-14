import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueSkycons from 'vue-skycon'

Vue.config.productionTip = false

Vue.use(VueResource)
Vue.use(VueSkycons)

new Vue({
  render: h => h(App),
}).$mount('#app')
