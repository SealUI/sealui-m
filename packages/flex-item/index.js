import SealFlexItem from './src/main';

/* istanbul ignore next */
SealFlexItem.install = function(Vue) {
    Vue.component(SealFlexItem.name, SealFlexItem);
};

export default SealFlexItem;
