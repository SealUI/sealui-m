<script>
  var iconList = require('docs/icon.json');

  export default {
    data() {
      return {
        icons: iconList
      };
    }
  }
</script>
<style>
  .demo-icon .source > i {
    color: rgba(0,0,0,.65);
    margin: 10px 20px;
    font-size: 2.5em;
    vertical-align: middle;
    color: #2cbe4e;
  }

  .demo-icon .source > button {
    margin: 0 20px;
  }

  .icon-list {
    overflow: hidden;
    list-style: none;
    padding: 0;
    border: solid 1px #e9e9e9;
    border-radius: 4px;
  }
  .icon-list li {
    float: left;
    width: 16.66%;
    text-align: center;
    height: 120px;
    line-height: 120px;
    color: #666;
    font-size: 13px;
    transition: color .15s linear;

    border-right: 1px solid #e9e9e9;
    border-bottom: 1px solid #e9e9e9;
    margin-right: -1px;
    margin-bottom: -1px;

    & span {
      display: inline-block;
      line-height: normal;
      vertical-align: middle;
      font-family: 'Helvetica Neue',Helvetica,'PingFang SC','Hiragino Sans GB','Microsoft YaHei',SimSun,sans-serif;
    }
    & i {
      display: block;
      font-size: 24px;
      margin-bottom: 15px;
    }
    &:hover {
      color:#4078c0;
    }
  }
</style>

## Icon 图标
提供了一套常用的图标集合。

### 使用方法

直接通过设置类名为 `sealui-icon-iconName` 来使用即可。例如：

:::demo
```html
<template>
    <i class="sealui-icon-download"></i>
    <i class="sealui-icon-safe-warn"></i>
    <i class="sealui-icon-safe-success"></i>
    <i class="sealui-icon-safe-warn"></i>
    <i class="sealui-icon-warn"></i>
    <i class="sealui-icon-info-circle"></i>
    <i class="sealui-icon-success-no-circle"></i>
    <i class="sealui-icon-success-circle"></i>
</template>
```
:::

### 图标集合

<ul class="icon-list">
  <li v-for="name in icons" :key="name.id">
    <span>
      <i :class="'sealui-icon-' + name"></i>
      {{'sealui-icon-' + name}}
    </span>
  </li>
</ul>
