var cooking = require('cooking');
var path = require('path');

cooking.set({
  entry: {
    index: path.join(__dirname, 'index.js')
  },
  dist: path.join(__dirname, 'lib'),
  template: false,
  format: 'umd',
  moduleName: 'SealMsg',
  extends: ['vue2'],
  alias: config.alias,
  externals: { vue: config.vue }
});

module.exports = cooking.resolve();
