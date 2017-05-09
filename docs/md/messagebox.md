<script>
    export default {
        methods: {
            openAlert () {
                this.$msgbox({
                    title: '自定义标题',
                    content:'提示内容',
                    buttons: [{
                        label: '确定',
                        type: 'primary',
                        onClick: function () {
                            console.log('确定');
                        }
                    }]
                });
            },
            openConfirm () {
                this.$confirm('普通的confirm',{
                    title:'标题',
                    buttons: [{
                        label: '取消',
                        type: 'default',
                        onClick: function () {
                            console.log('取消');
                        }
                    },{
                        label: '确定',
                        type: 'primary',
                        onClick: function () {
                            console.log('确定');
                        }
                    }]
                })
            },
            closeOnClickModal () {
                this.$confirm('遮罩可关闭',{
                    title:'标题',
                    closeOnClickModal:true,
                    buttons: [{
                        label: '取消',
                        type: 'default',
                        onClick: function () {
                            console.log('取消');
                        }
                    },{
                        label: '确定',
                        type: 'primary',
                        onClick: function () {
                            console.log('确定');
                        }
                    }]
                })
            },
            openButtonColor () {
                this.$confirm('自定义按钮的颜色',{
                    title:'按钮颜色',
                    buttons: [{
                        label: '取消',
                        type: 'danger',
                        onClick: function () {
                            console.log('取消');
                        }
                    },{
                        label: '确定',
                        type: 'success',
                        onClick: function () {
                            console.log('确定');
                        }
                    }]
                })
            },
        }
    }
</script>
## MessageBox 警提示

模拟系统的消息提示框而实现的一套模态对话框组件，用于消息提示、成功提示、错误提示、询问信息。


### 消息提示(Alert)
当用户进行操作时会被触发，该对话框中断用户操作，直到用户确认知晓后才可关闭。
:::demo 调用`$alert`方法即可打开消息提示，它模拟了系统的`alert`
```html
<template>
    <seal-button
        type="success"
        @click.native="openAlert"
    >打开Alert</seal-button>
</template>
<script>
  export default {
    methods: {
        openAlert () {
            this.$msgbox({
                title: '自定义标题',
                content:'提示内容',
                buttons: [{
                    label: '确定',
                    type: 'primary',
                    onClick: function () {
                        console.log('确定');
                    }
                }]
            });
        }
    }
}
</script>
```
:::

### 确认消息(Confirm)
提示用户确认其已经触发的动作，并询问是否进行此操作时会用到此对话框。
:::demo 调用`$confirm`方法即可打开消息提示，它模拟了系统的`confirm`
```html
<template>
<seal-button
    type="danger"
    @click.native="openConfirm"
>打开Confirm</seal-button>
</template>
<script>
    export default {
        methods: {
            openConfirm () {
                this.$confirm('普通的confirm',{
                    title:'标题',
                    buttons: [{
                        label: '取消',
                        type: 'default',
                        onClick: function () {
                            console.log('取消');
                        }
                    },{
                        label: '确定',
                        type: 'primary',
                        onClick: function () {
                            console.log('确定');
                        }
                    }]
                })
            }
        }
    }
</script>
```
:::

### 其他用法
:::demo 通过设置其API,可调用不用的模式、样式等
```html
<template>
    <seal-button
        type="info"
        @click.native="closeOnClickModal"
    >遮罩可关闭弹层</seal-button>
    <seal-button
        type="warning"
        @click.native="openButtonColor"
    >自定义按钮颜色</seal-button>
</template>
<script>
    export default {
        methods: {
            closeOnClickModal () {
                this.$confirm('遮罩可关闭',{
                    title:'标题',
                    closeOnClickModal:true,
                    buttons: [{
                        label: '取消',
                        type: 'default',
                        onClick: function () {
                            console.log('取消');
                        }
                    },{
                        label: '确定',
                        type: 'primary',
                        onClick: function () {
                            console.log('确定');
                        }
                    }]
                })
            },
            openButtonColor () {
                this.$confirm('自定义按钮的颜色',{
                    title:'按钮颜色',
                    buttons: [{
                        label: '取消',
                        type: 'danger',
                        onClick: function () {
                            console.log('取消');
                        }
                    },{
                        label: '确定',
                        type: 'success',
                        onClick: function () {
                            console.log('确定');
                        }
                    }]
                })
            }
        }
    }
</script>
```
:::

### 全局方法
SealUI-M 为 Vue.prototype 添加了如下全局方法：$msgbox, $alert, $confirm 。因此在 vue instance 中可以采用本页面中的方式调用 MessageBox。

### API
通过设置 Options 的属性来配置不同的模式。按钮的属性说明如下：

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| title     | 标题   | String  |      —        |    —     |
| content     | 内容   | String    |  —  |     —    |
| className     | 添加的自定义样式   | String    | — |  —  |
| buttons.label     | 按钮的文字   | String    |  |  确定、取消  |
| buttons.type   | 按钮的类型   | String    | success、danger、info、dark、warning |  primary  |
| buttons.onClick     | 按钮的回调   | Function    | — |  —  |
