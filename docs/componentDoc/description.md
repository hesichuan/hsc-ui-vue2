# Descriptions 描述列表
> 列表形式展示多个字段。

### 示例
<br/>
<hsc-descriptions title="用户信息" width="500" :column="3" border>
  <template slot="extra">
    <div class="button">操作</div>
  </template>
  <hsc-descriptions-item label="用户名">张三</hsc-descriptions-item>
  <hsc-descriptions-item label="年龄">18</hsc-descriptions-item>
  <hsc-descriptions-item label="性别">男</hsc-descriptions-item>
  <hsc-descriptions-item label="地址">北京市海淀区</hsc-descriptions-item>
</hsc-descriptions>

### 代码
```html
<hsc-descriptions title="用户信息" width="500" :column="3" border>
  <template slot="extra">
    <div class="button">操作</div>
  </template>
  <hsc-descriptions-item label="用户名">张三</hsc-descriptions-item>
  <hsc-descriptions-item label="年龄">18</hsc-descriptions-item>
  <hsc-descriptions-item label="性别">男</hsc-descriptions-item>
  <hsc-descriptions-item label="地址">北京市海淀区</hsc-descriptions-item>
</hsc-descriptions>
```

### Descriptions Attributes
| 参数 | 说明 | 类型 | 是否必要 | 默认值 |
| --- | ---  | ---  |    ---   |  ---  |
| title | 容器标题 | String | 否 | "" |
| width | 容器宽度 | String/Number | 否 | 100% |
| column | grid布局的列数 | Number | 否 | 1 |
| border | 容器边框 | Boolean | 否 | false |
| gap | 列之间的间隙 | String | 否 | 0 |

### Descriptions Slots
| Name | 说明 |
| --- | ---  |
| - | Descriptions容器的内容 |
| extra | 自定义操作区，显示在右上方 |

### Descriptions Item Attributes
| 参数 | 说明 | 类型 | 是否必要 | 默认值 |
| --- | ---  | ---  |    ---   |  ---  |
| label | 标签文本 | String | 否 | "" |

### Descriptions Item Slots
| Name | 说明 |
| --- | ---  |
| - | DescriptionsItem容器的内容 |
| label | 自定义标签文本 |