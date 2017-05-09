import SealTag from './src/main';

/* istanbul ignore next */
SealTag.install = function(Vue) {
    Vue.component(SealTag.name, SealTag);
};

export default SealTag;
