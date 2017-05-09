import SealRate from './src/main';

/* istanbul ignore next */
SealRate.install = function(Vue) {
    Vue.component(SealRate.name, SealRate);
};

export default SealRate;
