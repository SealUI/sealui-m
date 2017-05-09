var Components = require('../../components.json');
var fs = require('fs');
var render = require('json-templater/string');
var uppercamelcase = require('uppercamelcase');
var path = require('path');

var OUTPUT_PATH = path.join(__dirname, '../../src/index.js');
var IMPORT_TEMPLATE = 'import {{name}} from \'../packages/{{package}}\';';
var INSTALL_COMPONENT_TEMPLATE = '  {{name}}';
var MAIN_TEMPLATE = `/* Automatic generated by './build/bin/build-entry.js' */

{{include}}

import DevicePlugin from 'sealui-m/src/plugins/device';
import TitlePlugin from 'sealui-m/src/plugins/title';
import AjaxPlugin from 'sealui-m/src/plugins/ajax';
import TitleDirectives from 'sealui-m/src/directives/title';

import MsgBoxPlugin from 'sealui-m/src/plugins/msgbox';

/* tools */
import Base64Tools from 'sealui-m/src/tools/base64/index.js';
import MD5Tools from 'sealui-m/src/tools/md5/index.js';
import DateTools from 'sealui-m/src/tools/date/format.js';
import StringTools from 'sealui-m/src/tools/string/index.js';
import QuerystringTools from 'sealui-m/src/tools/querystring/index.js';

const components = [
{{install}}
];

const install = function(Vue, opts = {}) {
  /* istanbul ignore if */
  if (install.installed) return;
  components.map(component => {
    Vue.component(component.name, component);
  });


  Vue.$toast = Vue.prototype.$toast = Toast;
  Vue.$loading = Vue.prototype.$loading = Loading;
  Vue.$alert = Vue.prototype.$alert = Alert;
  Vue.$confirm = Vue.prototype.$confirm = Confirm;
  Vue.$actionsheet = Vue.prototype.$actionsheet = Actionsheet;
  Vue.$toptips = Vue.prototype.$toptips = Toptips;
  Vue.$msgbox = Vue.prototype.$msgbox = MessageBox;
  Vue.$popup = Vue.prototype.$popup = Popup;

  Vue.$base64 = Vue.prototype.$base64 = Base64Tools;
  Vue.$md5 = Vue.prototype.$md5 = MD5Tools;
  Vue.$date = Vue.prototype.$date = DateTools;
  Vue.$string = Vue.prototype.$string = StringTools;
  Vue.$query = Vue.prototype.$query = QuerystringTools;

  Vue.use(DevicePlugin);
  Vue.use(TitlePlugin);
  Vue.use(AjaxPlugin);
  Vue.use(TitleDirectives);

  Vue.use(MsgBoxPlugin);
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
};

module.exports = {
  version: '{{version}}',
  install,
{{list}}
};
`;

delete Components.font;

var ComponentNames = Object.keys(Components);

var includeComponentTemplate = [];
var installTemplate = [];
var listTemplate = [];

ComponentNames.forEach(name => {
  var componentName = uppercamelcase(name);

  includeComponentTemplate.push(render(IMPORT_TEMPLATE, {
    name: componentName,
    package: name
  }));

  if (['Loading', 'MessageBox', 'Notification', 'Message'].indexOf(componentName) === -1) {
    installTemplate.push(render(INSTALL_COMPONENT_TEMPLATE, {
      name: componentName,
      component: name
    }));
  }

  if (componentName !== 'Loading') listTemplate.push(`  ${componentName}`);
});

var template = render(MAIN_TEMPLATE, {
  include: includeComponentTemplate.join('\n'),
  install: installTemplate.join(',\n'),
  version: process.env.VERSION || require('../../package.json').version,
  list: listTemplate.join(',\n')
});

fs.writeFileSync(OUTPUT_PATH, template);
console.log('[build entry] DONE:', OUTPUT_PATH);