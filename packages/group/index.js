import SealGroup from './src/main';

/* istanbul ignore next */
SealGroup.install = function(Vue) {
    Vue.component(SealGroup.name, Group);
};

export default SealGroup;
