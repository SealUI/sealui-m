import SealNotice from './src/main';

/* istanbul ignore next */
SealNotice.install = function(Vue) {
    Vue.component(SealNotice.name, SealNotice);
};

export default SealNotice;
