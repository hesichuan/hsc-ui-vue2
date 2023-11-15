# 快速开始

### 安装组件库

```bash
npm i hsc-ui-vue2
```

### 使用组件库
> 在 main.js 中引用组件库

```javascript
// 全部引入
import 'hsc-ui-vue2/dist/css/index.css';
import HSCUI from 'hsc-ui-vue2';
Vue.use(HSCUI)

// 按需引入
import "../packages/css/default.scss"
import "../packages/css/descriptions.scss"
import "../packages/css/descriptions-item.scss"
import Descriptions from "../packages/lib/descriptions/index.js"
import DescriptionsItem from "../packages/lib/descriptions-item/index.js"
Vue.use(Descriptions)
Vue.use(DescriptionsItem)
```