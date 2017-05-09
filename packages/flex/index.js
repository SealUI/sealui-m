import SealFlex from './src/main';

/* istanbul ignore next */
SealFlex.install = function(Vue) {
    Vue.component(SealFlex.name, SealFlex);
};

export default SealFlex;
