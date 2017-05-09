import SealKeyboard from './src/main';

/* istanbul ignore next */
SealKeyboard.install = function(Vue) {
    Vue.component(SealKeyboard.name, SealKeyboard);
};

export default SealKeyboard;
