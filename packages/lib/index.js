import Demo from "./demo/index.js"
import Descriptions from "./descriptions/index.js"
import DescriptionsItem from "./descriptions-item/index.js"

const components = {
  Demo,
  Descriptions,
  DescriptionsItem
}

const install = function (Vue) {
  if (install.installed) return
  Object.keys(components).forEach(key => {
    Vue.component(components[key].name, components[key])
  })
}

export default {
  install,
}