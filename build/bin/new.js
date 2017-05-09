'use strict';

console.log();
process.on('exit', () => {
  console.log();
});

if (!process.argv[2]) {
  console.error('[组件名]必填.');
  process.exit(1);
}

const path = require('path');
const fileSave = require('file-save');
const uppercamelcase = require('uppercamelcase');
const componentname = process.argv[2];
const chineseName = process.argv[3] || componentname;
const arrIndex = process.argv[4] || 0;
const ComponentName = uppercamelcase(componentname);
const PackagePath = path.resolve(__dirname, '../../packages', componentname);
const Files = [
  // 创建入口文件
  {
    filename: 'index.js',
    content: `import Seal${ComponentName} from './src/main';

/* istanbul ignore next */
Seal${ComponentName}.install = function(Vue) {
    Vue.component(Seal${ComponentName}.name, Seal${ComponentName});
};

export default Seal${ComponentName};`
  },
  // cooking配置文件
  {
    filename: 'cooking.conf.js',
    content: `var cooking = require('cooking');
var path = require('path');

cooking.set({
  entry: {
    index: path.join(__dirname, 'index.js')
  },
  dist: path.join(__dirname, 'lib'),
  template: false,
  format: 'umd',
  moduleName: 'Seal${ComponentName}',
  extends: ['vue2'],
  alias: config.alias,
  externals: { vue: config.vue }
});

module.exports = cooking.resolve();`
  },
  // 组件package信息
  {
    filename: 'package.json',
    content: `{
    "name": "seal-${componentname}",
    "version": "0.0.1",
    "description": "A ${componentname} component for Vue.js.",
    "keywords": [
        "SealUI",
        "vue",
        "component"
    ],
    "main": "./lib/index.js",
    "repository": "https://github.com/SealUI/sealui-m/tree/master/packages/${componentname}",
    "author": "SealUI",
    "license": "MIT",
    "dependencies": {}
}`
  },
  // 组件
  {
    filename: `src/main.vue`,
    content: `<template>
    <div class="sealui-${componentname}"></div>
</template>

<script>
export default {
    name: 'seal-${componentname}',
};
</script>`
  },
  // 组件样式文件
  {
    filename: path.join('../../packages/theme-default/src', `${componentname}.css`),
    content : `@charset "UTF-8";
@import "./common/var.css";
@import './mixins/setOnepx';
@import './mixins/text';

@component-namespace sealui {
    @b ${componentname} {

    }
}`
  },
  // 组件演示文件
  {
    filename: path.join('../../examples/pages', `${componentname}.vue`),
    content: `<template>
    <div class="page-${componentname}">
        <div class="page-${componentname}__group"></div>
    </div>
</template>

<script>
export default {
    name: 'page-${componentname}',
    data () {
        return {

        }
    },
    mounted (){

    },
    methods : {

    }
};
</script>

<style lang="less" scoped>
    .page-${componentname} {
        padding: 0.15rem;
        & .page-${componentname}__group {
            margin-bottom: .15rem;
        }
    }
</style>`
  }
];

// 添加到 components.json
const componentsFile = require('../../components.json');
if (componentsFile[componentname]) {
  console.error(`${componentname} 已存在.`);
  process.exit(1);
}
componentsFile[componentname] = `./packages/${componentname}/index.js`;
fileSave(path.join(__dirname, '../../components.json'))
  .write(JSON.stringify(componentsFile, null, '  '), 'utf8')
  .end('\n');

// 创建 package
Files.forEach(file => {
  fileSave(path.join(PackagePath, file.filename))
  .write(file.content, 'utf8')
  .end('\n');
});

// 添加到 nav.config.json
const navConfigFile = require('../../examples/nav.config.json');


  let list = navConfigFile[arrIndex].list;
  list.push({
    path: `/${componentname}`,
    name: `${ComponentName}`,
    cnName: `${chineseName}`
  });


fileSave(path.join(__dirname, '../../examples/nav.config.json'))
  .write(JSON.stringify(navConfigFile, null, '  '), 'utf8')
  .end('\n');

console.log('DONE!');
