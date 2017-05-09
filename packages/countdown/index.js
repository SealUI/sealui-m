import SealCountdown from './src/main';

/* istanbul ignore next */
SealCountdown.install = function(Vue) {
    Vue.component(SealCountdown.name, SealCountdown);
};

export default SealCountdown;
