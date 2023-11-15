import Descriptions from "./src/main.vue"

Descriptions.install = function (Vue) {
  Vue.component(Descriptions.name, Descriptions)
}

export default Descriptions