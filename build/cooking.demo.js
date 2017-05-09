var cooking = require('cooking');
var config = require('./config');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var striptags = require('./strip-tags');
var slugify = require('transliteration').slugify;
var isProd = process.env.NODE_ENV === 'production';
var isPlay = !!process.env.PLAY_ENV;
var localIP = require('my-local-ip')();

function convert(str) {
  str = str.replace(/(&#x)(\w{4});/gi, function($0) {
    return String.fromCharCode(parseInt(encodeURIComponent($0).replace(/(%26%23x)(\w{4})(%3B)/g, '$2'), 16));
  });
  return str;
}

cooking.set({
  entry:{
    example: './examples/entry.js',
    sealui: './src/index.js'
  },
  dist: './examples/sealui-m/',
  template: [
    {
      template: './examples/index.tpl',
      filename: './index.html'
    },
    {
      template: './examples/README.md',
      filename: './README.md'
    }
  ],
  publicPath: process.env.CI_ENV || '',
  hash: true,
  devServer: {
    hostname:localIP,
    port: 8000,
    log: false,
    publicPath: '/'
  },
  minimize: true,
  chunk: isProd ? {
    'common': { name: ['sealui', 'manifest'] }
  } : false,
  extractCSS: true,
  alias: config.alias,
  extends: ['vue2', 'lint','less'],
  postcss: config.postcss
});

// fix publicPath
if (!process.env.CI_ENV) {
  cooking.add('output.publicPath', '');
}

// cooking.add('loader.md', {
//   test: /\.md$/,
//   loader: 'vue-markdown-loader'
// });

if (isProd) {
  cooking.add('externals.vue', 'Vue');
  cooking.add('externals.vue-router', 'VueRouter');
  cooking.add('externals.axios', 'axios');
  cooking.add('externals.fastclick', 'FastClick');
}

cooking.add('plugin.CopyWebpackPlugin', new CopyWebpackPlugin([
  { from: 'examples/versions.json' }
]));
cooking.add('vue.preserveWhitespace', false);
module.exports = cooking.resolve();
