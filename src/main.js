// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App1 from './App'
import router from './router'

Vue.config.productionTip = false

import './assets/css/typo/typo.css';
import './assets/css/GB-canvas-turntable.css';
import './assets/js/GB-canvas-turntable.min.js';

/* eslint-disable no-new */
new Vue({
  el: '#app1',
  router,
  template: '<App1/>',
  components: { App1 }
})
