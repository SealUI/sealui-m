import SealSwitch from './src/main';

/* istanbul ignore next */
SealSwitch.install = function(Vue) {
    Vue.component(SealSwitch.name, SealSwitch);
};

export default SealSwitch;
