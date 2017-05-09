import SealListItem from './src/main';

/* istanbul ignore next */
SealListItem.install = function(Vue) {
    Vue.component(SealListItem.name, SealListItem);
};

export default SealListItem;
