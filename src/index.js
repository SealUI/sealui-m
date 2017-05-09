/* Automatic generated by './build/bin/build-entry.js' */

import Button from '../packages/button';
import Toast from '../packages/toast';
import Loading from '../packages/loading';
import MessageBox from '../packages/message-box';
import Alert from '../packages/alert';
import Confirm from '../packages/confirm';
import Actionsheet from '../packages/actionsheet';
import Icon from '../packages/icon';
import Spinner from '../packages/spinner';
import Group from '../packages/group';
import Cell from '../packages/cell';
import Sticky from '../packages/sticky';
import Grid from '../packages/grid';
import GridItem from '../packages/grid-item';
import Panel from '../packages/panel';
import Flex from '../packages/flex';
import FlexItem from '../packages/flex-item';
import Divider from '../packages/divider';
import Msg from '../packages/msg';
import Preview from '../packages/preview';
import Tag from '../packages/tag';
import Toptips from '../packages/toptips';
import Step from '../packages/step';
import Steps from '../packages/steps';
import Timeline from '../packages/timeline';
import TimelineItem from '../packages/timeline-item';
import Tabs from '../packages/tabs';
import TabItem from '../packages/tab-item';
import WepayInput from '../packages/wepay-input';
import Video from '../packages/video';
import Tabbar from '../packages/tabbar';
import TabbarItem from '../packages/tabbar-item';
import Checkbox from '../packages/checkbox';
import Radio from '../packages/radio';
import Notice from '../packages/notice';
import Input from '../packages/input';
import Keyboard from '../packages/keyboard';
import Rollnotice from '../packages/rollnotice';
import RollnoticeItem from '../packages/rollnotice-item';
import Rate from '../packages/rate';
import Countup from '../packages/countup';
import Countdown from '../packages/countdown';
import Switch from '../packages/switch';
import List from '../packages/list';
import ListItem from '../packages/list-item';
import Cityselect from '../packages/cityselect';
import Popup from '../packages/popup';
import XPopup from '../packages/x-popup';
import Sendcode from '../packages/sendcode';

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
  Button,
  Toast,
  Alert,
  Confirm,
  Actionsheet,
  Icon,
  Spinner,
  Group,
  Cell,
  Sticky,
  Grid,
  GridItem,
  Panel,
  Flex,
  FlexItem,
  Divider,
  Msg,
  Preview,
  Tag,
  Toptips,
  Step,
  Steps,
  Timeline,
  TimelineItem,
  Tabs,
  TabItem,
  WepayInput,
  Video,
  Tabbar,
  TabbarItem,
  Checkbox,
  Radio,
  Notice,
  Input,
  Keyboard,
  Rollnotice,
  RollnoticeItem,
  Rate,
  Countup,
  Countdown,
  Switch,
  List,
  ListItem,
  Cityselect,
  Popup,
  XPopup,
  Sendcode
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
  version: '0.0.2',
  install,
  Button,
  Toast,
  MessageBox,
  Alert,
  Confirm,
  Actionsheet,
  Icon,
  Spinner,
  Group,
  Cell,
  Sticky,
  Grid,
  GridItem,
  Panel,
  Flex,
  FlexItem,
  Divider,
  Msg,
  Preview,
  Tag,
  Toptips,
  Step,
  Steps,
  Timeline,
  TimelineItem,
  Tabs,
  TabItem,
  WepayInput,
  Video,
  Tabbar,
  TabbarItem,
  Checkbox,
  Radio,
  Notice,
  Input,
  Keyboard,
  Rollnotice,
  RollnoticeItem,
  Rate,
  Countup,
  Countdown,
  Switch,
  List,
  ListItem,
  Cityselect,
  Popup,
  XPopup,
  Sendcode
};
