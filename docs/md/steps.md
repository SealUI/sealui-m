<script>
  export default {
    data() {
      return {
        active: 0
      };
    },

    methods: {
      next() {
        if (this.active++ > 2) this.active = 0;
      }
    }
  }
</script>

## Steps 步骤条
引导用户按照流程完成任务的分步导航条，可根据实际应用场景设定步骤，步骤不得少于 2 步。

### 基础用法

简单的步骤条。

:::demo 设置`active`属性，接受一个`Number`，表明步骤的 index，从 0 开始。需要定宽的步骤条时，设置`space`属性即可，它接受`Boolean`，单位为`rem`，如果不设置，则为自适应。设置`finish-status`属性可以改变已经完成的步骤的状态。
```html
<template>
    <seal-steps :space="1.5" :active="active" finish-status="success">
      <seal-step title="步骤 1"></seal-step>
      <seal-step title="步骤 2"></seal-step>
      <seal-step title="步骤 3"></seal-step>
    </seal-steps>

    <seal-button style="margin-top: 12px;" type="success" @click.native="next">下一步</seal-button>
</template>
<script>
  export default {
    data() {
      return {
        active: 0
      };
    },

    methods: {
      next() {
        if (this.active++ > 2) this.active = 0;
      }
    }
  }
</script>
```
:::


### 含状态步骤条

每一步骤显示出该步骤的状态。

:::demo 也可以使用`title`具名分发，可以用`slot`的方式来取代属性的设置，在本文档最后的列表中有所有的 slot name 可供参考。
```html
<template>
    <seal-steps :space="1.5" :active="1" finish-status="success" process-status="finish">
      <seal-step title="已完成"></seal-step>
      <seal-step title="进行中"></seal-step>
      <seal-step title="步骤 3"></seal-step>
    </seal-steps>
</template>
```
:::

### 有描述的步骤条

每个步骤有其对应的步骤状态描述。

:::demo
```html
<template>
    <seal-steps :space="1.5" :active="1">
      <seal-step title="步骤 1" description="这是一段很长很长很长的描述性文字"></seal-step>
      <seal-step title="步骤 2" description="这是一段很长很长很长的描述性文字"></seal-step>
      <seal-step title="步骤 3" description="这是一段很长很长很长的描述性文字"></seal-step>
    </seal-steps>
</template>
```
:::

### 竖式步骤条

竖直方向的步骤条。

:::demo 只需要在`seal-steps`元素中设置`direction`属性为`vertical`即可。
```html
<template>
    <seal-steps :space="1" direction="vertical" :active="1">
      <seal-step title="步骤 1"></seal-step>
      <seal-step title="步骤 2"></seal-step>
      <seal-step title="步骤 3"></seal-step>
    </seal-steps>
</template>
```
:::

### Steps API

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| space | 每个 step 的间距，不填写将自适应间距。支持百分比。 | Number,String | — | — |
| direction | 显示方向 | string | vertical/horizontal | horizontal |
| active | 设置当前激活步骤  | number | — | 0 |
| process-status | 设置当前步骤的状态 | string | wait、process、finish、error、success | process |
| finish-status | 设置结束步骤的状态 | string | wait、process、finish、error、success | finish |
| align-center | 标题描述居中对齐 | boolean | - | false |
| center | 组件居中显示 | boolean | - | false |

### Step API
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| title | 标题 | string | — | — |
| description | 描述性文字 | string | — | — |
| icon | 图标 | SealUI-M Icon 提供的图标，如果要使用自定义图标可以通过 slot 方式写入 | string | — |

### Step Slot
| name | 说明  | 类型| 可选值       | 默认值   |
|----|----| ---- |-------------  |-------- |
| icon | 图标 | String | — | — |
| title | 标题 | String | — | — |
| description | 描述性文字 | String | — | — |
