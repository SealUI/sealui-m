import SealInput from './src/main';

/* istanbul ignore next */
SealInput.install = function(Vue) {
    Vue.component(SealInput.name, SealInput);
};

export default SealInput;
