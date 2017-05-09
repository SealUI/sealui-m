import SealPopup from './src/main';

/* istanbul ignore next */
SealPopup.install = function(Vue) {
    Vue.component(SealPopup.name, SealPopup);
};

export default SealPopup;
