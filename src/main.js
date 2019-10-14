import Vue from 'vue'
import App from './App.vue'
import Details from './Details.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
