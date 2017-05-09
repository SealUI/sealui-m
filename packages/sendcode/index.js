import SealSendcode from './src/main';

/* istanbul ignore next */
SealSendcode.install = function(Vue) {
    Vue.component(SealSendcode.name, SealSendcode);
};

export default SealSendcode;
