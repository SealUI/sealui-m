import SealTabbar from './src/main';

/* istanbul ignore next */
SealTabbar.install = function(Vue) {
    Vue.component(SealTabbar.name, SealTabbar);
};

export default SealTabbar;
