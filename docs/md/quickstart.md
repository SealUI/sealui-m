<style scoped>
    ul{
        padding-left: 30px;
        padding-bottom: 10px;
        > li{
            padding: 3px 0;
        }
    }
    code {
        color: rgba(0,0,0,.65);
        background-color:#f7f7f7;
        border: 1px solid #eee;
        font-family: Consolas,Monaco,Andale Mono,Ubuntu Mono,monospace;
        margin: 0 2px;
        transform: translateY(-2px);
        display: inline-block;
        padding: 1px 5px;
        font-size: 12px;
        border-radius: 3px;
        &.hljs{
            width: 100%;
            padding: 18px 24px;
        }
  }
</style>
## 快速上手
SealUI-M 致力于提供给程序员愉悦的开发体验。

### 使用之前
高效的开发，离不开基础工程的搭建。在开始使用 SealUI-M 之前，有必要先了解以下基础知识，我们也假设您已经写过 Vue，并掌握了下面的内容。
<ul class="demo-li-link">
    <li><a href="http://cn.vuejs.org/guide/components.html" target="_blank">VueJS</a></li>
    <li><a href="http://cn.vuejs.org/guide/application.html" target="_blank">基于Vue构建大型应用</a></li>
</ul>

以下概念贯穿 iView 前后，建议开发者花点时间来了解。
* `props` 传递数据
* `slot` 内容分发
* `events` `$emit` `@click` 事件

### 配置文件
新建项目，项目结构为
```text
|- src/  --------------------- 项目源代码
    |- App.vue
    |- main.js  -------------- 入口文件
|- .babelrc  ----------------- babel 配置文件
|- index.html  --------------- HTML 模板
|- package.json  ------------- npm 配置文件
|- README.md  ---------------- 项目帮助文档
|- webpack.config.js  -------- webpack 配置文件
```

几个配置文件的典型配置如下：
**.babelrc**

```json
{
  "presets": [
    ["es2015", { "modules": false }]
  ]
}
```

### 引入 SealUI-M
#### 完整引入
在 main.js 中写入以下内容：
```javascript
import Vue from 'vue'
import SealUI from 'sealui-m'
import 'sealui-m/lib/theme-default/index.css'
import App from './App.vue'

Vue.use(SealUI)

new Vue({
  el: '#app',
  render: h => h(App)
})
```
以上代码便完成了 SealUI-M 的引入。需要注意的是，样式文件需要单独引入。

#### 按需引入
借助 babel-plugin-component，我们可以只引入需要的组件，以达到减小项目体积的目的。
首先，安装 `babel-plugin-component`：

```bash
npm install babel-plugin-component -D
```

然后，将 `.babelrc` 修改为：
```json
{
  "presets": [
    ["es2015", { "modules": false }]
  ],
  "plugins": [["component", [
    {
      "libraryName": "sealui-m",
      "styleLibraryName": "theme-default"
    }
  ]]]
}
```
接下来，如果你只希望引入部分组件，比如 `Button` 和 `Icon`，那么需要在 `main.js` 中写入以下内容：

```javascript
import Vue from 'vue'
import { Button, Icon } from 'sealui-m'
import App from './App.vue'

Vue.component(Button.name, Button)
Vue.component(Icon.name, Icon)
/* 或写为
 * Vue.use(Button)
 * Vue.use(Icon)
 */

new Vue({
  el: '#app',
  render: h => h(App)
})
```

### 使用推荐工程

### 组件使用规范
使用`:prop`传递数据格式为 数字、布尔值或函数时，必须带:(兼容`String`除外，具体看组件文档)，比如：
```html
正确的使用方法：
<Page :current="1" :total="100"></Page>

错误的使用方法：
<Page current="1" total="100"></Page>
```
