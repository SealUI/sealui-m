import SealCountup from './src/main';

/* istanbul ignore next */
SealCountup.install = function(Vue) {
    Vue.component(SealCountup.name, SealCountup);
};

export default SealCountup;
