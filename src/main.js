// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/normalize.css'
import './assets/css/globalstyle.css'
import './assets/css/liMarquee.css'
import './assets/css/datepicker.css'
import './assets/js/components'
import 'swiper/dist/css/swiper.min.css'
import 'animate.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
