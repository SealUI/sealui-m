import SealTabItem from '../tabs/src/tab-item';

/* istanbul ignore next */
SealTabItem.install = function(Vue) {
    Vue.component(SealTabItem.name, SealTabItem);
};

export default SealTabItem;
