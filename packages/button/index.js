import SealButton from './src/main';

/* istanbul ignore next */
SealButton.install = function(Vue) {
    Vue.component(SealButton.name, Button);
};

export default SealButton;
