import SealDivider from './src/main';

/* istanbul ignore next */
SealDivider.install = function(Vue) {
    Vue.component(SealDivider.name, SealDivider);
};

export default SealDivider;
