var path = require('path');
var fs = require('fs');
var nodeExternals = require('webpack-node-externals');
var Components = require('../components.json');
var saladConfig = require('../packages/theme-default/salad.config.json');

var utilsList = fs.readdirSync(path.resolve(__dirname, '../src/utils'));
var pluginsList = fs.readdirSync(path.resolve(__dirname, '../src/plugins'));
var mixinsList = fs.readdirSync(path.resolve(__dirname, '../src/mixins'));
var router = fs.readdirSync(path.resolve(__dirname, '../src/router'));
var directivesList = fs.readdirSync(path.resolve(__dirname, '../src/directives'));
var toolsList = fs.readdirSync(path.resolve(__dirname, '../src/tools'));
var externals = {};

Object.keys(Components).forEach(function(key) {
  externals[`sealui-m/packages/${key}`] = `sealui-m/lib/${key}`;
});

utilsList.forEach(function(file) {
  file = path.basename(file, '.js');
  externals[`sealui-m/src/utils/${file}`] = `sealui-m/lib/utils/${file}`;
});

pluginsList.forEach(function(file) {
  file = path.basename(file, '.js');
  externals[`sealui-m/src/plugins/${file}`] = `sealui-m/lib/plugins/${file}`;
});

mixinsList.forEach(function(file) {
  file = path.basename(file, '.js');
  externals[`sealui-m/src/mixins/${file}`] = `sealui-m/lib/mixins/${file}`;
});

router.forEach(function(file) {
  file = path.basename(file, '.js');
  externals[`sealui-m/src/router/${file}`] = `sealui-m/lib/router/${file}`;
});

directivesList.forEach(function(file) {
  file = path.basename(file, '.js');
  externals[`sealui-m/src/directives/${file}`] = `sealui-m/lib/directives/${file}`;
});

toolsList.forEach(function(file) {
  file = path.basename(file, '.js');
  externals[`sealui-m/src/tools/*/${file}`] = `sealui-m/lib/tools/*/${file}`;
});

externals = [Object.assign({
  vue: 'vue'
}, externals), nodeExternals()];

exports.externals = externals;

exports.alias = {
  main: path.resolve(__dirname, '../src'),
  packages: path.resolve(__dirname, '../packages'),
  examples: path.resolve(__dirname, '../examples'),
  docs: path.resolve(__dirname, '../docs'),
  'sealui-m': path.resolve(__dirname, '../')
};

exports.vue = {
  root: 'Vue',
  commonjs: 'vue',
  commonjs2: 'vue',
  amd: 'vue'
};

exports.jsexclude = /node_modules|utils\/popper\.js|utils\/date.\js/;

exports.postcss = function(webapck) {
  saladConfig.features.partialImport = {
    addDependencyTo: webapck
  };
  return [
    require('postcss-salad')(saladConfig)
  ];
};
