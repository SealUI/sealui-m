import SealTabbarItem from '../tabbar/src/tabbar-item';

/* istanbul ignore next */
SealTabbarItem.install = function(Vue) {
    Vue.component(SealTabbarItem.name, SealTabbarItem);
};

export default SealTabbarItem;
