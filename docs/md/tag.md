<script>
  export default {
    data () {
        return {
            colorList : ['default','primary','success','info','warning','danger','dark'],
            dynamicTags : ['default','primary','success','info','warning','danger','dark']
        }
    },
    methods : {
        handleClose(tag) {
            alert(tag)
            this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
        },
    }
  }
</script>
<style>
    .demo-tag{
        .sealui-tag{
            margin: 5px 10px 5px 0;
        }
    }
</style>
## Tag 标签
对不同维度进行简单的标记和分类。

### 基础用法
:::demo 简单的展示。
```html
<template>
    <seal-tag>标签一</seal-tag>
    <seal-tag color="success" rounded>标签二</seal-tag>
    <seal-tag type="border" color="danger" rounded>标签三</seal-tag>
    <seal-tag type="dot" color="info" rounded>标签四</seal-tag>
</template>
```
:::

### 样式类型
:::demo 通过设置 `type` 属性为 `border` 或 `dot`来选择不同的样式类型。建议有关闭的某些场景下使用 `border`，图例的场景下使用 `dot`。
```html
<template>
    <seal-tag type="border">标签一</seal-tag>
    <seal-tag type="dot">标签二</seal-tag>
</template>
```
:::

### 各种颜色
:::demo 通过设置`color`来显示不同颜色的标签。提供了7中色彩方案：`default`、`primary`、`success`、`info`、`warning`、`danger`、`dark`
```html
<template>
    <seal-tag
        :color="item"
        v-for="item in colorList"
        :key="item.id">{{item}}</seal-tag>
</template>
<script>
  export default {
    data () {
        return {
            colorList : ['default','primary','success','info','warning','danger','dark'],
        }
    }
  }
</script>
```
:::

### 可移除的标签
:::demo 设置`closable`属性可以定义一个标签是否可移除。默认的标签移除时会附带渐变动画，如果不想使用，可以设置`close-transition`属性，它接受一个`Boolean`，`true` 为关闭。
```html
<template>
    <seal-tag :color="item" v-for="item in dynamicTags"
    type="border" closable
    @onClose="handleClose(item)" :key="item.id">{{ item }}</seal-tag>
</template>
<script>
  export default {
    data () {
        return {
            dynamicTags : ['default','primary','success','info','warning','danger','dark']
        }
    },
    methods : {
        handleClose(tag) {
            this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
        },
    }
  }
</script>
```
:::

### 圆角标签
:::demo 通过设置`rounded`来显示圆角标签
```html
<template>
    <seal-tag type="border" rounded>标签一</seal-tag>
    <seal-tag type="dot" rounded>标签二</seal-tag>
    <seal-tag type="dot" color="success" rounded>标签三</seal-tag>
    <seal-tag type="dot" color="danger" rounded>标签四</seal-tag>
    <seal-tag type="border" color="danger" rounded>标签四</seal-tag>
</template>
```
:::

### API
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| color | 主题 | String | primary、info、success、warning、danger、dark | — |
| type | 样式类型 | String | border、dot | — |
| rounded | 是否圆角 | Boolean | — | false |
| closable | 是否可关闭 | Boolean | — | false |
| close-transition | 是否禁用关闭时的渐变动画 | boolean | — | false |


### 事件
| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| onClose | 关闭tag时触发的事件 | — |
