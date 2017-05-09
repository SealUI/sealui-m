<script>
export default {
    data () {
        return {
            types: ['android', 'ios', 'ios-small', 'bubbles', 'circles', 'crescent', 'dots', 'lines', 'ripple', 'spiral']
        }
    },
}
</script>
<style>
    .demo-spinner{
        .sealui-spinner{
            margin: 10px;
        }
    }
</style>

## Spinner 加载器
当区块正在获取数据中时可使用，适当的等待动画可以提升用户体验。

### 基础用法
:::demo 最简单使用 `spinner` 的方法
```html
<template>
    <seal-spinner></seal-spinner>
</template>
```
:::

### Spinner 集合
:::demo 我们提供了10种类型的Spinner，分别是：`android`、`ios`、`ios-small`、`bubbles`、`circles`、`crescent`、`dots`、`lines`、`ripple`、`spiral`
```html
<template>
    <seal-spinner
        :type="type"
        v-for="type in types"
        :key="type.id">
    </seal-spinner>
</template>
<script>
export default {
    data () {
        return {
            types: [
                'android', 'ios', 'ios-small', 'bubbles', 'circles',
                'crescent', 'dots', 'lines', 'ripple', 'spiral'
            ]
        }
    },
}
</script>
```
:::

### API
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| type     | 类型   | string    |   android、ios、bubbles、circles、crescent、dots、lines、ripple、spiral |     ios    |
