import SealPreview from './src/main';

/* istanbul ignore next */
SealPreview.install = function(Vue) {
    Vue.component(SealPreview.name, SealPreview);
};

export default SealPreview;
