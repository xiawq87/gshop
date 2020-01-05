// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import {Button} from 'mint-ui'
import App from './App'
import router from './router'
import store from './store'

import VueLazyload from 'vue-lazyload'
import './filter'

import './mock/mockServer'

import loading from './common/imgs/loading.gif'

Vue.component(Button.name, Button)

Vue.use(VueLazyload, {
  loading
})


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
