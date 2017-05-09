import SealRadio from './src/main';

/* istanbul ignore next */
SealRadio.install = function(Vue) {
    Vue.component(SealRadio.name, SealRadio);
};

export default SealRadio;
