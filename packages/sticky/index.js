import SealSticky from './src/main';

/* istanbul ignore next */
SealSticky.install = function(Vue) {
    Vue.component(SealSticky.name, Sticky);
};

export default SealSticky;
