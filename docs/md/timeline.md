<script>
  export default {
    methods: {
      hello() {
        alert('Hello World!');
      }
    }
  }
</script>
<style>
.demo-timeline{
    & .sealui-timeline{
        float: left;
        width: 50%;
        margin: 10px 0;
    }
}
</style>
## Timeline 时间轴
对一系列信息进行时间排序时，垂直地展示

### 基础用法
:::demo 通过设置`type`来定义不用的显示方式，设置`color`来定义不同的颜色，设置`icon`来定义需要显示的图标
```html
<template>
<seal-timeline icon="social-apple" color="success" type="dot">
    <timeline-item>
        <h4 class="process">发布里程碑版本</h4>
        <p class="process">2017-02-26 12:00:00</p>
    </timeline-item>
    <timeline-item>
        <h4>发布1.1版本</h4>
    </timeline-item>
     <timeline-item>
        <h4>发布1.0版本</h4>
    </timeline-item>
</seal-timeline>
</template>
```
:::

### 有颜色倾向的
:::demo 设置`color`来定义不同的颜色，可选值：`success`,`info`
```html
<template>
<seal-timeline color="primary" type="dot">
    <timeline-item>
        <h4 class="process">发布里程碑版本</h4>
        <p class="process">2017-02-26 12:00:00</p>
    </timeline-item>
    <timeline-item>
        <h4>发布1.1版本</h4>
    </timeline-item>
     <timeline-item>
        <h4>发布1.0版本</h4>
    </timeline-item>
</seal-timeline>
<seal-timeline color="danger" type="dot">
    <timeline-item>
        <h4 class="process">发布里程碑版本</h4>
        <p class="process">2017-02-26 12:00:00</p>
    </timeline-item>
    <timeline-item>
        <h4>发布1.1版本</h4>
    </timeline-item>
     <timeline-item>
        <h4>发布1.0版本</h4>
    </timeline-item>
</seal-timeline>
<seal-timeline color="warning" type="dot">
    <timeline-item>
        <h4 class="process">发布里程碑版本</h4>
        <p class="process">2017-02-26 12:00:00</p>
    </timeline-item>
    <timeline-item>
        <h4>发布1.1版本</h4>
    </timeline-item>
     <timeline-item>
        <h4>发布1.0版本</h4>
    </timeline-item>
</seal-timeline>
<seal-timeline color="dark" type="dot">
    <timeline-item>
        <h4 class="process">发布里程碑版本</h4>
        <p class="process">2017-02-26 12:00:00</p>
    </timeline-item>
    <timeline-item>
        <h4>发布1.1版本</h4>
    </timeline-item>
     <timeline-item>
        <h4>发布1.0版本</h4>
    </timeline-item>
</seal-timeline>
</template>
```
:::

### 设置圆点类型
:::demo 设置`type`定义不用的显示方式，可选值：border、dot
```html
<template>
<seal-timeline type="border">
    <timeline-item>
        <h4 class="process">发布里程碑版本</h4>
        <p class="process">2017-02-26 12:00:00</p>
    </timeline-item>
    <timeline-item>
        <h4>发布1.1版本</h4>
    </timeline-item>
    <timeline-item>
        <h4>发布1.0版本</h4>
    </timeline-item>
    <timeline-item>
        <h4>开始立项</h4>
    </timeline-item>
</seal-timeline>
</template>
```
:::
