import SealMsg from './src/main';

/* istanbul ignore next */
SealMsg.install = function(Vue) {
    Vue.component(SealMsg.name, SealMsg);
};

export default SealMsg;
