import SealPanel from './src/main';

/* istanbul ignore next */
SealPanel.install = function(Vue) {
    Vue.component(SealPanel.name, SealPanel);
};

export default SealPanel;
