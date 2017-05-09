<script>
  import $ from 'sealui-m/src/utils/util.js';
  export default {
    data() {
      return {
      };
    },
    methods: {
      handleClick(event) {
        console.log(event);
        alert('button clicked!');
      }
    },
    mounted() {
      this.$nextTick(() => {
        let demos = document.querySelectorAll('.source');
        let thirdDemo = demos[2];
        console.log(thirdDemo);
        $(thirdDemo).addClass('intro-block')
        //addClass(thirdDemo, 'intro-block');
      });
    }
  }
</script>
<style>
    .demo-box .sealui-button {
      margin-right: 10px;
      margin-bottom: 10px;
    }
    .demo-box.demo-button .intro-block {
    padding: 0;
  }

  .demo-button .intro-block .block {
    padding: 30px 24px;
    overflow: hidden;
    border-bottom: solid 1px #e9e9e9;
    &:last-child {
      border-bottom: none;
    }
  }

  .demo-button .intro-block .demonstration {
    font-size: 14px;
    color: rgba(0,0,0,.65);
    line-height: 44px;
  }

  .demo-button .intro-block .wrapper {
    display: block;
    margin-right: 20px;
  }
</style>
## Button 按钮
常用的操作按钮。

### 基础用法

基础的按钮用法。

:::demo Button 组件默认提供7种主题，由`type`属性来定义，默认为`default`。

```html
<template>
    <seal-button>默认按钮</seal-button>
    <seal-button
    type="primary">主要按钮</seal-button>
</template>
```
:::

### 禁用状态

按钮不可用状态。

:::demo 你可以使用`disabled`属性来定义按钮是否可用，它接受一个`Boolean`值。

```html
<template>
    <seal-button
    :plain="true"
    :disabled="true">主要按钮</seal-button>
    <seal-button
    type="primary"
    :disabled="true">主要按钮</seal-button>
    <seal-button
    type="success"
    :disabled="true">主要按钮</seal-button>
    <seal-button
    type="danger"
    :disabled="true">主要按钮</seal-button>
</template>
```
:::

### 有颜色倾向

不同的颜色倾向代表不同的提示

:::demo 朴素按钮同样设置了不同的`type`属性对应的样式（可选值同上），默认为`info`。设置`plain`属性，它接受一个`Boolean`。注意，在该情况下，`type`虽然可以为`text`，但是是没有意义的，会显示为`text button`的样式。

```html
<div class="block">
  <span class="demonstration">默认显示颜色</span>
  <span class="wrapper">
    <seal-button type="success">成功按钮</seal-button>
    <seal-button type="warning">警告按钮</seal-button>
    <seal-button type="danger">危险按钮</seal-button>
    <seal-button type="info">信息按钮</seal-button>
    <seal-button type="dark">信息按钮</seal-button>
  </span>
</div>
<div class="block">
  <span class="demonstration">镂空按钮</span>
  <span class="wrapper">
    <seal-button
    :plain="true"
    type="success">成功按钮</seal-button>
    <seal-button
    :plain="true"
    type="warning">警告按钮</seal-button>
    <seal-button
    :plain="true"
    type="danger">危险按钮</seal-button>
    <seal-button
    :plain="true"
    type="info">信息按钮</seal-button>
    <seal-button
    :plain="true"
    type="dark">信息按钮</seal-button>
  </span>
</div>
```
:::

### 图标按钮
带图标的按钮可增强辨识度(有文字)或节省空间(无文字)。
:::demo 设置icon属性即可，`icon` 的列表可以参考 SealUI-M 的 `icon` 组件，也可以设置在文字右边的 `icon` ，只要使用i标签即可，可以使用自定义图标。
```html
<template>
    <seal-button
        type="primary"
        icon="download">下载</seal-button>
    <seal-button
        type="info"
        icon="safe-success">安全</seal-button>
    <seal-button
        type="success"
        icon="success-no-circle">成功</seal-button>
    <seal-button
        type="warning"
        icon="warn"></seal-button>
    <seal-button
        type="success"
        icon="info-circle"></seal-button>
</template>
```
:::

### 加载中
点击按钮后进行数据加载操作，在按钮上显示加载状态。
:::demo 要设置为 `loading` 状态，只要设置`loading`属性为`true`即可。
```html
<template>
    <seal-button
        type="success"
        :loading="true">
    </seal-button>
</template>
```
:::

### 不同尺寸

Button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。

:::demo 额外的尺寸：`large`、`small`、`mini`，通过设置`size`属性来配置它们。

```html
<template>
    <seal-button
        type="primary"
        size="large"
    >大型按钮</seal-button>
    <seal-button
        type="success"
    >正常按钮</seal-button>
    <seal-button
        type="danger"
        size="small"
    >小型按钮</seal-button>
    <seal-button
        type="info"
        size="mini"
    >超小按钮</seal-button>
</template>
```
:::


### 块级按钮
:::demo 通过设置属性 `block` 可将按钮宽度设置为 100%，常用于弹窗内操作按钮。
```html
<template>
    <seal-button
        type="primary"
        :block="true"
    >主要按钮</seal-button>
    <seal-button
        type="success"
        :block="true"
    >成功按钮</seal-button>
    <seal-button
        type="danger"
        :plain="true"
        :block="true"
    >危险按钮</seal-button>
</template>
```
:::


### Api
通过设置 Button 的属性来产生不同的按钮样式。按钮的属性说明如下：

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| size     | 尺寸   | string  |   large,small,mini            |    —     |
| type     | 类型   | string    |   primary、success、warning、danger、info、dark |     —    |
| plain     | 是否镂空按钮   | Boolean    | — | false   |
| loading     | 是否加载中状态   | Boolean    | — | false   |
| disabled  | 是否禁用状态    | boolean   | —   | false   |
| icon  | 图标，已有的图标库中的图标名 | string   |  —  |  —  |
| native-type | 原生 type 属性 | string | button、submit、reset | button |
