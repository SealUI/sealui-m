import SealTabs from './src/main';

/* istanbul ignore next */
SealTabs.install = function(Vue) {
    Vue.component(SealTabs.name, SealTabs);
};

export default SealTabs;
