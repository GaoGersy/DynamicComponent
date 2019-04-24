// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import DynamicComponent from '@/components/DynamicComponent'
import App from './App'

import TestA from '@/views/test/TestA'
import TestB from '@/views/test/TestB'
import TestC from '@/views/test/TestC'

Vue.component('TestA', TestA)
Vue.component('TestB', TestB)
Vue.component('TestC', TestC)

Vue.component('DynamicComponent', DynamicComponent)
Vue.use(ElementUI)
window.eventBus = new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
