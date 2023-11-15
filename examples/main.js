import Vue from 'vue'
import App from './App.vue'

import "../packages/css/default.scss"
import "../packages/css/demo.scss"
import "../packages/css/descriptions.scss"
import "../packages/css/descriptions-item.scss"
import Demo from "../packages/lib/demo/index.js"
import Descriptions from "../packages/lib/descriptions/index.js"
import DescriptionsItem from "../packages/lib/descriptions-item/index.js"

Vue.use(Demo)
Vue.use(Descriptions)
Vue.use(DescriptionsItem)

// import 'hsc-ui-vue2/dist/css/index.css';
// import HSCUI from 'hsc-ui-vue2';
// Vue.use(HSCUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
